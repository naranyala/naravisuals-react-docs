---
title: XAML Fundamentals
description: Understanding the declarative language of Avalonia UI.
sidebar_label: XAML Basics
sidebar_position: 1
tags: ["xaml", "ui", "markup"]
---

# XAML Fundamentals

XAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.

## Basic Syntax
XAML elements map directly to C# classes. For example, `<Button />` in XAML creates an instance of the `Avalonia.Controls.Button` class.

```xml:desc=Basic XAML Button definition
<Button Content="Click Me" 
        Background="Blue" 
        Foreground="White" 
        Width="100" 
        Height="40" />
```

## Properties and Attributes
Most properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use "Property Element Syntax":

```xml,desc=Setting a complex property using element syntax
<StackPanel>
    <StackPanel.Margin>
        <Thickness Left="10" Top="10" Right="10" Bottom="10" />
    </StackPanel.Margin>
    <TextBlock Text="Hello World" />
</StackPanel>
```

## Namespaces
Namespaces are used to bring in controls from other libraries.
- `xmlns="https://github.com/avaloniaui"`: The default Avalonia namespace.
- `xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"`: Used for XAML-specific features like `x:Name`.

---
*Next: [The Rendering Pipeline](./02-rendering-pipeline.md)*
