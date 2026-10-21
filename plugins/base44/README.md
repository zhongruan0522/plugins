# 面向 Base44 的智能体技能

> **Beta** — 这些技能功能完整且在持续维护中。欢迎在 [GitHub Discussions](https://github.com/orgs/base44/discussions) 提供反馈和建议。

安装这些技能，让你的编码智能体能够协助进行 [Base44](https://docs.base44.com/) 开发。

支持[多种 AI 编码智能体](https://github.com/vercel-labs/skills#available-agents)，包括 Cursor、Claude Code、Codex CLI 和 OpenCode。

## 安装

### Claude Code（插件市场）

添加插件市场并安装：

```
/plugin marketplace add base44/skills
/plugin install base44@base44-skills
```

或直接安装：

```bash
claude plugin install base44@base44-skills
```

### Codex CLI

在终端中注册插件市场：

```bash
codex plugin marketplace add base44/skills
```

然后在 Codex CLI 中运行 `/plugins`，选择 **Base44**，再选择 **Install Plugin**。

### 其他智能体（通过 skills CLI）

使用 [`skills`](https://github.com/vercel-labs/skills) 安装技能：

```bash
# 安装所有技能
npx skills add base44/skills

# 全局安装（用户级）
npx skills add base44/skills -g
```

### Sandbox 版本（远程开发——不涉及本地文件）

如果你的应用是在 **Base44 云沙箱**中开发的（平台会自动构建、自动提交、自动同步，因此你从不运行 deploy/push），请安装精简的 `base44-sandbox` 插件，而非全套技能。它打包了 `base44-remote-dev`、`base44-sandbox`、`base44-sdk` 和 `base44-troubleshooter`——并有意排除了面向部署的 `base44-cli`。

```bash
# Claude Code
claude plugin install base44-sandbox@base44-skills

# Codex CLI：注册插件市场，然后 /plugins → "Base44 Sandbox" → Install
codex plugin marketplace add base44/skills

# 其他智能体（skills CLI）
npx skills add base44/skills --skill base44-remote-dev --skill base44-sandbox --skill base44-sdk --skill base44-troubleshooter
```

## 可用技能

| 技能 | 说明 |
|-------|-------------|
| [`base44-cli`](skills/base44-cli/SKILL.md) | 使用 CLI 创建和管理 Base44 项目。处理资源配置（entities、后端函数、realtime actor、AI 智能体）、初始化与部署。 |
| [`base44-sdk`](skills/base44-sdk/SKILL.md) | 使用 Base44 JavaScript SDK 构建应用。与 entities、后端函数、realtime actor、AI 智能体等远程资源通信。 |
| [`base44-troubleshooter`](skills/base44-troubleshooter/SKILL.md) | 利用后端函数日志排查生产问题。适用于调查应用错误或诊断生产环境问题。 |
| [`base44-remote-dev`](skills/base44-remote-dev/SKILL.md) | 通过 MCP 或 `base44 sandbox` CLI 将你自己的编码智能体连接到 Base44 沙箱，从而远程开发 Base44 应用。 |
| [`base44-sandbox`](skills/base44-sandbox/SKILL.md) | 在云沙箱中编写 Base44 应用代码——无需 deploy/push；将资源文件（函数、actor、entity、智能体）写入沙箱即完成发布。 |

## 关于智能体技能

智能体技能（agent skills）是可复用的指令集，用于扩展你的编码智能体的能力。它们定义在遵循 [Agent Skills 规范](https://agentskills.io/specification)的 `SKILL.md` 文件中。

了解更多关于 [Base44 智能体扩展](https://base44-nav-anchors.mintlify.app/developers/references/external-integrations/about-agent-extensions)的信息。

## 贡献

创建与提交技能的指南请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

[MIT](LICENSE)
