# 42Crunch API 安全插件

使用 42Crunch 在 Claude Code 中直接实现 API 安全自动化——审计 OpenAPI 规范，检测与 OWASP API 安全风险（包括 BOLA/BFLA）对应的漏洞，并应用 AI 辅助修复。

## 概述

`api-security-testing` 插件专为 AI 辅助开发工作流设计，通过 **audit->scan->remediate->validate**（审计->扫描->修复->验证）循环提供持续防护，确保 API 在部署前达到企业安全标准。

## 命令

| 技能 | 说明 |
|---|---|
| [`/42crunch-setup`](./README.md#42crunch-setup) | 安装 `42c-ast` 二进制文件并配置凭据（一次性） |
| [`/42crunch-audit`](./README.md#42crunch-audit) | 对 OpenAPI 规范文件进行静态安全审计，提供评分结果和 AI 辅助修复 |
| [`/42crunch-scan`](./README.md#42crunch-scan) | 对运行中的 API 进行实时一致性与授权扫描（BOLA/BFLA） |
| [`/42crunch-api-security-testing`](./README.md#42crunch-api-security-testing) | 在单个会话中完成完整的审计 + 扫描流水线 |
| [`/code-to-oas`](./README.md#code-to-oas) | 从 API 源代码生成完整的 `openapi.json` |

## 前提条件

- [Claude Code](https://claude.ai/code)（CLI、桌面应用或 IDE 扩展）
- 一个 42Crunch 账户——[免费版（freemium）](https://42crunch.com/freemium/)或付费版（Platform API key）
- 对于 `42crunch-scan`：需要一个运行中的 API 服务器，可经 OAS 中 `servers[0]` 里的 URL 访问（或通过 `SCAN42C_HOST` 指定）

`42c-ast` 二进制文件会在首次使用时自动下载并保持更新。

## 安装

添加 42Crunch 插件市场：

```
/plugin marketplace add 42Crunch-AI/claude-plugins
```

安装 `api-security-testing` 插件：

```
/plugin install api-security-testing@42crunch-marketplace
```

## 快速开始

1. **安装插件**——将该插件市场添加到 Claude Code。
2. **设置环境**——说：*"set up 42crunch"*
3. **审计你的 API**——说：*"run a 42Crunch audit"*（如果你还没有 OAS，Claude 会主动提出从源代码生成）
4. **修复问题**——Claude 按严重程度列出发现项，并在做任何修改前征得你的同意
5. **扫描你的 API**——说：*"run a conformance scan"*，针对你运行中的服务器

## 技能

### `42crunch-setup`

为你的操作系统/架构安装 `42c-ast` 二进制文件，校验其校验和，并引导你完成凭据配置。支持 Platform（API key）和 Freemium（token）两种模式。凭据存储在 `~/.42crunch/conf/env`，权限为 `600`。

> **触发词：**“set up 42crunch”、“configure 42crunch”、“install 42c-ast”、“update 42c-ast”、“set api key”、“42crunch not working”、“binary not found”

**用法：**
```
/42crunch-setup
```

---

### `42crunch-audit`

对 OpenAPI 规范运行静态分析并给出 0–100 的安全评分。发现项分为三个级别：

- **SQG-Blocking**——必须修复才能通过安全质量门（Security Quality Gate）
- **Security**——建议修复
- **Data Validation**——仅供参考

Claude 在应用任何更改前会征得你的明确同意，然后重新运行审计以确认通过。

**Platform 模式：**SQG 阈值由你的平台策略强制执行。  
**Freemium 模式：**无自动化 SQG 门禁；由你为本次会话设定目标分数和阻断严重级别。

> **触发词：**“run audit”、“42crunch audit”、“fix audit issues”、“SQG audit”、“audit score”

**用法：**
```
/42crunch-audit
```

---

### `42crunch-scan`

对运行中的 API 服务器执行实时一致性与授权测试。Claude 会确认目标 URL、检查可达性、分析 OAS（操作、认证方案、BOLA 候选），并在开始任何配置前展示扫描预览。完成一次正常路径（happy path）验证运行后，Claude 会在启动完整模糊测试扫描前征得你的同意。

发现项分为三个级别：

- **授权失败**——确认存在 BOLA/BFLA
- **SQG-Blocking 一致性问题**——必须修复才能通过安全质量门（Security Quality Gate）
- **信息性一致性问题**——列出供审查

Claude 在应用任何修复前都会征得你的同意——包括 OAS 契约更新和服务器端代码更改。

**Platform 模式：**SQG 由平台策略强制执行。  
**Freemium 模式：**所有发现项以非正式方式呈现；由你决定修复哪些。

> **触发词：**“run scan”、“scan only”、“conformance test”、“BOLA test”、“BFLA test”、“42crunch scan”、“scan config”

**用法：**
```
/42crunch-scan
```

---

### `42crunch-api-security-testing`

按顺序编排审计（阶段 1）和扫描（阶段 2）。预先确定 OAS 文件并确认扫描目标 URL。每个阶段都需要用户单独同意。最后生成涵盖两个阶段的综合摘要。

> **触发词：**“run audit and scan”、“full 42crunch pipeline”、“full security check”、“audit then scan”、“SQG”

**用法：**
```
/42crunch-api-security-testing
```

---

### `code-to-oas`

分析你的 API 代码库并生成完整的 `openapi.json`。检测路由、参数、请求/响应 schema、认证中间件、数据模型和服务器配置。写入文件前会先进行一次自检。

支持的框架：Express、Fastify、Koa、Hapi、NestJS、FastAPI、Flask、Django、Starlette、Spring Boot、Quarkus、Micronaut、Gin、Echo、Chi、Gorilla/mux、Rails、Sinatra、Grape、ASP.NET Core 等。

> **触发词：**“generate OAS from code”、“create OpenAPI spec”、“document my API”、“reverse-engineer spec”、“write openapi.json from my codebase”

**用法：**
```
/code-to-oas
```

---

## 配置

凭据从 `~/.42crunch/conf/env`（macOS/Linux）或 `%APPDATA%\42Crunch\conf\env`（Windows）读取，由 `42crunch-setup` 写入。技能运行期间切勿手动编辑此文件。

| 变量 | 说明 | 模式 |
|---|---|---|
| `API_KEY` | Platform 令牌（`api_*` 或 `ide_*`） | Platform |
| `PLATFORM_HOST` | 42Crunch 平台基础 URL（例如 `https://us.42crunch.cloud`） | Platform |
| `FREEMIUM_TOKEN` | Freemium 令牌（Base64） | Freemium |
| `SCAN42C_HOST` | 覆盖扫描目标 URL（覆盖 OAS 中的 `servers[0]`） | 两者 |

凭据输入后绝不会以明文打印。

---

## 链接

- [42Crunch](https://42crunch.com/)
- [42Crunch 文档](https://docs.42crunch.com)
- [GitHub 上的 42Crunch](https://github.com/42Crunch)
- 支持：support@42crunch.com

## 许可证

Apache 2.0——详情参见 [LICENSE](./LICENSE)。
