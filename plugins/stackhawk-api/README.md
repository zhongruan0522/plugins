# StackHawk API 技能（Claude 专用）

由 [StackHawk 平台 API](https://apidocs.stackhawk.com) 驱动的安全态势报告与发现分析，直接嵌入你的 Claude 智能体工作流。

## 功能说明

本插件教会 Claude 如何查询 StackHawk 平台以获取安全报告。它会完成身份验证，检索你的应用与环境中的发现（findings）数据，并呈现可操作的安全态势摘要——帮助你了解风险所在、扫描之间发生了哪些变化，以及哪些应用需要关注。

```
提问 → 身份验证 → 通过 hawk op 查询 API → 呈现结果 → 建议后续操作
```

该技能使用合并后的 `hawk` CLI（`hawk op …`）——大多数操作从三步调用的逐层下钻流程，简化为一条内置认证、分页和 JSON 输出的 `hawk op` 命令。

## 前提条件

- 一个 [StackHawk 账户](https://app.stackhawk.com)（提供免费套餐）
- 一个 StackHawk API 密钥——在 **Settings → API Keys** 页面生成
- 已安装 `hawk` CLI 并通过 `hawk init --browser` 完成初始化（凭据存储在 `~/.hawk/hawk.properties` 中）
- 对于任何非交互式会话（CI、容器、无头智能体）：需将 `HAWK_API_KEY` 设置为环境变量
- 已安装 `jq`（配方（recipe）中使用它处理 JSON）

## 安装

```bash
# 添加 StackHawk 插件市场
/plugin marketplace add stackhawk/agent-skills

# 安装 StackHawk API 技能
/plugin install stackhawk-api@stackhawk
```

## 用法

安装后，当你提出类似下面的问题时，Claude 会自动使用 StackHawk API 技能：

> "我所有应用的整体安全态势如何？"

> "给我看看 payment-api 最近一次扫描的发现结果"

> "哪些应用在过去 30 天内没有被扫描过？"

> "自 auth-service 上次扫描以来有什么变化？"

## 支持的查询

- **全组织安全态势摘要**——汇总所有应用的发现数据与严重级别计数
- **单应用发现深度下钻**——从应用 → 扫描 → 告警 → 单条发现逐层深入
- **陈旧应用检测**——识别近期未被扫描的应用
- **扫描对比**——呈现两次扫描之间的变化（新增、已解决或已修改的发现）
- **团队与环境管理**——按团队、环境或环境类型查看应用

## 安全提示

切勿硬编码你的 API 密钥。对于交互式本地使用，`hawk init` 会将凭据存储在本地。对于任何非交互式会话（CI、容器、无头智能体），请将 `HAWK_API_KEY` 作为密钥（secret）设置——绝不要在脚本或配置中内联密钥值。

该密钥由 StackHawk 签发。`hawk op` CLI 使用它与 StackHawk 平台 API 进行身份验证。本插件不会将该密钥发送到文档或 CLI 下载 URL。

## 资源

- [hawk CLI 文档](https://docs.stackhawk.com)
- [StackHawk API 文档](https://apidocs.stackhawk.com)
- [StackHawk 平台](https://app.stackhawk.com)
- [StackHawk 支持](https://support.stackhawk.com)

## 许可证

MIT © [StackHawk](https://www.stackhawk.com)
