# Twilio for AI

面向 AI 编程智能体的官方 Twilio Skills 与 MCP。适用于 Claude Code、Cursor、Codex 以及任何支持 [Agent Skills](https://agentskills.io) 标准的工具。

> **公开测试版（Public Beta）：**Twilio MCP 和 Twilio Skills 目前以公开测试版产品形式提供，本仓库中的信息可能随时变更。这意味着部分功能尚未实现，另一些功能在产品正式发布（Generally Available）之前可能发生变化。公开测试版产品不在 Twilio 支持条款或 Twilio 服务等级协议的覆盖范围内。

---

## Twilio MCP

Twilio MCP 服务器提供针对 Twilio 文档和 API 规范的搜索。它暴露两个工具：

| 工具 | 说明 |
|------|-------------|
| `twilio__search` | 通过自然语言查询搜索 Twilio 文档和 API 操作 |
| `twilio__retrieve` | 获取特定 API 操作的完整参数 schema |

**端点：**`https://mcp.twilio.com/docs`

各受支持 IDE 的设置说明参见 [`mcp/README.md`](mcp/README.md)。
文档：https://www.twilio.com/docs/ai/mcp

## 反馈

- 问题与反馈：questions-mcp@twilio.com
- Issue：[GitHub Issues](https://github.com/twilio/ai/issues)


---

## Twilio Skills

技能是面向 AI 编程智能体的结构化程序性知识包。它们采用渐进式披露架构：你的智能体只看到所有可用技能的轻量元数据，当任务匹配时加载相关技能，并按需深入参考资料——在保持上下文窗口精简的同时，在恰当时机提供深入的专业知识。

### 技能能帮上什么忙

- **产品选型：**“我需要验证用户身份”——智能体会在写任何代码之前，先分析该用 Twilio Verify 还是自己实现 OTP、是否要加 Lookup 做欺诈评分
- **架构模式：**“帮我构建一个 AI 语音智能体”——智能体会通过提问了解你的用例复杂度，然后推荐合适的产品组合（例如 Conversation Relay + Memory + Conversation Intelligence + TaskRouter）
- **避坑指南：**技能带有明确的 `CANNOT` 章节，通过记录硬性约束和常见陷阱来减少幻觉

### 可用的技能类别

| 类型 | 用途 | 示例 |
|------|---------|---------|
| **配置** | 账户、认证和号码配置 | `twilio-account-setup`、`twilio-iam-auth-setup` |
| **规划** | 用例确认与产品选型 | `twilio-identity-verification-advisor`、`twilio-marketing-promotions-advisor` |
| **产品** | 如何正确使用单个 Twilio 产品 | `twilio-verify-send-otp`、`twilio-sms-send-message`、`twilio-sendgrid-email-send` |
| **防护** | 预防故障的运营模式 | `twilio-security-hardening`、`twilio-reliability-patterns`、`twilio-compliance-traffic` |

覆盖：SMS、MMS、WhatsApp、RCS、Voice、Verify、SendGrid、Conversations、Messaging Services、合规（A2P 10DLC、Toll-Free、STIR/SHAKEN）等。

文档：https://www.twilio.com/docs/ai/skills

### 安装

#### Claude Code

```bash
# 添加 Twilio 插件市场并安装插件（包含 Skills + MCP）
/plugin marketplace add twilio/ai
/plugin install twilio-developer-kit@twilio
```

当你的提示词匹配所覆盖的用例时，技能会自动激活。你也可以直接调用：

```
/twilio-verify-send-otp
/twilio-sms-send-message
```

#### Cursor

技能遵循开放的 [Agent Skills](https://agentskills.io) 标准。Cursor 会自动发现工作区 `.agents/skills/` 目录中的技能：

```bash
git clone https://github.com/twilio/ai.git .twilio-ai
cp -r .twilio-ai/skills/ .agents/skills/
```

在 Cursor Settings > MCP 中添加 MCP 服务器：

```json
{
  "twilio-docs": {
    "type": "http",
    "url": "https://mcp.twilio.com/docs"
  }
}
```

#### Codex (OpenAI)

```bash
# 添加 MCP 服务器
codex mcp add twilio-docs --url https://mcp.twilio.com/docs

# 添加技能（用户级，所有项目可用）
git clone https://github.com/twilio/ai.git
cp -r ai/skills/ ~/.agents/skills/
```

#### 其他工具（GitHub Copilot、Gemini CLI、JetBrains 等）

Twilio Skills 采用开放的 [Agent Skills](https://agentskills.io) 标准（`SKILL.md` 格式）。任何支持该标准的工具都可以从本仓库的 `skills/` 目录加载它们。

MCP 请使用 streamable HTTP 端点：`https://mcp.twilio.com/docs`

---

## 验证是否生效

完成设置后，问你的智能体：

> “如何用 Twilio 发送短信？”

你的智能体应当给出关于 Messaging Services、A2P 合规、错误处理的指导，并推荐具体技能做更深入的实现——而不是只依赖训练数据。

---

## 反馈

- 问题与反馈：questions-skills@twilio.com
- Issue：[GitHub Issues](https://github.com/twilio/ai/issues)

---

## 免责声明

Twilio MCP 和 Twilio Skills 目前以公开测试版（Public Beta）产品形式提供，本仓库中的信息可能随时变更。这意味着部分功能尚未实现，另一些功能在产品正式发布（Generally Available）之前可能发生变化。公开测试版产品不在 Twilio 支持条款或 Twilio 服务等级协议的覆盖范围内。

## 许可证

MIT
