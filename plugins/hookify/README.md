# Hookify 插件

通过分析对话模式或依据明确指示，轻松创建自定义钩子来防止不想要的行为。

## 概述

hookify 插件让你无需编辑复杂的 `hooks.json` 文件即可轻松创建钩子。你只需创建轻量的 markdown 配置文件，在其中定义要监视的模式，以及这些模式匹配时要显示的消息。

**主要特性：**
- 🎯 分析对话，自动发现不想要的行为
- 📝 使用 YAML frontmatter 的简单 markdown 配置文件
- 🔍 正则表达式模式匹配，实现强大的规则
- 🚀 无需编写代码 - 只需描述行为
- 🔄 无需重启即可轻松启用/禁用

## 快速开始

### 1. 创建你的第一条规则

```bash
/hookify 当我使用 rm -rf 命令时提醒我
```

它会分析你的请求并创建 `.claude/hookify.warn-rm.local.md`。

### 2. 立即测试

**无需重启！** 规则会在下一次工具调用时立即生效。

让 Claude 运行一条应当触发该规则的命令：
```
Run rm -rf /tmp/test
```

你应该会立即看到警告消息！

## 用法

### 主命令：/hookify

**带参数：**
```
/hookify 不要在 TypeScript 文件中使用 console.log
```
根据你的明确指示创建规则。

**不带参数：**
```
/hookify
```
分析最近的对话，找出你纠正过或曾让你感到困扰的行为。

### 辅助命令

**列出所有规则：**
```
/hookify:list
```

**交互式配置规则：**
```
/hookify:configure
```
通过交互式界面启用/禁用现有规则。

**获取帮助：**
```
/hookify:help
```

## 规则配置格式

### 简单规则（单模式）

`.claude/hookify.dangerous-rm.local.md`：
```markdown
---
name: block-dangerous-rm
enabled: true
event: bash
pattern: rm\s+-rf
action: block
---

⚠️ **检测到危险的 rm 命令！**

此命令可能会删除重要文件。请：
- 确认路径是否正确
- 考虑使用更安全的方式
- 确保你已有备份
```

**action 字段：**
- `warn`：显示警告但允许操作继续（默认）
- `block`：阻止操作执行（PreToolUse）或停止会话（Stop 事件）

### 高级规则（多条件）

`.claude/hookify.sensitive-files.local.md`：
```markdown
---
name: warn-sensitive-files
enabled: true
event: file
action: warn
conditions:
  - field: file_path
    operator: regex_match
    pattern: \.env$|credentials|secrets
  - field: new_text
    operator: contains
    pattern: KEY
---

🔐 **检测到敏感文件编辑！**

请确保凭据未硬编码，且文件已加入 .gitignore。
```

**所有条件都必须匹配**，规则才会触发。

## 事件类型

- **`bash`**：在 Bash 工具命令时触发
- **`file`**：在 Edit、Write、MultiEdit 工具时触发
- **`stop`**：在 Claude 想要停止时触发（用于完成度检查）
- **`prompt`**：在用户提交提示词时触发
- **`all`**：在所有事件时触发

## 模式语法

使用 Python 正则表达式语法：

