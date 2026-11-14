import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { CacheState, QuotaState, StepState } from '../types'

const quota = atom({ plugin: 'zhipu-plan-metrics', key: 'quota' } as const, null as QuotaState | null, { shape: 'quota-1' })
const step = atom({ plugin: 'zhipu-plan-metrics', key: 'step' } as const, null as StepState | null, { shape: 'step-1' })
const cache = atom({ plugin: 'zhipu-plan-metrics', key: 'cache' } as const, null as CacheState | null, { shape: 'cache-1' })

// ---------- 阈值与颜色 ----------

type Level = 'success' | 'warning' | 'error'

/** 用量百分比 → 三档色：<30 绿、30~80 黄、80+ 红 */
function usageLevel(pct: number): Level {
  if (pct >= 80) return 'error'
  if (pct >= 30) return 'warning'
  return 'success'
}

/** 速度 tok/s → 三档色：<40 红、40~200 黄、200+ 绿 */
function speedLevel(tps: number): Level {
  if (tps >= 200) return 'success'
  if (tps >= 40) return 'warning'
  return 'error'
}

// ---------- 高峰期（中国北京，周一~周五 14:00~18:00）----------

function isBeijingPeak(epochMs: number): boolean {
  // 北京时间 = UTC+8：epoch 平移后按 UTC 字段读，不吃本机时区
  const bj = new Date(epochMs + 8 * 3600 * 1000)
  const day = bj.getUTCDay() // 0=日 … 5=五
  const hour = bj.getUTCHours()
  return day >= 1 && day <= 5 && hour >= 14 && hour < 18
}

// ---------- 智谱额度：解析（结构依据 new-api/NookMux plan_quota_glm.go）----------

/** GET /api/monitor/usage/quota/limit 的 data.limits[] 条目 */
interface ZhipuLimit {
  type: string // TOKENS_LIMIT | TIME_LIMIT | CREDIT_LIMIT
  unit: number // 3=5小时 6=周 5=MCP
  percentage: number // 上游直接给的已用百分比
  currentValue: number
  usage: number
  nextResetTime?: string | number
}

/** 上游返回 HTTP 200 但业务失败（如 {"code":1000,"msg":"Authentication Failed"}） */
function assertZhipuOk(body: unknown): void {
  if (body && typeof body === 'object' && (body as { success?: unknown }).success === false) {
    const b = body as { msg?: unknown; code?: unknown }
    throw new Error(`智谱接口失败: ${String(b.msg ?? b.code)}`)
  }
}

/** nextResetTime 兼容 秒/毫秒/微秒/纳秒 时间戳与日期字符串（同 NookMux normalizeUnixTimestamp） */
function parseResetMs(v: string | number): number {
  const n = typeof v === 'number' ? v : /^\d+$/.test(v) ? Number(v) : NaN
  if (!Number.isNaN(n) && n > 0) {
    if (n < 1e11) return n * 1000 // 秒
    if (n < 1e14) return n // 毫秒
    if (n < 1e17) return Math.round(n / 1e3) // 微秒
    return Math.round(n / 1e6) // 纳秒
  }
  const t = Date.parse(String(v))
  if (Number.isNaN(t)) throw new Error(`无法解析 nextResetTime: ${String(v)}`)
  return t
}

/** 剩余时长 → "45m" / "2h 40m" / "6d 13h"；已过期 → "已重置" */
function formatRemaining(diffMs: number): string {
  if (diffMs <= 0) return '已重置'
  const min = Math.floor(diffMs / 60_000)
  if (min < 60) return `${min}m`
  const h = Math.floor(min / 60)
  if (h < 24) return `${h}h ${min % 60}m`
  return `${Math.floor(h / 24)}d ${h % 24}h`
}

function resetText(v: string | number | undefined, now: number): string | undefined {
  if (v === undefined) return undefined
  return formatRemaining(parseResetMs(v) - now)
}

/**
 * V1/V2/V3 判定与条目归类（同 NookMux buildGlmPlanQuotaData）：
 * limits 含 CREDIT_LIMIT → V3（unit=3 5h 积分、unit=6 周积分）；
 * 否则含 TOKENS_LIMIT unit=6 → V2（5h+周，按 Tokens）；
 * 其余 → V1（仅 5h，无周额度）。
 */
export function parseQuota(body: unknown, now: number): QuotaState {
  assertZhipuOk(body)
  const limits = (body as { data?: { limits?: unknown } })?.data?.limits
  if (!Array.isArray(limits)) throw new Error('额度接口响应缺 data.limits')
  const all = limits as ZhipuLimit[]

  const credit = all.filter(l => l.type === 'CREDIT_LIMIT')
  const tokens = all.filter(l => l.type === 'TOKENS_LIMIT')
  const hasCredit = credit.length > 0
  const fiveOf = hasCredit ? credit : tokens
  const weekOf = hasCredit ? credit : tokens

  const five = fiveOf.find(l => l.unit === 3)
  const week = weekOf.find(l => l.unit === 6)
  const planVersion = hasCredit ? 'V3' : week ? 'V2' : 'V1'

  return {
    planVersion,
    fiveHourPercent: five ? five.percentage : null,
    weekPercent: week ? week.percentage : null,
    fiveHourReset: five ? resetText(five.nextResetTime, now) : undefined,
    weekReset: week ? resetText(week.nextResetTime, now) : undefined,
    fetchedAt: now,
  }
}

