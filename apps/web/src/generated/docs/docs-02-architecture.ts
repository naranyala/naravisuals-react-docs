// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_02_architecture: DocEntry = {
  "id": "docs/02-architecture",
  "slug": "docs/architecture",
  "title": "Architecture Overview",
  "sidebar_label": "Architecture",
  "sidebar_position": 3,
  "category": "docs",
  "original_category": "docs",
  "description": "Understanding the XAML and Composition engine in Avalonia.",
  "content": "<h1 id=\"avalonia-ui-architecture\">Avalonia UI Architecture<a class=\"hash-link\" href=\"#avalonia-ui-architecture\" aria-label=\"Avalonia UI Architecture permalink\">#</a></h1><h2 id=\"xaml\">XAML<a class=\"hash-link\" href=\"#xaml\" aria-label=\"XAML permalink\">#</a></h2><p>Avalonia uses XAML for declarative UI.</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Window xmlns=\"https://github.com/avaloniaui\"&gt;\n    &lt;TextBlock Text=\"Hello!\" /&gt;\n&lt;/Window&gt;</code></pre><div class=\"code-desc\">Simple Window definition</div></div><h2 id=\"references\">References<a class=\"hash-link\" href=\"#references\" aria-label=\"References permalink\">#</a></h2><ul>\n<li><a href=\"https://docs.avaloniaui.net/docs/guides/rendering\">Avalonia Rendering Engine</a></li>\n</ul>\n",
  "rawContent": "\n# Avalonia UI Architecture\n\n## XAML\nAvalonia uses XAML for declarative UI.\n\n```xml:desc=Simple Window definition\n<Window xmlns=\"https://github.com/avaloniaui\">\n    <TextBlock Text=\"Hello!\" />\n</Window>\n```\n\n## References\n- [Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)\n",
  "toc": [
    {
      "value": "XAML",
      "id": "xaml",
      "level": 2
    },
    {
      "value": "References",
      "id": "references",
      "level": 2
    }
  ],
  "tags": [
    "architecture",
    "xaml",
    "rendering"
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
      "raw": "# Avalonia UI Architecture",
      "depth": 1,
      "text": "Avalonia UI Architecture",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia UI Architecture",
          "text": "Avalonia UI Architecture",
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
      "raw": "## XAML\n",
      "depth": 2,
      "text": "XAML",
      "tokens": [
        {
          "type": "text",
          "raw": "XAML",
          "text": "XAML",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Avalonia uses XAML for declarative UI.",
      "text": "Avalonia uses XAML for declarative UI.",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia uses XAML for declarative UI.",
          "text": "Avalonia uses XAML for declarative UI.",
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
      "raw": "```xml:desc=Simple Window definition\n<Window xmlns=\"https://github.com/avaloniaui\">\n    <TextBlock Text=\"Hello!\" />\n</Window>\n```",
      "lang": "xml:desc=Simple Window definition",
      "text": "<Window xmlns=\"https://github.com/avaloniaui\">\n    <TextBlock Text=\"Hello!\" />\n</Window>"
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
      "raw": "- [Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)\n",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- [Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)",
          "task": false,
          "loose": false,
          "text": "[Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)",
          "tokens": [
            {
              "type": "text",
              "raw": "[Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)",
              "text": "[Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)",
              "tokens": [
                {
                  "type": "link",
                  "raw": "[Avalonia Rendering Engine](https://docs.avaloniaui.net/docs/guides/rendering)",
                  "href": "https://docs.avaloniaui.net/docs/guides/rendering",
                  "title": null,
                  "text": "Avalonia Rendering Engine",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Avalonia Rendering Engine",
                      "text": "Avalonia Rendering Engine",
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
