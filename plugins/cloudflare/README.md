# Cloudflare 技能

一组 [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)，用于在 Cloudflare、Workers、Agents SDK 以及更广泛的 Cloudflare 开发者平台上进行构建。

## 安装

在支持的平台上使用原生插件，可同时安装 Cloudflare 指南和 Cloudflare MCP 服务器。仅支持 Agent Skills 标准的智能体可以单独安装这些技能。

### Codex

从 Cloudflare 插件市场安装：

```sh
codex plugin marketplace add cloudflare/skills
codex plugin add cloudflare@cloudflare
```

安装后请启动一个新的 Codex 会话。

### Claude Code

使用[插件市场](https://code.claude.com/docs/en/discover-plugins#add-from-github)安装：

```
/plugin marketplace add cloudflare/skills
/plugin install cloudflare@cloudflare
```

### VS Code / GitHub Copilot

直接从此仓库安装：

1. 在 VS Code 设置中启用 `chat.plugins.enabled`。
2. 打开命令面板并运行 **Chat: Install Plugin From Source**。
3. 输入 `https://github.com/cloudflare/skills`。

关于通过插件市场安装或故障排查，请参阅 [VS Code 的智能体插件文档](https://code.visualstudio.com/docs/agent-customization/agent-plugins)。

### Cursor

从 Cursor Marketplace 安装，或通过 **Settings > Rules > Add Rule > Remote Rule (Github)** 手动添加，填入 `cloudflare/skills`。

### npx skills

使用 [`npx skills`](https://skills.sh) CLI 安装：

```
npx skills add https://github.com/cloudflare/skills
```

### 克隆 / 复制

克隆本仓库，并将技能文件夹复制到你的智能体对应的目录中：

| 智能体 | 技能目录 | 文档 |
|-------|-----------------|------|
| Claude Code | `~/.claude/skills/` | [文档](https://code.claude.com/docs/en/skills) |
| Cursor | `~/.cursor/skills/` | [文档](https://cursor.com/docs/context/skills) |
| OpenCode | `~/.config/opencode/skills/` | [文档](https://opencode.ai/docs/skills/) |
| OpenAI Codex | `~/.codex/skills/` | [文档](https://developers.openai.com/codex/skills/) |
| Pi | `~/.pi/agent/skills/` | [文档](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent#skills) |

## 技能

技能是上下文相关的，会根据对话自动加载。当请求匹配某个技能的触发条件时，智能体会加载并应用相应技能，以提供准确且最新的指导。

| 技能 | 适用场景 |
|-------|------------|
| cloudflare | 帮助智能体发现哪些 Cloudflare 产品符合其需求，进而找到合适的技能和文档 |
| nextjs-on-cloudflare | 基于 vinext 在 Workers 上运行 Next.js；路由到 vinext 的上游技能和文档 |
| agents-sdk | 构建有状态的 AI 智能体，支持状态、调度、RPC、MCP 服务器、邮件和流式聊天 |
| durable-objects | 有状态协调（聊天室、游戏、预订）、RPC、SQLite、alarms、WebSockets |
| sandbox-next | 基于 `@cloudflare/sandbox@next`（1.0 预览版）的 Sandbox；推荐用于新项目 |
| sandbox-stable | 基于当前稳定版 `@cloudflare/sandbox` 包的 Sandbox |
| sandbox-migrate-to-next | 将稳定的 Sandbox 应用迁移到 `@cloudflare/sandbox@next` |
| wrangler | 部署和管理 Workers、KV、R2、D1、Vectorize、Queues、Workflows |
| workers-best-practices | 编写、评审或配置生产环境的 Workers |
| cloudflare-email-service | 实现或排查 Email Sending、Email Routing 及投递配置 |
| turnstile-spin | 设置、修复或迁移 Turnstile 机器人验证，包括服务端 Siteverify |
| web-perf | 审计 Core Web Vitals（FCP、LCP、TBT、CLS）、渲染阻塞资源和网络请求链 |
| cloudflare-one | 设计、配置、排查或评审涵盖 Access、Gateway、WARP、Tunnel、Magic WAN、DLP、CASB、设备态势（posture）与身份的 [Cloudflare One](https://developers.cloudflare.com/cloudflare-one/) 部署 |
| cloudflare-one-migrations | 针对从 Zscaler、Palo Alto、传统 VPN/SWG 和 SASE 迁移到 Cloudflare One 的迁移评估、策略映射、上线计划和差距分析 |

## MCP 服务器

本插件包含 Cloudflare 的主[远程 MCP 服务器](https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/)，以提供增强功能：

| 服务器 | 用途 |
|--------|---------|
| cloudflare | 通过 Code Mode MCP 服务器访问 Cloudflare API 和最新的开发者文档 |

Cloudflare 还发布了多个针对特定产品的 MCP 服务器。本插件有意仅打包主 `cloudflare` 服务器。
