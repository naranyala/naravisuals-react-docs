---
title: UI Components
description: Guide to using Layouts and Controls in Avalonia.
sidebar_label: UI Components
sidebar_position: 5
tags: ["ui", "components", "layout"]
---

# Working with UI Components

## Layouts
- **Grid**: Fixed or proportional rows/columns.
- **StackPanel**: Simple linear flow.

```xml:desc=Grid Layout Example
<Grid ColumnDefinitions="*, 2*">
    <TextBlock Grid.Column="0" Text="Left" />
    <TextBlock Grid.Column="1" Text="Right" />
</Grid>
```

## References
- [Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)
