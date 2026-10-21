<div align="center">

<img src="https://raw.githubusercontent.com/crowdsecurity/crowdsec-docs/main/crowdsec-docs/static/img/crowdsec_logo.png" alt="CrowdSec" width="280">

# 面向 Claude Code 与 Codex 的 CrowdSec 技能

**面向 AI 编程智能体的官方 CrowdSec 插件。** 它捆绑了两个 [Agent Skills](https://docs.claude.com/en/docs/claude-code/skills)，让 Claude Code、Codex 和 Claude.ai 能够安装、配置、运维和调试 [CrowdSec](https://docs.crowdsec.net)——涵盖引擎、`cscli`、bouncer 以及 WAF/AppSec 组件——跨越裸机/systemd、Docker、pfSense/OPNsense 与 Kubernetes/Helm 环境。

[![Version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fcrowdsecurity%2Fcrowdsec-skill%2Fmain%2F.claude-plugin%2Fplugin.json&color=blue)](.claude-plugin/plugin.json)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-8A2BE2)](https://docs.claude.com/en/docs/claude-code/skills)
[![CrowdSec](https://img.shields.io/badge/CrowdSec-docs-orange)](https://docs.crowdsec.net)

</div>

---

本插件捆绑了**两个 [Agent Skills](https://docs.claude.com/en/docs/claude-code/skills)**：

- **`crowdsec`**——一位亲力亲为的 CrowdSec 运维实操专家。无论是搭起一个引擎、接好一个 bouncer、启用 WAF，还是排查为什么什么都没被封禁，它都了然于心：熟悉 `cscli` 命令、配置布局、各种故障模式，以及跨越**裸机/systemd、Docker、pfSense/OPNsense 与 Kubernetes/Helm** 的安全处理之道。
- **`crowdsec-service-api`**——使用你的 API key，代表你调用高级 **Console Service API**（云端）：创建并填充 blocklist/allowlist、对接防火墙/设备集成、拉取防护 ROI 指标、管理组织级 decision——每一次状态变更都需经过显式确认。

## 覆盖范围

**`crowdsec`（运维实操）：**

| 领域 | 覆盖内容 |
|---|---|
| **安装** | 裸机/systemd · Docker · Kubernetes/Helm · pfSense/OPNsense · Console 注册 |
| **Bouncers** | 防火墙（iptables/nftables/ipset）· nginx · traefik · caddy · apache · 等等 |
| **WAF / AppSec** | 部署 · 配置 · 排障 AppSec 组件 · 机器人检测 |
| **Hub** | 安装 collections/parsers/scenarios · 更新 · 调试 |
| **配置** | acquisition · profiles 与封禁时长 · notifications · allowlists |
| **运维** | 健康检查与冒烟测试 · 升级与回滚 · 多服务器 / 远程 LAPI / mTLS |
| **排障** | 日志无法解析 · 告警不触发 · bouncer 不封禁 · 特定报错 |

**`crowdsec-service-api`（高级云 API）：**

| 领域 | 覆盖内容 |
|---|---|
| **Blocklists** | 创建 · 添加/移除/批量添加 IP（支持过期时间）· 下载 · 跨组织共享 · 为引擎/bouncer 订阅 |
| **Allowlists** | 创建 · 支持过期时间的条目 · 按引擎/标签/组织订阅 |
| **集成** | 防火墙/设备 feed（Palo Alto、Fortinet、Cisco、F5、Sophos、pfSense/OPNsense 等）· 支持分页的 Basic 认证内容拉取 |
| **指标** | 防护 ROI（丢弃的流量、节省的字节/出站流量、阻止的攻击） |
| **Decisions** | 组织级 decision + 聚合（读取/管理） |

## 安装

技能安装后会自动加载。只需和你的智能体聊 CrowdSec 相关话题即可。

> **命名说明：**插件市场名为 `crowdsecurity`，其中的插件名为 `crowdsec`，该插件包含两个技能——`crowdsec` 和 `crowdsec-service-api`。

**在 Claude Code 上**

```text
/plugin marketplace add crowdsecurity/crowdsec-skill
/plugin install crowdsec@crowdsecurity
```

之后可用以下命令更新：

```text
/plugin marketplace update crowdsecurity
```

**在 Codex 上：**使用以下命令安装技能：

```text
skill-installer crowdsecurity/crowdsec-skill
```

**在 Claude.ai（网页版）上**

从[最新发布页](https://github.com/crowdsecurity/crowdsec-skill/releases/latest)下载 `crowdsec-skill-vX.Y.Z.zip`，然后在网页版的技能上传器中上传。

**或直接通过 skills.sh 安装**

```bash
npx skills add  crowdsecurity/crowdsec-skill
```

## 示例提示词

安装完成后，只要你的提示词涉及 CrowdSec，智能体就会自动选用该技能：

- _“在这台服务器上安装 CrowdSec 并配置 nginx bouncer。”_
- _“在我的 Kubernetes 集群中部署 CrowdSec 并将其注册到 Console。”_
- _“在我的服务器上启用 WAF / AppSec。”_
- _“CrowdSec 在我的 nginx 服务器上检测不到攻击，为什么？”_
- _“这个 IP 已经有 decision 了，但并没有被封禁。”_
- _“把我的 fail2ban jail 迁移到 CrowdSec。”_
- _“创建一个 Console blocklist，并把我 SIEM 里的这些 IP 推送上去。”_（Service API）
- _“把 Palo Alto 外部动态列表（EDL）接入我的 CrowdSec blocklist。”_（Service API）
- _“给我看上个月的防护 ROI 指标。”_（Service API）

## 本技能不做的事

这是一个**运维实操**技能。它负责部署、配置和调试 CrowdSec——但**不负责编写**检测内容。编写 parser、scenario 或 WAF（AppSec）规则不在其范围内。

如需编写检测内容，请前往 [CrowdSec Hub](https://hub.crowdsec.net) 和[检测工程文档](https://docs.crowdsec.net/docs/next/local_api/intro)。

## 参考文档

两个技能共有 37 份参考文档，每份在发布前都在真实 CrowdSec 环境中验证过：

| 领域 | 内容 |
|---|---|
| [`install/`](skills/crowdsec/references/install/) | 裸机 · Docker · Kubernetes · pfSense · Console 注册 |
| [`configure/`](skills/crowdsec/references/configure/) | acquisition · hub · profiles · notifications · allowlists · [bouncers](skills/crowdsec/references/configure/bouncers/) |
| [`appsec/`](skills/crowdsec/references/appsec/) | WAF 部署 · 配置 · 排障 · [机器人检测](skills/crowdsec/references/appsec/bot-detection/) |
| [`operate/`](skills/crowdsec/references/operate/) | 健康检查 · 升级 · 多服务器 |
| [`debug/`](skills/crowdsec/references/debug/) | [常见](skills/crowdsec/references/debug/common/)错误与问题分诊 · [症状](skills/crowdsec/references/debug/symptoms/)：日志解析、无告警、未封禁 |
| [`migrate/`](skills/crowdsec/references/migrate/) | [从 fail2ban 迁移](skills/crowdsec/references/migrate/from-fail2ban.md) |
| [Service API](skills/crowdsec-service-api/references/) | 认证 · blocklists · allowlists · 集成 · 指标 · decisions |

## 参与贡献

欢迎提交 Issue 和 PR——参见 [CONTRIBUTING.md](CONTRIBUTING.md)。尤其欢迎对参考文档的改进以及新环境的覆盖。如果发现任何缺失或错误，请放心提交 PR。

## 链接

- CrowdSec：<https://www.crowdsec.net>
- 文档：<https://docs.crowdsec.net>
- Hub：<https://hub.crowdsec.net>
- Console：<https://app.crowdsec.net>

## 许可证

MIT——参见 [LICENSE](LICENSE)。
