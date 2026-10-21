<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo/dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo/light.svg">
    <img alt="HyperFrames" src="docs/logo/light.svg" width="300">
  </picture>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/v/hyperframes.svg?style=flat" alt="npm 版本"></a>
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/dm/hyperframes.svg?style=flat" alt="npm 下载量"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="许可证"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22-brightgreen" alt="Node.js"></a>
  <a href="https://discord.gg/EbK98HBPdk"><img src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center"><b>编写 HTML。渲染视频。为智能体而生。</b></p>

<p align="center">
  <a href="https://hyperframes.heygen.com/quickstart">快速开始</a> |
  <a href="https://hyperframes.heygen.com/showcase">案例展示</a> |
  <a href="https://www.hyperframes.dev/">Playground</a> |
  <a href="https://hyperframes.heygen.com/catalog/blocks/data-chart">目录</a> |
  <a href="https://hyperframes.heygen.com/introduction">文档</a> |
  <a href="https://discord.gg/EbK98HBPdk">Discord</a>
</p>

<p align="center">
  <img src="docs/public/images/hyperframes-logo-motion-1280-trimmed.webp" alt="HyperFrames 演示：左侧的 HTML 代码转化为右侧渲染完成的视频" width="800">
</p>

HyperFrames 是一个开源框架，用于把 HTML、CSS、媒体和可定位动画转换成确定性的 MP4 视频。你可以在本地通过 CLI 使用它，在 AI 编程智能体中通过技能使用它，或把它作为托管创作工作流背后的渲染核心。

## 快速开始

### 通过 AI 编程智能体

安装 HyperFrames 技能，然后描述你想要的视频：

```bash
npx skills add heygen-com/hyperframes
```

> 选择器打开时默认全不勾选 —— **Core Skills** 分组就够用了：`/hyperframes` 路由技能会按需安装每条创作工作流。智能体和非交互运行应改用 `npx hyperframes skills update` —— 它安装的恰好是核心集，而 `skills add --all` 会安装全部 21 个已发布的技能。`.claude/skills` / `.agents/skills` 下的六个仓库内部技能默认排除。若要完整的已发布集合，请使用 `npx hyperframes skills`。
>
> `skills add` 解析的是 skills.sh 注册表 blob，它可能比 `main` 落后数小时。`npx hyperframes skills update` 从当前 `main` 安装，所以需要技能的最新版本时请用它。

试试这样的提示词：

> 使用 `/hyperframes`，制作一段 10 秒的产品介绍视频，带淡入标题、背景视频和轻柔的背景音乐。

这些技能教会智能体 HyperFrames 的生产循环：规划视频、编写合法的 HTML、接好可定位动画、添加媒体、lint、预览和渲染。它们适用于 Claude Code、Cursor、Gemini CLI、Codex 以及其他支持技能的编程智能体。

## 技能

HyperFrames 附带 21 个按需加载的智能体技能。先读 `/hyperframes` —— 它是路由，也是能力地图；对任何"帮我做一个……"的请求——视频、演示文稿或组合移植——它都会挑选一条工作流，并指向下面的领域技能。

默认使用**核心集** —— 路由技能按需安装每条创作工作流。`npx hyperframes skills update` 在任何环境下安装的都是这个核心集；交互式选择器（`npx skills add heygen-com/hyperframes`）把它列为 "Core Skills" 分组，且默认全不勾选。选择器只在交互环境下可用 —— 不带 `--skill` 的非交互或智能体运行会安装全部 21 个。要刻意安装全部 20 个，请使用 `npx skills add heygen-com/hyperframes --all`（跳过选择器）；只装一个，请使用 `npx skills add heygen-com/hyperframes --skill <name>`（裸名称，不带前导 `/`）。

此后安装保持精简：`npx hyperframes init` 会保持**核心集**为最新（路由技能、`hyperframes-*` 领域技能和 `media-use` —— 外加任何已安装的技能；`/figma` 保持按需），并且绝不扩大部分安装的范围；创作工作流**按需**安装 —— 路由技能在进入某条工作流之前会先运行 `npx hyperframes skills update <workflow>`。不会有什么背着你重新拉取全集。

