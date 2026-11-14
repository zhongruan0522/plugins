export type QuotaState = {
  /** 套餐版本：V1 仅 5h；V2 5h+周；V3 积分制 5h+周 */
  planVersion: 'V1' | 'V2' | 'V3'
  /** 5 小时窗口已用百分比（0-100），带进度条 */
  fiveHourPercent: number | null
  /** 周限制已用百分比（0-100），带进度条；V1 无周额度为 null */
  weekPercent: number | null
  /** 5 小时窗口重置的剩余时间文本，如 "2h 40m" */
  fiveHourReset?: string
  /** 周限制重置的剩余时间文本，如 "6d 13h" */
  weekReset?: string
  fetchedAt: number
}

export type StepState = {
  model: string
  /** 该请求输出 token 数 */
  out: number
  /** 该请求耗时（秒，AA 口径含 TTFT） */
  sec: number
}

export type CacheState = {
  /** Σ cache_read_input_tokens */
  read: number
  /** Σ cache_creation_input_tokens */
  create: number
  /** Σ input_tokens */
  input: number
}

declare module 'claude-code' {
  interface PluginState {
    'zhipu-plan-metrics': {
      quota: Shaped<QuotaState | null>
      step: Shaped<StepState | null>
      cache: Shaped<CacheState | null>
    }
  }
}
