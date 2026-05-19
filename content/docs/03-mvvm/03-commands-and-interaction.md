---
title: Commands and Interaction
description: Handling user input without code-behind.
sidebar_label: Commands
sidebar_position: 3
tags: ["commands", "mvvm", "events"]
---

# Commands and Interaction

In MVVM, we avoid using "Click" event handlers in the code-behind. Instead, we use **ICommand**.

## What is a Command?
A command is an object that encapsulates a piece of logic. It can be bound to a button's `Command` property.

## Implementing a Command
You can use `ReactiveCommand` from ReactiveUI or `RelayCommand` from the CommunityToolkit.

```csharp:desc=Example of a RelayCommand in a ViewModel
public ICommand SaveCommand { get; }

public MainViewModel() {
    SaveCommand = new RelayCommand(SaveData);
}

private void SaveData() {
    // Logic to save data
}
```

## Binding a Command in XAML
```xml:desc=Binding a button to a command
<Button Content="Save" Command="{Binding SaveCommand}" />
```

---
*Next: [ReactiveUI Integration](./04-reactive-ui-integration.md)*
