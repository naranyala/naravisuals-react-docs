---
title: The Styling System
description: Creating beautiful and consistent UIs using Avalonia Styles.
sidebar_label: Styling System
sidebar_position: 4
tags: ["styling", "css", "xaml"]
---

# The Styling System

Avalonia's styling system is a hybrid between WPF's styles and CSS.

## Selectors
Selectors determine which controls a style applies to.
- **Type Selector**: `Button` targets all buttons.
- **Class Selector**: `Button.primary` targets buttons with the `primary` class.
- **Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.

## Setting Properties
Styles use **Setters** to change properties.

```xml:desc=Defining a custom style for a primary button
<Style Selector="Button.primary">
  <Setter Property="Background" Value="Blue" />
  <Setter Property="Foreground" Value="White" />
  <Setter Property="CornerRadius" Value="5" />
</Style>
```

## Style Precedence
Avalonia follows a specific order of precedence to determine which value wins:
1. Local Value (set directly on the element).
2. Style Triggers (e.g., `:pointerover`).
3. Styles in the laest-defined style block.
4. Default theme styles.

---
*Next: [MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)*
