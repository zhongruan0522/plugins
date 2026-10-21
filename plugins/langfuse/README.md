<img width="2400" height="600" alt="hero-b" src="https://github.com/user-attachments/assets/c177a82d-334b-495c-81cb-9df69c521123" />

# Langfuse 技能

一组 [Agent Skills](https://github.com/anthropics/skills)，教会 AI 编码助手（Claude Code、Cursor 等）如何使用 [Langfuse](https://langfuse.com)——用于追踪、提示词管理和评估的开源 LLM 工程平台。

## 技能

| 技能                                                           | 说明                                                                                        |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [langfuse](./skills/langfuse)                                   | 使用 Langfuse 的主技能。通过 Langfuse API 查询和管理追踪、提示词、数据集和评分；查阅文档；以最佳实践完成任务。 |
| [migrate-to-langfuse](./skills/migrate-to-langfuse)             | 从其他 LLM 可观测性/评估平台（LangSmith、Arize、Braintrust 等）迁移到 Langfuse。会先就迁移范围对你进行访谈，然后处理实时追踪切换以及历史追踪、数据集、提示词和评估器的迁移。 |

## 安装

### Cursor 插件

作为 [Cursor 插件](https://cursor.com/docs/plugins)安装：

```
/add-plugin langfuse
```

### skills CLI

通过 [skills CLI](https://github.com/vercel-labs/skills) 安装：

```bash
npx skills add langfuse/skills --skill "langfuse"
```

### 手动符号链接

克隆本仓库，并将技能符号链接到你智能体的技能目录中：

```bash
git clone https://github.com/langfuse/skills.git /path/to/langfuse-skills
ln -s /path/to/langfuse-skills/skills/langfuse /path/to/skills-directory/langfuse
```

## 前提条件

你需要一个 Langfuse 账户（[云端](https://cloud.langfuse.com)或[自托管](https://langfuse.com/docs/deployment/self-host)）以及 API 密钥：

```bash
export LANGFUSE_PUBLIC_KEY=pk-lf-...
export LANGFUSE_SECRET_KEY=sk-lf-...
export LANGFUSE_BASE_URL=https://cloud.langfuse.com  # 或 https://us.cloud.langfuse.com，或自托管 URL
```

API 密钥位于 Langfuse 项目的 **Settings > API Keys** 下。

## 用法

安装后，智能体会在相关场景下自动使用这些技能——例如：

- 在项目中搭建 Langfuse 追踪
- 使用 `langfuse/experiment-action` 搭建 CI/CD 实验门禁
- 审计现有的埋点
- 为 v4 平台迁移准备应用和 Langfuse 项目
- 将提示词迁移到 Langfuse 提示词管理
- 通过 API 查询追踪、提示词或数据集
- 查阅 Langfuse 文档、SDK 用法或集成指南

## 贡献

想改进某个技能或添加新技能？请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 反馈与需求

有什么没按预期工作，或想要新技能？[发起讨论](https://github.com/langfuse/skills/discussions/new?category=ideas-improvements)。
