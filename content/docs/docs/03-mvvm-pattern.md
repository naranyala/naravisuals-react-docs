---
title: The MVVM Pattern
description: Separating logic from UI using Model-View-ViewModel.
sidebar_label: MVVM Pattern
sidebar_position: 4
tags: ["mvvm", "design-patterns", "csharp"]
---

# Mastering the MVVM Pattern

## Core Concepts
- **Model**: Data and business logic.
- **View**: The XAML UI.
- **ViewModel**: The state and commands.

```csharp:desc=Example ViewModel
public class MainViewModel : ViewModelBase {
    public string Greeting => "Hello Avalonia!";
}
```

## References
- [MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)
