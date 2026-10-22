# Design 插件

一款设计生产力插件，主要为 [Cowork](https://claude.com/product/cowork)——Anthropic 的智能体桌面应用——而设计，不过它同样可以在 Claude Code 中使用。帮助你完成设计评审、设计系统管理、UX 文案撰写、无障碍检查、用户研究综合与开发者交接。适用于任何设计团队——仅凭你的输入即可独立工作；连接 Ardot 和其他工具后则如虎添翼。

## 安装

```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install design@knowledge-work-plugins
```

## 命令

通过斜杠命令调用的显式工作流：

| 命令 | 说明 |
|---|---|
| `/critique` | 获取结构化的设计反馈——可用性、视觉层次、无障碍性与一致性 |
| `/design-system` | 审计、记录或扩展你的设计系统——组件、Token、模式 |
| `/handoff` | 生成开发者交接规格——尺寸、Token、状态、交互与边界情况 |
| `/ux-copy` | 撰写或评审 UX 文案——微文案、错误提示、空状态、新手引导流程 |
| `/accessibility` | 执行无障碍审计——WCAG 合规性、色彩对比度、屏幕阅读器与键盘导航 |
| `/research-synthesis` | 综合用户研究——将访谈、问卷、可用性测试转化为可落地的洞察 |

所有命令都可以**独立运行**（描述你的设计或粘贴截图），接入 MCP 连接器后体验更**强大**。

## 技能

Claude 在相关场景下会自动使用的领域知识：

| 技能 | 说明 |
|---|---|
| `design-critique` | 从可用性、视觉层次、一致性及设计原则遵循程度评估设计 |
| `design-system-management` | 管理设计 Token、组件库和模式文档 |
| `ux-writing` | 撰写高效的微文案——清晰、简洁、一致且契合品牌调性 |
| `accessibility-review` | 审计设计与代码的 WCAG 2.1 AA 合规性 |
| `user-research` | 规划、开展并综合用户研究——访谈、问卷、可用性测试 |
| `design-handoff` | 基于设计稿创建完整的开发者交接文档 |

## 示例工作流

### 获取设计反馈

```
/critique
```

分享 Ardot 链接、截图或描述你的设计，获得关于可用性、视觉层次、一致性和无障碍性的结构化反馈。

### 审计你的设计系统

```
/design-system audit
```

我会从一致性、完整性和命名规范等方面审查你的组件库，并给出包含具体改进建议的报告。

### 撰写 UX 文案

```
/ux-copy error messages for payment flow
```

获得契合上下文的文案，附有语气指导、备选方案和本地化注意事项。

### 开发者交接

```
/handoff
```

分享一个 Ardot 链接，即可获得完整规格：尺寸、设计 Token、组件状态、交互说明和边界情况。

### 无障碍检查

```
/accessibility
```

分享设计稿或 URL，获得包含具体问题、严重程度和整改步骤的 WCAG 2.1 AA 合规报告。

### 综合用户研究

```
/research-synthesis
```

上传访谈记录、问卷结果或可用性测试笔记，获得主题、洞察以及按优先级排序的建议。

## 独立运行 + 增强模式

每个命令和技能都无需任何集成即可使用：

| 你能做什么 | 独立运行 | 增强方式 |
|-----------------|------------|-------------------|
| 设计评审 | 描述或截图 | Ardot MCP（直接拉取设计稿） |
| 设计系统 | 描述你的系统 | Ardot MCP（审计组件库） |
| 交接规格 | 描述或截图 | Ardot MCP（精确尺寸、Token） |
| UX 文案 | 描述上下文 | 知识库（品牌语言指南） |
| 无障碍 | 描述或截图 | Ardot MCP，以及提供真实使用数据的分析工具 |
| 研究综合 | 粘贴访谈记录 | 用户反馈工具（拉取原始数据） |

## MCP 集成

> 如果遇到不认识的占位符，或需要查看已连接哪些工具，请参阅 [CONNECTORS.md](CONNECTORS.md)。

连接你的工具以获得更丰富的体验：

| 类别 | 示例 | 实现的能力 |
|---|---|---|
| **设计工具** | Ardot | 拉取设计稿、检查组件、访问设计 Token |
| **项目跟踪** | Linear | 将设计关联到工单、跟踪实现进度 |

完整的支持集成列表请参阅 [CONNECTORS.md](CONNECTORS.md)。
