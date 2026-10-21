# Context7

[Context7](https://context7.com) 解决 AI 编码助手的一个常见问题：训练数据过时和 API 幻觉。Context7 不依赖陈旧的知识，而是直接从源码仓库获取最新的文档与代码示例。

本插件将 Claude Code 连接到 Context7 托管的远程 MCP 服务器（`https://mcp.context7.com/mcp`）——无需本地 Node.js、npm 或 npx。

## 可用工具

- **`resolve-library-id`** — 搜索各类库，返回与 Context7 兼容的标识符（如 `/vercel/next.js`）以及可用版本。
- **`query-docs`** — 获取特定库的文档，并按与你问题的相关度排序。

## API 密钥（可选）

不提供 API 密钥时，插件会以匿名方式连接，并与其他匿名用户共享限流额度。若要使用你自己的套餐，请在 [Context7 控制台](https://context7.com/dashboard)创建 API 密钥，并在启动 Claude Code 之前将其导出为环境变量：

```bash
# 例如放在 ~/.zshrc 或 ~/.bashrc 中
export CONTEXT7_API_KEY="your-api-key"
```

插件的 MCP 服务器配置会自动读取 `CONTEXT7_API_KEY`。设置后请重启 Claude Code，然后可在[控制台](https://context7.com/dashboard)查看用量。

## 用法

当你询问与库相关的问题时，插件会自动工作：

- "如何在 Next.js 15 中设置身份验证？"
- "给我看一些 React Server Components 的示例"
- "Prisma 中定义关联关系的语法是什么？"

要获取特定版本的文档，请在库 ID 中带上版本号（如 `/vercel/next.js/v15.1.8`）。`resolve-library-id` 工具会返回可用版本列表，你可以选择与项目匹配的那个。

---

由 [Upstash](https://upstash.com) 维护。源码与完整插件（含技能、智能体与命令）：[upstash/context7](https://github.com/upstash/context7)。
