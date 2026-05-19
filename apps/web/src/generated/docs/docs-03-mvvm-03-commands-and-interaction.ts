// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_03_mvvm_03_commands_and_interaction: DocEntry = {
  "id": "docs/03-mvvm/03-commands-and-interaction",
  "slug": "docs/mvvm/commands-and-interaction",
  "title": "Commands and Interaction",
  "sidebar_label": "Commands",
  "sidebar_position": 3,
  "category": "docs",
  "original_category": "docs",
  "description": "Handling user input without code-behind.",
  "content": "<h1 id=\"commands-and-interaction\">Commands and Interaction<a class=\"hash-link\" href=\"#commands-and-interaction\" aria-label=\"Commands and Interaction permalink\">#</a></h1><p>In MVVM, we avoid using \"Click\" event handlers in the code-behind. Instead, we use <strong>ICommand</strong>.</p>\n<h2 id=\"what-is-a-command\">What is a Command?<a class=\"hash-link\" href=\"#what-is-a-command\" aria-label=\"What is a Command? permalink\">#</a></h2><p>A command is an object that encapsulates a piece of logic. It can be bound to a button's <code>Command</code> property.</p>\n<h2 id=\"implementing-a-command\">Implementing a Command<a class=\"hash-link\" href=\"#implementing-a-command\" aria-label=\"Implementing a Command permalink\">#</a></h2><p>You can use <code>ReactiveCommand</code> from ReactiveUI or <code>RelayCommand</code> from the CommunityToolkit.</p>\n<div class=\"code-block\" data-lang=\"csharp\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Csharp</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-csharp\">public ICommand SaveCommand { get; }\n\npublic MainViewModel() {\n    SaveCommand = new RelayCommand(SaveData);\n}\n\nprivate void SaveData() {\n    // Logic to save data\n}</code></pre><div class=\"code-desc\">Example of a RelayCommand in a ViewModel</div></div><h2 id=\"binding-a-command-in-xaml\">Binding a Command in XAML<a class=\"hash-link\" href=\"#binding-a-command-in-xaml\" aria-label=\"Binding a Command in XAML permalink\">#</a></h2><div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Button Content=\"Save\" Command=\"{Binding SaveCommand}\" /&gt;</code></pre><div class=\"code-desc\">Binding a button to a command</div></div><hr>\n<p><em>Next: <a href=\"./04-reactive-ui-integration.md\">ReactiveUI Integration</a></em></p>\n",
  "rawContent": "\n# Commands and Interaction\n\nIn MVVM, we avoid using \"Click\" event handlers in the code-behind. Instead, we use **ICommand**.\n\n## What is a Command?\nA command is an object that encapsulates a piece of logic. It can be bound to a button's `Command` property.\n\n## Implementing a Command\nYou can use `ReactiveCommand` from ReactiveUI or `RelayCommand` from the CommunityToolkit.\n\n```csharp:desc=Example of a RelayCommand in a ViewModel\npublic ICommand SaveCommand { get; }\n\npublic MainViewModel() {\n    SaveCommand = new RelayCommand(SaveData);\n}\n\nprivate void SaveData() {\n    // Logic to save data\n}\n```\n\n## Binding a Command in XAML\n```xml:desc=Binding a button to a command\n<Button Content=\"Save\" Command=\"{Binding SaveCommand}\" />\n```\n\n---\n*Next: [ReactiveUI Integration](./04-reactive-ui-integration.md)*\n",
  "toc": [
    {
      "value": "What is a Command?",
      "id": "what-is-a-command",
      "level": 2
    },
    {
      "value": "Implementing a Command",
      "id": "implementing-a-command",
      "level": 2
    },
    {
      "value": "Binding a Command in XAML",
      "id": "binding-a-command-in-xaml",
      "level": 2
    }
  ],
  "tags": [
    "commands",
    "mvvm",
    "events"
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
      "raw": "# Commands and Interaction",
      "depth": 1,
      "text": "Commands and Interaction",
      "tokens": [
        {
          "type": "text",
          "raw": "Commands and Interaction",
          "text": "Commands and Interaction",
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
      "raw": "In MVVM, we avoid using \"Click\" event handlers in the code-behind. Instead, we use **ICommand**.",
      "text": "In MVVM, we avoid using \"Click\" event handlers in the code-behind. Instead, we use **ICommand**.",
      "tokens": [
        {
          "type": "text",
          "raw": "In MVVM, we avoid using \"Click\" event handlers in the code-behind. Instead, we use ",
          "text": "In MVVM, we avoid using \"Click\" event handlers in the code-behind. Instead, we use ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**ICommand**",
          "text": "ICommand",
          "tokens": [
            {
              "type": "text",
              "raw": "ICommand",
              "text": "ICommand",
              "escaped": false
            }
          ]
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
      "raw": "## What is a Command?\n",
      "depth": 2,
      "text": "What is a Command?",
      "tokens": [
        {
          "type": "text",
          "raw": "What is a Command?",
          "text": "What is a Command?",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "A command is an object that encapsulates a piece of logic. It can be bound to a button's `Command` property.",
      "text": "A command is an object that encapsulates a piece of logic. It can be bound to a button's `Command` property.",
      "tokens": [
        {
          "type": "text",
          "raw": "A command is an object that encapsulates a piece of logic. It can be bound to a button's ",
          "text": "A command is an object that encapsulates a piece of logic. It can be bound to a button's ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`Command`",
          "text": "Command"
        },
        {
          "type": "text",
          "raw": " property.",
          "text": " property.",
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
      "raw": "## Implementing a Command\n",
      "depth": 2,
      "text": "Implementing a Command",
      "tokens": [
        {
          "type": "text",
          "raw": "Implementing a Command",
          "text": "Implementing a Command",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "You can use `ReactiveCommand` from ReactiveUI or `RelayCommand` from the CommunityToolkit.",
      "text": "You can use `ReactiveCommand` from ReactiveUI or `RelayCommand` from the CommunityToolkit.",
      "tokens": [
        {
          "type": "text",
          "raw": "You can use ",
          "text": "You can use ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`ReactiveCommand`",
          "text": "ReactiveCommand"
        },
        {
          "type": "text",
          "raw": " from ReactiveUI or ",
          "text": " from ReactiveUI or ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`RelayCommand`",
          "text": "RelayCommand"
        },
        {
          "type": "text",
          "raw": " from the CommunityToolkit.",
          "text": " from the CommunityToolkit.",
          "escaped": false
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "code",
      "raw": "```csharp:desc=Example of a RelayCommand in a ViewModel\npublic ICommand SaveCommand { get; }\n\npublic MainViewModel() {\n    SaveCommand = new RelayCommand(SaveData);\n}\n\nprivate void SaveData() {\n    // Logic to save data\n}\n```",
      "lang": "csharp:desc=Example of a RelayCommand in a ViewModel",
      "text": "public ICommand SaveCommand { get; }\n\npublic MainViewModel() {\n    SaveCommand = new RelayCommand(SaveData);\n}\n\nprivate void SaveData() {\n    // Logic to save data\n}"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Binding a Command in XAML\n",
      "depth": 2,
      "text": "Binding a Command in XAML",
      "tokens": [
        {
          "type": "text",
          "raw": "Binding a Command in XAML",
          "text": "Binding a Command in XAML",
          "escaped": false
        }
      ]
    },
    {
      "type": "code",
      "raw": "```xml:desc=Binding a button to a command\n<Button Content=\"Save\" Command=\"{Binding SaveCommand}\" />\n```",
      "lang": "xml:desc=Binding a button to a command",
      "text": "<Button Content=\"Save\" Command=\"{Binding SaveCommand}\" />"
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
      "raw": "*Next: [ReactiveUI Integration](./04-reactive-ui-integration.md)*\n",
      "text": "*Next: [ReactiveUI Integration](./04-reactive-ui-integration.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [ReactiveUI Integration](./04-reactive-ui-integration.md)*",
          "text": "Next: [ReactiveUI Integration](./04-reactive-ui-integration.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[ReactiveUI Integration](./04-reactive-ui-integration.md)",
              "href": "./04-reactive-ui-integration.md",
              "title": null,
              "text": "ReactiveUI Integration",
              "tokens": [
                {
                  "type": "text",
                  "raw": "ReactiveUI Integration",
                  "text": "ReactiveUI Integration",
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