### 上传到 Codex

从清单、品牌资产和技能的已提交 `HEAD` 版本，构建可直接上传的 Codex 插件归档：

```bash
bun run package:codex-plugin
```

该命令会写出 `dist/hyperframes-plugin.zip`（根文件夹为 `hyperframes/`），如果归档超过 Codex 的 100 MB 上传上限则直接失败。

### 路由技能

| 技能 | 适用场景 |
| --- | --- |
| `/hyperframes` | 凡是要求制作 / 创建 / 编辑 / 制作动画 / 渲染视频、动画或动态图形的请求，**先读它**。它是领域技能的能力地图、预先确认每份创作简报的意图层，也是下方创作工作流的意图路由。 |

### 创作工作流

| 技能 | 适用场景 |
| --- | --- |
| `/product-launch-video` | 任意**网站**——营销 / 发布 / 推广某个产品（依据其 URL、一份简报或脚本），或以网站自身画面为主角的站点导览 / 展示 / 社交短片。最长约 3 分钟（最佳区间 30-90 秒）。 |
| `/faceless-explainer` | 从任意文本**讲解某个主题 / 概念**——没有产品、没有 URL、不抓取网站；每个画面都由 LLM 构思（排版 / 抽象图形 / 图示 / 数据可视化）。 |
| `/pr-to-video` | 一个 **GitHub 拉取请求**（PR URL、`owner/repo#N` 引用，或"这个 PR"）→ 变更日志 / 功能揭晓 / 修复 / 重构讲解视频，通过 `gh` CLI 读取。 |
| `/embedded-captions` | 为已有的口播视频添加**字幕**（原素材不动）——逐字字幕栏、人物身后的嵌入式高光字幕，或纯电影感嵌入。 |
| `/talking-head-recut` | 用**设计好的图形叠加层**包装已有的口播 / 访谈 / 播客视频——下三分之一横条、数据标注、动态标题、引述、侧边面板、画中画。 |
| `/motion-graphics` | 短小的、**无旁白、以设计为主导的动态图形**（约 10 秒以内）——动态文字、数据 / 图表冲击、logo 标版、下三分之一横条、动态推文 / 标题。输出 MP4 或透明叠加层。 |
| `/music-to-video` | 一条**音乐曲目**（音频文件、可提取音频的视频，或根据情绪简报生成的音乐）→ **卡点同步**的视频——歌词、幻灯片或动感宣传片；音乐驱动节奏。 |
| `/slideshow` | **演示文稿 / 路演稿 / 交互式文稿**——离散的幻灯片、分步显示、分支、热点导航、演讲者模式。输出是可导航的文稿，而非渲染出的视频。 |
| `/general-video` | **其他一切**——更长或多场景的作品、品牌 / 集锦片、片头卡、静态循环、自由组合。不限输入与时长的兜底选项，也是伙伴模式（与全套工具箱共创）的所在。 |
| `/remotion-to-hyperframes` | 把已有 Remotion（React）组合的源码**移植**到 HyperFrames HTML。单向迁移，不是创作。 |

### 领域技能（按需加载）

创作工作流组合调用的原子能力——需要哪一层就引入哪一个。

