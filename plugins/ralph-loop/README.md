# Ralph Loop 插件

在 Claude Code 中实现 Ralph Wiggum 技术，用于迭代式、自引用的 AI 开发循环。

## 什么是 Ralph Loop？

Ralph Loop 是一种基于持续 AI 智能体循环的开发方法论。正如 Geoffrey Huntley 所描述的：**"Ralph is a Bash loop"（Ralph 就是一个 Bash 循环）**——一个简单的 `while true`，不断把提示词文件喂给 AI 智能体，让它迭代改进自己的工作直至完成。

该技术受 Ralph Wiggum 编码技术启发（以《辛普森一家》中的角色命名），体现了屡遭挫折仍坚持迭代的哲学。

### 核心概念

本插件通过一个拦截 Claude 退出尝试的 **Stop 钩子**来实现 Ralph：

```bash
# 你只需运行一次：
/ralph-loop "Your task description" --completion-promise "DONE"

# 之后 Claude Code 会自动：
# 1. 处理任务
# 2. 尝试退出
# 3. Stop 钩子阻止退出
# 4. Stop 钩子把同一段提示词重新喂回去
# 5. 重复直至完成
```

循环发生在**你当前会话内部**——不需要外部 bash 循环。`hooks/stop-hook.sh` 中的 Stop 钩子通过阻止正常的会话退出，构建出这个自引用反馈循环。

由此形成一个**自引用反馈循环**：
- 提示词在迭代之间从不改变
- Claude 之前的工作保存在文件里
- 每次迭代都能看到修改过的文件和 git 历史
- Claude 通过阅读文件中自己过往的工作实现自主改进

## 快速开始

```bash
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, input validation, tests. Output <promise>COMPLETE</promise> when done." --completion-promise "COMPLETE" --max-iterations 50
```

Claude 将会：
- 迭代式地实现该 API
- 运行测试并观察失败
- 根据测试输出修复 bug
- 持续迭代直到满足所有需求
- 完成时输出完成承诺（completion promise）

## 命令

### /ralph-loop

在当前会话中启动一个 Ralph 循环。

**用法：**
```bash
/ralph-loop "<prompt>" --max-iterations <n> --completion-promise "<text>"
```

**选项：**
- `--max-iterations <n>` - N 次迭代后停止（默认：无限制）
- `--completion-promise <text>` - 表示完成的标志语句

### /cancel-ralph

取消正在运行的 Ralph 循环。

**用法：**
```bash
/cancel-ralph
```

## 提示词编写最佳实践

### 1. 明确的完成标准

❌ 差：“Build a todo API and make it good.”（写一个 todo API，要写好。）

✅ 好：
```markdown
为 todos 构建一个 REST API。

完成标准：
- 所有 CRUD 端点可用
- 具备输入校验
- 测试通过（覆盖率 > 80%）
- 附带带 API 文档的 README
- 输出：<promise>COMPLETE</promise>
```

### 2. 增量式目标

❌ 差：“Create a complete e-commerce platform.”（创建一个完整的电商平台。）

✅ 好：
```markdown
阶段 1：用户认证（JWT、测试）
阶段 2：商品目录（列表/搜索、测试）
阶段 3：购物车（添加/移除、测试）

所有阶段完成后输出 <promise>COMPLETE</promise>。
```

### 3. 自我纠错

❌ 差：“Write code for feature X.”（为功能 X 写代码。）

✅ 好：
```markdown
按 TDD 实现功能 X：
1. 先写失败的测试
2. 实现功能
3. 运行测试
4. 如有失败，调试并修复
5. 必要时重构
6. 重复直到全部通过
7. 输出：<promise>COMPLETE</promise>
```

### 4. 逃生通道

始终使用 `--max-iterations` 作为安全网，防止在不可能完成的任务上陷入无限循环：

```bash
# 建议：始终设置一个合理的迭代上限
/ralph-loop "Try to implement feature X" --max-iterations 20

# 在提示词中写明卡住时该怎么办：
# "15 次迭代后如果仍未完成：
#  - 记录阻碍进展的因素
#  - 列出已尝试过的办法
#  - 提出替代方案"
```

**注意**：`--completion-promise` 采用精确字符串匹配，因此无法用它表达多种完成条件（比如 "SUCCESS" 与 "BLOCKED"）。请始终以 `--max-iterations` 作为主要安全机制。

## 理念

Ralph 体现了以下几个关键原则：

### 1. 迭代 > 完美
不要指望第一次就做到完美。让循环去打磨工作成果。

### 2. 失败即数据
“确定性地糟糕”意味着失败是可预测且富有信息量的。利用它们来调优提示词。

### 3. 操作者的水平很重要
成功取决于写出好的提示词，而不仅仅是拥有好的模型。

### 4. 坚持者胜
不断尝试直到成功。重试逻辑由循环自动处理。

## 何时使用 Ralph

**适合：**
- 有明确成功标准、定义清晰的任务
- 需要迭代和打磨的任务（例如让测试通过）
- 可以放手不管的全新（greenfield）项目
- 带自动验证手段的任务（测试、linter）

**不适合：**
- 需要人类判断或设计决策的任务
- 一次性操作
- 成功标准不清晰的任务
- 生产环境调试（请改用有针对性的调试）

## 实战成果

- 在 Y Combinator 黑客松测试中一夜成功生成 6 个代码仓库
- 一份价值 5 万美元的合同仅花费 297 美元 API 成本即告完成
- 用这种方法在 3 个月里创造出一门完整的编程语言（“cursed”）

## Windows 兼容性

Stop 钩子使用 bash 脚本，需要 Git for Windows 才能正常运行。

**问题**：在 Windows 上，`bash` 命令可能解析到 WSL bash（往往配置不当）而不是 Git Bash，导致钩子失败并报如下错误：
- `wsl: Unknown key 'automount.crossDistro'`
- `execvpe(/bin/bash) failed: No such file or directory`

**解决方法**：编辑缓存插件的 `hooks/hooks.json`，显式使用 Git Bash：

```json
"command": "\"C:/Program Files/Git/bin/bash.exe\" ${CLAUDE_PLUGIN_ROOT}/hooks/stop-hook.sh"
```

**位置**：`~/.claude/plugins/cache/claude-plugins-official/ralph-wiggum/<hash>/hooks/hooks.json`

**注意**：请使用 `Git/bin/bash.exe`（带正确 PATH 的包装器），不要用 `Git/usr/bin/bash.exe`（未把工具加入 PATH 的原生 MinGW bash）。

## 了解更多

- 原始技术：https://ghuntley.com/ralph/
- Ralph Orchestrator：https://github.com/mikeyobrien/ralph-orchestrator

## 获取帮助

在 Claude Code 中运行 `/help` 查看详细的命令参考和示例。