| 模式 | 匹配内容 | 示例 |
|---------|---------|---------|
| `rm\s+-rf` | rm -rf | rm -rf /tmp |
| `console\.log\(` | console.log( | console.log("test") |
| `(eval\|exec)\(` | eval( 或 exec( | eval("code") |
| `\.env$` | 以 .env 结尾的文件 | .env、.env.local |
| `chmod\s+777` | chmod 777 | chmod 777 file.txt |

**技巧：**
- 使用 `\s` 匹配空白字符
- 转义特殊字符：用 `\.` 表示字面量点号
- 使用 `|` 表示"或"：`(foo|bar)`
- 使用 `.*` 匹配任意内容
- 对危险操作设置 `action: block`
- 对提示性警告设置 `action: warn`（或省略）

## 示例

### 示例 1：阻止危险命令

```markdown
---
name: block-destructive-ops
enabled: true
event: bash
pattern: rm\s+-rf|dd\s+if=|mkfs|format
action: block
---

🛑 **检测到破坏性操作！**

此命令可能导致数据丢失。为安全起见已阻止该操作。
请确认确切的路径，并使用更安全的方式。
```

**此规则会阻止操作** - Claude 将无法执行这些命令。

### 示例 2：调试代码警告

```markdown
---
name: warn-debug-code
enabled: true
event: file
pattern: console\.log\(|debugger;|print\(
action: warn
---

🐛 **检测到调试代码**

提交前记得移除调试语句。
```

**此规则只警告不阻止** - Claude 会看到消息，但仍可继续操作。

### 示例 3：停止前要求运行测试

```markdown
---
name: require-tests-run
enabled: false
event: stop
action: block
conditions:
  - field: transcript
    operator: not_contains
    pattern: npm test|pytest|cargo test
---

**未在会话记录中检测到测试！**

停止前请先运行测试，验证你的更改是否正常工作。
```

如果会话记录中没有出现测试命令，**此规则会阻止 Claude 停止**。仅在你需要严格执行时启用。

## 高级用法

### 多条件

同时检查多个字段：

```markdown
---
name: api-key-in-typescript
enabled: true
event: file
conditions:
  - field: file_path
    operator: regex_match
    pattern: \.tsx?$
  - field: new_text
    operator: regex_match
    pattern: (API_KEY|SECRET|TOKEN)\s*=\s*["']
---

🔐 **在 TypeScript 中检测到硬编码凭据！**

请使用环境变量，而不是硬编码的值。
```

### 操作符参考

- `regex_match`：模式必须匹配（最常用）
- `contains`：字符串必须包含模式
- `equals`：字符串完全相等
- `not_contains`：字符串必须不包含模式
- `starts_with`：字符串以模式开头
- `ends_with`：字符串以模式结尾

### 字段参考

**bash 事件：**
- `command`：bash 命令字符串

**文件事件：**
- `file_path`：正在编辑的文件路径
- `new_text`：新增的内容（Edit、Write）
- `old_text`：被替换的旧内容（仅 Edit）
- `content`：文件内容（仅 Write）

**提示词事件：**
- `user_prompt`：用户提交的提示词文本

**停止事件：**
- 对会话状态进行一般性匹配

## 管理

### 启用/禁用规则

**临时禁用：**
编辑 `.local.md` 文件并设置 `enabled: false`

**重新启用：**
设置 `enabled: true`

**或使用交互式工具：**
```
/hookify:configure
```

### 删除规则

直接删除 `.local.md` 文件即可：
```bash
rm .claude/hookify.my-rule.local.md
```

### 查看所有规则

```
/hookify:list
```

## 安装

本插件是 Claude Code 插件市场的一部分。安装插件市场后应会被自动发现。

**手动测试：**
```bash
cc --plugin-dir /path/to/hookify
```

## 环境要求

- Python 3.7+
- 无外部依赖（仅使用标准库）

## 故障排除

**规则未触发：**
1. 检查规则文件是否位于 `.claude/` 目录中（项目根目录下，而非插件目录）
2. 确认 frontmatter 中 `enabled: true`
3. 单独测试正则表达式模式
4. 规则应立即生效 - 无需重启
5. 尝试运行 `/hookify:list` 查看规则是否已加载

**导入错误：**
- 确保 Python 3 可用：`python3 --version`
- 检查 hookify 插件是否已安装

**模式不匹配：**
- 测试正则：`python3 -c "import re; print(re.search(r'pattern', 'text'))"`
- 在 YAML 中使用不带引号的模式，避免转义问题
- 从简单开始，再逐步增加复杂度

**钩子似乎很慢：**
- 保持模式简单（避免复杂的正则表达式）
- 使用具体的事件类型（bash、file），而不是 "all"
- 限制活跃规则的数量

## 参与贡献

发现了有用的规则模式？欢迎通过 PR 分享示例文件！

## 未来增强功能

- 严重级别（区分 error/warning/info）
- 规则模板库
- 交互式模式构建器
- 钩子测试工具
- 支持 JSON 格式（除 markdown 之外）

## 许可证

MIT 许可证
