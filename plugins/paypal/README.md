# PayPal AI Toolkit

一个把 PayPal 的 API 和 MCP 服务器集成进你的 AI 编码工作流的插件。在 Claude Code、OpenAI Codex、Cursor 及其他兼容智能体中，获得针对 PayPal 支付、订阅、发票、争议等的 AI 辅助。

## 特性

- **最佳实践技能（Skill）** —— 在你处理支付集成时自动注入 PayPal API 知识
- **命令** —— 面向常见开发任务的速查命令（Claude Code 和 Cursor）
- **钩子（Hook）** —— 在编写集成代码之前自动检查 PayPal 最佳实践
- **MCP 服务器集成** —— 把你的智能体连接到 PayPal 的沙箱 MCP 服务器，用自然语言直接执行 API 操作

![Demo of installation and usage](https://github.com/user-attachments/assets/787a2b4c-4276-422c-9124-fd535571a68c)

## 安装

### 前提条件

- 一个 PayPal 开发者账号，见 https://developer.paypal.com
- 一个 PayPal 沙箱访问令牌
- Claude Code（`claude --version`）、OpenAI Codex（`codex --version`）和/或 Cursor

### Claude Code

PayPal AI Toolkit 已上架 Anthropic 官方插件市场，Claude Code 会自动添加该市场。使用以下命令安装：

```
/plugin install paypal@claude-plugins-official
```

然后运行 `/reload-plugins` 激活。

#### 本地 / 开发安装

如果要开发插件本身，请改为克隆仓库并直接加载：

```bash
git clone https://github.com/paypal/AI-Toolkit.git
```

然后在加载插件的情况下启动 Claude Code：

```bash
cd your-project/
claude --plugin-dir /path/to/AI-Toolkit
```

### OpenAI Codex

添加 PayPal 插件市场，然后安装插件：

```bash
codex plugin marketplace add paypal/AI-Toolkit
codex plugin add paypal@paypal-ai-toolkit
```

#### 本地 / 开发安装

```bash
git clone https://github.com/paypal/AI-Toolkit.git
codex plugin marketplace add /path/to/AI-Toolkit
codex plugin add paypal@paypal-ai-toolkit
```

安装后请重启 Codex，以便技能和沙箱 MCP 服务器加载。

### Cursor

把本仓库添加为插件市场，然后安装插件：

```bash
cursor-agent plugin marketplace add https://github.com/paypal/AI-Toolkit
```

然后打开 **Customize**（或输入 `/plugin`），在用户或项目作用域安装 `paypal`。

一旦该插件上架 Cursor 插件市场，你也可以在聊天中用 `/add-plugin paypal` 安装。

#### 本地 / 开发安装

直接加载检出的仓库（无需插件市场或管理员设置）：

```bash
git clone https://github.com/paypal/AI-Toolkit.git
cursor-agent --plugin-dir /path/to/AI-Toolkit
```

你也可以把仓库复制到 Cursor 的本地插件文件夹。这需要启用 **Allow Local Plugin Imports**（Dashboard → Settings → Security & Identity → Marketplace and Plugins），某些团队默认关闭该选项。指向该文件夹之外的符号链接会被跳过：

```bash
git clone https://github.com/paypal/AI-Toolkit.git ~/.cursor/plugins/local/paypal
```

`cursor-agent plugin marketplace add` 只接受 git URL（例如 `https://github.com/paypal/AI-Toolkit`），不接受本地路径。

重启 Cursor 或运行 **Developer: Reload Window**，然后在 **Customize** 中确认技能、命令和 `paypal-sandbox`。

### 配置你的沙箱访问令牌

1. 生成一个沙箱访问令牌：

   ```bash
   curl -X POST https://api-m.sandbox.paypal.com/v1/oauth2/token \
     -u "YOUR_SANDBOX_CLIENT_ID:YOUR_SANDBOX_CLIENT_SECRET" \
     -d "grant_type=client_credentials" \
     | jq -r .access_token
   ```

   客户端 ID 和密钥可从 [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/applications/sandbox) 获取。

2. 把这个单行值粘贴到你的智能体配置中。

   **Claude Code** —— 合并进 `~/.claude/settings.json` 中已有的 `"env"` 块：

   ```json
   "env": {
     "PAYPAL_SANDBOX_ACCESS_TOKEN": "A21AA…"
   }
   ```

   **OpenAI Codex** —— 合并进 `~/.codex/config.toml`：

   ```toml
   [shell_environment_policy.set]
   PAYPAL_SANDBOX_ACCESS_TOKEN = "A21AA…"
   ```

   **Cursor** —— 安装插件后，打开 **Customize → Plugins → PayPal → Configure** 并粘贴令牌。Cursor 会保存它，并在 `.mcp.json` 中替换 `${PAYPAL_SANDBOX_ACCESS_TOKEN}`。以 GUI 启动的 Cursor 不会继承 `~/.zshrc` 中的 `export`。

3. **完全退出并重新打开**智能体（关闭应用——而不只是 `/clear`）。

4. 在 Claude Code 中，运行 `/paypal:setup` 进行验证。在 Codex 或 Cursor 中，让智能体列出 PayPal MCP 工具或创建一张沙箱发票。

> **请使用智能体配置或 Cursor 插件的 Configure 面板，不要用 `~/.zshrc`。** GUI 启动不会加载 `~/.zshrc`，而换行的 `export` 会在令牌中嵌入一个换行符，破坏 HTTP 头。

令牌会在最多 8 小时后过期，具体取决于作用域——请查看响应中的 `expires_in` 字段。遇到 401 时，运行 `/paypal:setup refresh`。

## 命令

斜杠命令在 Claude Code 和 Cursor 中可用。Codex 则通过自然语言使用相同的技能和 MCP 服务器。

| 命令                            | 说明                                              |
| ------------------------------- | ------------------------------------------------- |
| `/paypal:doctor [symptom]`      | 扫描你的代码库中的 PayPal 集成问题                |
| `/paypal:explain-error <code>`  | 解释 PayPal 错误码及其成因与修复方法              |
| `/paypal:sandbox [topic]`       | 沙箱设置、测试账号和测试技巧                      |
| `/paypal:setup [mode]`          | 配置插件、验证 MCP、刷新令牌                      |
| `/paypal:test-accounts [topic]` | 测试卡、BNPL、Venmo、webhook 及各种场景           |

### 示例

```
/paypal:explain-error INSTRUMENT_DECLINED
/paypal:explain-error 422 UNPROCESSABLE_ENTITY
/paypal:sandbox subscriptions
/paypal:sandbox webhooks
/paypal:setup
/paypal:doctor webhooks not firing
```

## MCP 服务器

该插件连接 PayPal 的沙箱 MCP 服务器，它提供以下工具：

- **订单与支付** —— 创建订单、捕获付款、处理退款
- **发票** —— 创建、发送、管理发票并生成二维码
- **订阅** —— 管理计费计划和订阅
- **争议** —— 列出买家争议并作出回应
- **商品目录** —— 管理商品与定价
- **发货** —— 创建并跟踪货运
- **报表** —— 列出交易、获取商家洞察

### 传输方式与环境

服务器在 `/sse` 路径上使用 **SSE**。一旦你在 `~/.claude/settings.json`（Claude Code）、`~/.codex/config.toml`（Codex）或 **Customize → Plugins → PayPal → Configure**（Cursor）中设置了 `PAYPAL_SANDBOX_ACCESS_TOKEN`，`paypal-sandbox` 就会激活。

## 技能

当你的智能体检测到你正在处理 PayPal 集成时，会自动调用 `paypal-best-practices` 技能。它提供：

- 推荐的 API 以及应避免的已弃用 API
- 身份验证与凭据的最佳实践
- Orders、Subscriptions 和 Invoices API 流程
- webhook 验证与安全指南
- 错误处理模式
- 沙箱测试指南

`paypal-routing` 技能把 PayPal 相关的问题路由到正确的命令或参考文件，不能由用户直接调用。

## 钩子

一个 `PreToolUse` 钩子会检查文件编辑是否触及 PayPal SDK、API 或结账（checkout）代码。如果触及，智能体在编写代码之前必须先查阅 `paypal-best-practices` 技能以及正确版本的 SDK 参考（v5 或 v6）。

## 插件结构

```
AI-Toolkit/
├── .agents/
│   └── plugins/
│       └── marketplace.json     # Codex 插件市场目录
├── .claude-plugin/
│   ├── marketplace.json     # Claude Code 插件市场注册表
│   └── plugin.json          # Claude Code 插件清单
├── .codex-plugin/
│   └── plugin.json          # Codex 插件清单
├── .cursor-plugin/
│   ├── marketplace.json     # Cursor 插件市场目录
│   └── plugin.json          # Cursor 插件清单
├── .mcp.json                # PayPal 沙箱 MCP 服务器（SSE）
├── skills/
│   ├── paypal-best-practices/
│   │   ├── SKILL.md         # 自动注入的最佳实践上下文
│   │   └── references/      # 按主题划分的集成指南
│   └── paypal-routing/
│       └── SKILL.md         # 意图路由（不可由用户直接调用）
├── commands/
│   ├── doctor.md            # /paypal:doctor
│   ├── explain-error.md     # /paypal:explain-error
│   ├── sandbox.md           # /paypal:sandbox
│   ├── setup.md             # /paypal:setup
│   └── test-accounts.md     # /paypal:test-accounts
├── hooks/
│   └── hooks.json           # 写入前的最佳实践检查
├── LICENSE                  # Apache-2.0
├── CONTRIBUTING.md          # 贡献与提交规范
└── README.md
```

## 参与贡献

如何报告问题、本地开发以及提交拉取请求，请参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

提交信息和 PR 标题应遵循 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)，例如：

```
feat: allow provided config object to extend other configs
```

## 资源

- [PayPal 开发者文档](https://developer.paypal.com/docs/)
- [PayPal REST API 参考](https://developer.paypal.com/api/rest/)
- [PayPal MCP 服务器](https://developer.paypal.com/ai-tools/mcp-server.md)
- [PayPal Agent Toolkit](https://github.com/paypal/agent-toolkit)
- [PayPal Developer Dashboard](https://developer.paypal.com/dashboard)