| 技能 | 覆盖内容 |
| --- | --- |
| `/hyperframes-core` | 组合契约——`data-*` 时间属性、`class="clip"`、轨道、子组合、变量、由框架托管的媒体播放、确定性规则。 |
| `/hyperframes-animation` | 全部动画知识——原子运动规则、场景蓝图、转场、运行时适配器（GSAP / Lottie / Three.js / Anime.js / CSS / WAAPI / TypeGPU）。 |
| `/hyperframes-keyframes` | 跨运行时的可定位安全关键帧编写——GSAP 时间轴、CSS 关键帧、Anime.js、WAAPI、FLIP、路径、遮罩、SVG 变形 / 描绘、3D 纵深——外加针对已渲染动效的 `hyperframes keyframes` 诊断。 |
| `/hyperframes-creative` | 动画之外的创意指导——`frame.md` / `design.md`、配色、字体排印、旁白、节拍规划、音频响应式视觉、组合模式。 |
| `/media-use` | 媒体操作系统——把任何媒体需求（BGM、音效、图片、图标、logo、配音、调色、LUT）落成一份固定的本地文件或可直接粘贴的代码块 + 台账记录；目录里没有时通过 TTS / 音乐 / 图像模型生成；转写、加字幕、去背景，以及跨项目复用素材。共享的音频引擎 + 清单跟踪。 |
| `/hyperframes-cli` | CLI 开发循环——`init`、`lint`、`check`、`snapshot`、`preview`、`render`、`publish`、`doctor`，外加 HeyGen 托管的云端渲染（`cloud render`）和 AWS Lambda 渲染（`lambda deploy / render / progress`）。 |
| `/hyperframes-audio` | 混合组合中已放置的音频——配音挖槽（仅在语音占据的频段压低音乐垫，静态或动态皆可，含响度匹配）、效果链（EQ、压缩器、限制器、噪声门、饱和、延迟、混响、合唱、相位、bitcrush）、作用于音量或任意效果参数的自动化包络，以及同时为多条轨道承载同一条效果链、推子和自动化时钟的子混音总线（`<hf-audio-group>`）。音源的获取属于 `/media-use`。 |
| `/hyperframes-registry` | 通过 `hyperframes catalog` / `hyperframes add` 搜索注册表块和组件，并安装、接入组合。在手工搭建任何有名有姓的外观、效果、处理或转场之前先加载它。也涵盖编写新块或新组件向上游贡献。 |
| `/figma` | 把 Figma 资产、令牌、组件和分镜区段导入组合 → 重建动效（把帧读作状态而非幻灯片）（REST/CLI），外加 Motion 动画（MCP）和着色器（MCP 源码 / 原生导出）。 |

