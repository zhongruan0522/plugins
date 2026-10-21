# 适用于 Claude Code 的 UI/UX 设计插件

一个全面的 UI/UX 设计插件，覆盖移动端（iOS、Android、React Native）与 Web 应用，涵盖现代设计模式、无障碍和设计系统。

## 功能特性

### 核心能力

- **设计系统**：Token 架构、主题化、多品牌系统
- **无障碍**：WCAG 2.2 合规、包容性设计模式
- **响应式设计**：容器查询、流式布局、断点
- **移动端设计**：iOS HIG、Material Design 3、React Native 模式
- **Web 组件**：React/Vue/Svelte 模式、CSS-in-JS
- **交互设计**：微交互、动效、过渡

## 技能

| 技能                        | 说明                                             |
| --------------------------- | ------------------------------------------------ |
| `design-system-patterns`    | 设计 Token、主题化、组件架构                     |
| `accessibility-compliance`  | WCAG 2.2、移动端无障碍、包容性设计               |
| `responsive-design`         | 容器查询、流式布局、断点                         |
| `mobile-ios-design`         | iOS 人机界面指南、SwiftUI 模式                   |
| `mobile-android-design`     | Material Design 3、Jetpack Compose 模式          |
| `react-native-design`       | React Native 样式、导航、动画                    |
| `web-component-design`      | React/Vue/Svelte 组件模式、CSS-in-JS             |
| `interaction-design`        | 微交互、动效设计、过渡                           |
| `visual-design-foundations` | 排版、色彩理论、间距、图标设计                   |

## 智能体

| 智能体                     | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| `ui-designer`             | 主动式 UI 设计、组件创建、布局优化                           |
| `accessibility-expert`    | 无障碍（a11y）分析、WCAG 合规、问题整改                      |
| `design-system-architect` | 设计 Token 体系、组件库、主题化                              |

## 命令

| 命令                             | 说明                                           |
| -------------------------------- | ---------------------------------------------- |
| `/ui-design:design-review`       | 评审现有 UI，发现问题和改进点                  |
| `/ui-design:create-component`    | 以规范模式引导创建组件                         |
| `/ui-design:accessibility-audit` | 审计 UI 代码的 WCAG 合规性                     |
| `/ui-design:design-system-setup` | 用 Token 初始化一套设计系统                    |

## 安装

```bash
/plugin install ui-design
```

## 使用示例

### 设计评审

```
/ui-design:design-review --file src/components/Button.tsx
```

### 创建组件

```
/ui-design:create-component Card --platform react
```

### 无障碍审计

```
/ui-design:accessibility-audit --level AA
```

### 设计系统初始化

```
/ui-design:design-system-setup --name "Acme Design System"
```

## 涵盖的关键技术

### Web

- CSS Grid、Flexbox、容器查询
- Tailwind CSS、CSS-in-JS（Styled Components、Emotion）
- React、Vue、Svelte 组件模式
- Framer Motion、GSAP 动画

### 移动端

- **iOS**：SwiftUI、UIKit、人机界面指南（Human Interface Guidelines）
- **Android**：Jetpack Compose、Material Design 3
- **React Native**：StyleSheet、Reanimated、React Navigation

### 设计系统

- 设计 Token（Style Dictionary、Figma Variables）
- 组件库（Storybook 文档）
- 多品牌主题化

### 无障碍

- WCAG 2.2 AA/AAA 合规
- ARIA 模式与语义化 HTML
- 屏幕阅读器兼容性
- 键盘导航

## 生成的工件

插件会在 `.ui-design/` 目录下创建工件：

```
.ui-design/
├── design-system.config.json    # 设计系统配置
├── component_specs/             # 生成的组件规格
├── audit_reports/               # 无障碍审计报告
└── tokens/                      # 生成的设计 Token
```

## 环境要求

- Claude Code CLI
- Node.js 18+（用于生成设计 Token）

## 许可证

MIT 许可证
