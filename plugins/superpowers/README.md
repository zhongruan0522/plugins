# Superpowers

Superpowers 是一套完整的软件开发方法论，适用于你的编码智能体，它构建在一组可组合的技能和一些初始指令之上，确保你的智能体会使用这些技能。

## 目录

- [工作原理](#工作原理)
- [商业服务](#商业服务)
- [快速开始](#安装)
  - [Claude Code](#claude-code)
  - [Antigravity](#antigravity)
  - [Codex App](#codex-app)
  - [Codex CLI](#codex-cli)
  - [Cursor](#cursor)
  - [Devin CLI](#devin-cli)
  - [Factory Droid](#factory-droid)
  - [Gemini CLI](#gemini-cli)
  - [GitHub Copilot CLI](#github-copilot-cli)
  - [Grok Build CLI](#grok-build-cli)
  - [Kimi Code](#kimi-code)
  - [OpenCode](#opencode)
  - [Pi](#pi)
  - [Qwen Code](#qwen-code)
  - [Hermes Agent](#hermes-agent)
  - [Muse](#muse)
- [基本工作流](#基本工作流)
- [出问题时怎么办](#出问题时怎么办)
- [社区](#社区)
- [包含内容](#包含内容)
- [设计理念](#设计理念)
- [参与贡献](#参与贡献)
- [更新](#更新)
- [许可证](#许可证)
- [可视化伴侣遥测](#可视化伴侣遥测)

## 工作原理

一切从你启动编码智能体的那一刻开始。一旦它发现你要构建东西，它*不会*急着直接写代码，而是退一步，问清楚你真正想做什么。

从对话中梳理出规格说明后，它会以足够短小的分块展示给你，让你能够真正阅读和消化。

在你签核设计之后，你的智能体会制定一份实现计划，它清晰到足以让一位干劲十足、却品味欠佳、毫无判断力、不了解项目背景且厌恶测试的初级工程师照着执行。它强调真正的红/绿 TDD、YAGNI（You Aren't Gonna Need It）和 DRY。

接下来，一旦你说"开始"，它就会启动 *subagent-driven-development* 流程，让各个智能体逐一完成每项工程任务，检查并评审它们的工作，然后继续向前推进。你的智能体一次自主运行几个小时而不偏离你们制定的计划，是再常见不过的事。

这套系统的内容还有很多，但这就是它的核心。由于技能会自动触发，你不需要做任何特殊操作。你的编码智能体就这样拥有了 Superpowers。

## 商业服务

如果你在企业环境中使用 Superpowers，并希望获得商业支持、附加工具或费用托管等服务，欢迎随时发邮件到 sales@primeradiant.com 联系我们。

## 安装

安装方式因宿主环境（harness）而异。如果你使用不止一个，请为每个宿主环境分别安装 Superpowers。

### Claude Code

Superpowers 可通过 [Claude 官方插件市场](https://claude.com/plugins/superpowers)获取

#### 官方插件市场

- 从 Anthropic 官方插件市场安装插件：

  ```bash
  /plugin install superpowers@claude-plugins-official
  ```

#### Superpowers 插件市场

Superpowers 插件市场为 Claude Code 提供 Superpowers 及其他一些相关插件。

- 注册该插件市场：

  ```bash
  /plugin marketplace add obra/superpowers-marketplace
  ```

- 从该插件市场安装插件：

  ```bash
  /plugin install superpowers@superpowers-marketplace
  ```

### Antigravity

以插件形式从此仓库安装 Superpowers：

```bash
agy plugin install https://github.com/obra/superpowers
```

Antigravity 会列出每个已安装技能的描述，而 `using-superpowers` 技能的描述会促使模型在对话开始时加载该技能。更新时用同一命令重新安装即可。

### Codex App

Superpowers 可通过 [Codex 官方插件市场](https://github.com/openai/plugins)获取。

- 在 Codex 应用中，点击侧边栏中的 Plugins。
- 你应该能在 Coding 分区中看到 `Superpowers`。
- 点击 Superpowers 旁边的 `+` 并按提示操作。

### Codex CLI

Superpowers 可通过 [Codex 官方插件市场](https://github.com/openai/plugins)获取。

- 打开插件搜索界面：

  ```bash
  /plugins
  ```

- 搜索 Superpowers：

  ```bash
  superpowers
  ```

- 选择 `Install Plugin`。

### Cursor

- 在 Cursor Agent 聊天中，从插件市场安装：

  ```text
  /add-plugin superpowers
  ```

- 或者在插件市场中搜索"superpowers"。

### Devin CLI

- 从此仓库安装插件：

  ```bash
  devin plugins install obra/superpowers
  ```

- 使用以下命令更新到最新版本：

  ```bash
  devin plugins update superpowers
  ```

### Factory Droid

- 注册插件市场：

  ```bash
  droid plugin marketplace add https://github.com/obra/superpowers
  ```

- 安装插件：

  ```bash
  droid plugin install superpowers@superpowers
  ```

### Gemini CLI

- 安装扩展：

  ```bash
  gemini extensions install https://github.com/obra/superpowers
  ```

- 之后更新：

  ```bash
  gemini extensions update superpowers
  ```

### GitHub Copilot CLI

- 注册插件市场：

  ```bash
  copilot plugin marketplace add obra/superpowers-marketplace
  ```

- 安装插件：

  ```bash
  copilot plugin install superpowers@superpowers-marketplace
  ```

### Grok Build CLI

Superpowers 可通过 [Grok 官方插件市场](https://github.com/xai-org/plugin-marketplace)获取。

- 从 xAI 官方插件市场安装插件：

  ```bash
  grok plugin install superpowers@xai-official --trust
  ```

- 或者在 TUI 中打开插件市场，搜索 Superpowers 并安装：

  ```text
  /marketplace
  ```

### Kimi Code

Superpowers 已上架 Kimi Code 的插件市场。

- 打开 Kimi Code 的插件管理器：

  ```text
  /plugins
  ```

- 进入 `Marketplace` > `Superpowers` 并安装。

- 或者直接从此仓库安装：

  ```text
  /plugins install https://github.com/obra/superpowers
  ```

- 详细文档：[docs/README.kimi.md](docs/README.kimi.md)

### OpenCode

OpenCode 使用自己的插件安装方式；即使你已在其他宿主环境中使用 Superpowers，也需要单独安装。

- 告诉 OpenCode：

  ```
  Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md
  ```

- 详细文档：[docs/README.opencode.md](docs/README.opencode.md)

### Pi

以 Pi 包的形式从此仓库安装 Superpowers：

```bash
pi install git:github.com/obra/superpowers
```

本地开发时，可让 Pi 以临时包的形式加载此检出目录运行：

```bash
pi -e /path/to/superpowers
```

Pi 包会加载 Superpowers 技能以及一个小扩展，该扩展会在会话启动时和压缩（compaction）之后注入 `using-superpowers` 引导内容。Pi 原生支持技能，因此不需要兼容的 `Skill` 工具。子智能体和任务列表工具仍是可选的 Pi 配套包。

### Qwen Code

Qwen Code 可直接从 Claude Code 插件市场安装插件。

- 从此仓库安装插件，并在提示时选择 `superpowers`：

  ```bash
  qwen extensions install obra/superpowers
  ```

- 之后更新：

  ```bash
  qwen extensions update superpowers
  ```

### Hermes Agent

以 Hermes 插件的形式从此仓库安装 Superpowers：

```bash
hermes plugins install obra/superpowers --enable
```

安装后请重启所有正在运行的 Hermes 会话。注意：Hermes 没有压缩后钩子（post-compaction hook），因此一个在首轮对话就发生压缩的超长会话会丢失引导内容——如果技能不再触发，请开启新会话。

### Muse

Superpowers 可作为原生 Muse 插件使用——同一仓库、同样的技能，覆盖所有宿主环境。`using-superpowers` 引导内容与 Claude Code、Codex、Cursor、Gemini、Pi 等一样，通过原生 `SessionStart` 钩子注入——无需每个会话单独启用。

- 从本地检出版本安装：

  ```bash
  muse plugins install ./
  muse plugins approve superpowers
  ```

  或者克隆后安装：

  ```bash
  git clone https://github.com/obra/superpowers.git
  muse plugins install ./superpowers
  muse plugins approve superpowers
  ```

- 之后更新：

  ```bash
  muse plugins update superpowers
  ```

安装后请重启所有正在运行的 Muse 会话，以使 `SessionStart` 钩子生效——技能立即生效，而钩子在首次安装后需要批准。要验证安装，可开启一个新会话并发送 `Let's make a react todo list`——安装正常的话，`brainstorming` 会在编写任何代码之前自动触发。版本信息记录在 `.version-bump.json` 中，`scripts/bump-version.sh` 会保持其同步。

## 基本工作流

1. **brainstorming** - 在构建任何东西之前激活。通过提问引导你说出你真正想要什么以及为什么，然后复述它的理解以供你纠正。小改动在聊天中达成一致；项目则会形成一份书面设计文档，让实施者可以据此制定计划。

2. **using-git-worktrees** - 在设计获得批准后激活。在新分支上创建隔离的工作区，执行项目初始化设置，并验证测试基线是干净的。

3. **writing-plans** - 在设计获批后激活。将工作拆分成小粒度任务（每个 2-5 分钟）。每个任务都有精确的文件路径、完整的代码和验证步骤。

4. **subagent-driven-development** 或 **executing-plans** - 在计划就绪后激活。要么为每个任务派发一个全新的子智能体并在每个任务之后进行评审（最彻底），要么在当前会话中逐个内联实现任务，最后对整个分支做一次全新评审（最省成本）。

5. **test-driven-development** - 在实现过程中激活。强制执行 RED-GREEN-REFACTOR（红-绿-重构）：先写失败的测试，看着它失败，写最少量的代码，看着它通过，然后提交。会删除在测试之前编写的代码。

6. **requesting-code-review** - 在任务之间激活。对照计划进行评审，按严重程度报告问题。严重问题会阻塞后续进展。

7. **finishing-a-development-branch** - 在所有任务完成后激活。验证测试，提供选项（合并/PR/保留/丢弃），并清理 worktree。

**智能体会在执行任何任务之前检查相关技能。**这是强制性的工作流，而不是建议。

## 出问题时怎么办

有时会话会表现异常：技能在不该触发时触发，在该触发时却保持沉默，或者智能体无视计划、重复工作、消耗的 token 超出预期。让编码智能体执行"figure out what went wrong with superpowers in this session"，它就会调用 **diagnosing-superpowers** 技能。要检查更早的会话，请指明会话："figure out what went wrong with superpowers in session `<id>`"。

该技能会读取会话记录，以行级证据报告发生了什么，并且如果你愿意，还可以打包一份经过脱敏处理的资料用于提交 bug 报告。

## 社区

Superpowers 由 [Jesse Vincent](https://blog.fsck.com) 以及 [Prime Radiant](https://primeradiant.com) 的其他成员共同打造。

- **Discord**：[加入我们](https://discord.gg/35wsABTejz)，获取社区支持、提出问题，并分享你正在用 Superpowers 构建的东西
- **Issues**：https://github.com/obra/superpowers/issues
- **版本发布公告**：[注册订阅](https://primeradiant.com/superpowers/)以获取新版本通知

## 包含内容

### 技能库

**测试**
- **test-driven-development** - RED-GREEN-REFACTOR 循环（包含测试反模式参考资料）

**调试**
- **systematic-debugging** - 4 阶段根因分析流程（包含 root-cause-tracing、defense-in-depth、condition-based-waiting 等技术）
- **verification-before-completion** - 确保问题真正得到修复
- **diagnosing-superpowers** - 依据证据查明会话中出了什么问题；导出脱敏资料包或提交 issue

**协作**
- **brainstorming** - 在构建之前挖掘意图
- **writing-plans** - 详细的实现计划
- **executing-plans** - 内联执行计划：单一上下文，一次最终评审
- **dispatching-parallel-agents** - 并发子智能体工作流
- **requesting-code-review** - 评审前检查清单
- **receiving-code-review** - 回应评审反馈
- **using-git-worktrees** - 并行开发分支
- **finishing-a-development-branch** - 合并/PR 决策工作流
- **subagent-driven-development** - 通过两阶段评审（先规范符合性，后代码质量）实现快速迭代

**元技能**
- **writing-skills** - 按照最佳实践创建新技能（包含测试方法论）
- **using-superpowers** - 技能系统入门

## 设计理念

- **测试驱动开发** - 始终先写测试
- **系统化优于随意** - 依靠流程而非猜测
- **降低复杂度** - 把简洁作为首要目标
- **证据优于声明** - 在宣布成功之前先验证

阅读[原始发布公告](https://blog.fsck.com/2025/10/09/superpowers/)。

## 参与贡献

Superpowers 的一般贡献流程如下。请记住：我们通常不接受新技能的贡献，且任何对技能的更新都必须在我们支持的所有编码智能体上都能正常工作。

1. Fork 本仓库
2. 切换到 'dev' 分支
3. 为你的工作创建一个分支
4. 按照 `writing-skills` 技能来创建和测试新增及修改的技能
5. 提交 PR，务必填写 pull request 模板。

技能行为测试使用来自 [superpowers-evals](https://github.com/prime-radiant-inc/superpowers-evals/) 的 drill 评估框架，需克隆到 `evals/` 目录——设置方法见 `evals/README.md`。插件基础设施测试位于 `tests/`，通过相应的 `run-*.sh` 或 `npm test` 运行。

完整指南见 `skills/writing-skills/SKILL.md`。

## 更新

Superpowers 的更新在一定程度上取决于所用的编码智能体，但通常是自动完成的。

## 许可证

MIT 许可证 - 详情见 LICENSE 文件

## 可视化伴侣遥测

由于技能和插件不会向创作者提供任何反馈，我们无从得知有多少人在使用 Superpowers。默认情况下，brainstorming 可选的可视化伴侣功能中的 Prime Radiant 标志会从我们的网站加载，其中包含所使用的 Superpowers 版本号，但不包含关于你的项目、提示词或编码智能体的任何细节。我们看不到你的点击，也看不到你在构建什么。这能帮助我们大致了解有多少人在使用 Superpowers 以及他们使用的版本。该功能 100% 可选。要禁用它，请将环境变量 `SUPERPOWERS_DISABLE_TELEMETRY` 设置为任意真值。Superpowers 同时也遵循 Claude Code 的 `DISABLE_TELEMETRY` 和 `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 退出选项。
