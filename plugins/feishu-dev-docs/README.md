# 飞书开发文档（Feishu Dev Docs）

将 [飞书开放平台](https://open.feishu.cn/) 官方的"开发文档检索 MCP"接入 Claude Code / Factory Droid。插件通过 `npx` 启动 [`@larksuiteoapi/lark-mcp`](https://www.npmjs.com/package/@larksuiteoapi/lark-mcp) 的 `recall-developer-documents` 模式（本地 stdio MCP，无需任何凭证），根据自然语言问题召回飞书开放平台的开发文档，让 AI 写出准确的 Open API 调用代码，而不是凭过时训练数据瞎编。

## 可用工具

- **`openplatform_developer_document_recall`** — 根据输入的 `query`（自然语言问题），从飞书/Lark 开放平台全部开发文档中召回相关文档，返回文档链接与正文内容。

## 前置要求

- 本地已安装 Node.js（版本高于 v18.20.8，建议 LTS）。
- `npx -y` 会自动拉取最新的 `@larksuiteoapi/lark-mcp`（要求 ≥ 0.3.0），无需手动安装；也可提前全局安装：`npm install -g @larksuiteoapi/lark-mcp`。

## 用法

启用插件后，涉及飞书开放平台开发的问题会自动触发文档召回：

- "如何创建一个飞书卡片并发送给指定用户？"
- "调用云文档 API 新建 docx 的请求体怎么写？"
- "批量获取用户 ID 的接口是什么？给出 curl 示例。"

提示词里带上"搜索文档/给出文档链接"之类的约束效果更好。建议同时提供所用语言/SDK（如 Node、Go、Java），召回后即可直接生成可运行示例代码。

## 参考

- 官方文档：[开发文档检索 MCP 概述](https://open.feishu.cn/document/mcp_open_tools/development-document-search-mcp-integration/development-document-search-mcp-overview) · [安装与使用](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/install-and-use-document-search-mcp)
- 上游源码：[larksuite/lark-openapi-mcp](https://github.com/larksuite/lark-openapi-mcp)
- npm 包：[@larksuiteoapi/lark-mcp](https://www.npmjs.com/package/@larksuiteoapi/lark-mcp)
