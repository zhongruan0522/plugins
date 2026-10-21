# security-guidance

针对 Claude 生成代码的安全审查。共分三层：

1. **模式警告** — 在 `Edit`/`Write` 时即时给出基于正则的提醒，覆盖约 25 种已知危险模式（`yaml.load`、`torch.load(weights_only=False)`、对不可信数据使用 `pickle.load`、直接拼接 `innerHTML`、硬编码密钥等）。
2. **LLM diff 审查** — 当 Claude 完成一轮回复时，插件会把 diff 发送给一次快速的 LLM 调用（默认使用最新的 Opus），并将高严重度的发现反馈给 Claude，以便在你看到回复之前修复这些问题。
3. **智能体式提交审查** — 在 `git commit` 时，由 SDK 驱动的审查器会读取相关文件（`Read`/`Grep`/`Glob`）来追踪整个代码库中的数据流，捕获模式匹配难以发现的多文件漏洞（IDOR、身份验证绕过、跨文件 SSRF）。

发现的问题覆盖常见的 Web 漏洞类别——注入、XSS、SSRF、硬编码密钥、IDOR、身份验证绕过、不安全的反序列化、路径遍历等。

## 安装

```
/plugin install security-guidance@claude-plugins-official
```

该插件市场在 Claude Code 中默认处于启用状态——只要装有 CLI 本身即可，无需任何设置。

## 前提条件

