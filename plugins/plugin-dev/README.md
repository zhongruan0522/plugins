# 插件开发工具包

一个用于开发 Claude Code 插件的全面工具包，在钩子、MCP 集成、插件结构和插件市场发布方面提供专家级指导。

## 概述

plugin-dev 工具包提供七个专项技能，帮助你构建高质量的 Claude Code 插件：

1. **hook-development** - 高级钩子 API 与事件驱动自动化
2. **mcp-integration** - Model Context Protocol 服务器集成
3. **plugin-structure** - 插件组织与清单配置
4. **plugin-settings** - 使用 .claude/plugin-name.local.md 文件的配置模式
5. **command-development** - 创建带 frontmatter 和参数的斜杠命令
6. **agent-development** - 借助 AI 辅助生成创建自主智能体
7. **skill-development** - 创建具备渐进式披露和强触发的技能

每个技能都遵循渐进式披露的最佳实践：精简的核心文档、详细的参考资料、可运行的示例和实用脚本。

## 引导式工作流命令

### /plugin-dev:create-plugin

一个从零开始创建插件的端到端综合工作流命令，类似于 feature-dev 工作流。

**8 阶段流程：**
1. **发现** - 理解插件的用途和需求
2. **组件规划** - 确定所需的技能、命令、智能体、钩子和 MCP
3. **详细设计** - 明确每个组件并消除歧义
4. **结构创建** - 建立目录和清单
5. **组件实现** - 使用 AI 辅助智能体创建每个组件
6. **验证** - 运行 plugin-validator 和组件专属检查
7. **测试** - 验证插件在 Claude Code 中正常工作
8. **文档** - 定稿 README 并准备分发

**特性：**
- 在每个阶段提出澄清性问题
- 自动加载相关技能
- 使用 agent-creator 进行 AI 辅助智能体生成
- 运行验证工具（validate-agent.sh、validate-hook-schema.sh 等）
- 遵循 plugin-dev 自身经过验证的模式
- 引导完成测试和验证

**用法：**
```bash
/plugin-dev:create-plugin [可选描述]

# 示例：
/plugin-dev:create-plugin
/plugin-dev:create-plugin 一个管理数据库迁移的插件
```

使用该工作流，实现从概念到落地的结构化、高质量插件开发。

## 技能

### 1. hook-development

**触发短语：**"create a hook"、"add a PreToolUse hook"、"validate tool use"、"implement prompt-based hooks"、"${CLAUDE_PLUGIN_ROOT}"、"block dangerous commands"

**涵盖内容：**
- 基于 LLM 决策的提示词型钩子（推荐）
- 用于确定性校验的命令钩子
- 所有钩子事件：PreToolUse、PostToolUse、Stop、SubagentStop、SessionStart、SessionEnd、UserPromptSubmit、PreCompact、Notification
- 钩子输出格式和 JSON schema
- 安全最佳实践和输入校验
- 使用 ${CLAUDE_PLUGIN_ROOT} 实现可移植路径

**资源：**
- 核心 SKILL.md（1,619 词）
- 3 个示例钩子脚本（validate-write、validate-bash、load-context）
- 3 份参考文档：patterns、migration、advanced techniques
- 3 个实用脚本：validate-hook-schema.sh、test-hook.sh、hook-linter.sh

**适用场景：** 在插件中创建事件驱动自动化、校验操作或强制执行策略时。

### 2. mcp-integration

**触发短语：**"add MCP server"、"integrate MCP"、"configure .mcp.json"、"Model Context Protocol"、"stdio/SSE/HTTP server"、"connect external service"

**涵盖内容：**
- MCP 服务器配置（.mcp.json 与 plugin.json）
- 所有服务器类型：stdio（本地）、SSE（托管/OAuth）、HTTP（REST）、WebSocket（实时）
- 环境变量展开（${CLAUDE_PLUGIN_ROOT}、用户变量）
- 在命令/智能体中使用 MCP 工具及命名
- 认证模式：OAuth、令牌、环境变量
- 集成模式与性能优化

**资源：**
- 核心 SKILL.md（1,666 词）
- 3 个示例配置（stdio、SSE、HTTP）
- 3 份参考文档：server-types（约 3,200 词）、authentication（约 2,800 词）、tool-usage（约 2,600 词）

**适用场景：** 在插件中集成外部服务、API、数据库或工具时。

### 3. plugin-structure

**触发短语：**"plugin structure"、"plugin.json manifest"、"auto-discovery"、"component organization"、"plugin directory layout"

**涵盖内容：**
- 标准插件目录结构与自动发现
- plugin.json 清单格式及所有字段
- 组件组织（命令、智能体、技能、钩子）
- ${CLAUDE_PLUGIN_ROOT} 的全面使用
- 文件命名规范与最佳实践
- 最小、标准、高级三种插件模式

