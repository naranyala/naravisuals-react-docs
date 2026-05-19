---
title: MVVM Core Concepts
description: The basics of Model-View-ViewModel architecture in .NET.
sidebar_label: MVVM Basics
sidebar_position: 1
tags: ["mvvm", "architecture", "csharp"]
---

# MVVM Core Concepts

MVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.

## The Model
The Model is the "truth" of your application. It contains data objects and database logic.
```csharp:desc=Simple User Model
public class User {
    public string Name { get; set; }
    public int Age { get; set; }
}
```

## The View
The View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.

## The ViewModel
The ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.

```csharp:desc=Simple ViewModel
public class MainViewModel : ViewModelBase {
    private string _userName = "Guest";
    public string UserName {
        get => _userName;
        set => this.RaiseAndSetIfChanged(ref _userName, value);
    }
}
```

---
*Next: [Data Binding Deep Dive](./02-data-binding-deep-dive.md)*
