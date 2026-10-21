# Conductor - Claude Code 的上下文驱动开发插件

Conductor 通过实现**上下文驱动开发（Context-Driven Development）**，将 Claude Code 转变为一个项目管理工具。它强制执行结构化的工作流：**上下文 → 规格与计划 → 实现**。

## 理念

通过将上下文视为与代码并列的受管制品，团队能为所有 AI 交互建立一个持久的、具备项目感知能力的基础。系统会维护：

- **产品愿景**——作为持续演进的活文档
- **技术决策**——作为结构化的制品
- **工作单元（track）**——附带规格说明与分阶段计划
- **TDD 工作流**——附带验证检查点

## 功能特性

- **规格与规划**：在实现之前生成详细的规格说明和可执行的任务计划
- **上下文管理**：维护风格指南、技术栈偏好和产品目标
- **安全迭代**：在代码生成之前审查计划，让人类始终保持掌控
- **团队协作**：项目级上下文文档成为共享的基础
- **项目智能**：同时支持全新项目（greenfield）和既有项目（brownfield）
- **语义化回退**：按逻辑工作单元（track、阶段、任务）进行 Git 感知的回退
- **状态持久化**：跨多个会话恢复设置进度

## 命令

| 命令                   | 说明                                                                 |
| ---------------------- | -------------------------------------------------------------------- |
| `/conductor:setup`     | 通过产品定义、技术栈、工作流和风格指南初始化项目                     |
| `/conductor:new-track` | 创建包含 spec.md 和 plan.md 的新功能或缺陷修复 track                 |
| `/conductor:implement` | 按照工作流规则执行计划中的任务                                       |
| `/conductor:status`    | 显示项目进度概览                                                     |
| `/conductor:revert`    | 按 track、阶段或任务进行 Git 感知的撤销                              |
| `/conductor:manage`    | 管理 track 生命周期：归档、恢复、删除、重命名和清理                  |

## 生成的工件

```
conductor/
├── index.md              # 导航中心
├── product.md            # 产品愿景与目标
├── product-guidelines.md # 标准与信息传达
├── tech-stack.md         # 技术偏好
├── workflow.md           # 开发实践（TDD、提交）
├── tracks.md             # track 总注册表
├── setup_state.json      # 可恢复的设置状态
├── code_styleguides/     # 语言专属约定
└── tracks/
    ├── _archive/         # 已归档的 track
    └── <track-id>/
        ├── spec.md       # 需求规格说明
        ├── plan.md       # 分阶段任务分解
        ├── metadata.json # track 元数据
        └── index.md      # track 导航
```

## 工作流

### 1. 初始化设置（`/conductor:setup`）

交互式初始化，创建项目基础文档：

- 检测全新项目还是既有项目
- 依次询问产品、技术栈、工作流偏好等问题
- 为所选语言生成风格指南
- 创建 track 注册表

### 2. 创建 Track（`/conductor:new-track`）

启动一个新的功能或缺陷修复：

- 通过交互式问答收集需求
- 生成详细的规格说明（spec.md）
- 创建分阶段的实施计划（plan.md）
- 将 track 登记到 tracks.md

### 3. 实现（`/conductor:implement`）

系统化地执行计划：

- 遵循 TDD 红-绿-重构循环
- 更新任务状态标记
- 包含人工验证检查点
- 完成后同步文档

### 4. 监控（`/conductor:status`）

查看项目进度：

- 当前阶段和任务
- 完成百分比
- 已识别的阻塞项

### 5. 回退（`/conductor:revert`）

按逻辑单元撤销工作：

- 选择要回退的 track、阶段或任务
- Git 感知：查找所有相关提交
- 执行前需要确认

### 6. 管理（`/conductor:manage`）

管理 track 生命周期：

- 归档已完成的 track 并记录原因
- 将已归档的 track 恢复为活跃状态
- 永久删除 track（带有安全防护）
- 重命名 track ID 并更新引用
- 清理孤立工件和过期 track

## 安装

```bash
/plugin install conductor
```

## 致谢

本插件基于 Google 的 [Conductor](https://github.com/gemini-cli-extensions/conductor) 项目，该项目最初为 Gemini CLI 开发。

由 [@wshobson](https://github.com/wshobson) 适配至 Claude Code。

## 许可证

Apache License 2.0 - 许可详情请参阅[原项目](https://github.com/gemini-cli-extensions/conductor)。