**资源：**
- 核心 SKILL.md（1,619 词）
- 3 个示例结构（minimal、standard、advanced）
- 2 份参考文档：component-patterns、manifest-reference

**适用场景：** 开始一个新插件、组织组件或配置插件清单时。

### 4. plugin-settings

**触发短语：**"plugin settings"、"store plugin configuration"、".local.md files"、"plugin state files"、"read YAML frontmatter"、"per-project plugin settings"

**涵盖内容：**
- 用于配置的 .claude/plugin-name.local.md 模式
- YAML frontmatter + markdown 正文结构
- bash 脚本的解析技术（sed、awk、grep 模式）
- 临时激活的钩子（标志文件与快速退出）
- 来自 multi-agent-swarm 和 ralph-loop 插件的真实示例
- 原子文件更新与校验
- gitignore 与生命周期管理

**资源：**
- 核心 SKILL.md（1,623 词）
- 3 个示例（read-settings 钩子、create-settings 命令、模板）
- 2 份参考文档：parsing-techniques、real-world-examples
- 2 个实用脚本：validate-settings.sh、parse-frontmatter.sh

**适用场景：** 让插件可配置、存储项目级状态或实现用户偏好设置时。

### 5. command-development

**触发短语：**"create a slash command"、"add a command"、"command frontmatter"、"define command arguments"、"organize commands"

**涵盖内容：**
- 斜杠命令结构与 markdown 格式
- YAML frontmatter 字段（description、argument-hint、allowed-tools）
- 动态参数与文件引用
- 通过 bash 执行获取上下文
- 命令组织与命名空间
- 命令开发最佳实践

**资源：**
- 核心 SKILL.md（1,535 词）
- 示例与参考文档
- 命令组织模式

**适用场景：** 创建斜杠命令、定义命令参数或组织插件命令时。

### 6. agent-development

**触发短语：**"create an agent"、"add an agent"、"write a subagent"、"agent frontmatter"、"when to use description"、"agent examples"、"autonomous agent"

**涵盖内容：**
- 智能体文件结构（YAML frontmatter + 系统提示词）
- 所有 frontmatter 字段（name、description、model、color、tools）
- 使用 <example> 块的描述格式，确保可靠触发
- 系统提示词设计模式（分析、生成、校验、编排）
- 使用 Claude Code 经过验证的提示词进行 AI 辅助智能体生成
- 校验规则与最佳实践
- 完整可用于生产的智能体示例

**资源：**
- 核心 SKILL.md（1,438 词）
- 2 个示例：agent-creation-prompt（AI 辅助工作流）、complete-agent-examples（4 个完整智能体）
- 3 份参考文档：agent-creation-system-prompt（来自 Claude Code）、system-prompt-design（约 4,000 词）、triggering-examples（约 2,500 词）
- 1 个实用脚本：validate-agent.sh

**适用场景：** 创建自主智能体、定义智能体行为或实现 AI 辅助智能体生成时。

### 7. skill-development

**触发短语：**"create a skill"、"add a skill to plugin"、"write a new skill"、"improve skill description"、"organize skill content"

**涵盖内容：**
- 技能结构（带 YAML frontmatter 的 SKILL.md）
- 渐进式披露原则（元数据 → SKILL.md → 资源）
- 使用特定短语的强触发描述
- 写作风格（祈使/不定式形式，第三人称）
- 附带资源的组织方式（references/、examples/、scripts/）
- 技能创建工作流
- 基于 skill-creator 方法论，并针对 Claude Code 插件做了适配

**资源：**
- 核心 SKILL.md（1,232 词）
- 参考资料：skill-creator 方法论、plugin-dev 模式
- 示例：将 plugin-dev 自身的技能作为模板来研究

**适用场景：** 为插件创建新技能或提升现有技能质量时。


## 安装

从 claude-code-marketplace 安装：

```bash
/plugin install plugin-dev@claude-code-marketplace
```

开发时也可直接使用：

```bash
cc --plugin-dir /path/to/plugin-dev
```

## 快速开始

### 创建你的第一个插件

1. **规划插件结构：**
   - 询问："带命令和 MCP 集成的插件，最佳目录结构是什么？"
   - plugin-structure 技能会为你提供指导

2. **添加 MCP 集成（如需要）：**
   - 询问："如何添加一个用于数据库访问的 MCP 服务器？"
   - mcp-integration 技能提供示例和模式

3. **实现钩子（如需要）：**
   - 询问："创建一个校验文件写入的 PreToolUse 钩子"
   - hook-development 技能提供可运行的示例和实用工具


## 开发工作流

plugin-dev 工具包覆盖插件开发的完整生命周期：

