import { expect, test } from 'claude-code/testing'

import { parseQuota } from '../hooks/register'

const NOW = 1_700_000_000_000 // 2023-11-14T22:13:20.000Z

test('V3: CREDIT_LIMIT 条目按 unit 归类 5h/周', () => {
  const q = parseQuota(
    {
      data: {
        limits: [
          { type: 'CREDIT_LIMIT', unit: 3, percentage: 25, currentValue: 2500, usage: 10000 },
          { type: 'CREDIT_LIMIT', unit: 6, percentage: 10, currentValue: 20000, usage: 200000 },
        ],
      },
    },
    NOW,
  )
  expect(q.planVersion).toBe('V3')
  expect(q.fiveHourPercent).toBe(25)
  expect(q.weekPercent).toBe(10)
})

test('V2: TOKENS_LIMIT 5h + 周', () => {
  const q = parseQuota(
    {
      data: {
        limits: [
          { type: 'TOKENS_LIMIT', unit: 3, percentage: 42 },
          { type: 'TOKENS_LIMIT', unit: 6, percentage: 14 },
        ],
      },
    },
    NOW,
  )
  expect(q.planVersion).toBe('V2')
  expect(q.fiveHourPercent).toBe(42)
  expect(q.weekPercent).toBe(14)
})

test('V1: 仅 5h，无周额度', () => {
  const q = parseQuota(
    { data: { limits: [{ type: 'TOKENS_LIMIT', unit: 3, percentage: 80 }] } },
    NOW,
  )
  expect(q.planVersion).toBe('V1')
  expect(q.fiveHourPercent).toBe(80)
  expect(q.weekPercent).toBeNull()
})

test('nextResetTime 秒级时间戳 → 剩余文本', () => {
  const q = parseQuota(
    {
      data: {
        limits: [{ type: 'TOKENS_LIMIT', unit: 3, percentage: 5, nextResetTime: NOW / 1000 + 9000 }],
      },
    },
    NOW,
  )
  expect(q.fiveHourReset).toBe('2h 30m')
})

test('nextResetTime 毫秒级与纳秒级时间戳等价解析', () => {
  const ms = parseQuota(
    { data: { limits: [{ type: 'TOKENS_LIMIT', unit: 3, percentage: 5, nextResetTime: NOW + 3_600_000 }] } },
    NOW,
  )
  const ns = parseQuota(
    { data: { limits: [{ type: 'TOKENS_LIMIT', unit: 3, percentage: 5, nextResetTime: (NOW + 3_600_000) * 1e6 }] } },
    NOW,
  )
  expect(ms.fiveHourReset).toBe('1h 0m')
  expect(ns.fiveHourReset).toBe('1h 0m')
})

test('HTTP 200 但业务失败（success:false）抛错且带原因', () => {
  expect(() =>
    parseQuota({ success: false, code: 1000, msg: 'Authentication Failed' }, NOW),
  ).toThrow(/Authentication Failed/)
})

test('响应缺 data.limits 抛错', () => {
  expect(() => parseQuota({ data: {} }, NOW)).toThrow(/data\.limits/)
})