- Claude Code CLI ≥ v2.1.144
- `PATH` 中有 Python 3.8+（`python3`、`python` 或 `py -3` —— 插件会选用第一个可用的）
- LLM 审查所需的凭据：你的 Claude Code 登录账号、API 密钥或第三方提供商配置（参见[凭据](#凭据)）

## 配置

所有配置均通过环境变量完成。默认行为不需要任何配置。

### 选择模型

默认情况下，两种审查都运行在最新的 Claude Opus 上，新版本发布后会自动切换过去——无需手动升级模型版本：

- LLM diff 审查会向你的 API 端点（`GET /v1/models`）查询它提供哪些 Opus 模型，并使用最新的一个。该结果会在插件的状态目录中缓存一天。如果端点无法回答，审查将使用 `claude-opus-5-5`。
- 智能体式提交审查器，以及在 Bedrock、Vertex 和 Foundry 上的所有审查，都会通过你已安装的 Claude Code 运行，并使用其 `opus` 别名——即 `/model opus` 所选择的同一个模型，包括你设置的任何 `ANTHROPIC_DEFAULT_OPUS_MODEL`。

要固定某个模型，或使用更便宜的模型：

```bash
# 1P / 网关：规范的模型 id
SECURITY_REVIEW_MODEL=claude-opus-5-5

# Bedrock：使用 inference-profile id
SECURITY_REVIEW_MODEL=us.anthropic.claude-opus-5-5

# Vertex / Foundry：提供商的模型 id
SECURITY_REVIEW_MODEL=claude-opus-5-5
```

`SECURITY_REVIEW_MODEL` 控制 LLM diff 审查。`SG_AGENTIC_MODEL`（语法相同）控制智能体式提交审查器。

### 凭据

模式警告无需任何凭据。LLM 审查（Stop 钩子上的 diff 审查以及 commit/push 审查器）按顺序使用以下凭据中第一个可用的：

- **云提供商（Bedrock、Vertex、Foundry）** — 如果 Claude Code 已配置某个云提供商，审查会通过你已安装的 Claude Code 使用该提供商配置运行。
- **环境变量中的 `ANTHROPIC_API_KEY` 或 `ANTHROPIC_AUTH_TOKEN`** — 按原样使用；如果你设置了 `ANTHROPIC_BASE_URL`，则请求发往该地址。
- **已登录 Claude Code（`/login`）** — Claude Code 会把你的登录状态传递给插件的钩子，审查将使用该账号。

如果在设置了 `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`、`DISABLE_TELEMETRY` 或 `DO_NOT_TRACK` 的情况下启动会话，Claude Code 不会把你的登录状态传递给插件。如果由于该原因或其他任何原因导致凭据未能到达插件，LLM 审查将被跳过，只运行模式警告。当 Claude 在 git 仓库中编辑文件时，插件会告知你这一情况，每周最多提示一次。如果这正是你想要的状态，请设置 `ENABLE_CODE_SECURITY_REVIEW=0`；该设置同时也会隐藏这条提示。

### 启用/禁用各层

| 变量 | 默认值 | 作用 |
|---|---|---|
| `SECURITY_GUIDANCE_DISABLE=1` | 未设置 | 总开关——禁用整个插件 |
| `ENABLE_PATTERN_RULES=0` | 开启 | 禁用第 1 层（正则模式警告） |
| `ENABLE_CODE_SECURITY_REVIEW=0` | 开启 | 禁用所有 LLM 审查（Stop 钩子 + commit/push） |
| `ENABLE_STOP_REVIEW=0` | 开启 | 仅禁用 Stop 钩子的 diff 审查，保留 commit/push 审查。适用于多智能体 / 共享 worktree 的场景：在某个工作智能体的两轮回复之间，其他智能体可能会移动 HEAD |
| `ENABLE_COMMIT_REVIEW=0` | 开启 | 禁用第 3 层（智能体式提交审查） |

### 面向其他宿主的钩子输出

```bash
SECURITY_GUIDANCE_PORTABLE_OUTPUT=1   # 默认：自动检测
```

钩子的 JSON 输出包含两个只有 Claude Code 会读取的字段（`metrics` 和 `rewakeSummary`），并且 SessionStart 钩子会先单独打印一行 `{"async": ...}`。依据封闭 schema 校验钩子输出的宿主会拒绝这些内容。在可移植模式下这些内容会被省略，因此每个钩子只输出一个仅含标准字段（`decision`、`reason`、`systemMessage`、`hookSpecificOutput`）的 JSON 对象，并且 SessionStart 钩子会先运行完毕，宿主再继续。当宿主传入 `PLUGIN_ROOT` 且未表明自己是 Claude Code 时，该模式会自动开启；将变量设置为 `1` 或 `0` 可强制开启或关闭。

### 更高召回模式

```bash
SG_DUAL_OR=on   # 默认关闭
```

同时运行两个并行的审查调用并合并发现结果。在我们的测试中能多发现几个百分点的漏洞，但每次审查的 API 成本约为 2 倍。大多数用户不需要开启。

## 组织专属策略

将 `claude-security-guidance.md` 文件放在以下任一位置：

- `~/.claude/claude-security-guidance.md` — 用户级规则（如果设置了 `CLAUDE_CONFIG_DIR`，也会读取该目录下的同名文件）
- `<project>/.claude/claude-security-guidance.md` — 项目规则，建议提交到版本库
- `<project>/.claude/claude-security-guidance.local.md` — 本地覆盖规则，建议加入 `.gitignore`

这三个文件都会被加载，并按 用户 → 项目 → 项目本地 的顺序拼接进 LLM diff 审查的提示词。如果总大小超过 8 KB 的提示词预算，末尾部分会被截断，因此用户级规则会被保留，项目本地规则最先被舍弃。智能体式提交审查器（第 3 层）目前不会读取该文件。示例：

```markdown
# Acme 安全规则

- 针对 `customers` 或 `orders` 表的所有 SELECT 查询必须通过 `db.replica` 执行，
  绝不使用 `db.primary`。主库仅用于写入。
- 后台任务不得使用用户上下文的认证令牌；它们通过
  `jobs.get_service_account()` 获取服务账号凭据。
- 当 `requests.get(url)` 的 `url` 由用户控制时，需要使用
  `acme.net.safe_request` 的 SSRF 白名单包装器。
```

即使没有这个文件，内置规则也已覆盖常见的 Web 漏洞类别——`claude-security-guidance.md` 用于补充模型无法推断的、特定于你代码库的内容。

## 隐私与数据处理

插件会向模型端点发送数据以执行审查。具体来说，每次 Stop 钩子 diff 审查都会传输变更文件的路径、diff 片段以及 diff 中相关的文件内容；每次智能体式提交审查还会额外传输审查器在追踪数据流时通过 `Read`/`Grep`/`Glob` 读取的所有文件。你的 `claude-security-guidance.md` 内容（用户级、项目级和本地）会在每次审查时附加到提示词中，因此不要在其中放入机密信息。

这些数据发往何处取决于你的 Claude Code 配置：
- **默认（Anthropic API / 订阅）：** 发送到 `api.anthropic.com`，并按 Anthropic 的[商业条款](https://www.anthropic.com/legal/commercial-terms)和[隐私政策](https://www.anthropic.com/legal/privacy)处理。
- **LLM 网关**（设置了 `ANTHROPIC_BASE_URL`）：改为发送到你的网关 URL，并附带 `ANTHROPIC_CUSTOM_HEADERS` 中的请求头（`anthropic-beta` 除外）。适用网关运营方的条款。
- **第三方提供商**（Bedrock / Vertex / Foundry / Mantle）：发送到你配置的提供商端点。适用该提供商的数据处理条款（例如 AWS / GCP / Azure）。

插件会将自己的调试日志写入 `~/.claude/security/log.txt`（可通过 `SECURITY_GUIDANCE_DEBUG_LOG` 覆盖）。日志包含 diffstate 元数据、问题类别、Agent SDK 自身的警告和错误，以及智能体审查器内部的 Claude Code 在每次审查中输出到 stderr 的至多 20 行内容——不包含完整文件内容或模型提示词——日志在达到 1 MB 时轮转。任何内容都不会被上传。

### 审查用量与成本

LLM 审查使用你的 API 通道，因此会在你自己的会话之外额外消耗 token（或订阅用量）。默认审查器是最新的 Opus 模型。在 Anthropic API 通道上，Stop 时的 diff 审查直接调用 API，因此不会出现在 Claude Code 自己的成本统计或会话记录中。每次审查之后，插件会在其调试日志中写入一行：

```
Review usage: review=stop session=<session id> model=claude-opus-5-5 calls=1 in=31994 out=3250 cache_read=0 cache_write=0 est_cost_usd=0.1930
```

- `review` 为 `stop`、`commit` 或 `push`；`session` 是触发审查的 Claude Code 会话。
- `calls` 统计 diff 审查的 API 请求数，以及智能体式 commit/push 审查的审查器运行次数；`model` 是所请求的模型（默认为 `opus`）。
- `est_cost_usd` 是按牌价估算的值，不是账单：在订阅模式下，审查会改计入你的用量限额。末尾的 `~` 表示该模型在插件的价格表中没有条目，使用了默认费率。被中断的审查（超时、会话退出）可能不会被计入。
- 日志在 1 MB 时轮转，如果需要更长的历史记录，请把这些行复制出来。

想节省开支，可以把 `SECURITY_REVIEW_MODEL`（diff 审查）和 `SG_AGENTIC_MODEL`（commit/push 审查）设置为更便宜的模型，或者关闭审查（参见[启用/禁用各层](#启用禁用各层)）。

## 局限性

这是一个尽力而为的辅助工具，并非保证。请将审查发现视为建议，而不是人工代码评审、SAST/DAST、依赖扫描或渗透测试的替代品。审查器可能漏掉漏洞、产生误报，并且在不同的代码库、语言和模型版本上表现可能不同。**不提供任何保证**——使用须遵守 Anthropic 的[商业条款](https://www.anthropic.com/legal/commercial-terms)。

## 故障排查

**插件似乎没有生效** — 检查调试日志中是否出现 `~/.claude/claude-security-guidance.md`（或钩子活动）。使用 `--debug-file /tmp/claude/debug.txt` 运行 Claude Code 并 grep `security_reminder_hook`。插件也会把自己的日志写入 `~/.claude/security/log.txt`。

**审查从未发现任何问题** — 确认你的 API 通道可用，且凭据能到达插件（参见[凭据](#凭据)）：如果凭据未到达，`~/.claude/security/log.txt` 中会出现 `no API credentials`。当 commit 或 push 审查未能从模型获得可用答案时，Claude 会在每个会话内针对每种审查和失败类型被告知一次（例如"Commit security review did not complete: …"），并且原因会被记录。如果审查失败的 commit 之后又从 Claude Code 被 push，push 审查会检查它。在第三方提供商上，如果你设置了 `SECURITY_REVIEW_MODEL`，请确认它是你的账号可调用的、该提供商专属的模型 id。在 LLM 网关上，请检查网关日志中来自插件的 `POST /v1/messages` 请求。

**误报太多** — 将 `SECURITY_REVIEW_MODEL` 设置为更便宜的模型（`claude-sonnet-5-5`）并重新评估；如果更看重精确率，请保持默认。

**想让某条发现不再出现** — 在该行添加注释说明它为何安全；LLM 审查器会把行内说明视为排除理由。对于系统性的排除，请将它们记录在你的 `claude-security-guidance.md` 中。

## 报告问题

在 [security-guidance 插件仓库](https://github.com/anthropics/claude-code/issues)上提交 issue，并附上：
- Claude Code CLI 版本（`claude --version`）
- 提供商配置（1P / Bedrock / Vertex / LLM 网关等）
- 最小复现 diff
- `~/.claude/security/log.txt` 的相关部分
