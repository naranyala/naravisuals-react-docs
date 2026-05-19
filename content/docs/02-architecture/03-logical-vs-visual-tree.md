---
title: Logical vs Visual Tree
description: Understanding the difference between the XAML structure and the rendered output.
sidebar_label: The Tree System
sidebar_position: 3
tags: ["architecture", "tree", "ui"]
---

# Logical vs Visual Tree

In Avalonia, every piece of the UI exists in two different "trees".

## The Logical Tree
The Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.
*Example: A `Window` contains a `Grid`, which contains a `Button`.*

## The Visual Tree
The Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller "primitive" elements.
*Example: A `Button` isn't just one element; it's a `Border` containing a `ContentPresenter`, which contains a `TextBlock`.*

## Why it Matters
Understanding the Visual Tree is essential for:
1. **Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.
2. **Styling**: Styles often target specific parts of the visual tree using selectors.

---
*Next: [The Styling System](./04-styling-system.md)*
