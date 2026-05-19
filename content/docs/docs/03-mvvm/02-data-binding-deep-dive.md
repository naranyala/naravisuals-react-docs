---
title: Data Binding Deep Dive
description: Connecting your ViewModel properties to the UI.
sidebar_label: Data Binding
sidebar_position: 2
tags: ["binding", "xaml", "mvvm"]
---

# Data Binding Deep Dive

Binding is the mechanism that synchronizes the ViewModel and the View automatically.

## One-Way Binding
The View updates when the ViewModel changes, but not vice versa.
```xml:desc=One-way binding to a text block
<TextBlock Text="{Binding UserName}" />
```

## Two-Way Binding
Commonly used for input fields. Both the UI and the ViewModel stay in sync.
```xml:desc=Two-way binding to a text box
<TextBox Text="{Binding UserName, Mode=TwoWay}" />
```

## Binding to Collections
Use `ObservableCollection<T>` for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.

```csharp:desc=Using ObservableCollection for a list of users
public ObservableCollection<User> Users { get; } = new();
```

---
*Next: [Commands and Interaction](./03-commands-and-interaction.md)*