```
┌─────────────────────┐
│  设计结构            │  → plugin-structure 技能
│  （清单、布局）      │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  添加组件            │
│  （命令、智能体、    │  → 所有技能均提供指导
│   技能、钩子）       │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  集成服务            │  → mcp-integration 技能
│  （MCP 服务器）      │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  添加自动化          │  → hook-development 技能
│  （钩子、校验）      │     + 实用脚本
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  测试与验证          │  → hook-development 实用工具
│                     │     validate-hook-schema.sh
└──────────┬──────────┘     test-hook.sh
           │                 hook-linter.sh
```

## 特性

### 渐进式披露

每个技能都采用三级披露体系：
1. **元数据**（始终加载）：带强触发的简洁描述
2. **核心 SKILL.md**（触发时加载）：核心 API 参考（约 1,500-2,000 词）
3. **参考/示例**（按需加载）：详细指南、模式和可运行代码

这样既能保持 Claude Code 上下文的聚焦，又能在需要时提供深入的知识。

### 实用脚本

hook-development 技能包含可用于生产环境的实用工具：

```bash
# 校验 hooks.json 结构
./validate-hook-schema.sh hooks/hooks.json

# 部署前测试钩子
./test-hook.sh my-hook.sh test-input.json

# 对钩子脚本进行最佳实践检查
./hook-linter.sh my-hook.sh
```

### 可运行的示例

每个技能都提供可运行的示例：
- **hook-development**：3 个完整的钩子脚本（bash、写入校验、上下文加载）
- **mcp-integration**：3 种服务器配置（stdio、SSE、HTTP）
- **plugin-structure**：3 种插件布局（minimal、standard、advanced）
- **plugin-settings**：3 个示例（read-settings 钩子、create-settings 命令、模板）
- **command-development**：10 个完整的命令示例（review、test、deploy、docs 等）

## 文档标准

所有技能都遵循一致的标准：
- 第三人称描述（"This skill should be used when..."）
- 用于可靠加载的强触发短语
- 全程使用祈使/不定式形式
- 基于官方 Claude Code 文档
- 安全优先的方法与最佳实践

## 内容总量

- **核心技能**：7 个 SKILL.md 文件，共约 11,065 词
- **参考文档**：10,000+ 词的详细指南
- **示例**：12 个以上可运行示例（钩子脚本、MCP 配置、插件布局、设置文件）
- **实用工具**：6 个可用于生产的校验/测试/解析脚本

## 使用场景

### 构建数据库插件

```
1. "带 MCP 集成的插件应该采用什么结构？"
   → plugin-structure 技能提供布局

2. "如何为 PostgreSQL 配置 stdio MCP 服务器？"
   → mcp-integration 技能展示配置方法

3. "添加一个 Stop 钩子以确保连接正确关闭"
   → hook-development 技能提供模式

```

### 创建校验类插件

```
1. "创建钩子，对所有文件写入进行安全校验"
   → hook-development 技能及示例

2. "在部署前测试我的钩子"
   → 使用 validate-hook-schema.sh 和 test-hook.sh

3. "整理我的钩子和配置文件"
   → plugin-structure 技能展示最佳实践

```

### 集成外部服务

```
1. "添加带 OAuth 的 Asana MCP 服务器"
   → mcp-integration 技能涵盖 SSE 服务器

2. "在我的命令中使用 Asana 工具"
   → mcp-integration 的 tool-usage 参考

3. "用命令和 MCP 组织我的插件"
   → plugin-structure 技能提供模式
```

## 最佳实践

所有技能都强调：

✅ **安全优先**
- 在钩子中进行输入校验
- MCP 服务器使用 HTTPS/WSS
- 凭据使用环境变量
- 最小权限原则

✅ **可移植性**
- 到处使用 ${CLAUDE_PLUGIN_ROOT}
- 仅使用相对路径
- 环境变量替换

✅ **测试**
- 部署前校验配置
- 用示例输入测试钩子
- 使用调试模式（`claude --debug`）

✅ **文档**
- 清晰的 README 文件
- 记录在案的环境变量
- 用法示例

## 参与贡献

本插件是 claude-code-marketplace 的一部分。如需贡献改进：

1. Fork 插件市场仓库
2. 修改 plugin-dev/
3. 使用 `cc --plugin-dir` 在本地测试
4. 按照插件市场发布指南创建 PR

## 版本

0.1.0 - 首个版本，包含七个全面的技能和三个校验智能体

## 作者

Daisy Hollman (daisy@anthropic.com)

## 许可证

MIT 许可证 - 详情见仓库

---

**注意：** 本工具包旨在帮助你构建高质量的插件。当你提出相关问题时，技能会自动加载，在你最需要的时候提供专家级指导。
