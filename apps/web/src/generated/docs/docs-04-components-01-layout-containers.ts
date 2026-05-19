// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_04_components_01_layout_containers: DocEntry = {
  "id": "docs/04-components/01-layout-containers",
  "slug": "docs/components/layout-containers",
  "title": "Layout Containers",
  "sidebar_label": "Layouts",
  "sidebar_position": 1,
  "category": "docs",
  "original_category": "docs",
  "description": "Organizing your UI with Grids, StackPanels, and more.",
  "content": "<h1 id=\"layout-containers\">Layout Containers<a class=\"hash-link\" href=\"#layout-containers\" aria-label=\"Layout Containers permalink\">#</a></h1><p>Choosing the right container is the most important part of creating a responsive UI.</p>\n<h2 id=\"the-grid\">The Grid<a class=\"hash-link\" href=\"#the-grid\" aria-label=\"The Grid permalink\">#</a></h2><p>The Grid is the most flexible container. It uses rows and columns.</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Grid ColumnDefinitions=\"*, *\" RowDefinitions=\"Auto, *\"&gt;\n    &lt;TextBlock Grid.Row=\"0\" Grid.ColumnSpan=\"2\" Text=\"Header\" /&gt;\n    &lt;Button Grid.Row=\"1\" Grid.Column=\"0\" Content=\"Left\" /&gt;\n    &lt;Button Grid.Row=\"1\" Grid.Column=\"1\" Content=\"Right\" /&gt;\n&lt;/Grid&gt;</code></pre><div class=\"code-desc\">A 2x2 Grid layout</div></div><h2 id=\"the-stackpanel\">The StackPanel<a class=\"hash-link\" href=\"#the-stackpanel\" aria-label=\"The StackPanel permalink\">#</a></h2><p>Arranges elements in a simple line.</p>\n<ul>\n<li><code>Orientation=\"Vertical\"</code> (Default)</li>\n<li><code>Orientation=\"Horizontal\"</code></li>\n</ul>\n<h2 id=\"the-dockpanel\">The DockPanel<a class=\"hash-link\" href=\"#the-dockpanel\" aria-label=\"The DockPanel permalink\">#</a></h2><p>Docks elements to the edges. Use <code>LastChildFill=\"True\"</code> to make the last element fill the remaining space.</p>\n<h2 id=\"the-canvas\">The Canvas<a class=\"hash-link\" href=\"#the-canvas\" aria-label=\"The Canvas permalink\">#</a></h2><p>Absolute positioning. Use this for games or custom drawing.</p>\n<hr>\n<p><em>Next: <a href=\"./02-basic-controls.md\">Basic Controls</a></em></p>\n",
  "rawContent": "\n# Layout Containers\n\nChoosing the right container is the most important part of creating a responsive UI.\n\n## The Grid\nThe Grid is the most flexible container. It uses rows and columns.\n\n```xml:desc=A 2x2 Grid layout\n<Grid ColumnDefinitions=\"*, *\" RowDefinitions=\"Auto, *\">\n    <TextBlock Grid.Row=\"0\" Grid.ColumnSpan=\"2\" Text=\"Header\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"0\" Content=\"Left\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"1\" Content=\"Right\" />\n</Grid>\n```\n\n## The StackPanel\nArranges elements in a simple line.\n- `Orientation=\"Vertical\"` (Default)\n- `Orientation=\"Horizontal\"`\n\n## The DockPanel\nDocks elements to the edges. Use `LastChildFill=\"True\"` to make the last element fill the remaining space.\n\n## The Canvas\nAbsolute positioning. Use this for games or custom drawing.\n\n---\n*Next: [Basic Controls](./02-basic-controls.md)*\n",
  "toc": [
    {
      "value": "The Grid",
      "id": "the-grid",
      "level": 2
    },
    {
      "value": "The StackPanel",
      "id": "the-stackpanel",
      "level": 2
    },
    {
      "value": "The DockPanel",
      "id": "the-dockpanel",
      "level": 2
    },
    {
      "value": "The Canvas",
      "id": "the-canvas",
      "level": 2
    }
  ],
  "tags": [
    "layout",
    "ui",
    "xaml"
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
      "raw": "# Layout Containers",
      "depth": 1,
      "text": "Layout Containers",
      "tokens": [
        {
          "type": "text",
          "raw": "Layout Containers",
          "text": "Layout Containers",
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
      "raw": "Choosing the right container is the most important part of creating a responsive UI.",
      "text": "Choosing the right container is the most important part of creating a responsive UI.",
      "tokens": [
        {
          "type": "text",
          "raw": "Choosing the right container is the most important part of creating a responsive UI.",
          "text": "Choosing the right container is the most important part of creating a responsive UI.",
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
      "raw": "## The Grid\n",
      "depth": 2,
      "text": "The Grid",
      "tokens": [
        {
          "type": "text",
          "raw": "The Grid",
          "text": "The Grid",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The Grid is the most flexible container. It uses rows and columns.",
      "text": "The Grid is the most flexible container. It uses rows and columns.",
      "tokens": [
        {
          "type": "text",
          "raw": "The Grid is the most flexible container. It uses rows and columns.",
          "text": "The Grid is the most flexible container. It uses rows and columns.",
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
      "raw": "```xml:desc=A 2x2 Grid layout\n<Grid ColumnDefinitions=\"*, *\" RowDefinitions=\"Auto, *\">\n    <TextBlock Grid.Row=\"0\" Grid.ColumnSpan=\"2\" Text=\"Header\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"0\" Content=\"Left\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"1\" Content=\"Right\" />\n</Grid>\n```",
      "lang": "xml:desc=A 2x2 Grid layout",
      "text": "<Grid ColumnDefinitions=\"*, *\" RowDefinitions=\"Auto, *\">\n    <TextBlock Grid.Row=\"0\" Grid.ColumnSpan=\"2\" Text=\"Header\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"0\" Content=\"Left\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"1\" Content=\"Right\" />\n</Grid>"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## The StackPanel\n",
      "depth": 2,
      "text": "The StackPanel",
      "tokens": [
        {
          "type": "text",
          "raw": "The StackPanel",
          "text": "The StackPanel",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Arranges elements in a simple line.\n",
      "text": "Arranges elements in a simple line.",
      "tokens": [
        {
          "type": "text",
          "raw": "Arranges elements in a simple line.",
          "text": "Arranges elements in a simple line.",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- `Orientation=\"Vertical\"` (Default)\n- `Orientation=\"Horizontal\"`",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- `Orientation=\"Vertical\"` (Default)\n",
          "task": false,
          "loose": false,
          "text": "`Orientation=\"Vertical\"` (Default)",
          "tokens": [
            {
              "type": "text",
              "raw": "`Orientation=\"Vertical\"` (Default)",
              "text": "`Orientation=\"Vertical\"` (Default)",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`Orientation=\"Vertical\"`",
                  "text": "Orientation=\"Vertical\""
                },
                {
                  "type": "text",
                  "raw": " (Default)",
                  "text": " (Default)",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- `Orientation=\"Horizontal\"`",
          "task": false,
          "loose": false,
          "text": "`Orientation=\"Horizontal\"`",
          "tokens": [
            {
              "type": "text",
              "raw": "`Orientation=\"Horizontal\"`",
              "text": "`Orientation=\"Horizontal\"`",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`Orientation=\"Horizontal\"`",
                  "text": "Orientation=\"Horizontal\""
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
      "raw": "## The DockPanel\n",
      "depth": 2,
      "text": "The DockPanel",
      "tokens": [
        {
          "type": "text",
          "raw": "The DockPanel",
          "text": "The DockPanel",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Docks elements to the edges. Use `LastChildFill=\"True\"` to make the last element fill the remaining space.",
      "text": "Docks elements to the edges. Use `LastChildFill=\"True\"` to make the last element fill the remaining space.",
      "tokens": [
        {
          "type": "text",
          "raw": "Docks elements to the edges. Use ",
          "text": "Docks elements to the edges. Use ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`LastChildFill=\"True\"`",
          "text": "LastChildFill=\"True\""
        },
        {
          "type": "text",
          "raw": " to make the last element fill the remaining space.",
          "text": " to make the last element fill the remaining space.",
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
      "raw": "## The Canvas\n",
      "depth": 2,
      "text": "The Canvas",
      "tokens": [
        {
          "type": "text",
          "raw": "The Canvas",
          "text": "The Canvas",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Absolute positioning. Use this for games or custom drawing.",
      "text": "Absolute positioning. Use this for games or custom drawing.",
      "tokens": [
        {
          "type": "text",
          "raw": "Absolute positioning. Use this for games or custom drawing.",
          "text": "Absolute positioning. Use this for games or custom drawing.",
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
      "raw": "*Next: [Basic Controls](./02-basic-controls.md)*\n",
      "text": "*Next: [Basic Controls](./02-basic-controls.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Basic Controls](./02-basic-controls.md)*",
          "text": "Next: [Basic Controls](./02-basic-controls.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Basic Controls](./02-basic-controls.md)",
              "href": "./02-basic-controls.md",
              "title": null,
              "text": "Basic Controls",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Basic Controls",
                  "text": "Basic Controls",
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
