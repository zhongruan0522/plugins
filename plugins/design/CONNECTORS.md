# Connectors

## How tool references work

Plugin files use `~~category` as a placeholder for whatever tool the user connects in that category. For example, `~~design tool` might mean Ardot, Sketch, or any other design tool with an MCP server.

Plugins are **tool-agnostic** — they describe workflows in terms of categories (design tool, project tracker, user feedback, etc.) rather than specific products. The `.mcp.json` pre-configures specific MCP servers, but any MCP server in that category works.

## Connectors for this plugin
> 本仓库已本地化：`.mcp.json` 仅预配置 Ardot（设计工具）与 Linear（项目跟踪），下表 Included 一列与此对应；Other options 仍可按需自行接入。
>
> Ardot 连接地址说明（.mcp.json 为纯 JSON、Claude Code 与 CI 的 jq 均不支持注释，地址关系记录在此）：
> - 默认（本地模式）：`https://ardot.nookmux.com/api/v1/mcp` —— 自建隧道域名（公网 DNS 指向 Tailscale 网段 100.66.1.1），反代本机 Ardot 客户端后台服务 `http://127.0.0.1:50501/api/v1/mcp`；需 Ardot 客户端运行并打开设计文件时可用。
> - 云端备选：`https://ardot.tencent.com/mcp` —— 腾讯官方 Remote MCP，免装客户端、无需组网。

| Category | Placeholder | Included servers | Other options |
|----------|-------------|-----------------|---------------|
| Chat | `~~chat` | — | Microsoft Teams |
| Design tool | `~~design tool` | Ardot | Sketch, Adobe XD, Framer, Figma |
| Knowledge base | `~~knowledge base` | — | Confluence, Guru, Coda |
| Project tracker | `~~project tracker` | Linear | Shortcut, ClickUp |
| User feedback | `~~user feedback` | — | Productboard, Canny, UserVoice, Dovetail |
| Product analytics | `~~product analytics` | — | Amplitude, Mixpanel, Heap, FullStory |
