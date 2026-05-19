// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_03_mvvm_02_data_binding_deep_dive: DocEntry = {
  "id": "docs/03-mvvm/02-data-binding-deep-dive",
  "slug": "docs/mvvm/data-binding-deep-dive",
  "title": "Data Binding Deep Dive",
  "sidebar_label": "Data Binding",
  "sidebar_position": 2,
  "category": "docs",
  "original_category": "docs",
  "description": "Connecting your ViewModel properties to the UI.",
  "content": "<h1 id=\"data-binding-deep-dive\">Data Binding Deep Dive<a class=\"hash-link\" href=\"#data-binding-deep-dive\" aria-label=\"Data Binding Deep Dive permalink\">#</a></h1><p>Binding is the mechanism that synchronizes the ViewModel and the View automatically.</p>\n<h2 id=\"one-way-binding\">One-Way Binding<a class=\"hash-link\" href=\"#one-way-binding\" aria-label=\"One-Way Binding permalink\">#</a></h2><p>The View updates when the ViewModel changes, but not vice versa.</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;TextBlock Text=\"{Binding UserName}\" /&gt;</code></pre><div class=\"code-desc\">One-way binding to a text block</div></div><h2 id=\"two-way-binding\">Two-Way Binding<a class=\"hash-link\" href=\"#two-way-binding\" aria-label=\"Two-Way Binding permalink\">#</a></h2><p>Commonly used for input fields. Both the UI and the ViewModel stay in sync.</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;TextBox Text=\"{Binding UserName, Mode=TwoWay}\" /&gt;</code></pre><div class=\"code-desc\">Two-way binding to a text box</div></div><h2 id=\"binding-to-collections\">Binding to Collections<a class=\"hash-link\" href=\"#binding-to-collections\" aria-label=\"Binding to Collections permalink\">#</a></h2><p>Use <code>ObservableCollection&lt;T&gt;</code> for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.</p>\n<div class=\"code-block\" data-lang=\"csharp\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Csharp</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-csharp\">public ObservableCollection&lt;User&gt; Users { get; } = new();</code></pre><div class=\"code-desc\">Using ObservableCollection for a list of users</div></div><hr>\n<p><em>Next: <a href=\"./03-commands-and-interaction.md\">Commands and Interaction</a></em></p>\n",
  "rawContent": "\n# Data Binding Deep Dive\n\nBinding is the mechanism that synchronizes the ViewModel and the View automatically.\n\n## One-Way Binding\nThe View updates when the ViewModel changes, but not vice versa.\n```xml:desc=One-way binding to a text block\n<TextBlock Text=\"{Binding UserName}\" />\n```\n\n## Two-Way Binding\nCommonly used for input fields. Both the UI and the ViewModel stay in sync.\n```xml:desc=Two-way binding to a text box\n<TextBox Text=\"{Binding UserName, Mode=TwoWay}\" />\n```\n\n## Binding to Collections\nUse `ObservableCollection<T>` for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.\n\n```csharp:desc=Using ObservableCollection for a list of users\npublic ObservableCollection<User> Users { get; } = new();\n```\n\n---\n*Next: [Commands and Interaction](./03-commands-and-interaction.md)*\n",
  "toc": [
    {
      "value": "One-Way Binding",
      "id": "one-way-binding",
      "level": 2
    },
    {
      "value": "Two-Way Binding",
      "id": "two-way-binding",
      "level": 2
    },
    {
      "value": "Binding to Collections",
      "id": "binding-to-collections",
      "level": 2
    }
  ],
  "tags": [
    "binding",
    "xaml",
    "mvvm"
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
      "raw": "# Data Binding Deep Dive",
      "depth": 1,
      "text": "Data Binding Deep Dive",
      "tokens": [
        {
          "type": "text",
          "raw": "Data Binding Deep Dive",
          "text": "Data Binding Deep Dive",
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
      "raw": "Binding is the mechanism that synchronizes the ViewModel and the View automatically.",
      "text": "Binding is the mechanism that synchronizes the ViewModel and the View automatically.",
      "tokens": [
        {
          "type": "text",
          "raw": "Binding is the mechanism that synchronizes the ViewModel and the View automatically.",
          "text": "Binding is the mechanism that synchronizes the ViewModel and the View automatically.",
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
      "raw": "## One-Way Binding\n",
      "depth": 2,
      "text": "One-Way Binding",
      "tokens": [
        {
          "type": "text",
          "raw": "One-Way Binding",
          "text": "One-Way Binding",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The View updates when the ViewModel changes, but not vice versa.\n",
      "text": "The View updates when the ViewModel changes, but not vice versa.",
      "tokens": [
        {
          "type": "text",
          "raw": "The View updates when the ViewModel changes, but not vice versa.",
          "text": "The View updates when the ViewModel changes, but not vice versa.",
          "escaped": false
        }
      ]
    },
    {
      "type": "code",
      "raw": "```xml:desc=One-way binding to a text block\n<TextBlock Text=\"{Binding UserName}\" />\n```",
      "lang": "xml:desc=One-way binding to a text block",
      "text": "<TextBlock Text=\"{Binding UserName}\" />"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Two-Way Binding\n",
      "depth": 2,
      "text": "Two-Way Binding",
      "tokens": [
        {
          "type": "text",
          "raw": "Two-Way Binding",
          "text": "Two-Way Binding",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Commonly used for input fields. Both the UI and the ViewModel stay in sync.\n",
      "text": "Commonly used for input fields. Both the UI and the ViewModel stay in sync.",
      "tokens": [
        {
          "type": "text",
          "raw": "Commonly used for input fields. Both the UI and the ViewModel stay in sync.",
          "text": "Commonly used for input fields. Both the UI and the ViewModel stay in sync.",
          "escaped": false
        }
      ]
    },
    {
      "type": "code",
      "raw": "```xml:desc=Two-way binding to a text box\n<TextBox Text=\"{Binding UserName, Mode=TwoWay}\" />\n```",
      "lang": "xml:desc=Two-way binding to a text box",
      "text": "<TextBox Text=\"{Binding UserName, Mode=TwoWay}\" />"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Binding to Collections\n",
      "depth": 2,
      "text": "Binding to Collections",
      "tokens": [
        {
          "type": "text",
          "raw": "Binding to Collections",
          "text": "Binding to Collections",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Use `ObservableCollection<T>` for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.",
      "text": "Use `ObservableCollection<T>` for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.",
      "tokens": [
        {
          "type": "text",
          "raw": "Use ",
          "text": "Use ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`ObservableCollection<T>`",
          "text": "ObservableCollection<T>"
        },
        {
          "type": "text",
          "raw": " for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.",
          "text": " for lists. When you add or remove an item from the collection in C#, the UI list updates instantly.",
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
      "raw": "```csharp:desc=Using ObservableCollection for a list of users\npublic ObservableCollection<User> Users { get; } = new();\n```",
      "lang": "csharp:desc=Using ObservableCollection for a list of users",
      "text": "public ObservableCollection<User> Users { get; } = new();"
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
      "raw": "*Next: [Commands and Interaction](./03-commands-and-interaction.md)*\n",
      "text": "*Next: [Commands and Interaction](./03-commands-and-interaction.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Commands and Interaction](./03-commands-and-interaction.md)*",
          "text": "Next: [Commands and Interaction](./03-commands-and-interaction.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Commands and Interaction](./03-commands-and-interaction.md)",
              "href": "./03-commands-and-interaction.md",
              "title": null,
              "text": "Commands and Interaction",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Commands and Interaction",
                  "text": "Commands and Interaction",
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
