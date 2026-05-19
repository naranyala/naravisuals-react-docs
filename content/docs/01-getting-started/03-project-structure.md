---
title: Project Structure
description: Exploring the files and folders of an Avalonia project.
sidebar_label: Project Structure
sidebar_position: 3
tags: ["structure", "organization", "dotnet"]
---

# Project Structure

A standard Avalonia project is organized to separate concerns between UI, logic, and configuration.

## Folder Breakdown
- `/Assets`: Stores images, fonts, and other static resources.
- `/Models`: (Added manually) Contains data structures and business logic.
- `/ViewModels`: Contains the logic that drives the View.
- `/Views`: Contains the `.axaml` files and their corresponding code-behind.

## Key Files
### 1. App.axaml
The entry point for the application's global styles and resources. This is where you define themes and global control templates.

### 2. App.axaml.cs
Handles the application lifecycle, such as `OnFrameworkInitializationCompleted`, where you set the `MainWindow`.

### 3. Program.cs
The standard C# entry point that initializes the Avalonia builder and starts the application loop.

---
*Next: [XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)*
