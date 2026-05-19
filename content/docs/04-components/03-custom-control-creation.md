---
title: Custom Control Creation
description: Building your own reusable UI components.
sidebar_label: Custom Controls
sidebar_position: 3
tags: ["advanced", "custom-controls", "xaml"]
---

# Custom Control Creation

When built-in controls aren't enough, you can create your own.

## UserControls vs TemplatedControls
- **UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.
- **TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.

## Creating a UserControl
1. Right-click project $\rightarrow$ Add New Item $\rightarrow$ Avalonia UserControl.
2. Define the UI in `.axaml`.
3. Add logic to `.axaml.cs`.

## Styling Your Control
You can use the `Styles` block to define how your custom control looks in different states (e.g., `:pointerover`).

```xml:desc=Defining a style for a custom control
<Style Selector="my:CustomButton">
    <Setter Property="Background" Value="Gray" />
</Style>
<Style Selector="my:CustomButton:pointerover">
    <Setter Property="Background" Value="LightGray" />
</Style>
```

---
*You have completed the Avalonia UI basics! Check the [Architecture](./../02-architecture/01-xaml-fundamentals.md) section to go deeper.*
