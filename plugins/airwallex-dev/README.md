# airwallex-dev 插件（Claude Code / Cursor / Codex）

教会 Claude、Cursor 和 Codex 如何在你的代码库中构建 Airwallex 集成：结账页面、卡元素（card elements）、入驻引导流程和订阅计费。

`airwallex-agentos` 为对话提供工作流和参考类技能，而 `airwallex-dev` 的技能则作用于你项目中的代码。其中五个技能会直接生成这类代码：每个技能选定一个场景，只读取该场景所需的参考文件，然后把路由、组件和配置写入项目。`airwallex-ai-provider-card-mit` 是例外——它输出的是一份实施计划文档，自身不保留任何代码示例。

## 技能

| 技能 | 类别 | 说明 |
| --- | --- | --- |
| [airwallex-hpp](skills/airwallex-hpp/SKILL.md) | 支付 | 托管支付页（Hosted Payment Page）：由 Airwallex 托管的基于重定向的结账 |
| [airwallex-dropin](skills/airwallex-dropin/SKILL.md) | 支付 | Drop-in Element：支持多种支付方式的内嵌 UI |
| [airwallex-split-card](skills/airwallex-split-card/SKILL.md) | 支付 | Split Card Element：卡号、有效期和 CVC 输入框相互分离，可完全控制 UI |
| [airwallex-billing-checkout](skills/airwallex-billing-checkout/SKILL.md) | 计费 | Billing Hosted Checkout，用于订阅、一次性付款和银行卡保存（SETUP） |
| [airwallex-kyc](skills/airwallex-kyc/SKILL.md) | 关联账户 | 通过内嵌组件或托管链接完成关联账户的 KYC 入驻 |
| [airwallex-ai-provider-card-mit](skills/airwallex-ai-provider-card-mit/SKILL.md) | 支付 | 面向 AI 提供商所用 card-on-file MIT 流程（充值、自动续充、订阅）的实施计划 |

大多数技能接受一个 `scenario` 参数（见各自 `SKILL.md` 的 `argument-hint`），因此智能体只加载任务所需的内容。`airwallex-billing-checkout` 是例外：它没有 `argument-hint`，而是通过交互式的信息收集问卷来决定输出哪些部分。

### 技能文件结构

每个技能都有一个承载路由逻辑和生成规则的 `SKILL.md`，外加一个 `references/` 文件夹，其中包含 SDK 代码片段、API schema 和样式选项，智能体只在需要时才会加载：

```
skills/<skill-name>/
├── SKILL.md                       # 场景路由、生成规则、参考文件索引
└── references/
    └── ...                        # SDK 代码片段、API schema、样式、错误处理
```

## 插件结构

```
airwallex-dev/
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
├── .cursor-plugin/plugin.json
├── .cursor-mcp.json
├── .mcp.json
├── assets/
│   ├── icon.svg
│   └── logo.svg
├── README.md
└── skills/
    └── <skill-name>/
        ├── SKILL.md
        └── references/
            └── ...
```

## 前提条件

- **沙箱账户：** 用于测试所生成集成的 Airwallex 沙箱凭据。
- **Airwallex Developer MCP 连接器：** 让智能体能够搜索最新的 API 文档并调用沙箱 API。对大多数技能而言是可选的——只有当问题超出其参考文件范围时才会用到；但 `airwallex-ai-provider-card-mit` **必须**使用它，因为该技能在写入每个 API 字段和 SDK 结构之前都会通过 MCP 加以核实。设置：[Connectors](https://www.airwallex.com/docs/developer-tools/ai/developer-connector)。
