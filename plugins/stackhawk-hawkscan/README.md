# HawkScan 技能（Claude 专用）

由 [StackHawk HawkScan](https://www.stackhawk.com) 驱动的动态应用与 API 安全测试（DAST），直接嵌入你的 Claude 智能体工作流。

## 功能说明

本插件教会 Claude 如何在智能体编码循环中充当安全测试编排者：

```
代码变更 → 配置 HawkScan → 运行扫描 → 解析发现 → 生成修复任务 → 循环往复
```

Claude 会自动：
- 根据你的应用技术栈与认证方式，生成或调整 `stackhawk.yml` 配置
- 通过 CLI（`hawk`）或 Docker 运行 HawkScan
- 在浪费一次完整扫描之前先校验配置
- 解析扫描发现，并产出按优先级排序、可执行的修复任务
- 修复完成后重新运行扫描，以确认问题已修复

## 前提条件

- 一个 [StackHawk 账户](https://app.stackhawk.com)（提供免费套餐）
- 一个 StackHawk API 密钥——在 **Settings → API Keys** 页面生成
- 已安装 HawkScan CLI（`hawk`）或 Docker
- 交互式使用时需先运行 `hawk init --browser` 把凭据存储到本地；或对任何非交互式会话（CI、容器、无头智能体）设置 `HAWK_API_KEY`

## 安装

```bash
# 添加 StackHawk 插件市场
/plugin marketplace add stackhawk/claude-skills

# 安装 HawkScan 技能
/plugin install hawkscan@stackhawk
```

## 用法

安装后，在以下情况下 Claude 会自动使用 HawkScan 技能：

- 请它扫描应用的安全问题
- 提到 `stackhawk.yml`、`hawkscan` 或 DAST
- 请它在你的项目或 CI 流水线中搭建安全测试
- 让它修复代码——它会主动建议运行一次扫描

你也可以显式触发它：

> "为我的 Express API 配置 HawkScan 并运行一次扫描"

> "我的 HawkScan 认证失败了，帮我调试一下"

> "把这些扫描发现转换成修复任务"

## 支持的配置

- **应用类型**：REST/OpenAPI、GraphQL、gRPC、SOAP、标准 Web 应用
- **认证方式**：Bearer 令牌、表单登录、Cookie、OAuth2/外部 IdP、自定义脚本
- **运行时**：`hawk` CLI、Docker（`stackhawk/hawkscan`）
- **环境**：本地开发、CI/CD（GitHub Actions、GitLab 等）

## 安全提示

切勿在 `stackhawk.yml` 中硬编码凭据。对于交互式本地使用，`hawk init` 会将你的 API 密钥存储在 `~/.hawk/hawk.properties` 中。对于任何非交互式会话（CI、容器、无头智能体），请将 `HAWK_API_KEY` 作为密钥（secret）设置——绝不要在配置文件或脚本中内联密钥值。

## 资源

- [HawkScan 文档](https://docs.stackhawk.com/hawkscan/)
- [StackHawk CLI 参考](https://docs.stackhawk.com/stackhawk-cli/)
- [认证配置示例](https://github.com/kaakaww/hawkscan-examples)
- [StackHawk 支持](https://support.stackhawk.com)

## 许可证

MIT © [StackHawk](https://www.stackhawk.com)
