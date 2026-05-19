// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_01_getting_started_03_project_structure: DocEntry = {
  "id": "docs/01-getting-started/03-project-structure",
  "slug": "docs/getting-started/project-structure",
  "title": "Project Structure",
  "sidebar_label": "Project Structure",
  "sidebar_position": 3,
  "category": "docs",
  "original_category": "docs",
  "description": "Exploring the files and folders of an Avalonia project.",
  "content": "<h1 id=\"project-structure\">Project Structure<a class=\"hash-link\" href=\"#project-structure\" aria-label=\"Project Structure permalink\">#</a></h1><p>A standard Avalonia project is organized to separate concerns between UI, logic, and configuration.</p>\n<h2 id=\"folder-breakdown\">Folder Breakdown<a class=\"hash-link\" href=\"#folder-breakdown\" aria-label=\"Folder Breakdown permalink\">#</a></h2><ul>\n<li><code>/Assets</code>: Stores images, fonts, and other static resources.</li>\n<li><code>/Models</code>: (Added manually) Contains data structures and business logic.</li>\n<li><code>/ViewModels</code>: Contains the logic that drives the View.</li>\n<li><code>/Views</code>: Contains the <code>.axaml</code> files and their corresponding code-behind.</li>\n</ul>\n<h2 id=\"key-files\">Key Files<a class=\"hash-link\" href=\"#key-files\" aria-label=\"Key Files permalink\">#</a></h2><h3 id=\"1-appaxaml\">1. App.axaml<a class=\"hash-link\" href=\"#1-appaxaml\" aria-label=\"1. App.axaml permalink\">#</a></h3><p>The entry point for the application's global styles and resources. This is where you define themes and global control templates.</p>\n<h3 id=\"2-appaxamlcs\">2. App.axaml.cs<a class=\"hash-link\" href=\"#2-appaxamlcs\" aria-label=\"2. App.axaml.cs permalink\">#</a></h3><p>Handles the application lifecycle, such as <code>OnFrameworkInitializationCompleted</code>, where you set the <code>MainWindow</code>.</p>\n<h3 id=\"3-programcs\">3. Program.cs<a class=\"hash-link\" href=\"#3-programcs\" aria-label=\"3. Program.cs permalink\">#</a></h3><p>The standard C# entry point that initializes the Avalonia builder and starts the application loop.</p>\n<hr>\n<p><em>Next: <a href=\"./../02-architecture/01-xaml-fundamentals.md\">XAML Fundamentals</a></em></p>\n",
  "rawContent": "\n# Project Structure\n\nA standard Avalonia project is organized to separate concerns between UI, logic, and configuration.\n\n## Folder Breakdown\n- `/Assets`: Stores images, fonts, and other static resources.\n- `/Models`: (Added manually) Contains data structures and business logic.\n- `/ViewModels`: Contains the logic that drives the View.\n- `/Views`: Contains the `.axaml` files and their corresponding code-behind.\n\n## Key Files\n### 1. App.axaml\nThe entry point for the application's global styles and resources. This is where you define themes and global control templates.\n\n### 2. App.axaml.cs\nHandles the application lifecycle, such as `OnFrameworkInitializationCompleted`, where you set the `MainWindow`.\n\n### 3. Program.cs\nThe standard C# entry point that initializes the Avalonia builder and starts the application loop.\n\n---\n*Next: [XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)*\n",
  "toc": [
    {
      "value": "Folder Breakdown",
      "id": "folder-breakdown",
      "level": 2
    },
    {
      "value": "Key Files",
      "id": "key-files",
      "level": 2
    },
    {
      "value": "1. App.axaml",
      "id": "1-appaxaml",
      "level": 3
    },
    {
      "value": "2. App.axaml.cs",
      "id": "2-appaxamlcs",
      "level": 3
    },
    {
      "value": "3. Program.cs",
      "id": "3-programcs",
      "level": 3
    }
  ],
  "tags": [
    "structure",
    "organization",
    "dotnet"
  ],
  "section": "docs",
  "metadata": {},
  "ast": [
    {
      "type": "space",
      "raw": "\n"
    },
    {
      "type": "heading",
      "raw": "# Project Structure",
      "depth": 1,
      "text": "Project Structure",
      "tokens": [
        {
          "type": "text",
          "raw": "Project Structure",
          "text": "Project Structure",
          "escaped": false
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "paragraph",
      "raw": "A standard Avalonia project is organized to separate concerns between UI, logic, and configuration.",
      "text": "A standard Avalonia project is organized to separate concerns between UI, logic, and configuration.",
      "tokens": [
        {
          "type": "text",
          "raw": "A standard Avalonia project is organized to separate concerns between UI, logic, and configuration.",
          "text": "A standard Avalonia project is organized to separate concerns between UI, logic, and configuration.",
          "escaped": false
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Folder Breakdown\n",
      "depth": 2,
      "text": "Folder Breakdown",
      "tokens": [
        {
          "type": "text",
          "raw": "Folder Breakdown",
          "text": "Folder Breakdown",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- `/Assets`: Stores images, fonts, and other static resources.\n- `/Models`: (Added manually) Contains data structures and business logic.\n- `/ViewModels`: Contains the logic that drives the View.\n- `/Views`: Contains the `.axaml` files and their corresponding code-behind.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- `/Assets`: Stores images, fonts, and other static resources.\n",
          "task": false,
          "loose": false,
          "text": "`/Assets`: Stores images, fonts, and other static resources.",
          "tokens": [
            {
              "type": "text",
              "raw": "`/Assets`: Stores images, fonts, and other static resources.",
              "text": "`/Assets`: Stores images, fonts, and other static resources.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`/Assets`",
                  "text": "/Assets"
                },
                {
                  "type": "text",
                  "raw": ": Stores images, fonts, and other static resources.",
                  "text": ": Stores images, fonts, and other static resources.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- `/Models`: (Added manually) Contains data structures and business logic.\n",
          "task": false,
          "loose": false,
          "text": "`/Models`: (Added manually) Contains data structures and business logic.",
          "tokens": [
            {
              "type": "text",
              "raw": "`/Models`: (Added manually) Contains data structures and business logic.",
              "text": "`/Models`: (Added manually) Contains data structures and business logic.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`/Models`",
                  "text": "/Models"
                },
                {
                  "type": "text",
                  "raw": ": (Added manually) Contains data structures and business logic.",
                  "text": ": (Added manually) Contains data structures and business logic.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- `/ViewModels`: Contains the logic that drives the View.\n",
          "task": false,
          "loose": false,
          "text": "`/ViewModels`: Contains the logic that drives the View.",
          "tokens": [
            {
              "type": "text",
              "raw": "`/ViewModels`: Contains the logic that drives the View.",
              "text": "`/ViewModels`: Contains the logic that drives the View.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`/ViewModels`",
                  "text": "/ViewModels"
                },
                {
                  "type": "text",
                  "raw": ": Contains the logic that drives the View.",
                  "text": ": Contains the logic that drives the View.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- `/Views`: Contains the `.axaml` files and their corresponding code-behind.",
          "task": false,
          "loose": false,
          "text": "`/Views`: Contains the `.axaml` files and their corresponding code-behind.",
          "tokens": [
            {
              "type": "text",
              "raw": "`/Views`: Contains the `.axaml` files and their corresponding code-behind.",
              "text": "`/Views`: Contains the `.axaml` files and their corresponding code-behind.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`/Views`",
                  "text": "/Views"
                },
                {
                  "type": "text",
                  "raw": ": Contains the ",
                  "text": ": Contains the ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`.axaml`",
                  "text": ".axaml"
                },
                {
                  "type": "text",
                  "raw": " files and their corresponding code-behind.",
                  "text": " files and their corresponding code-behind.",
                  "escaped": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Key Files\n",
      "depth": 2,
      "text": "Key Files",
      "tokens": [
        {
          "type": "text",
          "raw": "Key Files",
          "text": "Key Files",
          "escaped": false
        }
      ]
    },
    {
      "type": "heading",
      "raw": "### 1. App.axaml\n",
      "depth": 3,
      "text": "1. App.axaml",
      "tokens": [
        {
          "type": "text",
          "raw": "1. App.axaml",
          "text": "1. App.axaml",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The entry point for the application's global styles and resources. This is where you define themes and global control templates.",
      "text": "The entry point for the application's global styles and resources. This is where you define themes and global control templates.",
      "tokens": [
        {
          "type": "text",
          "raw": "The entry point for the application's global styles and resources. This is where you define themes and global control templates.",
          "text": "The entry point for the application's global styles and resources. This is where you define themes and global control templates.",
          "escaped": false
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "### 2. App.axaml.cs\n",
      "depth": 3,
      "text": "2. App.axaml.cs",
      "tokens": [
        {
          "type": "text",
          "raw": "2. App.axaml.cs",
          "text": "2. App.axaml.cs",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Handles the application lifecycle, such as `OnFrameworkInitializationCompleted`, where you set the `MainWindow`.",
      "text": "Handles the application lifecycle, such as `OnFrameworkInitializationCompleted`, where you set the `MainWindow`.",
      "tokens": [
        {
          "type": "text",
          "raw": "Handles the application lifecycle, such as ",
          "text": "Handles the application lifecycle, such as ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`OnFrameworkInitializationCompleted`",
          "text": "OnFrameworkInitializationCompleted"
        },
        {
          "type": "text",
          "raw": ", where you set the ",
          "text": ", where you set the ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`MainWindow`",
          "text": "MainWindow"
        },
        {
          "type": "text",
          "raw": ".",
          "text": ".",
          "escaped": false
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "### 3. Program.cs\n",
      "depth": 3,
      "text": "3. Program.cs",
      "tokens": [
        {
          "type": "text",
          "raw": "3. Program.cs",
          "text": "3. Program.cs",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The standard C# entry point that initializes the Avalonia builder and starts the application loop.",
      "text": "The standard C# entry point that initializes the Avalonia builder and starts the application loop.",
      "tokens": [
        {
          "type": "text",
          "raw": "The standard C# entry point that initializes the Avalonia builder and starts the application loop.",
          "text": "The standard C# entry point that initializes the Avalonia builder and starts the application loop.",
          "escaped": false
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "hr",
      "raw": "---\n"
    },
    {
      "type": "paragraph",
      "raw": "*Next: [XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)*\n",
      "text": "*Next: [XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)*",
          "text": "Next: [XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[XAML Fundamentals](./../02-architecture/01-xaml-fundamentals.md)",
              "href": "./../02-architecture/01-xaml-fundamentals.md",
              "title": null,
              "text": "XAML Fundamentals",
              "tokens": [
                {
                  "type": "text",
                  "raw": "XAML Fundamentals",
                  "text": "XAML Fundamentals",
                  "escaped": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
