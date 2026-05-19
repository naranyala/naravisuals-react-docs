---
title: Creating Your First App
description: Step-by-step guide to launching your first Avalonia window.
sidebar_label: First Application
sidebar_position: 2
tags: ["beginner", "project", "cli"]
---

# Creating Your First App

Now that your environment is ready, let's create a functional "Hello World" application.

## Generating the Project
Use the `dotnet new` command to create an Avalonia application. We recommend the `avalonia.app` template for desktop development.

```bash:desc=Create a new Avalonia project named 'MyFirstApp'
dotnet new avalonia.app -o MyFirstApp
```

## Running the Application
Navigate into the project folder and execute the run command:

```bash:desc=Run the application
cd MyFirstApp
dotnet run
```

## Breaking Down the Code
When you open the project, you will notice two primary files for every window:
1. `MainWindow.axaml`: The declarative UI definition (XAML).
2. `MainWindow.axaml.cs`: The "code-behind" where logic and event handlers reside.

---
*Next: [Understanding Project Structure](./03-project-structure.md)*
