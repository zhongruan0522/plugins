# clangd-lsp

适用于 Claude Code 的 C/C++ 语言服务器（clangd），提供代码智能、诊断与格式化功能。

## 支持的扩展名
`.c`、`.h`、`.cpp`、`.cc`、`.cxx`、`.hpp`、`.hxx`、`.C`、`.H`

## 安装

### 通过 Homebrew 安装（macOS）
```bash
brew install llvm
# 添加到 PATH：export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
```

### 通过包管理器安装（Linux）
```bash
# Ubuntu/Debian
sudo apt install clangd

# Fedora
sudo dnf install clang-tools-extra

# Arch Linux
sudo pacman -S clang
```

### Windows
从 [LLVM 发布页面](https://github.com/llvm/llvm-project/releases)下载，或通过以下方式安装：
```bash
winget install LLVM.LLVM
```

## 更多信息
- [clangd 网站](https://clangd.llvm.org/)
- [入门指南](https://clangd.llvm.org/installation)
