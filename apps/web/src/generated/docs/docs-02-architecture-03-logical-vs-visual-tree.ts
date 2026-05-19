// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_02_architecture_03_logical_vs_visual_tree: DocEntry = {
  "id": "docs/02-architecture/03-logical-vs-visual-tree",
  "slug": "docs/architecture/logical-vs-visual-tree",
  "title": "Logical vs Visual Tree",
  "sidebar_label": "The Tree System",
  "sidebar_position": 3,
  "category": "docs",
  "original_category": "docs",
  "description": "Understanding the difference between the XAML structure and the rendered output.",
  "content": "<h1 id=\"logical-vs-visual-tree\">Logical vs Visual Tree<a class=\"hash-link\" href=\"#logical-vs-visual-tree\" aria-label=\"Logical vs Visual Tree permalink\">#</a></h1><p>In Avalonia, every piece of the UI exists in two different \"trees\".</p>\n<h2 id=\"the-logical-tree\">The Logical Tree<a class=\"hash-link\" href=\"#the-logical-tree\" aria-label=\"The Logical Tree permalink\">#</a></h2><p>The Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.\n<em>Example: A <code>Window</code> contains a <code>Grid</code>, which contains a <code>Button</code>.</em></p>\n<h2 id=\"the-visual-tree\">The Visual Tree<a class=\"hash-link\" href=\"#the-visual-tree\" aria-label=\"The Visual Tree permalink\">#</a></h2><p>The Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller \"primitive\" elements.\n<em>Example: A <code>Button</code> isn't just one element; it's a <code>Border</code> containing a <code>ContentPresenter</code>, which contains a <code>TextBlock</code>.</em></p>\n<h2 id=\"why-it-matters\">Why it Matters<a class=\"hash-link\" href=\"#why-it-matters\" aria-label=\"Why it Matters permalink\">#</a></h2><p>Understanding the Visual Tree is essential for:</p>\n<ol>\n<li><strong>Custom Templating</strong>: If you want to change the internal look of a button, you must target the elements in the Visual Tree.</li>\n<li><strong>Styling</strong>: Styles often target specific parts of the visual tree using selectors.</li>\n</ol>\n<hr>\n<p><em>Next: <a href=\"./04-styling-system.md\">The Styling System</a></em></p>\n",
  "rawContent": "\n# Logical vs Visual Tree\n\nIn Avalonia, every piece of the UI exists in two different \"trees\".\n\n## The Logical Tree\nThe Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.\n*Example: A `Window` contains a `Grid`, which contains a `Button`.*\n\n## The Visual Tree\nThe Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller \"primitive\" elements.\n*Example: A `Button` isn't just one element; it's a `Border` containing a `ContentPresenter`, which contains a `TextBlock`.*\n\n## Why it Matters\nUnderstanding the Visual Tree is essential for:\n1. **Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.\n2. **Styling**: Styles often target specific parts of the visual tree using selectors.\n\n---\n*Next: [The Styling System](./04-styling-system.md)*\n",
  "toc": [
    {
      "value": "The Logical Tree",
      "id": "the-logical-tree",
      "level": 2
    },
    {
      "value": "The Visual Tree",
      "id": "the-visual-tree",
      "level": 2
    },
    {
      "value": "Why it Matters",
      "id": "why-it-matters",
      "level": 2
    }
  ],
  "tags": [
    "architecture",
    "tree",
    "ui"
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
      "raw": "# Logical vs Visual Tree",
      "depth": 1,
      "text": "Logical vs Visual Tree",
      "tokens": [
        {
          "type": "text",
          "raw": "Logical vs Visual Tree",
          "text": "Logical vs Visual Tree",
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
      "raw": "In Avalonia, every piece of the UI exists in two different \"trees\".",
      "text": "In Avalonia, every piece of the UI exists in two different \"trees\".",
      "tokens": [
        {
          "type": "text",
          "raw": "In Avalonia, every piece of the UI exists in two different \"trees\".",
          "text": "In Avalonia, every piece of the UI exists in two different \"trees\".",
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
      "raw": "## The Logical Tree\n",
      "depth": 2,
      "text": "The Logical Tree",
      "tokens": [
        {
          "type": "text",
          "raw": "The Logical Tree",
          "text": "The Logical Tree",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.\n*Example: A `Window` contains a `Grid`, which contains a `Button`.*",
      "text": "The Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.\n*Example: A `Window` contains a `Grid`, which contains a `Button`.*",
      "tokens": [
        {
          "type": "text",
          "raw": "The Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.\n",
          "text": "The Logical Tree is the structure you define in your XAML. It represents the conceptual relationship between controls.\n",
          "escaped": false
        },
        {
          "type": "em",
          "raw": "*Example: A `Window` contains a `Grid`, which contains a `Button`.*",
          "text": "Example: A `Window` contains a `Grid`, which contains a `Button`.",
          "tokens": [
            {
              "type": "text",
              "raw": "Example: A ",
              "text": "Example: A ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`Window`",
              "text": "Window"
            },
            {
              "type": "text",
              "raw": " contains a ",
              "text": " contains a ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`Grid`",
              "text": "Grid"
            },
            {
              "type": "text",
              "raw": ", which contains a ",
              "text": ", which contains a ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`Button`",
              "text": "Button"
            },
            {
              "type": "text",
              "raw": ".",
              "text": ".",
              "escaped": false
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
      "raw": "## The Visual Tree\n",
      "depth": 2,
      "text": "The Visual Tree",
      "tokens": [
        {
          "type": "text",
          "raw": "The Visual Tree",
          "text": "The Visual Tree",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller \"primitive\" elements.\n*Example: A `Button` isn't just one element; it's a `Border` containing a `ContentPresenter`, which contains a `TextBlock`.*",
      "text": "The Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller \"primitive\" elements.\n*Example: A `Button` isn't just one element; it's a `Border` containing a `ContentPresenter`, which contains a `TextBlock`.*",
      "tokens": [
        {
          "type": "text",
          "raw": "The Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller \"primitive\" elements.\n",
          "text": "The Visual Tree is the expanded, detailed version of the UI. Every control is actually composed of smaller \"primitive\" elements.\n",
          "escaped": false
        },
        {
          "type": "em",
          "raw": "*Example: A `Button` isn't just one element; it's a `Border` containing a `ContentPresenter`, which contains a `TextBlock`.*",
          "text": "Example: A `Button` isn't just one element; it's a `Border` containing a `ContentPresenter`, which contains a `TextBlock`.",
          "tokens": [
            {
              "type": "text",
              "raw": "Example: A ",
              "text": "Example: A ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`Button`",
              "text": "Button"
            },
            {
              "type": "text",
              "raw": " isn't just one element; it's a ",
              "text": " isn't just one element; it's a ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`Border`",
              "text": "Border"
            },
            {
              "type": "text",
              "raw": " containing a ",
              "text": " containing a ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`ContentPresenter`",
              "text": "ContentPresenter"
            },
            {
              "type": "text",
              "raw": ", which contains a ",
              "text": ", which contains a ",
              "escaped": false
            },
            {
              "type": "codespan",
              "raw": "`TextBlock`",
              "text": "TextBlock"
            },
            {
              "type": "text",
              "raw": ".",
              "text": ".",
              "escaped": false
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
      "raw": "## Why it Matters\n",
      "depth": 2,
      "text": "Why it Matters",
      "tokens": [
        {
          "type": "text",
          "raw": "Why it Matters",
          "text": "Why it Matters",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Understanding the Visual Tree is essential for:\n",
      "text": "Understanding the Visual Tree is essential for:",
      "tokens": [
        {
          "type": "text",
          "raw": "Understanding the Visual Tree is essential for:",
          "text": "Understanding the Visual Tree is essential for:",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. **Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.\n2. **Styling**: Styles often target specific parts of the visual tree using selectors.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. **Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.\n",
          "task": false,
          "loose": false,
          "text": "**Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.",
              "text": "**Custom Templating**: If you want to change the internal look of a button, you must target the elements in the Visual Tree.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Custom Templating**",
                  "text": "Custom Templating",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Custom Templating",
                      "text": "Custom Templating",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": If you want to change the internal look of a button, you must target the elements in the Visual Tree.",
                  "text": ": If you want to change the internal look of a button, you must target the elements in the Visual Tree.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "2. **Styling**: Styles often target specific parts of the visual tree using selectors.",
          "task": false,
          "loose": false,
          "text": "**Styling**: Styles often target specific parts of the visual tree using selectors.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Styling**: Styles often target specific parts of the visual tree using selectors.",
              "text": "**Styling**: Styles often target specific parts of the visual tree using selectors.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Styling**",
                  "text": "Styling",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Styling",
                      "text": "Styling",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Styles often target specific parts of the visual tree using selectors.",
                  "text": ": Styles often target specific parts of the visual tree using selectors.",
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
      "type": "hr",
      "raw": "---\n"
    },
    {
      "type": "paragraph",
      "raw": "*Next: [The Styling System](./04-styling-system.md)*\n",
      "text": "*Next: [The Styling System](./04-styling-system.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [The Styling System](./04-styling-system.md)*",
          "text": "Next: [The Styling System](./04-styling-system.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[The Styling System](./04-styling-system.md)",
              "href": "./04-styling-system.md",
              "title": null,
              "text": "The Styling System",
              "tokens": [
                {
                  "type": "text",
                  "raw": "The Styling System",
                  "text": "The Styling System",
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