// ---------- Mod ----------

const ZHIPU_QUOTA_PATH = '/api/monitor/usage/quota/limit'
// NookMux fetchGlmAPI 恒定带官网 Referer/Origin 模拟其前端，缺失可能触发风控页
const ZHIPU_REFERER = 'https://bigmodel.cn/'
const ZHIPU_ORIGIN = 'https://bigmodel.cn'

let token: string | undefined
let baseUrl: string | undefined

function quotaReady(): boolean {
  return Boolean(token && baseUrl)
}

async function refreshQuota($: EngineInterface, now: number): Promise<void> {
  const res = await $.http.fetch(`${baseUrl}${ZHIPU_QUOTA_PATH}`, {
    headers: {
      // 注意：智谱要求 Authorization 直接放 key，无 Bearer 前缀（fetchGlmAPI 原样）
      authorization: token!,
      referer: ZHIPU_REFERER,
      origin: ZHIPU_ORIGIN,
    },
  })
  if (!res.ok) throw new Error(`额度查询 HTTP ${res.status}`)
  const q = parseQuota(JSON.parse(res.text), now)
  await update($, quota, () => q)
}

export const register: Register = (on, options) => {
  token = (options.api_token as string | undefined)?.trim()
  baseUrl = (options.zhipu_base_url as string | undefined)?.trim().replace(/\/+$/, '')

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'metrics', description: '模型指标横条：智谱额度/缓存率/速度' })
    if (quotaReady()) {
      const boot = async (): Promise<void> => {
        try {
          await refreshQuota($, await $.clock.now())
        } catch (err) {
          // 上层统一处理 = 呈现给用户；不重试不降级
          $.ui.status(`智谱额度查询失败: ${err instanceof Error ? err.message : String(err)}`)
        }
      }
      void boot()
      $.clock.every(60_000, () => void boot())
    }
    return next(e)
  })

  // 每次模型请求：AA 口径计时 + 缓存率累计（只计主线程，e.agentId 区分子代理）
  on('turn.step', async function* ($, e, next) {
    const t0 = await $.clock.now()
    const r = yield* next(e)
    if (r.usage && e.agentId === undefined) {
      const sec = Math.max(((await $.clock.now()) - t0) / 1000, 1e-6)
      const u = r.usage
      await update($, step, () => ({ model: u.model, out: u.output_tokens, sec }))
      await update($, cache, c => ({
        read: (c?.read ?? 0) + u.cache_read_input_tokens,
        create: (c?.create ?? 0) + u.cache_creation_input_tokens,
        input: (c?.input ?? 0) + u.input_tokens,
      }))
    }
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const q = await read($, quota)
    const s = await read($, step)
    const c = await read($, cache)
    if (!q && !s && !c) return next(e)

    const { Box, Text } = $.ui.resolve(e)
    const now = await $.clock.now()
    const peak = isBeijingPeak(now)

    /** 额度进度条（Box 拼，官方建议 usage 类条不走 Progress；仅 5h / 7d 用） */
    const Bar = (p: { pct: number; cells: number }) => {
      const filled = Math.round((Math.min(Math.max(p.pct, 0), 100) / 100) * p.cells)
      return (
        <Box width={p.cells} height={1} backgroundColor="inactive">
          <Box width={filled} height={1} backgroundColor={usageLevel(p.pct)} />
        </Box>
      )
    }

    const total = c ? c.read + c.create + c.input : 0
    const hitRate = total > 0 ? ((c!.read / total) * 100).toFixed(2) : null
    const tps = s ? s.out / s.sec : null

    return (
      <Box justifyContent="space-between">
        {/* 最左：5h / 7d / 高峰徽标 */}
        <Box gap={2}>
          {q && q.fiveHourPercent !== null && (
            <Box gap={1}>
              <Text color={usageLevel(q.fiveHourPercent)}>⏱ 5h</Text>
              <Bar pct={q.fiveHourPercent} cells={10} />
              <Text color={usageLevel(q.fiveHourPercent)}>
                {q.fiveHourPercent.toFixed(0)}%{q.fiveHourReset ? `(${q.fiveHourReset})` : ''}
              </Text>
            </Box>
          )}
          {q && q.weekPercent !== null && (
            <Box gap={1}>
              <Text color={usageLevel(q.weekPercent)}>📅 7d</Text>
              <Bar pct={q.weekPercent} cells={10} />
              <Text color={usageLevel(q.weekPercent)}>
                {q.weekPercent.toFixed(0)}%{q.weekReset ? `(${q.weekReset})` : ''}
              </Text>
            </Box>
          )}
          {q && <Text dimColor>{q.planVersion}</Text>}
          <Text color={peak ? 'error' : 'inactive'}>{peak ? '☀ 高峰' : '🌙 平峰'}</Text>
        </Box>
        {/* 最右：缓存率 / 速度 */}
        <Box gap={2}>
          {hitRate && <Text dimColor>缓存 {hitRate}%</Text>}
          {tps !== null && <Text color={speedLevel(tps)}>{tps.toFixed(2)} tok/s</Text>}
        </Box>
      </Box>
    )
  })
}
