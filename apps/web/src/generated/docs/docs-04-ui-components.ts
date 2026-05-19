// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_04_ui_components: DocEntry = {
  "id": "docs/04-ui-components",
  "slug": "docs/ui-components",
  "title": "UI Components",
  "sidebar_label": "UI Components",
  "sidebar_position": 5,
  "category": "docs",
  "original_category": "docs",
  "description": "Guide to using Layouts and Controls in Avalonia.",
  "content": "<h1 id=\"working-with-ui-components\">Working with UI Components<a class=\"hash-link\" href=\"#working-with-ui-components\" aria-label=\"Working with UI Components permalink\">#</a></h1><h2 id=\"layouts\">Layouts<a class=\"hash-link\" href=\"#layouts\" aria-label=\"Layouts permalink\">#</a></h2><ul>\n<li><strong>Grid</strong>: Fixed or proportional rows/columns.</li>\n<li><strong>StackPanel</strong>: Simple linear flow.</li>\n</ul>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Grid ColumnDefinitions=\"*, 2*\"&gt;\n    &lt;TextBlock Grid.Column=\"0\" Text=\"Left\" /&gt;\n    &lt;TextBlock Grid.Column=\"1\" Text=\"Right\" /&gt;\n&lt;/Grid&gt;</code></pre><div class=\"code-desc\">Grid Layout Example</div></div><h2 id=\"references\">References<a class=\"hash-link\" href=\"#references\" aria-label=\"References permalink\">#</a></h2><ul>\n<li><a href=\"https://docs.avaloniaui.net/docs/controls\">Avalonia Controls Reference</a></li>\n</ul>\n",
  "rawContent": "\n# Working with UI Components\n\n## Layouts\n- **Grid**: Fixed or proportional rows/columns.\n- **StackPanel**: Simple linear flow.\n\n```xml:desc=Grid Layout Example\n<Grid ColumnDefinitions=\"*, 2*\">\n    <TextBlock Grid.Column=\"0\" Text=\"Left\" />\n    <TextBlock Grid.Column=\"1\" Text=\"Right\" />\n</Grid>\n```\n\n## References\n- [Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)\n",
  "toc": [
    {
      "value": "Layouts",
      "id": "layouts",
      "level": 2
    },
    {
      "value": "References",
      "id": "references",
      "level": 2
    }
  ],
  "tags": [
    "ui",
    "components",
    "layout"
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
      "raw": "# Working with UI Components",
      "depth": 1,
      "text": "Working with UI Components",
      "tokens": [
        {
          "type": "text",
          "raw": "Working with UI Components",
          "text": "Working with UI Components",
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
      "raw": "## Layouts\n",
      "depth": 2,
      "text": "Layouts",
      "tokens": [
        {
          "type": "text",
          "raw": "Layouts",
          "text": "Layouts",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **Grid**: Fixed or proportional rows/columns.\n- **StackPanel**: Simple linear flow.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **Grid**: Fixed or proportional rows/columns.\n",
          "task": false,
          "loose": false,
          "text": "**Grid**: Fixed or proportional rows/columns.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Grid**: Fixed or proportional rows/columns.",
              "text": "**Grid**: Fixed or proportional rows/columns.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Grid**",
                  "text": "Grid",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Grid",
                      "text": "Grid",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Fixed or proportional rows/columns.",
                  "text": ": Fixed or proportional rows/columns.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **StackPanel**: Simple linear flow.",
          "task": false,
          "loose": false,
          "text": "**StackPanel**: Simple linear flow.",
          "tokens": [
            {
              "type": "text",
              "raw": "**StackPanel**: Simple linear flow.",
              "text": "**StackPanel**: Simple linear flow.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**StackPanel**",
                  "text": "StackPanel",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "StackPanel",
                      "text": "StackPanel",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Simple linear flow.",
                  "text": ": Simple linear flow.",
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
      "raw": "```xml:desc=Grid Layout Example\n<Grid ColumnDefinitions=\"*, 2*\">\n    <TextBlock Grid.Column=\"0\" Text=\"Left\" />\n    <TextBlock Grid.Column=\"1\" Text=\"Right\" />\n</Grid>\n```",
      "lang": "xml:desc=Grid Layout Example",
      "text": "<Grid ColumnDefinitions=\"*, 2*\">\n    <TextBlock Grid.Column=\"0\" Text=\"Left\" />\n    <TextBlock Grid.Column=\"1\" Text=\"Right\" />\n</Grid>"
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
      "raw": "- [Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)\n",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- [Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)",
          "task": false,
          "loose": false,
          "text": "[Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)",
          "tokens": [
            {
              "type": "text",
              "raw": "[Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)",
              "text": "[Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)",
              "tokens": [
                {
                  "type": "link",
                  "raw": "[Avalonia Controls Reference](https://docs.avaloniaui.net/docs/controls)",
                  "href": "https://docs.avaloniaui.net/docs/controls",
                  "title": null,
                  "text": "Avalonia Controls Reference",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Avalonia Controls Reference",
                      "text": "Avalonia Controls Reference",
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
