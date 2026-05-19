---
title: Layout Containers
description: Organizing your UI with Grids, StackPanels, and more.
sidebar_label: Layouts
sidebar_position: 1
tags: ["layout", "ui", "xaml"]
---

# Layout Containers

Choosing the right container is the most important part of creating a responsive UI.

## The Grid
The Grid is the most flexible container. It uses rows and columns.

```xml:desc=A 2x2 Grid layout
<Grid ColumnDefinitions="*, *" RowDefinitions="Auto, *">
    <TextBlock Grid.Row="0" Grid.ColumnSpan="2" Text="Header" />
    <Button Grid.Row="1" Grid.Column="0" Content="Left" />
    <Button Grid.Row="1" Grid.Column="1" Content="Right" />
</Grid>
```

## The StackPanel
Arranges elements in a simple line.
- `Orientation="Vertical"` (Default)
- `Orientation="Horizontal"`

## The DockPanel
Docks elements to the edges. Use `LastChildFill="True"` to make the last element fill the remaining space.

## The Canvas
Absolute positioning. Use this for games or custom drawing.

---
*Next: [Basic Controls](./02-basic-controls.md)*
