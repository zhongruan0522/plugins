# CodeRabbit 技能与插件

![Version](https://img.shields.io/badge/version-1.1.1-blue)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Agents](https://img.shields.io/badge/works_with-35%2B_agents-brightgreen)](#支持的智能体)

这里是 CodeRabbit 面向智能体的原生技能与插件打包的权威主页。
用它把 AI 驱动的代码评审安装到 35 个以上的编码智能体、Gemini CLI、
Antigravity CLI、Claude Code、Cursor 以及其他受支持的智能体环境中。

CodeRabbit 在你合并之前发现 bug、安全问题和质量风险。

## 快速开始

按照 [CLI 文档](https://docs.coderabbit.ai/cli)安装 CodeRabbit CLI，
然后告诉你的智能体：**“评审我的代码。”** 评审命令会在需要时启动
身份验证流程。

## 安装

### 1. 安装 CodeRabbit CLI

主要安装路径请使用 [CLI 文档](https://docs.coderabbit.ai/cli)，
其中涵盖 Homebrew、安装脚本和 CLI 用法。

### 2. 安装智能体集成

选择与你的编码智能体相匹配的路径。

#### 技能安装器

对于支持便携式 `SKILL.md` 文件的智能体，请使用
[技能文档](https://docs.coderabbit.ai/cli/skills)。

```bash
npx skills add coderabbitai/skills
```

技能安装器的安装选项：

| 旗标           | 用途                                             |
| -------------- | ------------------------------------------------ |
| `-g, --global` | 安装到用户目录而不是项目                         |
| `-a, --agent`  | 面向特定智能体（例如 `claude-code`）             |
| `-s, --skill`  | 按名称安装特定技能                               |
| `--all`        | 无提示地把所有技能安装到所有智能体               |

#### Claude Code 插件

Claude Code 用户也可以直接从官方插件市场将其作为插件安装：

```text
/plugin marketplace update
/plugin install coderabbit
```

完整的设置流程请参见
[Claude Code 集成指南](https://docs.coderabbit.ai/cli/claude-code-integration)。

#### Cursor 插件

本仓库现已包含 Cursor 插件市场元数据，位于
[`/.cursor-plugin/plugin.json`](.cursor-plugin/plugin.json)。

发布之后，Cursor 插件市场安装使用：

```text
/add-plugin coderabbit
```

当前推荐的设置请参见
[Cursor 集成指南](https://docs.coderabbit.ai/cli/cursor-integration)。

#### Gemini CLI 扩展（预发布）

在 `v1.2.0` 作为 Latest 发布之前，Gemini CLI 用户可以从 `main`
安装原生扩展：

```bash
gemini extensions install https://github.com/coderabbitai/skills --ref main
gemini extensions list
```

`v1.2.0` 发布之后，`--ref main` 选项可以省略。

仓库根目录的 [`gemini-extension.json`](gemini-extension.json) 打包了
便携式技能、`/coderabbit:review` 命令和代码评审子智能体。
该原生扩展独立于上文的通用技能安装器路径。

#### Antigravity CLI 插件

Antigravity CLI 用户可以直接从本仓库安装原生插件：

```bash
agy plugin install https://github.com/coderabbitai/skills
agy plugin list
```

仓库根目录的 [`plugin.json`](plugin.json) 清单为 Antigravity CLI 的
插件发现机制打包了技能、评审命令和代码评审子智能体。

#### Codex App

Codex 用户可以按照
[Codex 应用集成指南](https://docs.coderabbit.ai/cli/codex-integration#codex-app)安装官方 CodeRabbit 插件。

如需一目了然地了解活跃的和仓库打包的分发渠道，请参见
[DISTRIBUTION_CHANNELS.md](DISTRIBUTION_CHANNELS.md)。

## 仓库内容

| 路径 | 用途 |
| --- | --- |
| `skills/` | 面向支持 `SKILL.md` 的智能体的便携式 CodeRabbit 技能。 |
| `.claude-plugin/` | Claude Code 插件市场元数据。 |
| `commands/` | Claude Code、Gemini CLI 和 Antigravity CLI 的原生评审命令。 |
| `agents/` | 随 Claude Code、Gemini CLI 和 Antigravity CLI 一起发布的代码评审子智能体。 |
| `.cursor-plugin/` | Cursor 插件市场元数据。 |
| `gemini-extension.json` | Gemini CLI 扩展清单。 |
| `plugin.json` | Antigravity CLI 插件清单。 |
| `assets/` | 共享的插件市场与品牌资源。 |
| `DISTRIBUTION_CHANNELS.md` | 维护者对活跃、已打包和开发中渠道的清单。 |

## 用法

安装之后，直接对你的智能体说：

```text
评审我的代码
检查安全问题
我的改动有什么问题？
运行一次代码评审
评审我的 PR
评审 ../my-service 这个目录
```

智能体会自动：

1. 检查 CodeRabbit CLI 是否已安装
2. 对你的改动运行评审
3. 按严重级别分组展示发现
4. 可选择修复问题并重新评审

当你要求评审某个特定目录时，智能体可以传入 CodeRabbit CLI 的
`--dir <path>`，但会先确认该路径位于一个已初始化的 Git 工作树内。

## 支持的智能体

CodeRabbit 支持 35 个以上的编码智能体。

| 智能体             | 项目路径               | 全局路径                               |
| ------------------ | ---------------------- | -------------------------------------- |
| Amp, Kimi Code CLI | `.agents/skills/`      | `~/.config/agents/skills/`             |
| Antigravity CLI    | `.agents/skills/`      | `~/.gemini/config/skills/`             |
| Claude Code        | `.claude/skills/`      | `~/.claude/skills/`                    |
| Cline              | `.cline/skills/`       | `~/.cline/skills/`                     |
| CodeBuddy          | `.codebuddy/skills/`   | `~/.codebuddy/skills/`                 |
| Codex              | `.codex/skills/`       | `~/.codex/skills/`                     |
| Command Code       | `.commandcode/skills/` | `~/.commandcode/skills/`               |
| Continue           | `.continue/skills/`    | `~/.continue/skills/`                  |
| Crush              | `.crush/skills/`       | `~/.config/crush/skills/`              |
| Cursor             | `.cursor/skills/`      | `~/.cursor/skills/`                    |
| Droid              | `.factory/skills/`     | `~/.factory/skills/`                   |
| Gemini CLI         | `.gemini/skills/`      | `~/.gemini/skills/`                    |
| GitHub Copilot     | `.github/skills/`      | `~/.copilot/skills/`                   |
| Goose              | `.goose/skills/`       | `~/.config/goose/skills/`              |
| Junie              | `.junie/skills/`       | `~/.junie/skills/`                     |
| Kilo Code          | `.kilocode/skills/`    | `~/.kilocode/skills/`                  |
| Kiro CLI           | `.kiro/skills/`        | `~/.kiro/skills/`                      |
| Kode               | `.kode/skills/`        | `~/.kode/skills/`                      |
| MCPJam             | `.mcpjam/skills/`      | `~/.mcpjam/skills/`                    |
| Moltbot            | `skills/`              | `~/.moltbot/skills/`                   |
| Mux                | `.mux/skills/`         | `~/.mux/skills/`                       |
| Neovate            | `.neovate/skills/`     | `~/.neovate/skills/`                   |
| OpenClaude IDE     | `.openclaude/skills/`  | `~/.openclaude/skills/`                |
| OpenCode           | `.opencode/skills/`    | `~/.config/opencode/skills/`           |
| OpenHands          | `.openhands/skills/`   | `~/.openhands/skills/`                 |
| Pi                 | `.pi/skills/`          | `~/.pi/agent/skills/`                  |
| Pochi              | `.pochi/skills/`       | `~/.pochi/skills/`                     |
| Qoder              | `.qoder/skills/`       | `~/.qoder/skills/`                     |
| Qwen Code          | `.qwen/skills/`        | `~/.qwen/skills/`                      |
| Replit             | `.agent/skills/`       | 不适用（仅项目）                       |
| Roo Code           | `.roo/skills/`         | `~/.roo/skills/`                       |
| Trae               | `.trae/skills/`        | `~/.trae/skills/`                      |
| Trae CN            | `.trae/skills/`        | `~/.trae-cn/skills/`                   |
| Windsurf           | `.windsurf/skills/`    | `~/.codeium/windsurf/skills/`          |
| Zencoder           | `.zencoder/skills/`    | `~/.zencoder/skills/`                  |

## 可用技能

### [code-review](skills/code-review/SKILL.md)

使用 CodeRabbit 的 AI 驱动代码评审，找出 bug 和安全问题并提出改进建议。

**何时使用：**

- 你想在提交或合并之前评审代码改动
- 检查 bug、安全漏洞或反模式
- 获取 PR 反馈或改进建议
- 运行自动化代码质量检查

**涵盖类别：** bug 检测、安全分析、代码质量、性能问题、最佳实践

**触发语：** “评审我的代码”“检查 bug”“安全评审”“PR 反馈”“运行 coderabbit”

**能力：**

- 分析代码改动中的 bug、安全问题和反模式
- 保留发现的严重级别（critical、major、minor、trivial、info、none）
- 支持自主的修复-评审循环
- 默认评审被跟踪的改动，支持已提交与未提交两种范围
- 通过 CodeRabbit CLI 的 `--dir <path>` 支持限定目录的评审

### [autofix](skills/autofix/SKILL.md)

针对 CodeRabbit GitHub PR 评审中未解决讨论串的安全修复工作流，逐条评审并批准。

**何时使用：**

- 你已有一个经 CodeRabbit 评审过的处于打开状态的 GitHub PR
- 你想应用当前尚未解决的 CodeRabbit 评审讨论串中建议的修复
- 你希望每处修改都获得明确批准的引导式修复

**涵盖类别：** 评审讨论串提取、问题优先级排序、受控修复、合并提交与 PR 摘要

**触发语：** “coderabbit autofix”“修复 coderabbit”“cr fix”

**能力：**

- 获取当前 PR 的未解决 CodeRabbit 评审讨论串
- 解析问题并按严重级别排序
- 仅在校验问题并获得批准之后才应用修复
- 产出一个合并的提交，并发表一条 PR 摘要评论

## 插件组成

### Claude Code

- 斜杠命令：`/coderabbit:review`
- 子智能体：`code-reviewer`
- 插件市场清单：`.claude-plugin/plugin.json`

在兼容的智能体中，`code-review` 技能也依然保留，可通过自然语言触发。

### Cursor

- 插件市场清单：`.cursor-plugin/plugin.json`
- 技能来源：`skills/`

### Antigravity CLI

- 原生插件清单：`plugin.json`
- 技能来源：`skills/`
- 评审命令：`commands/coderabbit-review.md`（安装时转换为技能）
- 子智能体：`agents/code-reviewer.md`

### Gemini CLI

- 原生扩展清单：`gemini-extension.json`
- 技能来源：`skills/`
- 斜杠命令：`/coderabbit:review`（`commands/coderabbit/review.toml`）
- 子智能体：`agents/code-reviewer.md`

## 资源

- [CodeRabbit 文档](https://coderabbit.ai/docs)
- [CodeRabbit CLI 指南](https://docs.coderabbit.ai/cli)
- [Vercel Skills CLI](https://github.com/vercel-labs/skills)
- [Agent Skills 规范](https://agentskills.io/specification)
- [Gemini CLI 扩展文档](https://geminicli.com/docs/extensions/reference/)
- [Antigravity CLI 插件文档](https://antigravity.google/docs/cli-plugins)

## 许可证

MIT
