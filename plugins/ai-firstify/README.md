# ai-firstify

审计、重构或从零搭建项目，使其符合 AI 优先（AI-first）设计原则。基于 [TechWolf AI-First Bootcamp](https://ai-first.techwolf.ai) 的 9 条设计原则和 7 种设计模式。

## 安装

```bash
# 添加 TechWolf 插件市场（一次即可）
claude plugin marketplace add techwolf-ai/ai-first-toolkit

# 安装插件
claude plugin install ai-firstify@techwolf-ai-first
```

### Codex

```bash
./install.sh ai-firstify
```

更新、卸载或验证：

```bash
./install.sh update ai-firstify
./install.sh uninstall ai-firstify
./install.sh verify ai-firstify
```

对于 Codex，本插件会安装：

- `ai-firstify`

安装器还会将插件元数据写入已安装的技能目录，并把一份 Codex 指引文件复制到 `~/.codex/skills/.techwolf-ai-first/plugins/ai-firstify/`。

### Google Antigravity

```bash
./install.sh ai-firstify --ide antigravity
```

更新、卸载或验证：

```bash
./install.sh update ai-firstify --ide antigravity
./install.sh uninstall ai-firstify --ide antigravity
./install.sh verify ai-firstify --ide antigravity
```

这会将插件安装为 `~/.gemini/config/plugins/ai-firstify/`（`plugin.json` + `installed_version.json` + `skills/`），与 Antigravity 自身插件所用的布局一致。

## 用法

当你让 Claude Code 做以下事情时，该技能会自动触发：

- **审计**项目："review"、"audit"、"analyze"、"assess"
- **重构**项目："ai-firstify"、"fix"、"improve"、"transform"
- **搭建**新项目："start"、"new project"、"bootstrap"、"build from scratch"

也可以直接调用：

```
/ai-firstify
```

## 模式

1. **审计**：跨 7 个维度进行只读分析，并输出带评分的报告
2. **重构**：先完成完整审计，再分 7 个阶段进行主动修复
3. **引导搭建**：通过引导式问答，交互式地搭建新项目

## 许可证

本项目基于 [MIT License](../../LICENSE) 授权。
