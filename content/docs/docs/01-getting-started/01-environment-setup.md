---
title: Environment Setup
description: Installing .NET SDK and IDEs for Avalonia development.
sidebar_label: Environment Setup
sidebar_position: 1
tags: ["setup", "dotnet", "ide"]
---

# Environment Setup

To begin developing with Avalonia UI, you need a compatible .NET environment.

## .NET SDK Installation
Avalonia requires the .NET SDK. We recommend **.NET 8 or .NET 9** for the latest performance and language features.
1. Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).
2. Verify installation by running `dotnet --version` in your terminal.

## Choosing an IDE
While you can use any text editor, a full IDE significantly improves productivity.

### 1. JetBrains Rider (Recommended)
Rider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.

### 2. Visual Studio
The industry standard for Windows. Install the **Avalonia for Visual Studio** extension to get XAML intellisense and previewing.

### 3. VS Code
For a lightweight experience, install the **Avalonia for VS Code** extension.

## Installing Templates
Avalonia provides project templates to jumpstart your development. Install them via the CLI:

```bash:desc=Installing Avalonia templates globally
dotnet new install Avalonia.Templates
```

---
*Next: [Creating Your First App](./02-creating-first-app.md)*
