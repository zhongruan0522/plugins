<p align="center">
  <a href="https://codspeed.io/?utm_source=codspeed&utm_medium=readme">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://codspeed.io/codspeed-logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://codspeed.io/codspeed-logo-light.svg">
      <img alt="CodSpeed logo" src="https://codspeed.io/codspeed-logo-light.svg" width="400px">
    </picture>
  </a>
</p>

<h3 align="center">优化代码性能，尽早发现性能回退。</h3>

<p align="center"><a href="https://codspeed.io/login?flow=get-started&utm_source=github-readme">快速开始</a> · <a href="https://codspeed.io/docs?utm_source=github-readme">文档</a></p>

<br/>

<p align="center">
  <a href="https://github.com/CodSpeedHQ/codspeed/releases/latest"><img src="https://img.shields.io/github/v/release/CodSpeedHQ/codspeed" alt="Latest Release"></a>
  <a href="https://github.com/CodSpeedHQ/codspeed/releases"><img src="https://img.shields.io/github/downloads/CodSpeedHQ/codspeed/total?logo=github" alt="Downloads"></a>
  <a href="https://github.com/CodSpeedHQ/codspeed/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/CodSpeedHQ/codspeed/ci.yml?branch=main&logo=github&label=CI" alt="CI Status"></a>
  <a href="https://github.com/CodSpeedHQ/codspeed/blob/main/LICENSE-APACHE"><img src="https://img.shields.io/github/license/CodSpeedHQ/codspeed" alt="License"></a>
  <a href="https://codspeed.io/discord"><img src="https://img.shields.io/badge/chat%20on-discord-7289da.svg" alt="Discord Chat"></a>
  <a href="https://codspeed.io/?utm_source=badge"><img src="https://img.shields.io/endpoint?url=https://codspeed.io/badge.json" alt="CodSpeed Badge"></a>
</p>

