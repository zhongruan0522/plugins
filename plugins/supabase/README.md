# Supabase 智能体插件

面向 Claude Code、Cursor、Codex 及其他受支持智能体的 Supabase 官方插件分发仓库（受支持的智能体请查看下方的 [Agents Supported](https://github.com/supabase-community/supabase-plugin#agents-supported) 部分）。它打包了：

> 想要参与贡献？请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

- `skills/supabase` — Supabase 产品的通用指南
- `skills/supabase-postgres-best-practices` — Postgres 性能与 schema 指南
- 面向每个受支持平台（surface）的厂商专属插件清单与 MCP 适配器

## 仓库结构

所有厂商共享：
- `skills/` — 供所有平台共同消费的内置（vendored）技能文件
- `assets/` — 共享资源（logo 等）

### 受支持的智能体：

| 厂商         | 是否支持 |
|----------------|-----------|
| Claude Code    | ✓         |
| Cursor         | ✓         |
| Codex          | ✓         |
| GitHub Copilot | ✓         |
| Gemini         | ✓         |
| VS Code (Open Plugin) | ✓  |
| Kimi Code         | ✓         |
| Grok Build     | ✓         |


## 说明
- 根目录的 `skills/` 目录必须包含真实文件。不要将其改回符号链接或基于子模块的路径。
- 技能文件会通过 `.github/workflows/sync-agent-skills.yml` 从 `supabase/agent-skills` 的发布版本自动同步。该工作流由 [`supabase/agent-skills`](https://github.com/supabase/agent-skills/blob/4e69c80e213f315c02c9ebef9c28dd6e43a4707e/.github/workflows/release.yml#L65) 的发布流水线触发，并在此仓库中打开一个包含更新后技能文件的 PR。
