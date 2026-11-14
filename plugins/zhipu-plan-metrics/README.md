# zhipu-plan-metrics

输入框上方的实时指标横条（AbovePrompt band），三块信息：

- **智谱额度**：GLM Coding Plan 的 5 小时窗口与周限制用量百分比，Box 拼进度条，<30% 绿 / 30~80% 黄 / 80%+ 红，附重置倒计时；自动识别 V1/V2/V3 套餐（CREDIT_LIMIT→V3，TOKENS_LIMIT+周→V2，仅 5h→V1）。数据直连智谱 `GET /api/monitor/usage/quota/limit`（同 new-api/NookMux 的渠道套餐额度查询），每 60s 刷新。
- **高峰徽标**：中国北京时间周一~周五 14:00~18:00 显示「☀ 高峰」，其余「🌙 平峰」。
- **会话指标**：缓存率（Σcache_read / Σ(cache_read+cache_creation+input)）与最近一次请求的输出速度（tok/s，AA 口径含 TTFT），<40 红 / 40~200 黄 / 200+ 绿。

## 配置

安装时填写 userConfig：`api_token`（智谱 API Key，敏感字段，存系统安全存储）与 `zhipu_base_url`（国内 `https://www.bigmodel.cn`，国际 `https://api.z.ai`）。不填 token 时横条只显示会话指标。

## 命令

`/metrics` 重新触发横条显示；无数据时不占行。
