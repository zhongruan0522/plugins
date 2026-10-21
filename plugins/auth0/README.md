# auth0

Auth0 技能，涵盖搭建认证、从其他提供商迁移、实现多因素认证（MFA）与无密码通行密钥（WebAuthn）登录、各框架专属的 SDK 集成以及 CLI。

## 安装

**通过 Codex / ChatGPT 桌面版：**

在插件 UI 中添加来自 `.agents/plugins/marketplace.json` 的仓库插件市场，然后安装 **Auth0**。它会跟随已发布的 `main` 快照。公开插件目录需要通过 [OpenAI 插件提交门户](https://platform.openai.com/plugins)提交并经审批后方可收录。

**通过 Claude Code：**

首先，如果尚未添加 Auth0 插件市场，请先添加：

```bash
/plugin marketplace add auth0/agent-skills
```

然后安装插件：

```bash
/plugin install auth0@auth0-agent-skills
```

**通过 Skills CLI：**

```bash
npx skills add auth0/agent-skills/plugins/auth0
```

**通过兼容 Agent Plugins 的客户端：**

使用客户端的插件安装流程加载 `plugins/auth0` 目录。[Agent Plugins](https://agent-plugins.org/) 定义的是可移植的包格式，而非统一的安装命令。

**通过 Antigravity：**

```bash
agy plugin install plugins/auth0
```

**通过 Gemini CLI：**

从本地克隆安装——`gemini extensions install` 要求清单文件位于仓库根目录，而本插件的清单位于 `plugins/auth0/`：

```bash
gemini extensions install ./plugins/auth0
```

## 技能

| 技能 | 说明 | 文档 |
|-------|-------------|---------------|
| [auth0](skills/auth0) | 为任何应用添加 Auth0 认证。覆盖 35+ 框架（React、Next.js、TanStack Start、Vue、Angular、Express、Flask、FastAPI、Spring Boot、Swift、Android、Kotlin Multiplatform、Flutter、Laravel、Go、PHP、.NET MAUI、ASP.NET Core、React Native、Expo、Ionic 等）、MFA、Organizations、用于托管账户与组织自助服务的 Universal Portals、Vercel 原生集成、自定义域名、ACUL 屏幕生成、品牌定制、认证错误调试、安全最佳实践、运行租户安全与配置审计（CheckMate）、结合订阅计划的租户健康检查，以及从其他提供商迁移。 | [SKILL.md](skills/auth0/SKILL.md) |

## 用 `/auth0` 强制调用技能

在能力较强的模型上，自动检测是可靠的。而在安装了**大量**其他技能的会话中，更小/更快的模型偶尔可能错过触发——最常发生在开放式的*提问*（"我应该怎么……？"）上，而非直接指令。遇到这种情况时，请显式指名技能：

```
/auth0 how do I configure brand colors in Auth0?
```

显式指名技能即可完全跳过选择步骤，因此它一定会被激活。

## 从独立技能迁移

早期版本为每个 SDK/框架提供一个技能（`auth0-react`、`auth0-nextjs`、`express-oauth2-jwt-bearer` 等）。这些技能现已**合并为上述单一的 `auth0` 技能**，它通过检测你的框架路由到相同的指导内容。通过插件/插件市场安装的用户会在下次更新时自动换成合并后的技能，无需任何操作。**如果你在 `CLAUDE.md`、其他技能的 `requires.skills` 或任何指令文件中按名称引用过旧技能**——这些名称已不存在，相关引用将会失效；请将其替换为 `auth0`。完整的迁移细节请参阅[仓库 README](../../README.md#migrating-from-the-individual-skills)。
