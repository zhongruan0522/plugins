# Claude Code 的 Sonatype Guide 插件

集成 [Sonatype Guide](https://guide.sonatype.com) MCP 服务器，为 Claude Code 提供软件供应链情报与依赖安全分析。

## 功能特性

安装本插件后，Claude Code 可以：

- **主动检查依赖** - 在安装或升级软件包之前自动进行评估，而不仅是在你开口询问时
- **分析漏洞** - 呈现带有严重级别评分的 CVE，并区分直接风险与传递性风险
- **推荐安全版本** - 结合开发者信任评分（Developer Trust Score）与破坏性变更分析，给出排序后的升级路径
- **审计你的项目** - 扫描依赖清单中的安全、许可证与策略合规问题
- **比较备选方案** - 在多个库之间做选择时提供并排的安全对比

## 前提条件

你需要一个 Sonatype Guide 账户和 API 令牌。

### 获取令牌

1. 访问 [guide.sonatype.com/settings/tokens](https://guide.sonatype.com/settings/tokens)
2. 生成一个新令牌
3. 复制令牌值

## 配置

### 1. 设置环境变量

将你的 Sonatype Guide 令牌添加为环境变量。以下两种方式任选其一：

**方式 A：Shell 配置文件**（推荐）

添加到 `~/.zshrc`、`~/.bashrc` 或 `~/.profile`：

```bash
export SONATYPE_GUIDE_TOKEN="your-token-here"
```

然后重新加载：
```bash
source ~/.zshrc  # 或 ~/.bashrc
```

**方式 B：Claude Code 设置文件**

添加到 `.claude/settings.json` 或 `~/.claude/settings.json`：

```json
{
  "env": {
    "SONATYPE_GUIDE_TOKEN": "your-token-here"
  }
}
```

### 2. 安装插件

```bash
claude plugin install sonatype-guide
```

### 3. 验证安装

检查 MCP 服务器状态：

```
/mcp
```

你应该能看到 `sonatype-guide` 已列出并处于已连接状态。

## 用法

本插件包含一个技能，当 Claude 安装、添加或升级依赖时会自动激活——无需任何特殊语法。你也可以直接提问：

```
扫描我的 package.json，找出存在漏洞的依赖
```

```
spring-core 最安全、应该使用的版本是哪个？
```

```
发起 HTTP 请求时，我该用 axios 还是 got？
```

## 故障排除

**MCP 服务器无法连接：**
- 验证你的令牌：`echo $SONATYPE_GUIDE_TOKEN`
- 在 [guide.sonatype.com](https://guide.sonatype.com) 确认你的令牌有效
- 设置环境变量后重启 Claude Code

**令牌未被识别：**
- 如果使用的是 Shell 配置文件，请重启终端
- 如果使用的是 settings.json，请检查 JSON 语法
- 变量名必须严格为 `SONATYPE_GUIDE_TOKEN`

## 安全

切勿将令牌提交到版本控制。本插件通过环境变量展开来保证凭据安全且与特定用户绑定。

## 链接

- [Sonatype Guide](https://guide.sonatype.com)
- [Sonatype](https://www.sonatype.com)
- [Claude Code 插件文档](https://docs.anthropic.com/en/docs/claude-code/plugins)
