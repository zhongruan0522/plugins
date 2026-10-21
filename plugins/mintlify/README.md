# Mintlify Claude 插件

一个 Claude Code 插件，为 Claude 提供构建 [Mintlify](https://mintlify.com) 站点的全面参考。

## 功能说明

安装一个 `mintlify` 技能，Claude 在开发基于 Mintlify 的站点时可以调用它。

该技能涵盖：

- **组件** — 所有 Mintlify 组件的完整语法与属性（callouts、cards、steps、tabs、accordions、code groups、fields、frames 等）
- **配置** — 完整的 `docs.json` 设置参考，包括主题、颜色、logo、字体、导航栏、页脚、重定向、集成以及自定义 CSS/JS
- **导航** — 所有导航模式：分组、标签页、锚点、下拉菜单、产品、版本和语言
- **API 文档** — OpenAPI 与 AsyncAPI 配置、端点页面、API playground 配置

## 安装

将本仓库中的技能安装到任意环境：

```
npx skills add mintlify/mintlify-claude-plugin
```

作为 Claude Code 插件安装：

```
/plugin marketplace add mintlify/mintlify-claude-plugin
/plugin install mintlify@mintlify-marketplace
```

## 包含的技能

### `mintlify`

使用 `/mintlify:mintlify` 调用，或在开发 Mintlify 项目时让 Claude 自动使用。

该技能会加载一份精简的核心参考，并仅在任务需要时才路由到详细的参考文件：

| 参考文件 | 内容 |
|----------------|----------|
| `reference/components.md` | 所有组件的语法、属性与示例 |
| `reference/configuration.md` | 完整的 `docs.json` schema 与 frontmatter 字段 |
| `reference/navigation.md` | 各种导航模式及其适用场景 |
| `reference/api-docs.md` | API 文档设置与 playground 配置 |

## 许可证

MIT
