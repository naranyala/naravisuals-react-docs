// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_03_mvvm_pattern: DocEntry = {
  "id": "docs/03-mvvm-pattern",
  "slug": "docs/mvvm-pattern",
  "title": "The MVVM Pattern",
  "sidebar_label": "MVVM Pattern",
  "sidebar_position": 4,
  "category": "docs",
  "original_category": "docs",
  "description": "Separating logic from UI using Model-View-ViewModel.",
  "content": "<h1 id=\"mastering-the-mvvm-pattern\">Mastering the MVVM Pattern<a class=\"hash-link\" href=\"#mastering-the-mvvm-pattern\" aria-label=\"Mastering the MVVM Pattern permalink\">#</a></h1><h2 id=\"core-concepts\">Core Concepts<a class=\"hash-link\" href=\"#core-concepts\" aria-label=\"Core Concepts permalink\">#</a></h2><ul>\n<li><strong>Model</strong>: Data and business logic.</li>\n<li><strong>View</strong>: The XAML UI.</li>\n<li><strong>ViewModel</strong>: The state and commands.</li>\n</ul>\n<div class=\"code-block\" data-lang=\"csharp\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Csharp</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-csharp\">public class MainViewModel : ViewModelBase {\n    public string Greeting =&gt; \"Hello Avalonia!\";\n}</code></pre><div class=\"code-desc\">Example ViewModel</div></div><h2 id=\"references\">References<a class=\"hash-link\" href=\"#references\" aria-label=\"References permalink\">#</a></h2><ul>\n<li><a href=\"https://communitytoolkit.mvltoolkit.com/\">MVVM Toolkit</a></li>\n</ul>\n",
  "rawContent": "\n# Mastering the MVVM Pattern\n\n## Core Concepts\n- **Model**: Data and business logic.\n- **View**: The XAML UI.\n- **ViewModel**: The state and commands.\n\n```csharp:desc=Example ViewModel\npublic class MainViewModel : ViewModelBase {\n    public string Greeting => \"Hello Avalonia!\";\n}\n```\n\n## References\n- [MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)\n",
  "toc": [
    {
      "value": "Core Concepts",
      "id": "core-concepts",
      "level": 2
    },
    {
      "value": "References",
      "id": "references",
      "level": 2
    }
  ],
  "tags": [
    "mvvm",
    "design-patterns",
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
      "raw": "# Mastering the MVVM Pattern",
      "depth": 1,
      "text": "Mastering the MVVM Pattern",
      "tokens": [
        {
          "type": "text",
          "raw": "Mastering the MVVM Pattern",
          "text": "Mastering the MVVM Pattern",
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
      "raw": "## Core Concepts\n",
      "depth": 2,
      "text": "Core Concepts",
      "tokens": [
        {
          "type": "text",
          "raw": "Core Concepts",
          "text": "Core Concepts",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **Model**: Data and business logic.\n- **View**: The XAML UI.\n- **ViewModel**: The state and commands.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **Model**: Data and business logic.\n",
          "task": false,
          "loose": false,
          "text": "**Model**: Data and business logic.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Model**: Data and business logic.",
              "text": "**Model**: Data and business logic.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Model**",
                  "text": "Model",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Model",
                      "text": "Model",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Data and business logic.",
                  "text": ": Data and business logic.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **View**: The XAML UI.\n",
          "task": false,
          "loose": false,
          "text": "**View**: The XAML UI.",
          "tokens": [
            {
              "type": "text",
              "raw": "**View**: The XAML UI.",
              "text": "**View**: The XAML UI.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**View**",
                  "text": "View",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "View",
                      "text": "View",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": The XAML UI.",
                  "text": ": The XAML UI.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **ViewModel**: The state and commands.",
          "task": false,
          "loose": false,
          "text": "**ViewModel**: The state and commands.",
          "tokens": [
            {
              "type": "text",
              "raw": "**ViewModel**: The state and commands.",
              "text": "**ViewModel**: The state and commands.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**ViewModel**",
                  "text": "ViewModel",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "ViewModel",
                      "text": "ViewModel",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": The state and commands.",
                  "text": ": The state and commands.",
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
      "type": "code",
      "raw": "```csharp:desc=Example ViewModel\npublic class MainViewModel : ViewModelBase {\n    public string Greeting => \"Hello Avalonia!\";\n}\n```",
      "lang": "csharp:desc=Example ViewModel",
      "text": "public class MainViewModel : ViewModelBase {\n    public string Greeting => \"Hello Avalonia!\";\n}"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## References\n",
      "depth": 2,
      "text": "References",
      "tokens": [
        {
          "type": "text",
          "raw": "References",
          "text": "References",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- [MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)\n",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- [MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)",
          "task": false,
          "loose": false,
          "text": "[MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)",
          "tokens": [
            {
              "type": "text",
              "raw": "[MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)",
              "text": "[MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)",
              "tokens": [
                {
                  "type": "link",
                  "raw": "[MVVM Toolkit](https://communitytoolkit.mvltoolkit.com/)",
                  "href": "https://communitytoolkit.mvltoolkit.com/",
                  "title": null,
                  "text": "MVVM Toolkit",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "MVVM Toolkit",
                      "text": "MVVM Toolkit",
                      "escaped": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
