<div align="center">

# SumUp 技能

[![Documentation][docs-badge]](https://developer.sumup.com)
[![License](https://img.shields.io/github/license/sumup/sumup-go)](./LICENSE)

</div>

一组 [Agent Skills](https://agentskills.io/home)，用于构建 SumUp 支付集成，覆盖有卡（终端）与无卡（线上）两类结账流程。

## 安装

这些技能适用于支持 Agent Skills 标准的智能体，包括 Claude Code、Cursor、Gemini CLI、OpenCode、OpenAI Codex 和 Pi。

打包的集成包含技能和托管 MCP 配置。通过你的助手登录 SumUp 即可使用账户相关工具。技能无需连接账户即可使用。完整的客户端设置指南参见[插件](https://developer.sumup.com/tools/llms/plugins/)和 [MCP 服务器](https://developer.sumup.com/tools/llms/mcp-server/)。

### Claude Code

在终端中运行：

```bash
claude plugin marketplace add sumup/sumup-skills
claude plugin install sumup@sumup
claude plugin list
```

在 Claude Code 内，你也可以使用 `/plugin marketplace add sumup/sumup-skills` 和 `/plugin install sumup@sumup`。按照安装摘要中的重载说明操作，然后打开 `/mcp` 在浏览器中授权 SumUp 服务器。

### Cursor

团队使用：在 **Dashboard > Plugins & MCPs > Team Marketplaces > Add Marketplace > Import from Repo** 中导入 `https://github.com/sumup/sumup-skills`，然后添加并安装 SumUp 插件。参见 [Cursor 插件](https://cursor.com/docs/plugins)。

个人使用：通过 `npx skills add https://github.com/sumup/sumup-skills` 安装技能，并配置[托管 MCP 连接](https://developer.sumup.com/tools/llms/mcp-server/)。

### Gemini CLI

从 GitHub 安装扩展：

```bash
gemini extensions install https://github.com/sumup/sumup-skills --ref=main
gemini extensions list
```

启动一个新的 Gemini CLI 会话并运行 `/mcp auth sumup`，以授权托管服务器。

### OpenAI Codex

使用 Codex 插件市场安装：

```bash
codex plugin marketplace add sumup/sumup-skills
codex plugin add sumup@sumup
codex plugin list
```

启动一个新的 Codex 会话以加载插件，并在提示时完成 SumUp 授权。插件可用于 Codex CLI 以及 ChatGPT 桌面应用中的 Codex。对于 Codex IDE 扩展，请安装独立技能并直接配置 MCP。

如需拉取插件更新，运行 `codex plugin marketplace upgrade sumup`，然后启动新会话。

### Kiro

在 Kiro 中将本仓库导入为自定义 power：**Powers > Add Custom Power > Import power from GitHub**。

激活该 power，并在提示时为其 SumUp MCP 连接授权。本地测试时，使用 **Import power from a folder** 并选择本仓库根目录。

### Agent Skills 发现

支持 [Agent Skills Discovery RFC](https://github.com/cloudflare/agent-skills-discovery-rfc) 的智能体和工具可以从以下地址发现 SumUp 技能：

`https://developer.sumup.com/.well-known/agent-skills/index.json`

在支持发现索引的客户端中使用此 URL；如果客户端会自动发现 well-known 技能索引，则从 `https://developer.sumup.com` 开始。

### 克隆 / 复制

如果只安装技能，克隆本仓库并把 `skills/` 下的文件夹复制到你所用智能体的相应目录。此方式不会配置 MCP：

| 智能体 | 技能目录 | 文档 |
|-------|-----------------|------|
| Claude Code | `~/.claude/skills/` | [文档](https://code.claude.com/docs/en/skills) |
| Cursor | `~/.cursor/skills/` | [文档](https://cursor.com/docs/context/skills) |
| Gemini CLI | `~/.gemini/skills/` | [文档](https://geminicli.com/docs/cli/skills/) |
| OpenCode | `~/.config/opencode/skills/` | [文档](https://opencode.ai/docs/skills/) |
| OpenAI Codex | `~/.codex/skills/` | [文档](https://developers.openai.com/codex/skills/) |
| Pi | `~/.pi/agent/skills/` | [文档](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent#skills) |

## 技能

使用 `npx skills` CLI 安装：

```bash
npx skills add https://github.com/sumup/sumup-skills
```

技能是上下文相关的，会根据你的对话自动加载。当请求匹配某个技能的触发条件时，智能体会加载并应用该技能。

| 技能 | 适用场景 |
|-------|------------|
| [sumup](./skills/sumup/) | 端到端实现 SumUp 结账流程，涵盖 Checkouts API、Card Widget、Hosted Checkout、周期性 token 化，以及终端/云端读卡器结账 |
| [sumup-best-practices](./skills/sumup-best-practices/) | 在 Hosted Checkout、Card Widget、Checkouts API、移动 SDK、终端 SDK 和 Cloud API 之间选择合适的集成路径与安全方案 |
| [upgrade-sumup](./skills/upgrade-sumup/) | 规划并执行 SumUp API/SDK 的升级与迁移，覆盖服务器端和移动 SDK |
| [sumup-debug](./skills/sumup-debug/) | 诊断并修复常见集成故障，例如 webhook 签名不匹配、scope 问题、会话过期、widget 挂载失败和重复引用 |
| [sumup-mcp](./skills/sumup-mcp/) | 在支持 MCP 的客户端中配置和使用 SumUp MCP 服务器（`https://mcp.sumup.com/mcp`） |
| [sumup-testing](./skills/sumup-testing/) | 设置沙箱测试商户、运行成功/失败场景（包括 `amount = 11`），并验证端到端结账行为 |

## 验证安装

询问你的助手：“使用 SumUp 技能讲解如何构建 Hosted Checkout 集成。”

完成 MCP 授权后，尝试一个只读请求：“使用 SumUp MCP 工具显示我的商户资料。”

在测试支付流程之前，请使用[沙箱商户账户](https://developer.sumup.com/online-payments/#getting-a-sandbox-merchant-account)。如果工具缺失或授权失败，请参阅 [MCP 故障排查](https://developer.sumup.com/tools/llms/mcp-server/#troubleshooting)。

## 资源

- [SumUp 开发者文档](https://developer.sumup.com)
- [SumUp API 参考](https://developer.sumup.com/api)
- [SumUp MCP 服务器](https://mcp.sumup.com/mcp)

[docs-badge]: https://img.shields.io/badge/SumUp-documentation-white.svg?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgY29sb3I9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTIyLjI5IDBIMS43Qy43NyAwIDAgLjc3IDAgMS43MVYyMi4zYzAgLjkzLjc3IDEuNyAxLjcxIDEuN0gyMi4zYy45NCAwIDEuNzEtLjc3IDEuNzEtMS43MVYxLjdDMjQgLjc3IDIzLjIzIDAgMjIuMjkgMFptLTcuMjIgMTguMDdhNS42MiA1LjYyIDAgMCAxLTcuNjguMjQuMzYuMzYgMCAwIDEtLjAxLS40OWw3LjQ0LTcuNDRhLjM1LjM1IDAgMCAxIC40OSAwIDUuNiA1LjYgMCAwIDEtLjI0IDcuNjlabTEuNTUtMTEuOS03LjQ0IDcuNDVhLjM1LjM1IDAgMCAxLS41IDAgNS42MSA1LjYxIDAgMCAxIDcuOS03Ljk2bC4wMy4wM2MuMTMuMTMuMTQuMzUuMDEuNDlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+
