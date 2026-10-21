# sourcegraph-claudecode-plugin

适用于 Claude Code 的 Sourcegraph 插件，提供：

- Sourcegraph MCP 服务器连接（代码搜索、导航、Deep Search、Code Finder、evaluator）
- `searching-sourcegraph` 技能，用于规范化的搜索工作流（附带配套工作流与查询模式）

## 前提条件

- [Claude Code](https://code.claude.com) 1.0.33 或更高版本（`claude --version`）
- 一个启用了 MCP 的 Sourcegraph 实例
- 一个具有 `mcp` 作用域的 Sourcegraph 访问令牌

在 shell 配置文件（`.zshrc`、`.bashrc` 等）中设置所需的环境变量：

```bash
export SOURCEGRAPH_ENDPOINT="https://sourcegraph.example.com"
export SOURCEGRAPH_ACCESS_TOKEN="<your-token>"
```

## 安装（永久）

将本仓库添加为插件市场，然后安装插件：

```bash
# 从本地克隆
claude plugin marketplace add ./sourcegraph-claudecode-plugin

# 或直接从 GitHub
claude plugin marketplace add sourcegraph-community/sourcegraph-claudecode-plugin
```

然后安装：

```bash
claude plugin install sourcegraph@sourcegraph-claudecode-plugin
```

安装后请重启 Claude Code。

## 安装（按会话，用于开发）

为单个会话加载插件而不进行永久安装：

```bash
claude --plugin-dir ./sourcegraph-claudecode-plugin
```

在会话期间做出更改后运行 `/reload-plugins`。

## 替代方案：仅添加 MCP 服务器

如果你只想要 Sourcegraph 的 MCP 工具而不需要技能，可以直接添加服务器：

```bash
claude mcp add --transport http sourcegraph \
  "${SOURCEGRAPH_ENDPOINT}/.api/mcp/all" \
  --header "Authorization: token ${SOURCEGRAPH_ACCESS_TOKEN}"
```

## 验证

安装后，确认一切已正确加载：

- `/help` 应列出 `sourcegraph:searching-sourcegraph`
- `/mcp` 应显示 `sourcegraph` MCP 服务器已连接

## 结构

```text
.
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── .mcp.json
├── skills/
│   └── searching-sourcegraph/
│       ├── SKILL.md
│       ├── query-patterns.md
│       ├── examples/
│       │   └── common-searches.md
│       └── workflows/
│           ├── implementing-feature.md
│           ├── understanding-code.md
│           ├── debugging-issue.md
│           ├── fixing-bug.md
│           └── code-review.md
└── README.md
```

## 技能

本插件安装一个技能：`searching-sourcegraph`。当你需要通过 Sourcegraph 搜索或浏览代码时，Claude 会自动调用它。它包含实现功能、理解代码、调试问题、修复缺陷和代码评审等工作流。

## MCP 详情

- 端点：`${SOURCEGRAPH_ENDPOINT}/.api/mcp/all`（完整工具套件：代码搜索、导航、Deep Search、Code Finder、evaluator）
- 传输方式：HTTP（`"type": "http"`）
- 认证头：`Authorization: token <token>`

Sourcegraph 的 MCP 服务器根据你需要的工具数量提供多个端点：

| 端点 | 暴露的工具 |
|----------|----------------|
| `/.api/mcp` | 精选的默认集合：`read_file`、`list_files`、`keyword_search`、`nls_search`、`list_repos`、`commit_search`、`diff_search`、`deepsearch_read` |
| `/.api/mcp/all` | 完整套件——包含上述全部，另有 `go_to_definition`、`find_references`、`compare_revisions`、`get_contributor_repos`、`deepsearch`、`code_finder`、`evaluator` |
| `/.api/mcp/deepsearch` | 仅 Deep Search：`deepsearch`、`deepsearch_read` |
| `/.api/mcp/v1` | **已弃用。**以旧版 `sg_` 前缀工具名提供的完整套件，仅为向后兼容而保留 |

本插件使用 `/.api/mcp/all`，因为 `searching-sourcegraph` 技能及其工作流依赖代码导航和 Deep Search 工具，而这些工具并不在精选的默认集合中。

## 基于以下项目构建

- [sourcegraph-cursor-plugin](https://github.com/sourcegraph-community/sourcegraph-cursor-plugin)
- [sourcegraph-gemini](https://github.com/sourcegraph-community/sourcegraph-gemini)
- [sourcegraph-skill](https://github.com/sourcegraph-community/sourcegraph-skill)

## 文档

- [Claude Code 插件](https://code.claude.com/docs/en/plugins)
- [Sourcegraph MCP](https://sourcegraph.com/docs/api/mcp)
