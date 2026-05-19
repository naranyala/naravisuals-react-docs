---
title: Basic Controls
description: Using the most common Avalonia UI elements.
sidebar_label: Basic Controls
sidebar_position: 2
tags: ["controls", "ui", "xaml"]
---

# Basic Controls

Avalonia provides a rich set of controls out of the box.

## Text Input
- **TextBlock**: Read-only text.
- **TextBox**: User editable text.
- **PasswordBox**: Masked text input.

## Selection Controls
- **CheckBox**: Binary choice.
- **RadioButton**: Single choice from a group.
- **ComboBox**: Drop-down selection.

## Action Controls
- **Button**: Triggers a command.
- **MenuItem**: Used in menus and context menus.

## Example: A Simple Form
```xml:desc=Combining controls in a StackPanel
<StackPanel Spacing="10">
    <TextBlock Text="Enter your name:" />
    <TextBox Text="{Binding Name}" />
    <Button Content="Submit" Command="{Binding SubmitCommand}" />
</StackPanel>
```

---
*Next: [Custom Control Creation](./03-custom-control-creation.md)*
