# Expo

来自 Expo 团队的官方 AI 智能体技能，用于构建、部署、升级和调试 Expo 应用。

技能分为两组，以便清晰划分免费与付费的边界：开源的 **framework（框架）** 技能，以及 **services & paid distribution（服务与付费分发）** 技能——后者的核心用途需要使用付费的 Expo Application Services（EAS）。每个 services 技能开头都附有费用/套餐限制说明。

## 该插件的功能

### Framework（开源）

- 将任何 Expo/EAS 请求路由到合适的技能，并应用共享的设置规则（`expo-overview`）
- 为新项目推荐初始文件夹结构
- 提供遵循 Apple Human Interface Guidelines 的 UI 准则
- 构建精致、无障碍的 React Native 动画和手势，且不占用 JS 线程
- 构建应用内设计系统：token 主题、可复用组件规范和样式审计
- 涵盖 Expo Router 导航模式（stack、tab、modal、sheet）
- 讲解原生 iOS 控件、SF Symbols 和视觉效果
- 涵盖 `@expo/ui` 原生组件（通用、SwiftUI 和 Jetpack Compose）
- 涵盖使用 React Query 的数据获取模式、离线支持和 Expo Router loader
- 讲解用于在原生应用中运行 Web 代码的 DOM 组件
- 涵盖 Expo 原生模块、iOS App Clip，以及向现有原生应用的 brownfield 集成
- 指向 `expo/examples` 仓库以获取规范的第三方集成示例
- 详解 Expo SDK 升级、弃用包迁移、缓存清理和依赖修复
- 将 Expo 项目接入 Codex 应用的 Run 按钮和操作终端
- 分享关于 Expo 及其技能、文档、CLI 或 MCP 哪些好用、哪些不足的具体反馈

### Services（服务与付费分发）

- 指导 iOS App Store、TestFlight 和 Android Play Store 提交
- 涵盖 EAS Build 配置与版本管理
- 协助编写和校验用于 CI/CD 的 EAS Workflow YAML 文件
- 检查 EAS Update 健康状况、采用率、崩溃率和载荷大小
- 使用 EAS Update 配置、发布、测试和调试空中（OTA）更新
- 使用 EAS Observe 跟踪生产环境性能
- 涵盖使用 EAS Hosting 编写和部署网站与 API 路由
- 在 EAS 云端的远程 iOS/Android 模拟器上运行和操控你的应用

## 何时使用

### Framework（开源）

- 尚未指明具体技能时启动任何 Expo/EAS 任务
- 从零构建新的 Expo 应用
- 添加导航、样式或动画
- 构建或修复动画、手势、过渡效果、按压反馈或触觉反馈
- 使用设计 token 搭建主题，或统一各屏幕的样式
- 接入数据获取
- 通过 DOM 组件集成 Web 库
- 使用 Expo 将现有 Web/React 应用迁移为原生应用
- 编写 Expo 原生模块，或将 Expo 集成到现有原生应用中
- 改编 `expo/examples` 中的第三方集成
- 升级到新的 Expo SDK 版本并修复升级后的依赖冲突
- 从已弃用的包迁移（expo-av 迁移到 expo-audio/expo-video）
- 添加 iOS App Clip（需要 Apple Developer 账户）
- 为 `expo start` 添加 Codex 应用 Run 按钮，以及可选的 iOS/Android/Web/dev-client 操作按钮
- 分享关于 Expo 及其技能、文档、CLI 或 MCP 哪些好用、哪些不足的反馈

### Services（服务与付费分发）

- 将应用提交到 App Store Connect 或 Google Play
- 设置 TestFlight 测试
- 配置 EAS Build profile
- 编写用于自动化部署的 CI/CD 工作流
- 查看 EAS Update 发布健康状况与采用率
- 配置、发布、测试或调试 EAS Update
- 使用 EAS Observe 跟踪启动、导航和事件性能
- 将网站或 Expo Router API 路由部署到 EAS Hosting
- 在没有本地模拟器可用时，在远程云模拟器上运行你的应用

## 包含的技能

### 从这里开始

- **expo-overview** — Router 与共享设置规则；当请求模糊或用户未指明具体 Expo 工具时的入口

### Framework（开源）

- **expo-project-structure** - 新 Expo 项目的推荐文件夹结构
- **expo-router** - 导航与路由：基于文件的路由、链接、原生 stack、modal、sheet、原生 tab 和 header
- **expo-animation** - 使用 Reanimated、Gesture Handler、Expo Router 和 expo-haptics 构建精致的动画与手势
- **expo-native-ui** - 构建美观、具有原生质感的屏幕：样式、语义化颜色、控件、图标、媒体和视觉效果
- **expo-design-system** - 在应用内构建设计系统：token 主题（颜色、间距、字体、圆角、阴影、动效）、可复用组件规范和设计系统漂移审计
- **expo-ui** - 基于 @expo/ui 的原生 UI：优先使用通用跨平台组件，平台特定需求使用 SwiftUI 和 Jetpack Compose
- **expo-data-fetching** - 网络请求、API 调用、缓存和离线支持
- **expo-dom** - 使用 DOM 组件在原生的 webview 中运行 Web 代码
- **expo-web-to-native** - 使用 Expo 将现有 Web/React 应用迁移为原生 iOS/Android 应用
- **expo-module** - 编写 Expo 原生模块和视图（Swift、Kotlin、TypeScript、config 插件）
- **expo-brownfield** - 将 Expo 和 React Native 集成到现有原生 iOS 或 Android 应用中
- **expo-dev-client** - 构建和分发 Expo 开发客户端（本地构建免费；EAS Build/TestFlight 付费）
- **expo-examples** - 从 `expo/examples` 仓库的 `with-*` 集成中进行改编或搭建
- **expo-app-clip** - 添加 iOS App Clip target（AASA、关联域名、Smart App Banners；需要 Apple Developer 账户）
- **expo-upgrade** - 升级 Expo SDK 版本并修复依赖问题
- **expo-skill-feedback** - 在 Expo 各端分享反馈，并控制自愿加入的使用遥测

### Services（服务与付费分发）

- **eas-app-stores** - 构建 iOS/Android 应用并提交到应用商店和 TestFlight：支持 Expo 及其他 React Native 项目，也支持现有原生应用
- **eas-hosting** - 将 Expo 网站和 API 路由部署到 EAS Hosting（密钥、自定义域名、Cloudflare Workers）
- **eas-workflows** - 用于 CI/CD 流水线的 EAS workflow YAML 文件
- **eas-observe** - EAS Observe 设置与启动，以及路由、事件和版本指标
- **eas-update** - 配置、发布、测试和调试空中（OTA）更新
- **eas-update-insights** - 检查 EAS Update 健康状况、崩溃率、采用率和载荷大小
- **eas-simulator** - 通过 CLI 或 AI 智能体，在 EAS 云端的远程 iOS/Android 模拟器上运行和操控你的应用

## 使用遥测与反馈

**自动使用遥测默认关闭。** 启用后（仅限 Claude Code），插件会发送匿名的使用事件——技能名称、平台以及一个随机本地安装 ID 的哈希——绝不会包含代码、提示词、文件路径或个人数据。让智能体 **"启用 Expo 技能遥测"** 即可选择加入（或设置 `EXPO_SKILLS_TELEMETRY=1`）；使用 `EXPO_SKILLS_TELEMETRY=0` / `DO_NOT_TRACK=1` 关闭。每个技能都包含一个 `submit-expo-feedback` 命令，用于提交具体、可操作的反馈；反馈提交与自动使用遥测相互独立。

## 许可证

MIT
