---
title: The Rendering Pipeline
description: How Avalonia draws pixels on different platforms.
sidebar_label: Rendering Pipeline
sidebar_position: 2
tags: ["rendering", "performance", "skia"]
---

# The Rendering Pipeline

Avalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.

## SkiaSharp
At the core of Avalonia is **SkiaSharp**, a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.

## The Rendering Process
1. **Measure Pass**: The framework calculates how much space each element needs.
2. **Arrange Pass**: The framework positions elements within their allocated space.
3. **Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.

## Hardware Acceleration
Avalonia supports multiple rendering backends:
- **OpenGL**: For high-performance GPU acceleration.
- **Vulkan**: Modern GPU acceleration.
- **Software**: A fallback for environments without GPU support.

---
*Next: [Logical vs Visual Tree](./03-logical-vs-visual-tree.md)*
