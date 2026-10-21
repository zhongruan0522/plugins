# MongoDB（自管 MCP）

对于由你自己管理的部署——**Community**、**Enterprise Advanced**、本地开发容器或 Atlas 集群——本插件仅需一个连接字符串即可连接你的智能体。它通过 `npx` 在本地运行 [MongoDB MCP 服务器](https://www.mongodb.com/docs/mcp-server/)，为你的智能体提供探索数据库与集合、运行查询与聚合、管理索引等工具。

入门请参阅 [Community 与 Enterprise Advanced 设置指南](../../README.community.md)。

## 技能

以下技能随插件捆绑提供，并在相关场景下自动激活：

- **`mongodb-mcp-setup`** — 引导你配置 MCP 服务器的连接字符串和环境变量。
- **`mongodb-connection`** — 审查并调优各驱动语言下的客户端连接配置（连接池、超时、模式）。
- **`mongodb-natural-language-querying`** — 将自然语言请求转换为只读的 `find` 查询与聚合管道。
- **`mongodb-qe-size-estimation`** — 估算对启用了可查询加密（Queryable Encryption，QE）的集合中的字段进行加密时，对存储与内存的影响。不适用于使用客户端字段级加密（CSFLE）的集合。
- **`mongodb-query-optimizer`** — 诊断慢查询，并推荐可解决这些问题的索引。
- **`mongodb-schema-design`** — 运用 MongoDB 的 schema 设计模式，帮你避开常见反模式，无论是从零开始建模还是从 SQL 迁移。
- **`mongodb-search-and-ai`** — 帮助构建 Atlas Search（全文搜索）、Vector Search（语义搜索）以及混合搜索方案。
- **`mongodb-atlas-stream-processing`** — 为流式工作负载管理 Atlas Stream Processing 的工作区、连接和处理器。
