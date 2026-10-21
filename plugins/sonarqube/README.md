# SonarQube 智能体集成

**由 [Sonar](https://www.sonarsource.com/) 出品**

SonarQube 是被数百万开发者用于捕获 bug、漏洞和泄露密钥的 AI 代码质量与安全验证平台。本插件把这些标准落实到智能体编码回路中：覆盖 40 多种语言的 7,500 多种独立问题类型、密钥扫描、智能体式分析，以及质量门禁。

SonarQube 将确定性检查与 AI 辅助工作流相结合，使质量规则对来自开发者和智能体双方的代码一致生效。在你的技术栈支持的情况下，分析与密钥扫描可以在智能体回路内运行，而不只在 CI 中运行。

## 插件包含哪些内容

本插件帮助智能体连接 [SonarQube CLI](https://cli.sonarqube.com/) 和 [SonarQube MCP 服务器](https://docs.sonarsource.com/sonarqube-mcp-server)，用于问题检测、检查测试覆盖率和重复度等项目指标、获取依赖风险等。Claude Code、Copilot CLI、Codex 和 Antigravity（通过 SonarQube CLI）会安装用于密钥扫描的智能体钩子，以及（在有权使用时）Vortex 分析钩子。

使用方法：安装后运行 `/sonarqube:sonar-integrate`，它会引导你完成设置——CLI 安装、身份验证，以及接通 MCP 服务器和钩子。之后，既可以用 `/sonarqube:sonar-quality-gate` 这类斜杠命令检查质量门禁，也可以自然地用提示语交互，例如“分析我的代码有哪些问题”“显示未解决的 SonarQube 发现”“检查我的覆盖率”。启用 Vortex 分析后，每次编辑之后都会自动验证，无需手动调用。

## 前提条件

- 一个 SonarQube 账号（**SonarQube Cloud**、**Server** 或 **Community Build**）。某些功能（例如 Vortex 分析）取决于你的 SonarQube Cloud 组织设置。
- 机器上安装了 **[SonarQube CLI](https://cli.sonarqube.com/)**（`sonar`）。
- 一个用于 MCP 服务器镜像的**容器运行时**（Docker、Podman 或 Nerdctl）。

使用 **`sonar auth login`** 完成一次身份验证（浏览器流程；凭据保存在你的操作系统钥匙串中）。MCP 服务器会使用该登录。

随时检查认证状态：

```bash
sonar auth status
```

---

## 插件如何连接 SonarQube

**SonarQube CLI** 可以为你接好一切：

```bash
sonar integrate claude        # Claude Code：MCP、钩子、密钥扫描等
sonar integrate copilot       # GitHub Copilot CLI：MCP、钩子、密钥扫描等
sonar integrate codex         # Codex：MCP、钩子、密钥扫描、Vortex 分析钩子
sonar integrate antigravity   # Antigravity：钩子、指令、CAG、MCP 补丁（插件安装后）
sonar integrate cursor        # Cursor：MCP、密钥扫描钩子、Vortex 分析指令
```

请在 `sonar auth login` **之后**运行这些命令。如果你更喜欢引导式流程（安装/更新 CLI、登录，然后集成），可以使用 **`/sonarqube:sonar-integrate`** 技能。

## Claude Code

从 Anthropic 的插件市场 **`claude-plugins-official`** 安装：

```shell
/plugin install sonarqube@claude-plugins-official
```

```shell
claude plugin install sonarqube@claude-plugins-official
```

### 一次性设置

- **Node.js** —— SessionStart 钩子（`scripts/setup.js`）需要它。
- 如有需要，先安装 **SonarQube CLI**，然后运行 **`/sonarqube:sonar-integrate`**，或 **`sonar auth login`** + **`sonar integrate claude`**。

不同场景下的 `sonar auth login`：

| 场景                  | 命令                                                    |
|-----------------------|---------------------------------------------------------|
| SonarQube Cloud（EU） | `sonar auth login -o <org-key>`                         |
| SonarQube Cloud（US） | `sonar auth login -o <org-key> -s https://sonarqube.us` |
| SonarQube Server      | `sonar auth login -s <server-url>`                      |

可选：在项目根目录添加 **`sonar-project.properties`**，填入 `sonar.projectKey`、源码目录等。

---

## GitHub Copilot CLI

插件包：**`.github/plugin/`**。

1. 从预打包的 `awesome-copilot` 插件目录安装 **sonarqube**：

   ```shell
   /plugin install sonarqube@awesome-copilot
   ```

2. 运行 **`sonar integrate copilot`**，或调用 `/sonarqube:sonar-integrate` 技能。

MCP 连接后，工作流与 **[用法](#用法)** 相同。

---

## Cursor

**`.cursor-plugin/`**，通过 **`mcp.json`** 提供 MCP。

1. 通过 [Cursor 插件市场](https://cursor.com/marketplace/sonarsource)安装 **SonarQube** 插件：

```
/add-plugin sonarqube
```

2. 运行 **`sonar integrate cursor`**，或调用 `/sonarqube:sonar-integrate` 技能。

---

## Antigravity

仓库根目录的插件文件：**`plugin.json`**、**`mcp_config.json`**、**`rules/sonarqube.md`**，以及共享的 **`skills/`**。钩子和托管指令**不在**插件包内——它们由 **`sonar integrate antigravity`** 安装。

### 推荐流程（完整集成）

```bash
# 1. 插件包——技能、规则、MCP
agy plugin install https://github.com/SonarSource/sonarqube-agent-plugins

# 2. 认证 + 钩子 / 指令 / CAG / MCP 补丁
sonar auth login
sonar integrate antigravity
```

或者在 Antigravity 中使用 **`/sonarqube:sonar-integrate`** 获得引导式流程。如果 MCP 工具没有出现，请重启智能体会话。

### 安装方式

| 方式              | 命令 / 路径                                    | 你会得到                                                        |
|-------------------|------------------------------------------------|-----------------------------------------------------------------|
| **CLI 全局**      | `agy plugin install <git-url\|path\|archive>`  | 插件被复制到 `~/.gemini/config/plugins/sonarqube/`              |
| **IDE 工作区**    | `<project>/.agents/plugins/sonarqube/`         | 仅对该工作区生效的插件                                          |
| **Monorepo 开发** | 将 `sonarqube-agent-plugins` 作为工作区打开    | 从仓库根目录自动发现——无需 `agy plugin install`                 |

安装**整个仓库**也没问题——其他智能体的点前缀文件夹在 Antigravity 中不起作用。

### 从 Gemini CLI 迁移

Gemini CLI 正在被 Antigravity 取代。请先迁移平台配置（布局、技能路径和清理），再按下文更新 SonarQube。

如果你此前安装过 **SonarQube Gemini 扩展**：

```bash
agy plugin import gemini          # 把旧版扩展转换为原生插件
sonar integrate antigravity       # 添加钩子、指令、CAG（相对 Gemini 新增的部分）
```

`agy plugin import gemini` 会扫描旧版 Gemini 目录，并把内联的 `mcpServers` 迁移到 `mcp_config.json`。对 SonarQube，你会看到类似 `✔ mcpServers : 1 server definition migrated to mcp_config.json` 的输出。

如果你的自定义技能位于 `.gemini/skills/` 下，请把它们移动到 `.agents/skills/`。

确认 Antigravity 工作正常后，如果导入产生了副本，请删除重复的旧版 Gemini 扩展安装。

全新安装请使用上文的[推荐流程](#推荐流程完整集成)。

MCP 连接后，工作流与 **[用法](#用法)** 相同。

---

## Factory Droid

**`.factory-plugin/`**，通过 **`mcp.json`** 提供 MCP，评审器位于 **`droids/`**。没有钩子：Droid 不提供密钥扫描和 Vortex 分析钩子。

1. 从 SonarSource 插件市场安装插件：

```shell
droid plugin marketplace add SonarSource/sonarqube-agent-plugins
droid plugin install sonarqube@sonarqube-agent-plugins
```

   Droid 以仓库名而非 `marketplace.json` 中的 `name` 来命名市场，因此插件名为 `sonarqube@sonarqube-agent-plugins`。

2. 运行 **`sonar auth login`**，或调用 `/sonarqube:sonar-integrate` 技能。

<!-- 维护者：droids/sonarqube-reviewer.md 是 agents/sonarqube-reviewer.agent.md 的 Droid 版本。由于有了自己的清单，Droid 不再导入 agents/，因此该 droid 保留 Factory frontmatter（Factory 工具 ID、mcpServers）和相同的正文。它的 Execute 不受限制，因为 Factory 无法按 droid 限定命令范围；否则评审器将无法运行 git diff 或 sonar。它没有编辑工具。请保持两者正文一致，并在每次发布时让 .factory-plugin/ 随其他清单一起更新。 -->

---

## Codex CLI

插件包：**`.codex-plugin/`** —— 目录 **`sonar`**，插件 **`sonarqube`**（见 **[`.codex-plugin/plugin.json`](.codex-plugin/plugin.json)**）。

1. 在 Codex CLI 中将 **SonarSource/sonarqube-agent-plugins** 添加为插件市场：

   ```shell
   codex plugin marketplace add SonarSource/sonarqube-agent-plugins
   ```
2. 从该目录安装 **sonarqube** 插件：

   ```shell
   codex plugin add sonarqube@sonar
   ```

3. 运行 **`sonar auth login`**。

4. 运行 **`sonar integrate codex`**。它会在 **`~/.codex/config.toml`** 中接好 MCP 和密钥钩子；如果你的 SonarQube Cloud 组织拥有 Vortex 分析，还会在 **`apply_patch`** 上安装一个 **PostToolUse** 钩子，在每次编辑之后对 git 变更集运行分析，对本机上的所有 Codex 会话生效。

MCP 连接后，工作流与 **[用法](#用法)** 相同。

---

## Kiro

插件包含 **MCP 配置**（**`kiro-power/mcp.json`**），它会运行 **`mcp/sonarqube`** 镜像，并**依赖 SonarQube CLI** 完成认证——也就是同一个 **`sonar auth login`** 会话。

先 **`sonar auth login`**，然后按照 Kiro 的文档启用该 power。

---

## Gemini CLI *（旧版）*

包含 **`gemini-extension.json`** 和 **`GEMINI.md`**。运行 **`sonar auth login`**，用法见 **[用法](#用法)**。

按照上文所述，使用 **`agy plugin import gemini`** 和 **`sonar integrate antigravity`** 迁移到 **[Antigravity](#antigravity)**。

---
## 用法

各智能体的技能是相同的。你可以用自然语言提问、显式调用技能，或使用 MCP 启动后你的客户端展示的 **SonarQube MCP** 工具。

在 **Claude Code**、**GitHub Copilot CLI** 和 **Cursor** 上，插件还附带一个 **`sonarqube-reviewer`** 智能体（`agents/sonarqube-reviewer.agent.md`），它把下面的技能组合成一次完整的 PR/diff 评审——质量门禁、问题、依赖风险、重复度和覆盖率——本身不修改代码。

MCP 参考：[SonarQube MCP 服务器文档](https://docs.sonarsource.com/sonarqube-mcp-server/)。

### 技能

#### 设置

```
/sonarqube:sonar-integrate
```

#### 列出项目

```
/sonarqube:sonar-list-projects
/sonarqube:sonar-list-projects my-project
```

#### 列出问题

```
/sonarqube:sonar-list-issues
/sonarqube:sonar-list-issues my-project --severities CRITICAL
```

#### 修复问题

```
/sonarqube:sonar-fix-issue java:S1481 src/main/java/MyClass.java
/sonarqube:sonar-fix-issue python:S2077 src/auth/login.py:34
```

#### 质量门禁 / 分析 / 覆盖率 / 重复度 / 依赖风险

```
/sonarqube:sonar-quality-gate
/sonarqube:sonar-quality-gate my-project --branch main

/sonarqube:sonar-analyze
/sonarqube:sonar-analyze src/auth/login.py

/sonarqube:sonar-coverage
/sonarqube:sonar-coverage my-project --max 50
/sonarqube:sonar-coverage my-project --file src/auth/login.py

/sonarqube:sonar-duplication
/sonarqube:sonar-duplication my-project --pr 42

/sonarqube:sonar-dependency-risks
/sonarqube:sonar-dependency-risks my-project --pr 42

/sonarqube:sonar-triage-dependency-risks
/sonarqube:sonar-triage-dependency-risks my-project --branch main --fix
```

---

## 许可证

版权所有 (C) 2025-2026 SonarSource Sàrl。以 [SSAL-1.0](LICENSE) 许可证授权。

## 支持

- 社区：https://community.sonarsource.com/
