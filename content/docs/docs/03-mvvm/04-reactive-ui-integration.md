---
title: ReactiveUI Integration
description: Leveraging Reactive Extensions for powerful UI logic.
sidebar_label: ReactiveUI
sidebar_position: 4
tags: ["reactiveui", "rx",, "async"]
---

# ReactiveUI Integration

Avalonia has deep integration with **ReactiveUI**, a framework based on Reactive Extensions (Rx).

## Why ReactiveUI?
It allows you to treat events and property changes as "streams" of data. You can filter, transform, and combine these streams using LINQ-like operators.

## Example: Search-as-you-type
Instead of triggering a search on every keystroke, you can "debounce" the input.

```csharp:desc=Debounced search implementation
this.WhenAnyValue(x => x.SearchText)
    .Throttle(TimeSpan.FromMilliseconds(400))
    .ObserveOn(RxApp.MainThreadScheduler)
    .Subscribe(async text => await PerformSearch(text));
```

## The ViewModelBase
By inheriting from `ReactiveObject`, your ViewModel gains the ability to notify the UI of changes via `this.RaiseAndSetIfChanged`.

---
*Next: [Layout Containers](./../04-components/01-layout-containers.md)*
