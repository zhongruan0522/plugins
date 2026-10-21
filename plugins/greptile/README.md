# Greptile

[Greptile](https://greptile.com) 是一个面向 GitHub 和 GitLab 的 AI 代码审查智能体，可自动审查 pull request。该插件为 Claude Code 提供了两种使用它的方式：

- **Greptile MCP 服务器**：用于读取和处理审查结果，以及搜索你组织的知识库和编码模式
- **Greptile CLI**：用于在 pull request 创建之前对你的工作分支发起审查

它们是同一条流水线的两端：CLI 负责发起审查，MCP 服务器负责读取审查结果——既包括 CLI 发起的（`source: "headless"`），也包括 Greptile 在你的 pull request 上运行的（`source: "pr"`）。

## 设置

无需安装任何东西，也无需创建 API 密钥。

**MCP 服务器。** 打开 `/mcp` 菜单并对 **greptile** 进行授权认证。浏览器会打开 [auth.greptile.com](https://auth.greptile.com)；登录并批准访问。Claude Code 会保存并刷新令牌。

**CLI。** 运行一次 `/greptile:login`，通过同一个 OAuth 提供方登录。CLI 随本插件一起提供，因此无需通过 npm 或 Homebrew 安装——但它是一个 Node 程序，所以你的机器上必须装有 Node。

这两个登录是相互独立的：使用同一个 Greptile 账户和同一个 OAuth 提供方，但 CLI 将自己的凭据保存在 `~/.greptile/auth.json`，而 Claude Code 将 MCP 令牌保存在自己的存储中。需要哪个入口就使用哪个；你只需登录那一个即可。

## 命令

- `/greptile:review` - 将当前分支与其基准分支进行对比审查。可接受一个基准分支和自由文本指令（"重点关注 auth 相关的改动"）。
- `/greptile:login` - 让 CLI 登录你的 Greptile 账户。

## 工具

### 账户与仓库
- `get_me` - 显示你已认证的身份及所属组织
- `list_repositories` - 列出你的账户可访问的仓库

### Pull request
- `list_merge_requests` / `list_pull_requests` - 列出 PR，可按仓库、分支、作者或状态筛选
- `get_merge_request` - PR 的详细信息，包括哪些审查意见已被后续提交处理
- `list_merge_request_comments` - PR 上的全部评论，并通过 `sourceType` 区分 Greptile、人工和其他机器人的评论

### 代码审查
- `list_code_reviews` - 列出代码审查，可按仓库或状态筛选
- `get_code_review` - 完整的审查内容、状态、摘要引用和审查元数据
- `trigger_code_review` - 在 pull request 上发起 Greptile 审查（支持 GitHub 和 GitLab）
- `search_greptile_comments` - 跨所有审查搜索 Greptile 的审查意见，pull request 和 headless CLI 运行产生的审查均包含在内

### 知识库
- `list_knowledge_bases` - 你的组织拥有知识库数据的仓库
- `list_knowledge_base_documents` - 仓库已发布知识库中的文档路径
- `get_knowledge_base_document` - 单个知识库文档的 Markdown 正文
- `search_knowledge_base` - 在单个仓库的知识库中进行子串搜索

### 自定义上下文
- `list_custom_context` - 你组织的编码模式与规则
- `get_custom_context` - 单个条目的详情，包括证据和关联评论
- `search_custom_context` - 按内容搜索条目
- `create_custom_context` - 创建新条目，可以是自定义指令（默认）或模式

### 分析
- `get_analytics_overview` - 汇总指标与周期变化、图表数据序列，以及仓库、贡献者和 pull request 排名
- `list_analytics_findings` - 发现问题及其严重程度、安全问题的总计与趋势，可按团队、仓库、作者、严重程度或状态筛选
- `list_analytics_filter_options` - 可用作分析筛选条件的团队、仓库和作者

## 使用示例

- "用 Greptile 审查我当前的分支，并修复它发现的问题"
- "展示 Greptile 在我当前 PR 上的评论，并帮我处理它们"
- "Greptile 在 PR #123 上发现了哪些问题？"
- "在我们的知识库中搜索这个仓库的身份认证是如何实现的"

## 内置 CLI

`scripts/greptile.mjs` 就是 Greptile CLI，取自已发布的 npm 包 `greptile`（即其中的 `dist/greptile.js`，仅仅重命名以便 Node 在没有同目录 `package.json` 的情况下将其识别为 ESM）。`scripts/greptile.version` 记录了它对应的发布版本，CI 会将该文件与该版本的 npm tarball 逐字节比对，因此这里运行的副本与 npm 提供的完全一致。

由于 CLI 随插件一起提供，它会随插件一起更新——而不是通过 `greptile update`、`npm` 或 `brew` 更新。你另行安装的任何 `greptile` 都不会受到这些命令的影响，这些命令也不会使用它，不过两者共用你保存在 `~/.greptile/auth.json` 的登录状态。

## 网络访问

该插件不注册任何钩子。它会访问：

- `api.greptile.com` — MCP 服务器、CLI 的 API，以及 CLI 遥测（见下文）。
- `auth.greptile.com` — OAuth 登录，两个入口都会用到。
- `app.greptile.com` — 审查输出中打印的链接目标。
- `127.0.0.1` — CLI 在 `/greptile:login` 期间打开的本地回环监听，用于接收 OAuth 回调，重定向一到达即关闭。

### 遥测

内置 CLI 会向与其 API 同一主机的 `/v1/telemetry` 上报匿名使用事件。这些事件是生命周期信号——`cli_first_run`、`cli_login_started`、`cli_login_failed`、`cli_onboarding_started`、`cli_skill_installed`、`cli_skill_updated`、`cli_review_blocked`、`cli_update_completed`——携带你的安装方式、操作系统、CPU 架构、本次运行是否为交互式，以及运行在哪个智能体入口之下。此外别无其他：不含代码、不含仓库或分支名称、不含文件路径、不含审查内容。事件特有字段都是固定值：`method`、`exit_code`、`reason`、更新时的版本字符串，以及两个技能事件中 Greptile 编写的技能名称。

在 Claude Code 内部，CLI 始终以非交互方式运行，因此它无法也不会询问你来做出决定。它会退回到**匿名模式**：使用存储在 `telemetry.json` 中的随机 `cli:<uuid>`，不附带账户令牌，对端也不会建立用户画像。如果你在同一台机器上曾通过独立的 `greptile` 单独选择加入，该选择会延续到这里，事件将改在你的账户下发送。

要关闭遥测，以下任意一种方式即可：

```sh
export GREPTILE_TELEMETRY_DISABLED=1   # 或 DO_NOT_TRACK=1
greptile settings set telemetry false
```

`CI=1` 也会禁用它，而指向自托管 Greptile 的 CLI 则完全不发送遥测。

### 下载

本插件中只有一处会下载软件，就是这里。当审查摘要包含 Mermaid 图表时，CLI 会用 `mmdr` 来渲染它——这是一个小型独立二进制文件，首次使用时从 [github.com/1jehuang/mermaid-rs-renderer](https://github.com/1jehuang/mermaid-rs-renderer) 下载到 `~/.cache/greptile/bin/`。压缩包会与内置的按平台固定的 SHA-256 值比对，哈希不匹配时会被删除而不是运行；下载过程会在 stderr 上自行提示，获取失败时图表会降级为链接，而不是让审查失败。设置 `GREPTILE_NO_AUTO_INSTALL=1` 可跳过下载。**`/greptile:review` 已经设置了这个变量**，因此插件不会下载它——只有你在不设置该变量的情况下自行调用内置 CLI 时，才会走到这条代码路径。

## 文档

参见 [greptile.com/docs/mcp-v2/overview](https://www.greptile.com/docs/mcp-v2/overview)。