有关视觉设计交接工作流，请参阅 [Claude Design 指南](https://hyperframes.heygen.com/guides/claude-design)和 [Open Design 指南](https://hyperframes.heygen.com/guides/open-design)。

### 通过 CLI 手动操作

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # 在浏览器中预览，支持实时重载
npx hyperframes render       # 渲染为 MP4
```

**环境要求：** Node.js 22+、FFmpeg

## 你可以做什么

没有灵感？浏览 [案例展示](https://hyperframes.heygen.com/showcase)，那里有可以观看、阅读、运行和改编的成品视频。

- 产品发布视频和功能公告
- 带动画代码 diff、旁白和字幕的 PR 讲解
- 数据可视化、图表竞赛和地图动画
- 带动态字幕、叠加层和音乐的社交视频
- 文档转视频、PDF 转视频和站点导览讲解
- 用于自动化内容流水线的可复用动态图形

## Frame.md

**frame.md —— 你的设计系统，为视频而备。**

每个品牌都有一份 `design.md`，但没有一份是为镜头写的。`frame.md` 正是缺失的转译层：它把面向网页语境的设计规范反转为面向画幅的版本——同样的令牌、同样的规则，只是经过重写，让 AI 智能体无需猜测尺寸比例、也不必伸手去拿网页装饰元素，就能创作出宣传视频。

输出是一份整个工具链都能读懂的 `DESIGN.md` 超集。原子组件依然神圣。组合方式依然自由。数字来自脚本。

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/biennale-yellow"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/biennale-yellow.png" alt="Biennale Yellow" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/biennale-yellow">Biennale Yellow</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/blockframe"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blockframe.png" alt="BlockFrame" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/blockframe">BlockFrame</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/blue-professional"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blue-professional.png" alt="Blue Professional" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/blue-professional">Blue Professional</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/bold-poster"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/bold-poster.png" alt="Bold Poster" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/bold-poster">Bold Poster</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/broadside"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/broadside.png" alt="Broadside" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/broadside">Broadside</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/capsule"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/capsule.png" alt="Capsule" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/capsule">Capsule</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/cartesian"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cartesian.png" alt="Cartesian" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/cartesian">Cartesian</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/cobalt-grid"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cobalt-grid.png" alt="Cobalt Grid" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/cobalt-grid">Cobalt Grid</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/coral"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/coral.png" alt="Coral" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/coral">Coral</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/creative-mode"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/creative-mode.png" alt="Creative Mode" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/creative-mode">Creative Mode</a></b>
    </td>
  </tr>
</table>

在 [hyperframes.dev/design](https://www.hyperframes.dev/design) 浏览并改编全部模板。

## 工作原理

用 HTML 定义视频。用 data 属性声明时序和轨道。通过 GSAP、CSS、Lottie、Three.js、Anime.js、WAAPI 或你自己的帧适配器实现可定位动画。

```html
<div id="stage" data-composition-id="launch" data-start="0" data-width="1920" data-height="1080">
  <video
    class="clip"
    data-start="0"
    data-duration="6"
    data-track-index="0"
    src="intro.mp4"
    muted
    playsinline
  ></video>

  <h1 id="title" class="clip" data-start="1" data-duration="4" data-track-index="1">Launch day</h1>

  <audio
    data-start="0"
    data-duration="6"
    data-track-index="2"
    data-volume="0.5"
    src="music.wav"
  ></audio>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>
```

在浏览器中即时预览。在本地或 Docker 中渲染。渲染器在无头 Chrome 中逐帧定位，并用 FFmpeg 编码输出，因此相同的输入总会产出相同的视频。

## HyperFrames 技术栈

HyperFrames 是开源渲染引擎，外加一圈围绕 HTML 原生视频创作不断壮大的工具。

| 组成部分 | 状态 | 功能 |
| --- | --- | --- |
| CLI | 已可用 | 为本地视频项目搭建脚手架、预览、lint、检查并渲染 |
| Core / Engine / Producer | 已可用 | 解析组合、驱动无头 Chrome、编码视频并混音 |
| Catalog | 已可用 | 可复用的块和组件，涵盖转场、叠加层、字幕、图表、地图和效果 |
| 智能体技能 | 已可用 | 教会编程智能体通用 Web 文档没有覆盖的视频制作模式 |
| Studio | 已可用，持续演进 | 用于预览和编辑组合的浏览器界面 |
| AWS Lambda 渲染 | 已可用 | 部署分布式渲染栈，从你的笔记本或 CI 驱动渲染 |
| [hyperframes.dev](https://www.hyperframes.dev/) | 已可用 | 社区游乐场：预览、迭代、分享和渲染 HTML 原生视频项目 |
| [frame.md](https://www.hyperframes.dev/design) | 已可用 | 把你的设计系统反转给镜头——一份智能体可以据此创作视频的 DESIGN.md 超集 |

## 目录

安装开箱即用的块和组件：

```bash
npx hyperframes add flash-through-white   # 着色器转场
npx hyperframes add instagram-follow      # 社交叠加层
npx hyperframes add data-chart            # 动态图表
```

在 [hyperframes.heygen.com/catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart) 浏览目录。

## 为什么选择 HyperFrames？

- **HTML 原生：**组合就是带 data 属性的 HTML 文件。不强制 React，没有专有时间轴格式。
- **对智能体友好：**智能体本来就会写 HTML，CLI 默认也是非交互的。
- **确定性：**相同输入、相同帧、相同输出。为 CI、回归测试和自动化渲染而生。
- **无构建步骤：**`index.html` 组合可以直接播放，也能在浏览器中直接预览。
- **基于适配器的动画：**接入 GSAP、CSS 动画、Lottie、Three.js、Anime.js、WAAPI 或自定义运行时。
- **开源：**Apache 2.0 许可，没有按次渲染收费，也没有商用门槛。

## HyperFrames 与 Remotion

HyperFrames 的灵感来自 [Remotion](https://www.remotion.dev)。两者都用无头 Chrome 和 FFmpeg 渲染视频。主要差别在创作模型：Remotion 押注 React 组件；HyperFrames 押注人和智能体都能轻松书写的纯 HTML。

|                          | **HyperFrames**                       | **Remotion**                            |
| ------------------------ | ------------------------------------- | --------------------------------------- |
| 创作方式 | HTML + CSS + 可定位动画 | React 组件 |
| 构建步骤 | 无；`index.html` 直接播放 | 需要打包器 |
| 智能体交接 | 纯 HTML 文件 | JSX / React 项目 |
| 库时钟动画 | 经适配器实现可定位、帧精确 | 墙钟动画模式需要小心处理 |
| 分布式渲染 | 本地与 AWS Lambda 两条渲染路径 | Remotion Lambda，成熟的云端渲染器 |
| 许可证 | Apache 2.0 | 源码可见的 Remotion License |

完整对比请阅读 [HyperFrames vs Remotion 指南](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion)。

## 文档

完整文档：[hyperframes.heygen.com/introduction](https://hyperframes.heygen.com/introduction)

- [快速开始](https://hyperframes.heygen.com/quickstart)
- [案例展示](https://hyperframes.heygen.com/showcase)
- [指南](https://hyperframes.heygen.com/guides/gsap-animation)
- [API 参考](https://hyperframes.heygen.com/packages/core)
- [目录](https://hyperframes.heygen.com/catalog/blocks/data-chart)
- [示例](https://hyperframes.heygen.com/examples)
- [AWS Lambda 渲染](https://hyperframes.heygen.com/deploy/aws-lambda)

## 软件包

| 软件包 | 描述 |
| --- | --- |
| [`hyperframes`](packages/cli) | 用于创建、预览、lint 和渲染组合的 CLI |
| [`@hyperframes/core`](packages/core) | 类型、解析器、生成器、linter、运行时和帧适配器 |
| [`@hyperframes/engine`](packages/engine) | 使用 Puppeteer 和 FFmpeg 的可定位页面转视频捕获引擎 |
| [`@hyperframes/producer`](packages/producer) | 涵盖捕获、编码和混音的完整渲染流水线 |
| [`@hyperframes/studio`](packages/studio) | 基于浏览器的组合编辑器 UI |
| [`@hyperframes/player`](packages/player) | 可嵌入的 `<hyperframes-player>` Web 组件 |
| [`@hyperframes/shader-transitions`](packages/shader-transitions) | 面向组合的 WebGL 着色器转场 |
| [`@hyperframes/aws-lambda`](packages/aws-lambda) | 面向分布式渲染的 AWS Lambda SDK 和部署入口 |

## 社区

HyperFrames 在 [HeyGen](https://www.heygen.com) 的生产环境中使用，[ADOPTERS.md](ADOPTERS.md) 中收录了来自 [tldraw](https://tldraw.com)、[TanStack](https://tanstack.com) 等团队的社区案例。如果你的团队在使用 HyperFrames，欢迎提交 PR。

- 问题和想法：[Discord](https://discord.gg/EbK98HBPdk)
- Bug 和功能请求：[GitHub Issues](https://github.com/heygen-com/hyperframes/issues)
- 用户调研：[与 HyperFrames 团队轻松聊 30 分钟](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cSpKoDgmcmRrgekrnrgqmvPT8W6F2Zg6e7MY7IJqaZKwpn_I0NdTHkN390iguMepE_NVg8ezb?gv=true)——无需准备，也没有推销
- 安全问题报告：[SECURITY.md](SECURITY.md)
- 参与贡献：[CONTRIBUTING.md](CONTRIBUTING.md)

## 开发说明

本仓库使用 [Git LFS](https://git-lfs.com) 存放 `packages/producer/tests/**/output.mp4` 下的黄金回归测试基线（约 240 MB 的 `.mp4` 文件）。如果你要克隆完整仓库进行开发，请先安装 Git LFS：

```bash
# macOS
brew install git-lfs

# Ubuntu / Debian
sudo apt install git-lfs

# Windows
winget install GitHub.GitLFS

# 然后，每台机器执行一次
git lfs install
```

如果只需要源码文件，可以跳过 LFS 内容：

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/heygen-com/hyperframes.git
```

## 许可证

[Apache 2.0](LICENSE)
