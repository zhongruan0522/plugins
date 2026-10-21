# Desktop Commander Claude Code 插件

Desktop Commander 让 Claude Code 可以访问一个本地 MCP 服务器，用于终端会话、文件系统操作、结构化文档、搜索、进程管理和 SSH 工作流——此外还提供一组技能，在常见任务中引导智能体使用这些能力。

## 组成部分

- MCP 服务器：`desktop-commander`，通过 `npx -y @wonderwhy-er/desktop-commander@latest` 安装。
- 技能：`desktop-commander-overview` — 说明何时使用 Desktop Commander 的 MCP 工具，以及常见工作流如何组合。
- 技能：`terminal` — 持久 shell/REPL、SSH、Windows PowerShell、进程/端口检查，以及将重复性工作流保存为脚本。
- 技能：`computer-health-check` — 只读的系统健康检查（CPU、内存、磁盘、电池、启动项），并提供安全、需主动选择（opt-in）的清理操作。
- 技能：`ai-tools-setup` — 安装、配置和修复 Claude Desktop、MCP 服务器以及本地 AI 工具链（mcp.json / claude_desktop_config.json）。
- 技能：`knowledge-base` — 构建和维护一个任何 AI 智能体无需向量数据库即可浏览的 Markdown 知识库。
- 技能：`obsidian-vault` — 整理 Obsidian 库（vault）：MOC、wikilink、属性、Dataview/Bases 仪表板，以及孤儿文件/链接清理。

## 用法

在 Claude Code 中安装本插件，然后当 Claude 需要持久 shell、长时间运行的进程、读取本地文件、处理 Excel/DOCX/PDF、分析大型 CSV、远程 SSH 会话、系统健康检查、AI 工具链配置，或整理知识库/Obsidian 库时，让它使用 Desktop Commander。

完整的项目文档请参阅仓库 README。