[![Video Demo](./assets/readme-video.gif)](https://codspeed.io/?utm_source=github-readme)

# 核心特性

- 🎯 借助 CPU 模拟实现 **<1% 方差**的测量——告别不稳定的基准测试。
- 🔥 **差分火焰图**，逐个提交精确 pinpoint 到底什么变慢了。
- 💬 **PR 评论与状态检查**，在你的工作流中直接展示性能影响。
- 🛡️ **合并保护**，阻止性能退化超出阈值的 PR。
- 🐍 **多语言支持**，覆盖 Python、Rust、Node.js、Go、C/C++ 等。
- 🏠 **本地或 CI 运行**——既能在你的机器上工作，也能集成 GitHub Actions、GitLab CI、CircleCI 等。
- 🔌 **接入现有基准测试**只需不到 5 分钟——兼容 pytest、vitest、criterion 等。

## 安装

```bash
curl -fsSL https://codspeed.io/install.sh | bash
```

> [!NOTE]
> CodSpeed CLI 官方支持 Ubuntu 20.04、22.04、24.04 以及 Debian 11、12。
> 其他 Linux 发行版也许可以运行，但不在官方支持之列。

## 快速上手

首先进行身份验证，让你的基准测试结果与 CodSpeed 账号关联：

```bash
codspeed auth login
```

最简单的入门方式是直接对任何可执行程序进行基准测试：

```bash
# 对单条命令进行基准测试
codspeed exec -- ./my-binary --arg1 value

# 对脚本进行基准测试
codspeed exec -- python my_script.py

# 使用指定 instrument 进行基准测试
codspeed exec --mode walltime -- node app.js
```

这种方式无需修改代码，适用于任何可执行程序。CodSpeed 会测量性能并提供 instrument 的结果。

## 通过 `codspeed run` 与 harness 深度集成

如需更多控制，或要与现有基准测试套件集成，你可以使用特定语言的 harness。这样可以：

- 定义多个基准测试，并在代码库中纳入版本管理
- 把基准测试限定到特定函数或模块
- 与现有基准测试套件集成（pytest、criterion、vitest 等）

```bash
# 使用 Rust harness 配合 criterion
codspeed run cargo codspeed run

# 使用 Python harness 配合 pytest
codspeed run pytest ./tests --codspeed

# 使用 Node.js harness 配合 vitest
codspeed run pnpm vitest bench
```

这些 harness 提供更深入的插桩，让你可以用熟悉的测试框架编写基准测试。

### 语言集成

CodSpeed 为多种语言和框架提供一等公民级别的集成：

| 语言            | 仓库                                                             | 支持的框架                            |
| --------------- | ---------------------------------------------------------------- | ------------------------------------- |
| Rust            | [codspeed-rust](https://github.com/CodSpeedHQ/codspeed-rust)     | `divan`、`criterion.rs`、`bencher`    |
| C/C++           | [codspeed-cpp](https://github.com/CodSpeedHQ/codspeed-cpp)       | `google-benchmark`                    |
| Python          | [pytest-codspeed](https://github.com/CodSpeedHQ/pytest-codspeed) | `pytest` 插件                         |
| Node.js         | [codspeed-node](https://github.com/CodSpeedHQ/codspeed-node)     | `vitest`、`tinybench`、`benchmark.js` |
| Go              | [codspeed-go](https://github.com/CodSpeedHQ/codspeed-go)         | 内置 `testing` 包集成                 |
| Zig（社区）     | [codspeed-zig](https://github.com/james-elicx/codspeed-zig)      | 自定义                                |

需要对其他语言或框架做基准测试？提交 [issue](https://github.com/CodSpeedHQ/codspeed/issues) 或到 [Discord](https://codspeed.io/discord) 告诉我们！

### CLI harness：`codspeed.yml` 配置

CLI 还提供一个内置 harness，让你直接定义基准测试。

你可以在 `codspeed.yml` 文件中定义多个 `codspeed exec` 基准测试目标并配置选项。
当你想以不同配置对多条命令做基准测试时，这会很有用。

在项目根目录创建一个 `codspeed.yml` 文件：

```yaml
# 应用于所有基准测试的全局选项
options:
  warmup-time: "0.2s"
  max-time: 1s

# 要运行的基准测试列表
benchmarks:
  - name: "Fast operation"
    exec: ./my_binary --mode fast
    options:
      max-rounds: 20

  - name: "Slow operation"
    exec: ./my_binary --mode slow
    options:
      max-time: 200ms

  - name: "Script benchmark"
    exec: python scripts/benchmark.py
```

然后用以下命令运行所有基准测试：

```bash
codspeed run --mode walltime
```

> [!TIP]
> 有关配置选项的更多细节，参见 [CLI 文档](https://codspeed.io/docs/cli)。

## 性能测量工具（Instruments）

CodSpeed 提供多种 instrument，用于测量代码性能的不同方面。请选择最适合你用例的一种：

### CPU 模拟（CPU Simulation）

模拟 CPU 行为，无论系统负载如何都能保持 **<1% 方差**。测量与硬件无关，并自动生成火焰图。

**最适合：** CPU 密集型代码、CI 回退检测、跨平台比较

```bash
codspeed exec --mode simulation -- ./my-binary
```

### 内存（Memory）

通过 eBPF 剖析跟踪堆分配（峰值用量、分配次数、分配大小）。

**最适合：** 内存优化、泄漏检测、资源受限环境

**支持：** Rust、使用 libc、jemalloc、mimalloc 的 C/C++

```bash
codspeed exec --mode memory -- ./my-binary
```

### 墙钟时间（Walltime）

测量真实世界的执行时间，包括 I/O、系统调用和多线程的影响。

**最适合：** API 测试、I/O 密集型负载、多线程应用

```bash
codspeed exec --mode walltime -- ./my-api-test
```

> [!WARNING]
> 在传统虚拟机/托管运行器（Hosted Runners）上使用 `walltime` 模式会得到不一致的数据。为获得最佳结果，我们推荐使用 CodSpeed Hosted Macro Runners，它们专为性能测量的一致性做了调优。
> 更多细节请查看 [Walltime Instrument 文档](https://docs.codspeed.io/instruments/walltime/)。

> [!TIP]
> 有关每种 instrument 的详细信息，参见 [Instruments 文档](https://codspeed.io/docs/instruments)。

## 在 CI 环境中使用

在 CI 中运行 CodSpeed，让你能在每个拉取请求上自动检测性能回退，并跟踪性能随时间的演变。

### GitHub Actions

我们推荐使用我们的官方 GitHub Action：[@CodSpeedHQ/action](https://github.com/CodSpeedHQ/action)。

下面是 Python 的一个 `.github/workflows/codspeed.yml` 工作流示例：

```yaml
name: CodSpeed Benchmarks

on:
  push:
    branches:
      - "main" # 或 "master"
  pull_request:
  workflow_dispatch:

permissions:
  contents: read
  id-token: write

jobs:
  benchmarks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # 在这里设置你的语言/环境
      # 以 Python 为例：
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install -r requirements.txt

      # 使用 CodSpeed 运行基准测试
      - uses: CodSpeedHQ/action@v5
        with:
          mode: instrumentation
          run: pytest tests/ --codspeed
```

### GitLab CI

下面是 Python 的一个 `.gitlab-ci.yml` 配置示例：

```yaml
workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH

codspeed:
  stage: test
  image: python:3.12
  id_tokens:
    CODSPEED_TOKEN:
      aud: codspeed.io
  before_script:
    - pip install -r requirements.txt
    - curl -fsSL https://codspeed.io/install.sh | bash -s -- --quiet
  script:
    - codspeed run --mode simulation -- pytest tests/ --codspeed
```

### CircleCI

对于托管在 GitHub 上的仓库，CodSpeed 支持 CircleCI。

下面是 Python 的一个 `.circleci/config.yml` 配置示例：

```yaml
version: 2.1

jobs:
  benchmarks:
    docker:
      - image: cimg/python:3.12
    steps:
      - checkout
      - run: pip install -r requirements.txt
      - run: curl -fsSL https://codspeed.io/install.sh | bash -s -- --quiet
      - run: codspeed run --mode simulation -- pytest tests/ --codspeed

workflows:
  codspeed:
    jobs:
      - benchmarks
```

作业通过 OpenID Connect（OIDC）自动完成身份验证，因此无需存储任何 token。从 fork 发起的拉取请求无法生成 OIDC token：请为这类作业设置 `CODSPEED_TOKEN` 环境变量，详见 [CircleCI 配置文档](https://codspeed.io/docs/integrations/ci/circleci/configuration)。

> [!TIP]
> 更多 CI 集成示例和高级配置，请查看 [CI 集成文档](https://codspeed.io/docs/integrations/ci/)。
