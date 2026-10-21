<p>
  <a href="https://www.aihero.dev/s/skills-newsletter">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skills-repo-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png">
      <img alt="Skills" src="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png" width="369">
    </picture>
  </a>
</p>

# 写给真正工程师的技能

[![skills.sh](https://skills.sh/b/mattpocock/skills)](https://skills.sh/mattpocock/skills)

我每天都在用的智能体技能，用来做真正的工程，而不是 vibe coding。

开发真实的应用很难。GSD、BMAD、Spec-Kit 这类方法试图通过接管整个流程来提供帮助。但这样做的代价是夺走你的控制权，并让流程中的 bug 难以解决。

这些技能的设计目标是小巧、易调整、可组合。它们适用于任何模型，凝结着几十年的工程经验。尽管动手改造，把它们变成你自己的东西。祝用得愉快。

如果你想跟进这些技能的变动，以及我今后新建的技能，可以订阅我的新闻通讯，加入约 60,000 名开发者的行列：

[订阅新闻通讯](https://www.aihero.dev/s/skills-newsletter)

## 安装（30 秒完成设置）

插件会自行更新。[skills.sh](https://skills.sh/mattpocock/skills) 会把可编辑的文件复制进你的项目，由你手动更新。每个智能体二选一，因为两个都装会让你把每个技能装上两遍。

### 1. 获取技能

<details>
<summary><strong>Claude Code</strong></summary>

```bash
claude plugin install mattpocock-skills@claude-plugins-official
```

默认自行更新。

</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
codex plugin marketplace add mattpocock/skills
codex plugin add mattpocock-skills@mattpocock
```

启动时自行更新。

</details>

<details>
<summary><strong>GitHub Copilot</strong>（CLI 与 VS Code）</summary>

```bash
copilot plugin marketplace add mattpocock/skills
copilot plugin install mattpocock-skills@mattpocock
```

然后，一次性地把以下内容加入 `~/.copilot/settings.json`：

```json
{
  "extraKnownMarketplaces": {
    "mattpocock": { "source": { "source": "github", "repo": "mattpocock/skills" }, "autoUpdate": true }
  }
}
```

在 VS Code 中，运行 **Chat: Install Plugin From Source** 并输入 `https://github.com/mattpocock/skills`。它每天更新。

</details>

<details>
<summary><strong>Gemini CLI</strong>（手动更新）</summary>

```bash
gemini skills install https://github.com/mattpocock/skills.git --path skills/engineering
gemini skills install https://github.com/mattpocock/skills.git --path skills/productivity
```

要更新，重新运行这两条命令即可。

</details>

<details>
<summary><strong>其他任何智能体，或可编辑文件</strong>（手动更新）</summary>

```bash
npx skills@latest add mattpocock/skills -a <agent>  # cursor、opencode、devin、windsurf、amp、pi；省略 -a 可自行选择
```

安装器询问要安装哪些技能时，请把 `setup-matt-pocock-skills` 选上。更新时运行 `npx skills@latest update`，再重新运行 `add` 以获取新增技能。

</details>

### 2. 运行 `/setup-matt-pocock-skills`

在你的智能体中，每个仓库运行一次。它会：

- 询问你想使用哪种 issue 跟踪器（GitHub、GitLab、本地文件，或你描述的任何其他方式）
- 询问你分诊工单时会打哪些标签（`/triage` 会用到标签）
- 询问你想把我们创建的文档保存在哪里

### 3. 搞定，可以开工了。

## 为什么要有这些技能

我构建这些技能，是为了修复我在 Claude Code、Codex 和其他编码智能体身上看到的常见失败模式。

### #1：智能体没做我想要的事

> “没有人确切知道自己想要什么”
>
> David Thomas & Andrew Hunt，[The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**问题所在**。软件开发中最常见的失败模式是错位。你以为开发者明白你想要什么。等你看到他们做出来的东西，才发现对方完全没理解你。

在 AI 时代也是一样。你和智能体之间存在沟通鸿沟。解决办法是一次**追问环节**：让智能体就你要构建的东西向你提出细致的问题。

**解决方案**是使用：

- [`/grill-me`](./skills/productivity/grill-me/SKILL.md) - 用于非代码场景
- [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md) - 与 [`/grill-me`](./skills/productivity/grill-me/SKILL.md) 相同，但附赠更多好东西（见下文）

这些是我最受欢迎的技能。它们帮助你在动手之前与智能体对齐，并深入思考你要做的改动。_每次_想做出改动时都请使用它们。

### #2：智能体太啰嗦

> 有了通用语言，开发者之间的对话和代码的表达都源自同一个领域模型。
>
> Eric Evans，[Domain-Driven-Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

**问题所在**：项目之初，开发者与软件的服务对象（领域专家）通常说着不同的语言。

我在自己的智能体身上感受到了同样的张力。智能体通常被直接丢进项目，被要求边干边弄懂那些行话。于是本可以用 1 个词的地方，它们要用上 20 个词。

**解决方案**是建立共享语言：一份帮助智能体解读项目所用行话的文档。

<details>
<summary>
示例
</summary>

下面是一个[术语表](https://github.com/mattpocock/course-video-manager/blob/076a5a7a182db0fe1e62971dd7a68bcadf010f1c/CONTEXT.md)示例（在该固定 commit 时它还叫 `CONTEXT.md`，是这些技能为这一约定改名之前的产物），来自我的 `course-video-manager` 仓库。哪一种更好读？

- **之前**：“当一门课程中某个章节里的 lesson 被设为‘真实’（即在文件系统中获得一个位置）时，会出现问题”
- **之后**：“materialization cascade 出了问题”

这种简洁会在一次又一次会话中带来回报。

</details>

这一做法内建于 [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md)。它同样是一个追问环节，但还会帮助你与 AI 建立共享语言，并把难以解释的决策记录成 ADR。

这有多强大很难用语言形容。它可能是本仓库中最酷的一个技巧。试过就知道。

> [!TIP]
> 共享语言除了减少啰嗦之外还有很多别的好处：
>
> - **变量、函数和文件的命名保持一致**，都使用共享语言
> - 因此智能体**更容易在代码库中导航**
> - 智能体**思考时消耗的 token 也更少**，因为它可以使用一套更简洁的语言

### #3：代码跑不起来

> “始终采取小而有意识的步骤。反馈的速率就是你的速度上限。永远不要承接过大的任务。”
>
> David Thomas & Andrew Hunt，[The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**问题所在**：假设你和智能体已经就构建什么达成一致。可智能体 _依然_ 产出垃圾代码，怎么办？

这时该审视你的反馈循环了。如果得不到自己产出的代码实际运行情况的反馈，智能体就是在盲飞。

**解决方案**：你需要那一整套常规反馈循环：静态类型、浏览器访问和自动化测试。

对自动化测试而言，red-green-refactor 循环至关重要：智能体先写一个会失败的测试，再修复它。这能为智能体提供稳定水平的反馈，从而产出好得多的代码。

我做了一个可以放进任何项目的 **[`/tdd`](./skills/engineering/tdd/SKILL.md) 技能**。它鼓励 red-green-refactor，并就什么是好测试、什么是坏测试给智能体提供了大量指导。

调试方面，我还做了一个 **[`/diagnosing-bugs`](./skills/engineering/diagnosing-bugs/SKILL.md)** 技能，把最佳调试实践封装成一个有纪律的循环，逐阶段把关。

### #4：我们造出了一个大泥球

> “_每天_都要为系统的设计投资。”
>
> Kent Beck，[Extreme Programming Explained](https://www.amazon.co.uk/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)

> “最好的模块是深的。它们让大量功能通过一个简单的接口即可访问。”
>
> John Ousterhout，[A Philosophy Of Software Design](https://www.amazon.co.uk/Philosophy-Software-Design-2nd/dp/173210221X)

**问题所在**：用智能体构建的大多数应用都复杂且难以修改。智能体在极大加速编码的同时，也加速了软件熵增。代码库正以前所未有的速度变得更复杂。

**解决方案**是一种激进全新的 AI 辅助开发方式：在乎代码的设计。

这一理念内建于这些技能的每一层：

- [`/to-spec`](./skills/engineering/to-spec/SKILL.md) 在创建规格之前，先考问你即将触及哪些模块

更关键的是，[`/improve-codebase-architecture`](./skills/engineering/improve-codebase-architecture/SKILL.md) 会扫描代码库，寻找把模块做深的机会，并把候选清单交给你。我建议每隔几天就在你的代码库上运行一次。它是普查，不是抢救：在真正老旧的代码库上它能找到货真价实的候选点，但不会替你解开那团泥球。

### 小结

软件工程的基本功比以往任何时候都更重要。这些技能是我把基本功浓缩为可重复实践的最大努力，帮助你交付职业生涯中最好的应用。祝用得愉快。

## 参考

这些技能按一个维度划分：由谁调用。**用户调用**技能只有在你输入时才会被触达（例如 `/grill-me`），它们的职责是编排。**模型调用**技能既可以由你调用，_也_ 会被智能体在任务合适时自动取用，它们承载可复用的纪律。用户调用技能可以调用模型调用技能，但绝不会调用另一个用户调用技能。

### 工程类

我每天做代码工作时使用的技能。

**用户调用**

- **[ask-matt](./skills/engineering/ask-matt/SKILL.md)**：询问哪个技能或流程适合你的情况。本仓库用户调用技能的路由器。
- **[grill-with-docs](./skills/engineering/grill-with-docs/SKILL.md)**：追问环节，同时构建项目的领域模型，打磨术语，并就地更新 `GLOSSARY.md` 和 ADR。
- **[triage](./skills/engineering/triage/SKILL.md)**：让 issue 在一个由分诊角色构成的状态机中流转。
- **[improve-codebase-architecture](./skills/engineering/improve-codebase-architecture/SKILL.md)**：扫描代码库寻找把模块做深的机会，以可视化 HTML 报告呈现，然后就你选中的那一个展开追问。
- **[setup-matt-pocock-skills](./skills/engineering/setup-matt-pocock-skills/SKILL.md)**：为本仓库配置工程类技能（issue 跟踪器、分诊标签、领域文档布局）。使用其他工程类技能之前，每个仓库先运行一次。
- **[to-spec](./skills/engineering/to-spec/SKILL.md)**：把当前对话整理成规格并发布到 issue 跟踪器。不做访谈，只是综合你们已经讨论过的内容。
- **[to-tickets](./skills/engineering/to-tickets/SKILL.md)**：把任何计划、规格或对话拆解成一组曳光弹式工单，每个工单都声明自身的阻塞关系；可以以文本形式写入本地文件，也可以在真实跟踪器上创建为原生的阻塞链接。
- **[implement](./skills/engineering/implement/SKILL.md)**：构建规格或一组工单所描述的工作，在预先约定的接缝处驱动 `/tdd`，并在提交前以 `/code-review` 收尾。
- **[implement-spec](./skills/engineering/implement-spec/SKILL.md)**：在一个集成分支上实现整份规格。把工单当作任务图来处理，在就绪边界上并行运行实现者子智能体以获得最大并发，最后以 `/code-review` 收尾。
- **[wayfinder](./skills/engineering/wayfinder/SKILL.md)**：规划超出单个智能体会话容纳量的大型工作，把它变成 issue 跟踪器上一张共享的决策工单地图，然后逐一解决，直到通往目的地的路径清晰。
- **[retro](./skills/engineering/retro/SKILL.md)**：在会话结束后，对编码智能体的环境（导航、自动化检查、编码规范、引导文件、工具链）提出改进建议，最严重的排在最前。

**模型调用**

- **[prototype](./skills/engineering/prototype/SKILL.md)**：构建一次性原型来回答设计问题：状态/逻辑类问题用一个可分享的单一 HTML 文件；UI 类问题则提供几个差异极大的变体，可在同一路由中切换。
- **[diagnosing-bugs](./skills/engineering/diagnosing-bugs/SKILL.md)**：针对疑难 bug 和性能退化的有纪律诊断循环：构建一个能让该 bug 变红（失败）的反馈循环 → 缩小范围 → 提出假设 → 插桩 → 修复 → 回归测试。
- **[research](./skills/engineering/research/SKILL.md)**：对照高可信度的一手来源调查某个问题，并把发现以带引用的 Markdown 文件形式存进仓库，以后台智能体方式运行。
- **[tdd](./skills/engineering/tdd/SKILL.md)**：以 red-green-refactor 循环进行测试驱动开发。一次一条垂直切片地构建功能或修复 bug。
- **[domain-modeling](./skills/engineering/domain-modeling/SKILL.md)**：主动构建并打磨项目的领域模型：用术语表校验术语，用边界场景做压力测试，并就地更新 `GLOSSARY.md` 和 ADR。
- **[codebase-design](./skills/engineering/codebase-design/SKILL.md)**：设计深模块的共享纪律与词汇：在小接口背后承载大量行为，放在干净的接缝处，并可透过该接口测试。
- **[code-review](./skills/engineering/code-review/SKILL.md)**：对自某个固定点以来的 diff 做双轴审查：**规范**（是否符合仓库的编码标准，外加一份 Fowler 坏味道基线？）与**规格**（是否忠实实现了源头的 issue/规格？），以并行子智能体运行，互不污染。
- **[pr](./skills/engineering/pr/SKILL.md)**：Pull request 正文应有的形态：一个用最小视觉呈现就能讲清改动的摘要、证明改动确实生效的前后对比，以及一次合并风险评估（单向门还是双向门，外加影响范围）。
- **[wizard](./skills/engineering/wizard/SKILL.md)**：生成一个交互式 bash 向导，引导人完成只有他们自己才能执行的步骤：开通基础设施、设置凭据或 CI 密钥、走完陌生的第三方控制台，或执行一次性的迁移或切换。

### 生产力

通用工作流工具，不特定于代码。

**用户调用**

- **[grill-me](./skills/productivity/grill-me/SKILL.md)**：就某个计划或设计接受毫不留情的追问，直到设计树的每个分支都得到解决。
- **[handoff](./skills/productivity/handoff/SKILL.md)**：把当前对话压缩成交接文档，让另一个智能体能继续这项工作。
- **[teach](./skills/productivity/teach/SKILL.md)**：跨多个会话教会用户新技能或新概念，把当前目录用作有状态的教学工作区。
- **[to-questionnaire](./skills/productivity/to-questionnaire/SKILL.md)**：把你无法独自回答的决策变成一份 Markdown 问卷，交给唯一能回答的那个人异步填写，或在会议中一起完成。它追问的是你如何发送（发给谁、需要收回什么），而不是主题本身。
- **[wait-what](./skills/productivity/wait-what/SKILL.md)**：一旦某条消息没传达到位，立刻触发它。智能体会借助 `GLOSSARY.md` 中的词汇，用平实的语言、补上你缺失的上下文，重新表达一遍。

**模型调用**

- **[grilling](./skills/productivity/grilling/SKILL.md)**：就某个计划、决策或想法对用户展开毫不留情的追问，直到设计树的每个分支都得到解决。`grill-me`、`grill-with-docs`、`triage`、`wayfinder` 和 `improve-codebase-architecture` 背后可复用的访谈原语。
- **[writing-for-agents](./skills/productivity/writing-for-agents/SKILL.md)**：为智能体撰写文档：技能、AGENTS.md/CLAUDE.md，以及智能体通过指针访问的任何文档。
