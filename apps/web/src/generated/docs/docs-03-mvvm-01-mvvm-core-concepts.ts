// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_03_mvvm_01_mvvm_core_concepts: DocEntry = {
  "id": "docs/03-mvvm/01-mvvm-core-concepts",
  "slug": "docs/mvvm/mvvm-core-concepts",
  "title": "MVVM Core Concepts",
  "sidebar_label": "MVVM Basics",
  "sidebar_position": 1,
  "category": "docs",
  "original_category": "docs",
  "description": "The basics of Model-View-ViewModel architecture in .NET.",
  "content": "<h1 id=\"mvvm-core-concepts\">MVVM Core Concepts<a class=\"hash-link\" href=\"#mvvm-core-concepts\" aria-label=\"MVVM Core Concepts permalink\">#</a></h1><p>MVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.</p>\n<h2 id=\"the-model\">The Model<a class=\"hash-link\" href=\"#the-model\" aria-label=\"The Model permalink\">#</a></h2><p>The Model is the \"truth\" of your application. It contains data objects and database logic.</p>\n<div class=\"code-block\" data-lang=\"csharp\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Csharp</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-csharp\">public class User {\n    public string Name { get; set; }\n    public int Age { get; set; }\n}</code></pre><div class=\"code-desc\">Simple User Model</div></div><h2 id=\"the-view\">The View<a class=\"hash-link\" href=\"#the-view\" aria-label=\"The View permalink\">#</a></h2><p>The View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.</p>\n<h2 id=\"the-viewmodel\">The ViewModel<a class=\"hash-link\" href=\"#the-viewmodel\" aria-label=\"The ViewModel permalink\">#</a></h2><p>The ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.</p>\n<div class=\"code-block\" data-lang=\"csharp\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Csharp</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-csharp\">public class MainViewModel : ViewModelBase {\n    private string _userName = \"Guest\";\n    public string UserName {\n        get =&gt; _userName;\n        set =&gt; this.RaiseAndSetIfChanged(ref _userName, value);\n    }\n}</code></pre><div class=\"code-desc\">Simple ViewModel</div></div><hr>\n<p><em>Next: <a href=\"./02-data-binding-deep-dive.md\">Data Binding Deep Dive</a></em></p>\n",
  "rawContent": "\n# MVVM Core Concepts\n\nMVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.\n\n## The Model\nThe Model is the \"truth\" of your application. It contains data objects and database logic.\n```csharp:desc=Simple User Model\npublic class User {\n    public string Name { get; set; }\n    public int Age { get; set; }\n}\n```\n\n## The View\nThe View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.\n\n## The ViewModel\nThe ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.\n\n```csharp:desc=Simple ViewModel\npublic class MainViewModel : ViewModelBase {\n    private string _userName = \"Guest\";\n    public string UserName {\n        get => _userName;\n        set => this.RaiseAndSetIfChanged(ref _userName, value);\n    }\n}\n```\n\n---\n*Next: [Data Binding Deep Dive](./02-data-binding-deep-dive.md)*\n",
  "toc": [
    {
      "value": "The Model",
      "id": "the-model",
      "level": 2
    },
    {
      "value": "The View",
      "id": "the-view",
      "level": 2
    },
    {
      "value": "The ViewModel",
      "id": "the-viewmodel",
      "level": 2
    }
  ],
  "tags": [
    "mvvm",
    "architecture",
    "csharp"
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
      "raw": "# MVVM Core Concepts",
      "depth": 1,
      "text": "MVVM Core Concepts",
      "tokens": [
        {
          "type": "text",
          "raw": "MVVM Core Concepts",
          "text": "MVVM Core Concepts",
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
      "raw": "MVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.",
      "text": "MVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.",
      "tokens": [
        {
          "type": "text",
          "raw": "MVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.",
          "text": "MVVM is the industry standard for building modern desktop apps. It ensures that your UI logic is separate from your business logic.",
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
      "raw": "## The Model\n",
      "depth": 2,
      "text": "The Model",
      "tokens": [
        {
          "type": "text",
          "raw": "The Model",
          "text": "The Model",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The Model is the \"truth\" of your application. It contains data objects and database logic.\n",
      "text": "The Model is the \"truth\" of your application. It contains data objects and database logic.",
      "tokens": [
        {
          "type": "text",
          "raw": "The Model is the \"truth\" of your application. It contains data objects and database logic.",
          "text": "The Model is the \"truth\" of your application. It contains data objects and database logic.",
          "escaped": false
        }
      ]
    },
    {
      "type": "code",
      "raw": "```csharp:desc=Simple User Model\npublic class User {\n    public string Name { get; set; }\n    public int Age { get; set; }\n}\n```",
      "lang": "csharp:desc=Simple User Model",
      "text": "public class User {\n    public string Name { get; set; }\n    public int Age { get; set; }\n}"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## The View\n",
      "depth": 2,
      "text": "The View",
      "tokens": [
        {
          "type": "text",
          "raw": "The View",
          "text": "The View",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.",
      "text": "The View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.",
      "tokens": [
        {
          "type": "text",
          "raw": "The View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.",
          "text": "The View is the XAML file. It should contain zero business logic. Its only job is to display data and forward user input to the ViewModel.",
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
      "raw": "## The ViewModel\n",
      "depth": 2,
      "text": "The ViewModel",
      "tokens": [
        {
          "type": "text",
          "raw": "The ViewModel",
          "text": "The ViewModel",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.",
      "text": "The ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.",
      "tokens": [
        {
          "type": "text",
          "raw": "The ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.",
          "text": "The ViewModel acts as a translator. It takes raw data from the Model and prepares it for the View.",
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
      "raw": "```csharp:desc=Simple ViewModel\npublic class MainViewModel : ViewModelBase {\n    private string _userName = \"Guest\";\n    public string UserName {\n        get => _userName;\n        set => this.RaiseAndSetIfChanged(ref _userName, value);\n    }\n}\n```",
      "lang": "csharp:desc=Simple ViewModel",
      "text": "public class MainViewModel : ViewModelBase {\n    private string _userName = \"Guest\";\n    public string UserName {\n        get => _userName;\n        set => this.RaiseAndSetIfChanged(ref _userName, value);\n    }\n}"
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
      "raw": "*Next: [Data Binding Deep Dive](./02-data-binding-deep-dive.md)*\n",
      "text": "*Next: [Data Binding Deep Dive](./02-data-binding-deep-dive.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Data Binding Deep Dive](./02-data-binding-deep-dive.md)*",
          "text": "Next: [Data Binding Deep Dive](./02-data-binding-deep-dive.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Data Binding Deep Dive](./02-data-binding-deep-dive.md)",
              "href": "./02-data-binding-deep-dive.md",
              "title": null,
              "text": "Data Binding Deep Dive",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Data Binding Deep Dive",
                  "text": "Data Binding Deep Dive",
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
