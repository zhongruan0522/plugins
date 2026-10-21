<p align="center">
  <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/modern-web-guidance.svg" alt="Modern Web Guidance Logo" width="150" />
</p>

# Modern Web Guidance

[Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) 是一套技能，可将 Web 平台专业知识、最佳实践和浏览器兼容性数据直接嵌入你的编码智能体。它有助于引导你的编码智能体远离旧有模式，转而采用能够充分释放现代 Web 平台能力与特性的解决方案。

*由 Google Chrome 团队、Microsoft Edge 团队以及 Web 开发社区提供支持。*

> [!NOTE]
> 这是 Modern Web Guidance 的**预览版本**。我们正在积极添加新内容，欢迎在 GitHub 上[贡献代码或提供反馈](https://github.com/GoogleChrome/modern-web-guidance-src)。

<!-- <LIKE A DEMO VIDEO LOOP OR SOMETHING?> -->

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/terminal.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 快速开始

```shell
npx modern-web-guidance@latest install
```

该命令会运行一个交互式向导来安装 Modern Web Guidance。参见下方的[其他安装方式](#-其他安装方式)。

#### 试用（无需安装）

```shell
# 搜索相关指南
npx modern-web-guidance@latest search "animate a dialog modal backdrop"

# 按 ID 获取指南
npx modern-web-guidance@latest retrieve "animate-to-from-top-layer"
```

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/lightbulb.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 为什么？

编码智能体常常默认使用旧有模式，因为 LLM 训练数据中包含大量遗留代码。这往往导致它们在某些任务上生成臃肿的 JavaScript，而这些任务如今已有原生、高性能的 Web 平台解决方案。

即便模型知道某个 API 的存在，也往往缺乏足够的真实世界现代实现模式，难以写出可用于生产的代码。

**Modern Web Guidance 弥合了这一差距。**我们技能的 CLI 会将有的放矢、由专家精心筛选的指南直接返回到你的智能体上下文窗口中，重点关注：
* **现代浏览器 API**：帮助模型正确构建那些经常被误用的 API 的用法。
* **性能与无障碍**：优先选用可由浏览器优化并内置无障碍支持的平台级 API。
* **负责任的回退方案**：引导模型使用明智、轻量的回退方案，而非笨重的 polyfill 或遗留库。

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/package.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 包含哪些内容？

我们涵盖了 Web 平台过去数年的新特性，直至最前沿。这些指南**专为节省 token 而设计**；我们会运行评估，从而裁剪掉模型早已熟知的、千篇一律的基础内容。

### 核心领域

<table width="100%" style="border-collapse: collapse; border: none;">
  <tr style="border: none;">
    <td width="33%" valign="top" style="border: none; padding: 6px;">
      <h4>🎨 用户体验</h4>
      <p style="font-size: 0.9em; line-height: 1.4;">流畅的视觉状态（视图过渡、进入/退出动画、视差滚动、CSS <code>scrollbar-color</code>）。</p>
    </td>
    <td width="33%" valign="top" style="border: none; padding: 6px;">
      <h4>📐 CSS 布局</h4>
      <p style="font-size: 0.9em; line-height: 1.4;">现代布局系统（容器查询、<code>subgrid</code>、<code>oklch</code> 等现代色彩空间、text-wrap 调优以及 line-height 修剪）。</p>
    </td>
    <td width="33%" valign="top" style="border: none; padding: 6px;">
      <h4>⚡ 性能</h4>
      <p style="font-size: 0.9em; line-height: 1.4;">速度优化（即时预加载、Interaction to Next Paint (INP) 诊断，以及通过 <code>scheduler.yield</code> 调度任务）。</p>
    </td>
  </tr>
  <tr style="border: none;">
    <td width="33%" valign="top" style="border: none; padding: 6px;">
      <h4>📝 表单与 UI</h4>
      <p style="font-size: 0.9em; line-height: 1.4;">原生组件（用于工具提示的锚点定位、Popover API、对话框、<code>:user-invalid</code> 校验，以及可自动调整大小的表单字段）。</p>
    </td>
    <td width="33%" valign="top" style="border: none; padding: 6px;">
      <h4>♿ 无障碍</h4>
      <p style="font-size: 0.9em; line-height: 1.4;">重要考量（屏幕阅读器与键盘可操作性、内容导航与可发现性）。</p>
    </td>
    <td width="33%" valign="top" style="border: none; padding: 6px;">
      <h4>🤖 内置 AI</h4>
      <p style="font-size: 0.9em; line-height: 1.4;">本地客户端模型（原生翻译、摘要与语言检测 API）。</p>
    </td>
  </tr>
</table>

_查看示例：_[`navigation-drawer` 指南](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/overlays/navigation-drawer.md)。

<!-- INJECT_SKILL_COVERAGE_START -->
#### 完整列表

<details>
<summary><strong>212 项现代 Web 特性</strong></summary>

### CSS 与布局（120 项特性）

| | | |
| :--- | :--- | :--- |
| [::backdrop](https://web-platform-dx.github.io/web-features-explorer/features/backdrop/) | [Content](https://web-platform-dx.github.io/web-features-explorer/features/content/) | [overlay](https://web-platform-dx.github.io/web-features-explorer/features/overlay/) |
| [::file-selector-button](https://web-platform-dx.github.io/web-features-explorer/features/file-selector-button/) | [content-visibility](https://web-platform-dx.github.io/web-features-explorer/features/content-visibility/) | [overscroll-behavior](https://web-platform-dx.github.io/web-features-explorer/features/overscroll-behavior/) |
| [::placeholder](https://web-platform-dx.github.io/web-features-explorer/features/placeholder/) | [contrast-color()](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/) | [prefers-color-scheme 媒体查询](https://web-platform-dx.github.io/web-features-explorer/features/prefers-color-scheme/) |
| [::selection](https://web-platform-dx.github.io/web-features-explorer/features/selection/) | [跨文档视图过渡](https://web-platform-dx.github.io/web-features-explorer/features/cross-document-view-transitions/) | [prefers-contrast 媒体查询](https://web-platform-dx.github.io/web-features-explorer/features/prefers-contrast/) |
| [:dir()](https://web-platform-dx.github.io/web-features-explorer/features/dir-pseudo/) | [currentColor](https://web-platform-dx.github.io/web-features-explorer/features/currentcolor/) | [prefers-reduced-motion 媒体查询](https://web-platform-dx.github.io/web-features-explorer/features/prefers-reduced-motion/) |
| [:has()](https://web-platform-dx.github.io/web-features-explorer/features/has/) | [自定义高亮](https://web-platform-dx.github.io/web-features-explorer/features/highlight/) | [progress()](https://web-platform-dx.github.io/web-features-explorer/features/progress-function/) |
| [:host-context()](https://web-platform-dx.github.io/web-features-explorer/features/host-context/) | [自定义属性](https://web-platform-dx.github.io/web-features-explorer/features/custom-properties/) | [相对颜色](https://web-platform-dx.github.io/web-features-explorer/features/relative-color/) |
| [:is()](https://web-platform-dx.github.io/web-features-explorer/features/is/) | [display 动画](https://web-platform-dx.github.io/web-features-explorer/features/display-animation/) | [rem](https://web-platform-dx.github.io/web-features-explorer/features/rem/) |
| [:modal](https://web-platform-dx.github.io/web-features-explorer/features/modal/) | [em 单位](https://web-platform-dx.github.io/web-features-explorer/features/em-unit/) | [resize（CSS 属性）](https://web-platform-dx.github.io/web-features-explorer/features/resize/) |
| [:not()](https://web-platform-dx.github.io/web-features-explorer/features/not/) | [field-sizing](https://web-platform-dx.github.io/web-features-explorer/features/field-sizing/) | [revert](https://web-platform-dx.github.io/web-features-explorer/features/revert-value/) |
| [:nth-child() of &lt;selector>](https://web-platform-dx.github.io/web-features-explorer/features/nth-child-of/) | [filter](https://web-platform-dx.github.io/web-features-explorer/features/filter/) | [滚动标记目标伪类](https://web-platform-dx.github.io/web-features-explorer/features/scroll-marker-targets/) |
| [:placeholder-shown](https://web-platform-dx.github.io/web-features-explorer/features/placeholder-shown/) | [flex-wrap: balance](https://web-platform-dx.github.io/web-features-explorer/features/flexbox-flex-wrap-balance/) | [滚动方法 Promise](https://web-platform-dx.github.io/web-features-explorer/features/scroll-promises/) |
| [:user-valid 与 :user-invalid](https://web-platform-dx.github.io/web-features-explorer/features/user-pseudos/) | [Flexbox](https://web-platform-dx.github.io/web-features-explorer/features/flexbox/) | [滚动吸附](https://web-platform-dx.github.io/web-features-explorer/features/scroll-snap/) |
| [:where()](https://web-platform-dx.github.io/web-features-explorer/features/where/) | [font-size](https://web-platform-dx.github.io/web-features-explorer/features/font-size/) | [滚动吸附事件](https://web-platform-dx.github.io/web-features-explorer/features/scroll-snap-events/) |
| [@function](https://web-platform-dx.github.io/web-features-explorer/features/function/) | [font-size-adjust](https://web-platform-dx.github.io/web-features-explorer/features/font-size-adjust/) | [滚动驱动动画](https://web-platform-dx.github.io/web-features-explorer/features/scroll-driven-animations/) |
| [@scope](https://web-platform-dx.github.io/web-features-explorer/features/scope/) | [强制颜色](https://web-platform-dx.github.io/web-features-explorer/features/forced-colors/) | [scroll-initial-target](https://web-platform-dx.github.io/web-features-explorer/features/scroll-initial-target/) |
| [@starting-style](https://web-platform-dx.github.io/web-features-explorer/features/starting-style/) | [渐变插值](https://web-platform-dx.github.io/web-features-explorer/features/gradient-interpolation/) | [scroll-target-group](https://web-platform-dx.github.io/web-features-explorer/features/scroll-target-group/) |
| [@supports](https://web-platform-dx.github.io/web-features-explorer/features/supports/) | [渐变](https://web-platform-dx.github.io/web-features-explorer/features/gradients/) | [scrollbar-color](https://web-platform-dx.github.io/web-features-explorer/features/scrollbar-color/) |
| [accent-color](https://web-platform-dx.github.io/web-features-explorer/features/accent-color/) | [Grid](https://web-platform-dx.github.io/web-features-explorer/features/grid/) | [scrollbar-gutter](https://web-platform-dx.github.io/web-features-explorer/features/scrollbar-gutter/) |
| [活动视图过渡](https://web-platform-dx.github.io/web-features-explorer/features/active-view-transition/) | [Grid lanes](https://web-platform-dx.github.io/web-features-explorer/features/grid-lanes/) | [scrollbar-width](https://web-platform-dx.github.io/web-features-explorer/features/scrollbar-width/) |
| [生成内容的替代文本](https://web-platform-dx.github.io/web-features-explorer/features/alt-text-generated-content/) | [image-set()](https://web-platform-dx.github.io/web-features-explorer/features/image-set/) | [scrollend](https://web-platform-dx.github.io/web-features-explorer/features/scrollend/) |
| [锚点定位容器查询](https://web-platform-dx.github.io/web-features-explorer/features/container-anchor-position-queries/) | [独立变换属性](https://web-platform-dx.github.io/web-features-explorer/features/individual-transforms/) | [scrollIntoView()](https://web-platform-dx.github.io/web-features-explorer/features/scroll-into-view/) |
| [锚点定位](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning/) | [inherit](https://web-platform-dx.github.io/web-features-explorer/features/inherit-value/) | [Shadow parts](https://web-platform-dx.github.io/web-features-explorer/features/shadow-parts/) |
| [动画（CSS）](https://web-platform-dx.github.io/web-features-explorer/features/animations-css/) | [initial](https://web-platform-dx.github.io/web-features-explorer/features/initial-value/) | [sibling-count() 与 sibling-index()](https://web-platform-dx.github.io/web-features-explorer/features/sibling-count/) |
| [appearance](https://web-platform-dx.github.io/web-features-explorer/features/appearance/) | [interpolate-size](https://web-platform-dx.github.io/web-features-explorer/features/interpolate-size/) | [粘性定位](https://web-platform-dx.github.io/web-features-explorer/features/sticky-positioning/) |
| [aspect-ratio](https://web-platform-dx.github.io/web-features-explorer/features/aspect-ratio/) | [isolation](https://web-platform-dx.github.io/web-features-explorer/features/isolation/) | [Subgrid](https://web-platform-dx.github.io/web-features-explorer/features/subgrid/) |
| [at-rule()](https://web-platform-dx.github.io/web-features-explorer/features/supports-at-rule/) | [Lab 与 LCH](https://web-platform-dx.github.io/web-features-explorer/features/lab/) | [系统颜色](https://web-platform-dx.github.io/web-features-explorer/features/system-color/) |
| [attr()](https://web-platform-dx.github.io/web-features-explorer/features/attr/) | [light-dark()](https://web-platform-dx.github.io/web-features-explorer/features/light-dark/) | [text-box](https://web-platform-dx.github.io/web-features-explorer/features/text-box/) |
| [background-blend-mode](https://web-platform-dx.github.io/web-features-explorer/features/background-blend-mode/) | [line-clamp](https://web-platform-dx.github.io/web-features-explorer/features/line-clamp/) | [text-wrap](https://web-platform-dx.github.io/web-features-explorer/features/text-wrap/) |
| [border-radius](https://web-platform-dx.github.io/web-features-explorer/features/border-radius/) | [line-height](https://web-platform-dx.github.io/web-features-explorer/features/line-height/) | [text-wrap: balance](https://web-platform-dx.github.io/web-features-explorer/features/text-wrap-balance/) |
| [box-shadow](https://web-platform-dx.github.io/web-features-explorer/features/box-shadow/) | [linear() 缓动](https://web-platform-dx.github.io/web-features-explorer/features/linear-easing/) | [text-wrap: pretty](https://web-platform-dx.github.io/web-features-explorer/features/text-wrap-pretty/) |
| [calc-size()](https://web-platform-dx.github.io/web-features-explorer/features/calc-size/) | [逻辑属性](https://web-platform-dx.github.io/web-features-explorer/features/logical-properties/) | [transition-behavior](https://web-platform-dx.github.io/web-features-explorer/features/transition-behavior/) |
| [级联层](https://web-platform-dx.github.io/web-features-explorer/features/cascade-layers/) | [遮罩](https://web-platform-dx.github.io/web-features-explorer/features/masks/) | [过渡（CSS）](https://web-platform-dx.github.io/web-features-explorer/features/transitions/) |
| [clip-path](https://web-platform-dx.github.io/web-features-explorer/features/clip-path/) | [min()、max() 与 clamp()](https://web-platform-dx.github.io/web-features-explorer/features/min-max-clamp/) | [三角函数（CSS）](https://web-platform-dx.github.io/web-features-explorer/features/trig-functions/) |
| [color-mix()](https://web-platform-dx.github.io/web-features-explorer/features/color-mix/) | [mix-blend-mode](https://web-platform-dx.github.io/web-features-explorer/features/mix-blend-mode/) | [unset](https://web-platform-dx.github.io/web-features-explorer/features/unset-value/) |
| [color-scheme](https://web-platform-dx.github.io/web-features-explorer/features/color-scheme/) | [嵌套](https://web-platform-dx.github.io/web-features-explorer/features/nesting/) | [user-select](https://web-platform-dx.github.io/web-features-explorer/features/user-select/) |
| [锥形渐变](https://web-platform-dx.github.io/web-features-explorer/features/conic-gradients/) | [Oklab 与 OkLCh](https://web-platform-dx.github.io/web-features-explorer/features/oklab/) | [视图过渡](https://web-platform-dx.github.io/web-features-explorer/features/view-transitions/) |
| [容器查询（尺寸）](https://web-platform-dx.github.io/web-features-explorer/features/container-queries/) | [overflow-clip-margin](https://web-platform-dx.github.io/web-features-explorer/features/overflow-clip-margin/) | [view-transition-class](https://web-platform-dx.github.io/web-features-explorer/features/view-transition-class/) |
| [容器滚动状态查询](https://web-platform-dx.github.io/web-features-explorer/features/container-scroll-state-queries/) | [overflow-wrap](https://web-platform-dx.github.io/web-features-explorer/features/overflow-wrap/) | [视口单位](https://web-platform-dx.github.io/web-features-explorer/features/viewport-units/) |
| [容器样式查询](https://web-platform-dx.github.io/web-features-explorer/features/container-style-queries/) | [overflow: clip](https://web-platform-dx.github.io/web-features-explorer/features/overflow-clip/) | [Web 动画](https://web-platform-dx.github.io/web-features-explorer/features/web-animations/) |

### HTML 与 DOM（34 项特性）

| | | |
| :--- | :--- | :--- |
| [:autofill](https://web-platform-dx.github.io/web-features-explorer/features/autofill/) | [&lt;video>](https://web-platform-dx.github.io/web-features-explorer/features/video/) | [inert](https://web-platform-dx.github.io/web-features-explorer/features/inert/) |
| [:indeterminate](https://web-platform-dx.github.io/web-features-explorer/features/indeterminate/) | [自主自定义元素](https://web-platform-dx.github.io/web-features-explorer/features/autonomous-custom-elements/) | [Interest invokers](https://web-platform-dx.github.io/web-features-explorer/features/interest-invokers/) |
| [&lt;audio>](https://web-platform-dx.github.io/web-features-explorer/features/audio/) | [blocking="render"](https://web-platform-dx.github.io/web-features-explorer/features/blocking-render/) | [Invoker commands](https://web-platform-dx.github.io/web-features-explorer/features/invoker-commands/) |
| [&lt;details>](https://web-platform-dx.github.io/web-features-explorer/features/details/) | [可自定义的 &lt;select>](https://web-platform-dx.github.io/web-features-explorer/features/customizable-select/) | [媒体懒加载](https://web-platform-dx.github.io/web-features-explorer/features/loading-lazy-media/) |
| [&lt;dialog closedby>](https://web-platform-dx.github.io/web-features-explorer/features/dialog-closedby/) | [声明式 Shadow DOM](https://web-platform-dx.github.io/web-features-explorer/features/declarative-shadow-dom/) | [moveBefore()](https://web-platform-dx.github.io/web-features-explorer/features/move-before/) |
| [&lt;dialog>](https://web-platform-dx.github.io/web-features-explorer/features/dialog/) | [电子邮件、电话与 URL &lt;input> 类型](https://web-platform-dx.github.io/web-features-explorer/features/input-email-tel-url/) | [MutationObserver](https://web-platform-dx.github.io/web-features-explorer/features/mutationobserver/) |
| [&lt;input type="checkbox" switch>](https://web-platform-dx.github.io/web-features-explorer/features/switch-control/) | [Fetch 优先级](https://web-platform-dx.github.io/web-features-explorer/features/fetch-priority/) | [互斥的 &lt;details> 元素](https://web-platform-dx.github.io/web-features-explorer/features/details-name/) |
| [&lt;input type="range">](https://web-platform-dx.github.io/web-features-explorer/features/input-range/) | [表单关联自定义元素](https://web-platform-dx.github.io/web-features-explorer/features/form-associated-custom-elements/) | [Popover](https://web-platform-dx.github.io/web-features-explorer/features/popover/) |
| [&lt;link rel="expect">](https://web-platform-dx.github.io/web-features-explorer/features/link-rel-expect/) | [hidden="until-found"](https://web-platform-dx.github.io/web-features-explorer/features/hidden-until-found/) | [popover="hint"](https://web-platform-dx.github.io/web-features-explorer/features/popover-hint/) |
| [&lt;link rel="preload">](https://web-platform-dx.github.io/web-features-explorer/features/link-rel-preload/) | [canvas 中的 HTML](https://web-platform-dx.github.io/web-features-explorer/features/canvas-html/) | [Shadow DOM](https://web-platform-dx.github.io/web-features-explorer/features/shadow-dom/) |
| [&lt;progress>](https://web-platform-dx.github.io/web-features-explorer/features/progress/) | [HTML setter 方法](https://web-platform-dx.github.io/web-features-explorer/features/html-setters/) |  |
| [&lt;slot>](https://web-platform-dx.github.io/web-features-explorer/features/slot/) | [HTML 流式 setter](https://web-platform-dx.github.io/web-features-explorer/features/html-streaming-setters/) |  |

### JavaScript 与 API（58 项特性）

| | | |
| :--- | :--- | :--- |
| [&lt;meta name="text-scale">](https://web-platform-dx.github.io/web-features-explorer/features/meta-text-scale/) | [Intl.DurationFormat](https://web-platform-dx.github.io/web-features-explorer/features/intl-duration-format/) | [软导航性能条目](https://web-platform-dx.github.io/web-features-explorer/features/soft-navigations/) |
| [&lt;template for>](https://web-platform-dx.github.io/web-features-explorer/features/template-for/) | [键盘事件](https://web-platform-dx.github.io/web-features-explorer/features/keyboard-events/) | [推测规则](https://web-platform-dx.github.io/web-features-explorer/features/speculation-rules/) |
| [AbortController 与 AbortSignal](https://web-platform-dx.github.io/web-features-explorer/features/aborting/) | [语言检测器](https://web-platform-dx.github.io/web-features-explorer/features/languagedetector/) | [Summarizer](https://web-platform-dx.github.io/web-features-explorer/features/summarizer/) |
| [ARIA 属性反射](https://web-platform-dx.github.io/web-features-explorer/features/aria-attribute-reflection/) | [LanguageModel](https://web-platform-dx.github.io/web-features-explorer/features/languagemodel/) | [SVG](https://web-platform-dx.github.io/web-features-explorer/features/svg/) |
| [autocorrect](https://web-platform-dx.github.io/web-features-explorer/features/autocorrect/) | [图片与 iframe 懒加载](https://web-platform-dx.github.io/web-features-explorer/features/loading-lazy/) | [Temporal](https://web-platform-dx.github.io/web-features-explorer/features/temporal/) |
| [连接允许列表](https://web-platform-dx.github.io/web-features-explorer/features/connection-allowlists/) | [light-dark() 图片值](https://web-platform-dx.github.io/web-features-explorer/features/light-dark-image/) | [text-fit](https://web-platform-dx.github.io/web-features-explorer/features/text-fit/) |
| [corner-shape](https://web-platform-dx.github.io/web-features-explorer/features/corner-shape/) | [本地网络访问](https://web-platform-dx.github.io/web-features-explorer/features/local-network-access/) | [顶层 await](https://web-platform-dx.github.io/web-features-explorer/features/top-level-await/) |
| [document.modelContext](https://web-platform-dx.github.io/web-features-explorer/features/document-modelcontext/) | [长动画帧性能条目](https://web-platform-dx.github.io/web-features-explorer/features/long-animation-frames/) | [touch-action](https://web-platform-dx.github.io/web-features-explorer/features/touch-action/) |
| [email-verification](https://web-platform-dx.github.io/web-features-explorer/features/tmp-email-verification/) | [Navigation API](https://web-platform-dx.github.io/web-features-explorer/features/navigation/) | [Translator](https://web-platform-dx.github.io/web-features-explorer/features/translator/) |
| [enterkeyhint](https://web-platform-dx.github.io/web-features-explorer/features/enterkeyhint/) | [Origin](https://web-platform-dx.github.io/web-features-explorer/features/origin/) | [Trusted types](https://web-platform-dx.github.io/web-features-explorer/features/trusted-types/) |
| [事件计时性能条目](https://web-platform-dx.github.io/web-features-explorer/features/event-timing/) | [页面可见性](https://web-platform-dx.github.io/web-features-explorer/features/page-visibility/) | [User-Agent 客户端提示](https://web-platform-dx.github.io/web-features-explorer/features/ua-client-hints/) |
| [联合凭证管理](https://web-platform-dx.github.io/web-features-explorer/features/fedcm/) | [页面可见性状态性能条目](https://web-platform-dx.github.io/web-features-explorer/features/page-visibility-state/) | [Web 应用源迁移](https://web-platform-dx.github.io/web-features-explorer/features/app-migration/) |
| [Fetch](https://web-platform-dx.github.io/web-features-explorer/features/fetch/) | [分区 Cookie](https://web-platform-dx.github.io/web-features-explorer/features/partitioned-cookies/) | [Web 身份验证](https://web-platform-dx.github.io/web-features-explorer/features/webauthn/) |
| [fetchLater](https://web-platform-dx.github.io/web-features-explorer/features/fetchlater/) | [权限策略](https://web-platform-dx.github.io/web-features-explorer/features/permissions-policy/) | [Web 身份验证信号方法](https://web-platform-dx.github.io/web-features-explorer/features/webauthn-signals/) |
| [表单关联的 WebMCP 属性](https://web-platform-dx.github.io/web-features-explorer/features/declarative-webmcp/) | [指针事件](https://web-platform-dx.github.io/web-features-explorer/features/pointer-events-api/) | [Web 加密](https://web-platform-dx.github.io/web-features-explorer/features/web-cryptography/) |
| [HTML 处理指令](https://web-platform-dx.github.io/web-features-explorer/features/html-processing-instructions/) | [已注册的自定义属性](https://web-platform-dx.github.io/web-features-explorer/features/registered-custom-properties/) | [WebAssembly](https://web-platform-dx.github.io/web-features-explorer/features/wasm/) |
| [image()](https://web-platform-dx.github.io/web-features-explorer/features/image-function/) | [Resize observer](https://web-platform-dx.github.io/web-features-explorer/features/resize-observer/) | [webcrypto-modern-algos](https://web-platform-dx.github.io/web-features-explorer/features/tmp-webcrypto-modern-algos/) |
| [inputmode](https://web-platform-dx.github.io/web-features-explorer/features/inputmode/) | [Sanitizer API](https://web-platform-dx.github.io/web-features-explorer/features/sanitizer/) | [WebOTP](https://web-platform-dx.github.io/web-features-explorer/features/web-otp/) |
| [交互内容绘制性能条目](https://web-platform-dx.github.io/web-features-explorer/features/interaction-contentful-paint/) | [Scheduler API](https://web-platform-dx.github.io/web-features-explorer/features/scheduler/) |  |
| [Intersection observer](https://web-platform-dx.github.io/web-features-explorer/features/intersection-observer/) | [小型、大型与动态视口单位](https://web-platform-dx.github.io/web-features-explorer/features/viewport-unit-variants/) |  |

</details>

<details>
<summary><strong>180 个真实世界的开发者用例</strong></summary>

<h3>accessibility</h3>

- **[accessible-error-announcement](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/accessibility/accessible-error-announcement.md)**：将程序化的无障碍状态（如 aria-invalid）与视觉上的 :user-invalid 状态同步，确保屏幕阅读器用户仅在交互之后才收到错误反馈，与视觉体验保持一致。
- **[accessible-generated-content](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/accessibility/accessible-generated-content.md)**：以保持无障碍的方式使用 CSS 生成内容（`::before`/`::after`），包括为装饰性内容提供替代文本。
- **[respect-os-text-scale](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/accessibility/respect-os-text-scale.md)**：让页面遵循操作系统的文字缩放偏好，使字号、布局以及基于 rem 的尺寸都遵循用户的无障碍设置。

<h3>built-in-ai</h3>

- **[language-detection](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/language-detection.md)**：检测用户生成内容或站点既有内容的语言。
- **[language-model](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/language-model.md)**：使用 Prompt API 在浏览器中运行端侧自然语言推理，支持流式输出、结构化 JSON 响应与多轮会话管理。
- **[summarizer](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/summarizer.md)**：使用端侧 Summarizer API 摘要文本内容。
- **[translator](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/translator.md)**：使用端侧 Translator API 在不同语言之间翻译文本。

<h3>css</h3>

- **[animate-to-intrinsic-sizes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/animate-to-intrinsic-sizes.md)**：让交互式组件（如折叠面板、菜单和展开式卡片）在其固有尺寸之间平滑地做进出动画。
- **[atrule-support-conditionals](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/atrule-support-conditionals.md)**：仅在浏览器支持某个 at-rule 时，才有条件地应用特定的 CSS 规则或声明。
- **[calculate-with-intrinsic-sizes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/calculate-with-intrinsic-sizes.md)**：基于元素的固有尺寸计算其大小，同时确保其符合给定的设计约束。
- **[child-state-based-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/child-state-based-styling.md)**：构建根据其子元素状态而改变样式的组件。例如，根据主题切换开关是否被选中，以浅色或深色模式渲染的组件。
- **[content-based-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/content-based-styling.md)**：构建根据是否包含特定子元素而改变布局的组件。例如，若组件包含图片则使用多列布局，否则默认使用单列布局。
- **[css](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css.md)**：面向行动的现代 CSS 架构指南，涵盖级联、选择器、作用域、嵌套与设计令牌。在编写样式或管理设计系统时使用本指南。
- **[css-layout](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css-layout.md)**：现代 CSS 布局，例如 flexbox、grid、subgrid、容器查询、锚点定位与固有尺寸。在架构响应式 UI 组件或页面布局时使用本技能。
- **[design-token-reactivity](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/design-token-reactivity.md)**：定义高阶设计令牌，如密度模式（紧凑、舒适、宽松）或主题，并让后代组件以适合自身组件的方式直接响应变化。
- **[dynamic-sibling-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/dynamic-sibling-styling.md)**：创建动态的视觉光谱或布局排布，自动适应组内元素的数量。
- **[fluid-scaling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/fluid-scaling.md)**：基于父容器大小平滑缩放字号、间距和媒体尺寸等，而非使用固定断点
- **[individual-transform-properties](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/individual-transform-properties.md)**：在单个元素上独立地对各个 CSS transform 属性（如 translate、rotate、scale）进行动画或覆盖，而不影响其他 transform 属性。
- **[overflow-clipping-control](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/overflow-clipping-control.md)**：调整元素可见的裁剪边界，使其对齐内容边缘、内边距边缘或边框边缘——或与它们的指定偏移——从而对内容的裁剪方式提供更细粒度的控制。
- **[reduce-style-repetition](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/reduce-style-repetition.md)**：通过将复杂或动态的样式逻辑封装为可复用的函数（例如根据一组输入参数计算渐变的函数），减少过度的样式重复。
- **[responsive-design](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/responsive-design.md)**：构建能适应容器与视口尺寸的 UI，包括容器查询、动态视口单位、宽高比与响应式排版。
- **[selector-atrule-combinations](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/selector-atrule-combinations.md)**：基于选择器与条件 @ 规则的交集或并集来定位元素，同时尽量减少重复。
- **[size-aware-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/size-aware-styling.md)**：构建其样式可以有条件地依赖于自身宽度或高度（而非视口宽高）的组件。例如，可根据自身大小改变布局的卡片组件，或能根据自身宽度有条件地显示辅助文字的行动号召按钮。
- **[style-parent-with-has](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/style-parent-with-has.md)**：当表单字段无效时，为该字段的父元素（如 label 或 fieldset）设置样式。
- **[usage-aware-component-variations](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/usage-aware-component-variations.md)**：使用 CSS 容器样式查询构建能根据语义上下文调整视觉逻辑的组件。

<h3>forms</h3>

- **[animated-select-picker](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/animated-select-picker.md)**：创建下拉带有动画效果的自定义 select 组件。例如菜单淡入或滑入视图，或选项在选中时呈现动画。
- **[autofill-address-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-address-form.md)**：构建带有正确 autocomplete 属性并支持自动填充的地址表单。
- **[autofill-highlight-inputs](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-highlight-inputs.md)**：使用 CSS 高亮已被浏览器自动填充且未被用户编辑过的表单字段。
- **[autofill-payment-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-payment-form.md)**：构建收集银行卡信息、带有正确 autocomplete 值并支持自动填充的支付表单。
- **[autofill-sign-in-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-sign-in-form.md)**：构建带有正确 autocomplete 值并支持自动填充的登录表单。
- **[autofill-sign-up-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-sign-up-form.md)**：构建带有正确 autocomplete 值并支持自动填充的注册表单。
- **[brand-consistent-forms](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/brand-consistent-forms.md)**：让复选框、单选按钮、范围滑块和进度条匹配站点的配色，而无需用自定义组件替换它们。
- **[branded-select-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/branded-select-styling.md)**：创建自定义 select 元素，其按钮、选择器、箭头图标与对勾都无缝匹配你的品牌或设计系统的字体、颜色、间距与边框处理。
- **[custom-select-picker-layouts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/custom-select-picker-layouts.md)**：创建以独特或有趣方式排布选项的自定义 select 选择器，而非传统的堆叠选项列表。
- **[form-fields-automatically-fit-contents](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/form-fields-automatically-fit-contents.md)**：让表单字段随用户输入自动伸缩，例如在用户输入或选择其他选项时。通过设置最大和最小尺寸限制，创建符合页面设计且动态响应的表单字段。
- **[ime-safe-enter-submit](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/ime-safe-enter-submit.md)**：为输入法（IME）用户安全地实现键盘文本提交（如聊天/文本域中的回车提交），防止不完整的文本被过早提交。
- **[required-field-feedback](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/required-field-feedback.md)**：仅在用户交互*之后*，才为被跳过或留空的必填表单字段显示错误信息，避免先入为主的错误提示，确保反馈及时且契合用户的操作流程。
- **[rich-media-picker](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/rich-media-picker.md)**：创建选项可包含复杂 HTML 格式（如图片、图标及其他富格式）而非纯文本的自定义 select 组件。
- **[select-menu-interaction](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/select-menu-interaction.md)**：仅在用户与控件交互之后，才校验 select 菜单中是否已选择非默认选项。
- **[slider](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/slider.md)**：为原生范围滑块自定义轨道、滑块头、填充和聚焦状态的样式，同时保留原生功能与无障碍特性。
- **[sms-otp-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/sms-otp-form.md)**：通过自动提取验证码和无障碍表单输入，验证用户手机号码及通过短信发送的一次性验证码。
- **[switch](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/switch.md)**：使用原生 HTML switch 属性构建无障碍开关，在不支持时回退为样式化的复选框。
- **[validate-input-after-interaction](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/validate-input-after-interaction.md)**：仅在用户完成初始交互之后才显示表单字段校验反馈（如密码复杂度或邮箱格式要求），避免页面加载时或用户输入过程中出现过早的错误提示。

<h3>html</h3>

- **[accessible-web-components](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/accessible-web-components.md)**：让自定义元素默认具备无障碍：通过 ElementInternals ARIA mixin 设置角色与 ARIA 状态，用 delegatesFocus 管理焦点，并将 ARIA 关系保持在单个 shadow root 之内。
- **[custom-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/custom-elements.md)**：定义、注册并管理自主自定义元素的生命周期，涵盖构造函数规则、生命周期回调、升级时机、属性（attribute/property）反射以及命名约定。
- **[form-associated-custom-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/form-associated-custom-elements.md)**：通过 formAssociated 与 ElementInternals 让自定义控件原生地参与表单：提交自身值、接入约束校验，并响应重置、禁用与状态恢复。
- **[prerendering-custom-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/prerendering-custom-elements.md)**：对自定义元素进行服务器端渲染，然后原位完成水合，避免重新渲染或无样式内容闪烁。
- **[shadow-dom](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/shadow-dom.md)**：用 Shadow DOM 封装组件的 DOM 与样式，借助 HTML 模板高效构建树结构，并用 slot 投射使用者的内容。
- **[styling-web-components](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/styling-web-components.md)**：使用 :host 选择器跨越 shadow 边界设置样式，通过继承属性与自定义属性实现主题化，运用 ::slotted 与 ::part，并在组件内部使用级联层和容器查询。
- **[web-components](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/html/web-components.md)**：关于编写和使用 Web Components 的入门介绍与横切原则，涵盖 Custom Elements、Shadow DOM、模板与 slot、声明式 Shadow DOM、跨越 shadow 边界的样式、表单关联自定义元素以及无障碍要求。在构建可复用 UI 组件、设计系统或服务器端渲染的自定义元素时使用本指南。

<h3>js</h3>

- **[calculate-event-differentials](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/calculate-event-differentials.md)**：计算日期与时间之间的持续时长和剩余时间。
- **[capture-location-agnostic-data](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/capture-location-agnostic-data.md)**：记录不应随用户所在地变化的时间数据，例如生日、周期性闹钟或国家法定节假日。
- **[coordinate-global-events](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/coordinate-global-events.md)**：将未来的会议或活动显式绑定到地理 IANA 时区进行排期，使活动时间在夏令时（DST）切换以及时钟调整导致的“跳过”或“重复”时段情况下仍保持准确。
- **[format-human-readable-durations](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/format-human-readable-durations.md)**：以易读、本地化的格式向用户呈现经过时间或时长，并可灵活地根据上下文显示详细的单位拆分（例如“1 小时 30 分钟”）或总单位数（例如“90 分钟”）。
- **[manage-recurring-intervals](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/manage-recurring-intervals.md)**：为订阅计费或薪资周期计算重复间隔，并自动处理月末过渡等边界情况（例如在 1 月 31 日上加一个月），确保周期计算准确。
- **[model-partial-time-concepts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/model-partial-time-concepts.md)**：对天然缺少某一标准组成部分（如具体年份、日或日期）的日期时间概念进行建模，避免使用会引入计算错误的任意占位值。
- **[stabilize-reactive-state](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/stabilize-reactive-state.md)**：在数据驱动视图中管理任务截止时间或日程，避免共享可变状态带来的意外副作用。
- **[support-global-calendar-systems](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/js/support-global-calendar-systems.md)**：为国际用户准确地显示与计算非公历历法系统（如伊斯兰历、希伯来历或农历）中的日期。

<h3>performance</h3>

- **[batch-analytics-events](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/batch-analytics-events.md)**：对多个分析事件进行防抖并批量合并到单个 beacon 请求中，以尽量减少网络争用、降低服务器负载，同时仍能提供实时更新。
- **[break-up-long-tasks](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/break-up-long-tasks.md)**：拆分繁重的同步处理（复杂计算和/或长循环）或 DOM 更新，让浏览器有机会处理用户输入并重绘屏幕。
- **[calculate-total-foreground-time](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/calculate-total-foreground-time.md)**：计算用户实际查看页面的总时长，不含标签页处于后台的时间。
- **[conditional-async-dependencies](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/conditional-async-dependencies.md)**：有条件地加载或初始化异步依赖（例如为缺失的 Web 特性导入 polyfill），而无需在页面的所有脚本依赖之间进行复杂编排。
- **[defer-rendering-heavy-content](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/defer-rendering-heavy-content.md)**：对用户当前不可见的内容延迟渲染，从而缩短内容繁多的网页（如长信息流、大量文章或复杂仪表盘页面）的渲染时间。
- **[defer-work-until-scroll-ends](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/defer-work-until-scroll-ends.md)**：将 DOM 更新、数据获取、分析埋点或布局重算等开销较大的操作推迟到滚动结束后再执行，以保持流畅的滚动性能。
- **[deliver-optimized-decorative-images](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/deliver-optimized-decorative-images.md)**：提供经过优化的装饰性图片（如背景、UI 图标或复杂遮罩）：同时提供新一代图片格式（如 AVIF 或 WebP）与多种像素密度（如 1x 和 2x），让浏览器根据用户设备能力动态协商文件大小与视觉质量的最佳组合。
- **[deprioritize-background-fetches](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/deprioritize-background-fetches.md)**：降低通过 Fetch API 发起的后台数据请求的优先级，避免与用户发起的请求产生网络争用。
- **[detect-initial-visibility-state](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/detect-initial-visibility-state.md)**：可靠地判断页面最初是否在后台加载，即使脚本是在用户将页面切到前台之后才异步加载的情况也能正确判断。
- **[efficient-background-processing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/efficient-background-processing.md)**：在组件离开屏幕时暂停后台 JavaScript 执行（如 `&lt;canvas&gt;` 动画、WebGL 渲染或高频 WebSocket 数据轮询），并在其滚回可视区域时及时恢复，以节省系统资源与电池续航。
- **[faster-spa-view-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/faster-spa-view-transitions.md)**：通过保留已访问视图的结构化 DOM 状态（而非在每次导航时销毁并重建），让单页应用（SPA）能更快地切换回之前访问过的视图。
- **[flicker-free-client-side-ab-testing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/flicker-free-client-side-ab-testing.md)**：使用客户端 JavaScript 交付并渲染 A/B 测试、多变量测试或其他实验来修改或注入 HTML、CSS 和 JavaScript，避免先显示原始内容、再闪烁切换到实验内容。
- **[full-session-analytics](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/full-session-analytics.md)**：在整个页面访问期间可靠地追踪分析、错误和遥测数据，并将数据发送推迟到用户离开页面时。
- **[identify-heavy-scripts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/identify-heavy-scripts.md)**：找出对长动画帧影响最大的脚本
- **[identify-inp-causes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/identify-inp-causes.md)**：找出影响 INP 指标的运行缓慢的 JavaScript 代码
- **[improve-next-page-load-performance](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/improve-next-page-load-performance.md)**：通过预取或预渲染用户接下来可能访问的页面，提升页面加载性能。
- **[interaction-paint-timing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/interaction-paint-timing.md)**：衡量用户交互与客户端导航在屏幕上渲染出新内容更新所需的时间。
- **[interactions-in-complex-layouts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/interactions-in-complex-layouts.md)**：通过在复杂布局（如数据密集的仪表盘或电子表格式网格）中避免布局重算，让交互更迅捷、更灵敏（降低 Interaction to Next Paint (INP) 数值）。
- **[lazy-load-video-and-audio](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/lazy-load-video-and-audio.md)**：将屏幕外视频和音频资源（包括视频封面图与预加载的媒体数据）的下载推迟到媒体播放器接近视口时，以节省带宽并减少初始页面加载期间的网络争用。
- **[optimize-image-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-image-priority.md)**：优化最大内容绘制 (LCP) 候选图片的加载优先级，并降低非关键图片的优先级，减少关键资源的加载延迟。
- **[optimize-preload-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-preload-priority.md)**：优化预加载内容的相对优先级，减少关键资源的加载延迟。
- **[optimize-script-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-script-priority.md)**：通过提升关键异步脚本的优先级、降低非必要脚本或页面尾部脚本的优先级来优化脚本的加载优先级，从而改进执行顺序并减少延迟。
- **[out-of-order-html-streaming](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/out-of-order-html-streaming.md)**：以声明式方式，用稍后流式传入同一 HTML 文档的内容或通过命令式 JavaScript API 更新页面。
- **[resolution-optimized-pseudo-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/resolution-optimized-pseudo-elements.md)**：在 CSS 伪元素（如 `::before` 和 `::after`）中使用针对分辨率优化的图片，以减少 DOM 节点数量。
- **[schedule-tasks-by-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/schedule-tasks-by-priority.md)**：按不同优先级调度任务，确保关键工作优先执行，后台工作被延后处理。
- **[sequence-distributed-events](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/sequence-distributed-events.md)**：通过记录纳秒级精度的时间戳，在分布式微服务或高吞吐追踪环境中记录并排列操作顺序。

<h3>privacy</h3>

- **[privacy](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/privacy/privacy.md)**：面向 Web 开发者的行动导向指南，涵盖隐私设计（privacy by design）、数据最小化、第三方审计与安全数据处理。在设计应用、集成第三方服务、处理用户数据或配置安全响应头时使用本技能。

<h3>pwa</h3>

- **[migrate-web-app-origin](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/pwa/migrate-web-app-origin.md)**：将已安装的 Web 应用迁移到新的源（origin），同时保留用户配置和操作系统级快捷方式。

<h3>security</h3>

- **[client-side-encryption](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/client-side-encryption.md)**：使用公钥封装或密钥协商（包括混合与后量子保护）建立共享密钥，并在浏览器中使用认证加密来加密敏感数据。
- **[digital-signatures](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/digital-signatures.md)**：在浏览器中使用经典或抗量子（后量子）非对称密钥对消息、令牌或制品进行签名与验证，以确保数据的完整性与真实性。
- **[local-network-access](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/local-network-access.md)**：从公共 Web 应用访问用户本地网络或回环接口上的资源。
- **[passkey-authentication](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/passkey-authentication.md)**：使用通行密钥（passkey）对回访用户进行主登录身份验证。
- **[passkey-conditional-create](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/passkey-conditional-create.md)**：在密码登录成功后，为既有用户静默注册通行密钥。
- **[passkey-management](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/passkey-management.md)**：让用户查看和管理其账户上注册的通行密钥。
- **[passkey-reauthentication](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/passkey-reauthentication.md)**：在执行敏感操作前，使用已登录用户的现有通行密钥验证其身份。
- **[passkey-registration](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/passkey-registration.md)**：为既有用户账户注册通行密钥。
- **[passkeys](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/passkeys.md)**：在 Web 应用中实现 WebAuthn 与通行密钥（Passkey）的全面入门与横切原则。在处理通行密钥的注册、身份验证、管理或重新验证时使用本指南。
- **[restrict-outbound-connections](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/restrict-outbound-connections.md)**：将页面或 worker 限制为仅与明确的网络端点允许列表通信，以防止未经授权的第三方请求和客户端数据外泄。
- **[sanitize-untrusted-html](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/sanitize-untrusted-html.md)**：通过移除不安全的元素和属性，安全地解析并显示来自用户输入的不可信 HTML 内容。
- **[trusted-types](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/trusted-types.md)**：通过锁定危险的 DOM sink，使其拒绝原始字符串、仅接受经策略校验的 HTML，帮助防范基于 DOM 的 XSS 攻击。
- **[validate-origins](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/validate-origins.md)**：在跨文档消息和 URL 之间安全地比较与校验 Web 源和站点，避免易出错的字符串解析。
- **[verify-email-ownership](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/verify-email-ownership.md)**：在账户创建、登录或恢复过程中验证用户对某个邮箱地址的所有权，且无需发送一次性验证码或魔法链接邮件。

<h3>ui-atoms</h3>

- **[carousel-slide-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/carousel-slide-effects.md)**：创建由图片或其他视觉元素组成的轮播幻灯片，每张幻灯片在进入/居中/离开其滚动容器时呈现动画。例如幻灯片淡入/淡出、旋转、变大或变小等。
- **[component-specific-light-dark-theme](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/component-specific-light-dark-theme.md)**：强制特定元素（如代码块、媒体播放器等）独立于页面的配色方案，使用浅色或深色模式。
- **[position-aware-tooltips](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/position-aware-tooltips.md)**：构建带方向箭头（或其他视觉样式）的工具提示和弹出框，当元素翻转至回退位置时箭头自动指向正确方向。
- **[pull-to-reveal](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/pull-to-reveal.md)**：构建下拉显现功能，让用户在屏幕上向下拉动即可显现更多内容，例如搜索栏。
- **[resilient-context-menus-and-nested-dropdowns](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/resilient-context-menus-and-nested-dropdowns.md)**：构建无障碍、响应式的菜单、工具提示、下拉框或上下文浮层，它们需要锚定在特定 UI 元素上，并保证浮层在碰到视口边缘时自动重新定位（如翻转轴向），确保永远不会被裁断。
- **[responsive-table](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/responsive-table.md)**：构建以恰当表头语义呈现表格数据的数据表，在小屏幕和辅助技术下仍保持可读、可导航。
- **[scroll-position-aware-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/scroll-position-aware-elements.md)**：构建浮动按钮或小组件（返回顶部、滚动到底部、聊天入口等），根据用户是否滚动过来显示或隐藏。
- **[scroll-progress-indicator](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/scroll-progress-indicator.md)**：创建滚动进度条、分段进度指示器，或任何能传达用户在页面或章节中已滚动进度的视觉元素。
- **[scrollability-affordance-hints](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/scrollability-affordance-hints.md)**：构建滚动阴影浮层、渐变淡出或方向箭头指示器，仅当该方向确实还有更多可滚动内容时才显示。
- **[shrinking-header-on-scroll](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/shrinking-header-on-scroll.md)**：在滚动时平滑地对固定页头或整页封面做动画，使其在预设的滚动距离内动态缩小、增加阴影并改变布局。
- **[state-aware-sticky-headers](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-atoms/state-aware-sticky-headers.md)**：构建粘性章节标题或导航栏，当它们真正“吸顶”时呈现视觉变化，例如改变配色或增加阴影。

<h3>ui-behaviors</h3>

- **[anchor-positioning-tab-underline](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/anchor-positioning-tab-underline.md)**：让元素在两个目标元素位置之间无缝过渡。例如，在之前选中的标签页与当前选中的标签页之间移动选中下划线。
- **[animate-element-entry-exit](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/animate-element-entry-exit.md)**：在元素被添加/移出 DOM 或其 display 值切换时，平滑地隐藏/显示元素。
- **[animate-to-from-top-layer](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/animate-to-from-top-layer.md)**：为对话框、弹出框和工具提示等元素进入/退出顶层（top layer）的过程添加动画。
- **[carousel-snap-highlights](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/carousel-snap-highlights.md)**：在滚动吸附的轮播、图库或整页滑动体验中，以视觉方式高亮当前吸附的非交互项。例如吸附时展开卡片，或显现隐藏内容。
- **[consistent-cross-document-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/consistent-cross-document-transitions.md)**：在启动跨文档视图过渡之前，确保关键页面状态已加载且稳定。这意味着关键 CSS 样式已加载并应用、关键 JavaScript 已加载并执行，且用户对页面初始视图可见的 HTML 已在过渡运行前解析完成。
- **[cross-document-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/cross-document-transitions.md)**：在整页导航之间创建平滑、无缝的过渡，例如交叉淡入淡出、自定义显现效果，或内容在页面之间的形变过渡。
- **[custom-button-actions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/custom-button-actions.md)**：以声明式方式将按钮连接到任意元素，通过声明式按钮命令、invoker 命令、按钮命令、自定义命令或声明式切换操作来触发自定义的应用专属操作。
- **[declarative-dialog-popover-control](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/declarative-dialog-popover-control.md)**：通过按钮切换对话框或弹出框的可见性，而无需编写 JavaScript。
- **[directional-navigation-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/directional-navigation-transitions.md)**：用动画表现视觉状态变化以反映用户的导航方向，例如前进时新内容从右侧滑入，返回上一屏时从左侧滑入。
- **[drag](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/drag.md)**：支持通过拖拽在页面上移动浮动元素。
- **[dynamic-sibling-animations](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/dynamic-sibling-animations.md)**：在兄弟元素之间错开动画或过渡的时序，使每个元素在按其在兄弟列表中的位置计算出的延迟之后依次开始。
- **[group-element-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/group-element-transitions.md)**：用相同的过渡逻辑同时过渡一组相似元素，例如从购物车移除一件商品后，其余商品以动画方式移动到新位置。
- **[highlight-text-ranges](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/highlight-text-ranges.md)**：高亮页面上的任意文本范围，例如搜索结果、拼写错误或协同编辑光标。
- **[interactive-content-reveal](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/interactive-content-reveal.md)**：创建交互式显现效果，例如跟随用户指针的聚光灯，用于揭示图片或 UI 区域中的细节。
- **[interest-triggered-action-previews](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/interest-triggered-action-previews.md)**：当用户表达兴趣（如悬停、聚焦或长按）但尚未点击时，实时预览按钮的效果。
- **[interest-triggered-tooltips](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/interest-triggered-tooltips.md)**：当用户悬停、聚焦或长按交互元素时显示工具提示或补充信息，无需点击。
- **[light-dismiss-a-dialog](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/light-dismiss-a-dialog.md)**：创建可通过轻触关闭（light dismiss，即点击或点按对话框外部）关闭的模态对话框
- **[motion](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/motion.md)**：使用 CSS 过渡、动画、滚动驱动动画和视图过渡为 UI 制作动画，同时让动效保持在合成器上运行，并遵循减弱动态效果偏好。
- **[move-dom-element-without-losing-state](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/move-dom-element-without-losing-state.md)**：移动或重新挂载 DOM 元素而不丢失重要的元素状态，例如交互状态（:focus/:active）、`&lt;iframe&gt;` 加载状态、动画/过渡状态等
- **[parallax-scroll-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/parallax-scroll-effects.md)**：创建基于滚动的效果（如视差），让前景与背景层以不同速率移动，在用户滚动时营造纵深感。
- **[persistent-top-layer-ui](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/persistent-top-layer-ui.md)**：当模态对话框、全屏元素或原生弹出框在 DOM 中被移动或重新挂载时，保持其可见打开且功能正常。
- **[physics-based-easing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/physics-based-easing.md)**：创建自定义的、基于物理的动画与过渡效果，如弹跳和弹簧，比传统缓动曲线更自然、更引人入胜。
- **[platform-controls-dismiss-dialog](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/platform-controls-dismiss-dialog.md)**：创建可通过标准平台专属操作关闭的模态对话框，例如在桌面平台上按 `Esc` 键，或在移动平台上使用“返回”或“关闭”手势
- **[prevent-page-scroll-under-modal-dialog](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/prevent-page-scroll-under-modal-dialog.md)**：防止模态对话框打开时其下层的页面滚动。
- **[same-document-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/same-document-transitions.md)**：在单页应用（SPA）中，通过平滑变形元素的尺寸、位置或其他样式属性，将不同页面状态或导航中持续存在的元素在视觉上连接起来（例如将商品缩略图展开为通栏主图）。
- **[scroll-completion-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scroll-completion-effects.md)**：仅在平滑的程序化滚动到目标元素完成之后，才在该元素上触发视觉效果、动画或焦点变化。
- **[scroll-entry-exit-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scroll-entry-exit-effects.md)**：在用户滚动时，为进入和离开滚动端口（scrollport，即视口）的元素创建淡入、放大或其他复杂的显现类效果。
- **[scroll-snap-realtime-feedback](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scroll-snap-realtime-feedback.md)**：在用户滚动经过吸附对齐的内容时、滚动手势完成之前，为关联的 UI 元素提供实时视觉反馈。
- **[scroll-snap-state-sync](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scroll-snap-state-sync.md)**：让导航指示器、关联内容面板和分析追踪与可滚动容器中当前吸附的条目保持同步。
- **[scroll-target-on-load](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scroll-target-on-load.md)**：构建可滚动的元素列表（如图片轮播或聊天会话线程），在初始渲染时即可滚动到特定元素并使其可见。
- **[scrollytelling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scrollytelling.md)**：为目标元素的视觉属性制作动画——例如淡出背景遮罩、改变背景色，或打造滚动叙事（scrollytelling）体验——完全由另一个元素的滚动端口位置驱动。
- **[search-hidden-content](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/search-hidden-content.md)**：使用折叠面板、标签页和“阅读更多”等模式将内容隐藏于视图之外，同时确保隐藏文本能在原生的“页面内查找”中检出、允许搜索引擎索引、支持 URL 片段深链，并保持 ARIA 无障碍。
- **[spatial-navigation](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/spatial-navigation.md)**：实现使用方向键的无障碍空间导航，并能在不同布局模式（grid 等）下正确工作
- **[swipe-to-remove](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/swipe-to-remove.md)**：让用户通过水平滑动手势对列表项执行操作（移除、归档、标记已读等），从而无需点击单独的控件即可快速处理条目。
- **[swipe-to-reveal](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/swipe-to-reveal.md)**：让用户在列表项或内容面板上水平滑动以显现上下文操作按钮或侧边菜单，而不会自动触发操作。

<h3>ui-components</h3>

- **[checkbox](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/checkbox.md)**：为复选框设置样式，包括自定义图标、布局、颜色、勾选/取消勾选动画，同时保留原生功能与无障碍特性。
- **[dark-mode-toggle](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/dark-mode-toggle.md)**：构建深色模式切换组件，允许用户针对当前站点覆盖其系统配色方案偏好。
- **[hovercard](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/hovercard.md)**：构建悬停卡片（hovercard）组件：当鼠标悬停在某种类型的链接（如用户主页）上时，显示其将跳转页面的交互式结构化预览。
- **[navigation-drawer](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/navigation-drawer.md)**：创建导航抽屉组件：从菜单按钮触发时从侧边滑入并覆盖在现有页面内容之上，关闭时（通过滑走、点按外部或按 Esc 键）滑出。
- **[persistent-app-tours](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/persistent-app-tours.md)**：使用在用户交互期间保持打开的锚定原生浮层，创建持久的引导式上手流程。
- **[persistent-toast-notifications](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/persistent-toast-notifications.md)**：创建非侵入式的 toast 与浮层通知，用于持久的、可堆叠的消息传递与状态沟通。
- **[progress-ring](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/progress-ring.md)**：构建进度环组件，以可视化方式呈现任务或进程的完成状态，支持在中心显示内容以及与品牌一致的样式。
- **[scrollspy](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/scrollspy.md)**：在导航菜单中高亮页面当前可见的章节
- **[spinner](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/spinner.md)**：构建加载转圈指示器，向所有用户传达忙碌状态、遵循减弱动态效果偏好并高效地做动画。
- **[stack-drill-down](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/stack-drill-down.md)**：构建全屏层级导航，让用户逐层深入嵌套视图，并可通过滑动或返回导航回退，同时与浏览器历史记录保持同步。

<h3>visual-design</h3>

- **[adapt-scrollbar-to-contrast-preferences](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/adapt-scrollbar-to-contrast-preferences.md)**：为偏好高对比度界面的用户增强滚动条的可见性
- **[apply-webgl-shaders](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/apply-webgl-shaders.md)**：使用 WebGL 着色器为 HTML 内容应用自定义视觉效果。
- **[browser-ui-theming](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/browser-ui-theming.md)**：使用 CSS 为浏览器生成的 UI（如文本选择、滚动条、表单控件和选择器）设置主题，而非用自定义元素重新实现。
- **[color](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/color.md)**：面向 Web 的颜色指南，包括对比度要求、浅色与深色配色方案、强制颜色模式（Forced Colors Mode），以及从基色生成淡色与暗色。
- **[complex-shapes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/complex-shapes.md)**：将元素及其内容裁剪为任意自由形状，如符号、笔触或有机纹理，实现更具表现力的设计。
- **[contrast-color](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/contrast-color.md)**：在动态背景色上选取具有足够对比度的可读文本颜色。
- **[customize-scrollbar-color-and-thickness](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/customize-scrollbar-color-and-thickness.md)**：自定义滚动条的颜色或粗细
- **[dark-mode](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/dark-mode.md)**：以尊重用户浅色/深色主题偏好的方式实现深色模式支持，并适配浏览器 UI（如滚动条、表单控件等）
- **[equal-width-text-lines](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/equal-width-text-lines.md)**：让多行标题或组合标识的每一行宽度一致，如同海报式或堆叠标题排版。与两端对齐文本不同，这里是让文本本身适配宽度，而非拉伸间距
- **[export-html-media-from-canvas](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/export-html-media-from-canvas.md)**：在 canvas 中将动态 HTML 内容捕获并导出为图片或视频帧。
- **[expose-canvas-content-to-browser-features](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/expose-canvas-content-to-browser-features.md)**：将 canvas 中渲染的内容暴露给辅助技术、翻译或阅读模式等浏览器功能。
- **[improve-text-layout-and-legibility](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/improve-text-layout-and-legibility.md)**：通过让浏览器在换行时采用均衡分布的断行，改善简短独立文本内容（如不超过几行的标题）的排版与易读性。
- **[interactive-content-in-3d-scenes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/interactive-content-in-3d-scenes.md)**：将交互式 HTML 元素集成到 3D 场景中。
- **[precise-text-alignment](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/precise-text-alignment.md)**：让任意字体的文本实现精确的垂直对齐。例如，文本上下视觉留白完全相等，或文本与相邻图标或图片完美对齐。
- **[shaped-cutouts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/shaped-cutouts.md)**：组合多个形状在元素中创建复杂的镂空或“挖孔”效果，例如为元素添加凹口。
- **[soft-edge-content-fade](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/soft-edge-content-fade.md)**：在内容边缘应用透明度渐变，以提示还有更多可滚动区域，或遮蔽付费墙后的文本。
- **[typography](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/typography.md)**：面向 Web 的排版最佳实践，包括字号单位、行高、文本换行与均衡，以及随视口缩放的流式字号。
- **[visual-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/visual-effects.md)**：使用 CSS 实现的视觉效果，例如分层阴影、混合模式、颜色插值可预期的渐变，以及仅用渐变构建的条纹、棋盘格、圆点和饼图等图案。
- **[visually-stable-font-fallbacks](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/visually-stable-font-fallbacks.md)**：定义字体样式，使得在首选字体与某个回退字体之间发生替换时（或反向替换时），文本仍保持可读且视觉一致。
- **[visually-stable-mixed-fonts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/visually-stable-mixed-fonts.md)**：定义字体样式，使得在用多种字体渲染同一段文本的情况下，文本仍保持可读且视觉一致。
- **[visually-texture-content](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/visually-texture-content.md)**：为元素应用逼真的风化和纹理图案，赋予其有机、陈旧或物理材质的外观。

<h3>wasm</h3>

- **[cpp-on-the-web](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/wasm/cpp-on-the-web.md)**：使用 Emscripten 将 C/C++ 编译为 WebAssembly

<h3>webmcp</h3>

- **[agentic-forms](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/webmcp/agentic-forms.md)**：通过为标准 HTML 表单添加 WebMCP 属性注解，将客户端功能作为工具暴露给 AI 智能体。
- **[agentic-javascript-tools](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/webmcp/agentic-javascript-tools.md)**：使用 WebMCP 命令式 API，以编程方式将客户端 JavaScript 函数注册为 AI 智能体的工具。
</details>
<!-- INJECT_SKILL_COVERAGE_END -->

### 安全采用现代特性

* **渐进增强与精细回退**：我们区分两类情况——纯增量式的增强（如推测性预加载），让旧浏览器静默忽略也安全无虞；以及关键行为（如对话框控件或网络信标），对此我们会编写经过深思熟虑、低开销的回退方案。
* **负责任的回退方案**：我们优先采用轻量、针对具体场景的自定义回退（少于 50 行代码）或按需加载的 polyfill，而非笨重的第三方打包库。
* **陷阱与怪癖**：我们记录隐藏的平台限制，例如 `fetchLater()` 的 64KB 载荷配额，或 macOS 特有的滚动条行为。
* **感知 Baseline 的集成**：我们利用 **Baseline** 项目的实时兼容性数据，使智能体能够动态适应当前的浏览器支持情况及各种浏览器支持偏好。

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/cpu.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 工作原理

1. **激活**：由于存在相关任务，编码智能体会激活 `modern-web-guidance` 技能。智能体会被指示在查询 Web 平台问题时使用 `modern-web-guidance` CLI。
2. **本地语义搜索**：智能体运行 `modern-web-guidance search "<query>"`。该工具使用离线、CPU 高效的 TensorFlow.js 模型将查询匹配到最合适的指南（无网络请求，无需 API 密钥）。
3. **获取指南**：智能体通过 `modern-web-guidance retrieve <guide-id>` 获取指南，将有针对性的代码模式、陷阱与回退方案直接注入其上下文窗口。

> [!TIP]
> 注意：我们使用 `npx` 是为了确保内容不会过时，但该 CLI 完全可以离线工作，且完全私密、完全本地化。
> 这个 npm 包是自包含的，没有任何额外依赖，以确保低延迟和供应链安全。

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/package.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 其他安装方式

<details>
<summary><b>Vercel Skills CLI</b>（即 <code>npx skills</code>）</summary>

```shell
npx skills add GoogleChrome/modern-web-guidance
```
</details>

<details>
<summary><b>GitHub CLI</b></summary>

```shell
gh skill install GoogleChrome/modern-web-guidance
```
</details>

<details>
<summary><b>Google Antigravity</b></summary>

```shell
agy plugin install https://github.com/GoogleChrome/modern-web-guidance
```
</details>

<details>
<summary><b>GitHub Copilot CLI</b></summary>

```shell
/plugin marketplace add GoogleChrome/modern-web-guidance
/plugin install modern-web-guidance@googlechrome
```
</details>

<details>
<summary><b>Claude Code 插件</b></summary>

```shell
/plugin marketplace add GoogleChrome/modern-web-guidance
/plugin install modern-web-guidance@googlechrome
/plugin  # 选择 GoogleChrome 插件市场，按回车，启用 AutoUpdate
/reload-plugins
```
</details>

<details>
<summary><b>Grok Build CLI</b></summary>

```shell
grok plugin install https://github.com/GoogleChrome/modern-web-guidance --trust
```
</details>

<details>
<summary><b>Kimi Code</b></summary>

```shell
/plugins install https://github.com/GoogleChrome/modern-web-guidance
```
</details>

<details>
<summary><b>OpenAI Codex</b></summary>

```shell
codex plugin marketplace add GoogleChrome/modern-web-guidance
codex plugin add modern-web-guidance@googlechrome
```
</details>

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/refresh-cw.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 更新

如果你是通过 `npx modern-web-guidance@latest install` 安装该技能的，可以使用以下命令更新：`npx modern-web-guidance@latest update`。

否则，请查阅你所使用的智能体的文档，了解如何更新插件和技能。

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/shield-check.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 证明其确实有效的评估 ;)

我们开发了一套健全的评估框架，以确保内容**经过实证检验并持续校准**，从而让 AI 智能体写出更好的代码。我们通过闭环验证流水线运行自动化评估：

```
  [ 专家撰写的指南与演示 ]
            │
            ▼
  [ 生成的资产 ] ──> Playwright 评分器（.spec.ts）与反例演示（.html）
            │
            ▼
  [ 校准循环 ] ───────> 对黄金标准演示运行评分器（必须 100% 通过）
            │           对反例演示运行评分器（必须 100% 失败）
            ▼
  [ 端到端智能体评估 ] ────────> 在有指南与无指南两种模式下运行编码智能体
                                对比有无该技能时的准确率
```

0. **模拟开发者任务**：我们定义逼真的开发者提示词，模拟真实世界中的请求（例如“让我的图片加载得更快”）。这些提示词刻意不点名任何 API 或特性，以测试智能体能否自然地成功发现相关指南。
1. **基于浏览器的断言**：我们编写浏览器自动化脚本，验证指南是否被正确遵循：确切的运行时行为、计算样式、无障碍状态等。
2. **自修复校准**：评分器会同时针对参考实现（目标 100% 通过）和对照页面（目标 0% 通过）进行校准。测试失败时，智能体会自动完善测试。
3. **端到端测试**：我们衡量编码智能体在有指南与无指南两种情况下完成真实任务的表现。关键指标是 _提升空间_（100% - 无指南通过率）与 _提升幅度_（有指南通过率 - 无指南通过率）。如果提升空间很小，说明模型本身已表现出色，我们的指南未能提供太多价值。我们会根据结果修订指南，使提升幅度最大化，从而优化指南的有效性。

### 近期评估结果快照

<!-- INJECT_EVAL_RESULTS_START -->
| 日期 | 智能体 + 模型 | 任务 / 断言 | 无指南 → 有指南（提升幅度） |
| :--- | :--- | :---: | :---: |
| 10月9日 | codex_cli (gpt-6.1-sol) | 153 / 1284 | 58% → 77% (**+19pp**) |
| 10月9日 | claude_code (sonnet-5-5) | 153 / 1297 | 59% → 87% (**+28pp**) |
| 10月9日 | antigravity_cli (gemini-3.8-flash) | 153 / 1062 | 65% → 90% (**+25pp**) |
| 10月7日 | codex_cli (gpt-6.1-sol) | 147 / 1251 | 56% → 75% (**+19pp**) |
| 10月7日 | claude_code (sonnet-5-5) | 147 / 1251 | 56% → 84% (**+28pp**) |
| 10月7日 | antigravity_cli (gemini-3.8-flash) | 147 / 1195 | 64% → 89% (**+25pp**) |
| 10月6日 | claude_code (opus-5-5) | 145 / 1236 | 61% → 89% (**+28pp**) |
| 10月6日 | codex_cli (gpt-6.1-sol) | 145 / 1236 | 57% → 77% (**+20pp**) |
| 10月6日 | antigravity_cli (gemini-3.8-flash) | 145 / 1057 | 62% → 88% (**+26pp**) |
<!-- INJECT_EVAL_RESULTS_END -->


## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/boxes.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 可用技能包

你可以使用 `--choose` 标志来自定义要安装哪些技能包：

```shell
npx modern-web-guidance@latest install --choose
```

* **`modern-web-guidance`**（约 234 个 token）：关于现代浏览器 API、布局与性能的全面指南。
* **`chrome-extensions`**（约 181 个 token）：关于 Manifest V3、后台 worker、扩展 API 以及在 Chrome Web Store 发布的指南。

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/lock.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 遥测与隐私

Google 会收集匿名使用信息，以改进该工具的可靠性、相关性与性能。收集的信息包括安装次数、调用方智能体的名称、指南检索 ID，以及智能体生成的 CLI 工具搜索查询（例如 "dark mode scrollbar color-scheme"）。不会收集用户的原始提示词。你可以在 [modern-web.ts](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/src/cli/modern-web.ts) 中查看具体收集了哪些信息。

> [!TIP]
> **如需退出：**在 shell 配置文件（如 `.bashrc` 或 `.zshrc`）中设置 `DISABLE_TELEMETRY=1` 环境变量：
> ```bash
> export DISABLE_TELEMETRY=1
> ```

Google 依照[Google 隐私政策](https://policies.google.com/privacy)处理这些数据。

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/users.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 贡献者

如果你想为 modern-web-guidance 做贡献，请参阅[源代码仓库的 `CONTRIBUTING.md`](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/CONTRIBUTING.md)。`modern-web-guidance` 仓库仅作为发布目标，用于干净地安装技能。

衷心感谢所有做出贡献的人！

<a href="https://github.com/GoogleChrome/modern-web-guidance-src/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=GoogleChrome/modern-web-guidance-src&max=101" />
</a>

## <img src="https://github.com/GoogleChrome/modern-web-guidance/raw/main/.github/img/file-text.svg" width="24" height="24" style="vertical-align: middle; margin-right: 4px;"> 来源声明

本项目中的部分文档内容源自 Mozilla 贡献者的 [MDN Web Docs](https://developer.mozilla.org/)，以及 [W3C](https://www.w3.org/)、[WHATWG](https://whatwg.org) 和 [IETF](https://www.ietf.org) 的规范。
