// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_02_architecture_04_styling_system: DocEntry = {
  "id": "docs/02-architecture/04-styling-system",
  "slug": "docs/architecture/styling-system",
  "title": "The Styling System",
  "sidebar_label": "Styling System",
  "sidebar_position": 4,
  "category": "docs",
  "original_category": "docs",
  "description": "Creating beautiful and consistent UIs using Avalonia Styles.",
  "content": "<h1 id=\"the-styling-system\">The Styling System<a class=\"hash-link\" href=\"#the-styling-system\" aria-label=\"The Styling System permalink\">#</a></h1><p>Avalonia's styling system is a hybrid between WPF's styles and CSS.</p>\n<h2 id=\"selectors\">Selectors<a class=\"hash-link\" href=\"#selectors\" aria-label=\"Selectors permalink\">#</a></h2><p>Selectors determine which controls a style applies to.</p>\n<ul>\n<li><strong>Type Selector</strong>: <code>Button</code> targets all buttons.</li>\n<li><strong>Class Selector</strong>: <code>Button.primary</code> targets buttons with the <code>primary</code> class.</li>\n<li><strong>Nested Selector</strong>: <code>StackPanel &gt; Button</code> targets buttons that are direct children of a StackPanel.</li>\n</ul>\n<h2 id=\"setting-properties\">Setting Properties<a class=\"hash-link\" href=\"#setting-properties\" aria-label=\"Setting Properties permalink\">#</a></h2><p>Styles use <strong>Setters</strong> to change properties.</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Style Selector=\"Button.primary\"&gt;\n  &lt;Setter Property=\"Background\" Value=\"Blue\" /&gt;\n  &lt;Setter Property=\"Foreground\" Value=\"White\" /&gt;\n  &lt;Setter Property=\"CornerRadius\" Value=\"5\" /&gt;\n&lt;/Style&gt;</code></pre><div class=\"code-desc\">Defining a custom style for a primary button</div></div><h2 id=\"style-precedence\">Style Precedence<a class=\"hash-link\" href=\"#style-precedence\" aria-label=\"Style Precedence permalink\">#</a></h2><p>Avalonia follows a specific order of precedence to determine which value wins:</p>\n<ol>\n<li>Local Value (set directly on the element).</li>\n<li>Style Triggers (e.g., <code>:pointerover</code>).</li>\n<li>Styles in the laest-defined style block.</li>\n<li>Default theme styles.</li>\n</ol>\n<hr>\n<p><em>Next: <a href=\"./../03-mvvm/01-mvvm-core-concepts.md\">MVVM Core Concepts</a></em></p>\n",
  "rawContent": "\n# The Styling System\n\nAvalonia's styling system is a hybrid between WPF's styles and CSS.\n\n## Selectors\nSelectors determine which controls a style applies to.\n- **Type Selector**: `Button` targets all buttons.\n- **Class Selector**: `Button.primary` targets buttons with the `primary` class.\n- **Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.\n\n## Setting Properties\nStyles use **Setters** to change properties.\n\n```xml:desc=Defining a custom style for a primary button\n<Style Selector=\"Button.primary\">\n  <Setter Property=\"Background\" Value=\"Blue\" />\n  <Setter Property=\"Foreground\" Value=\"White\" />\n  <Setter Property=\"CornerRadius\" Value=\"5\" />\n</Style>\n```\n\n## Style Precedence\nAvalonia follows a specific order of precedence to determine which value wins:\n1. Local Value (set directly on the element).\n2. Style Triggers (e.g., `:pointerover`).\n3. Styles in the laest-defined style block.\n4. Default theme styles.\n\n---\n*Next: [MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)*\n",
  "toc": [
    {
      "value": "Selectors",
      "id": "selectors",
      "level": 2
    },
    {
      "value": "Setting Properties",
      "id": "setting-properties",
      "level": 2
    },
    {
      "value": "Style Precedence",
      "id": "style-precedence",
      "level": 2
    }
  ],
  "tags": [
    "styling",
    "css",
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
      "raw": "# The Styling System",
      "depth": 1,
      "text": "The Styling System",
      "tokens": [
        {
          "type": "text",
          "raw": "The Styling System",
          "text": "The Styling System",
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
      "raw": "Avalonia's styling system is a hybrid between WPF's styles and CSS.",
      "text": "Avalonia's styling system is a hybrid between WPF's styles and CSS.",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia's styling system is a hybrid between WPF's styles and CSS.",
          "text": "Avalonia's styling system is a hybrid between WPF's styles and CSS.",
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
      "raw": "## Selectors\n",
      "depth": 2,
      "text": "Selectors",
      "tokens": [
        {
          "type": "text",
          "raw": "Selectors",
          "text": "Selectors",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Selectors determine which controls a style applies to.\n",
      "text": "Selectors determine which controls a style applies to.",
      "tokens": [
        {
          "type": "text",
          "raw": "Selectors determine which controls a style applies to.",
          "text": "Selectors determine which controls a style applies to.",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **Type Selector**: `Button` targets all buttons.\n- **Class Selector**: `Button.primary` targets buttons with the `primary` class.\n- **Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **Type Selector**: `Button` targets all buttons.\n",
          "task": false,
          "loose": false,
          "text": "**Type Selector**: `Button` targets all buttons.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Type Selector**: `Button` targets all buttons.",
              "text": "**Type Selector**: `Button` targets all buttons.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Type Selector**",
                  "text": "Type Selector",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Type Selector",
                      "text": "Type Selector",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": ",
                  "text": ": ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`Button`",
                  "text": "Button"
                },
                {
                  "type": "text",
                  "raw": " targets all buttons.",
                  "text": " targets all buttons.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **Class Selector**: `Button.primary` targets buttons with the `primary` class.\n",
          "task": false,
          "loose": false,
          "text": "**Class Selector**: `Button.primary` targets buttons with the `primary` class.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Class Selector**: `Button.primary` targets buttons with the `primary` class.",
              "text": "**Class Selector**: `Button.primary` targets buttons with the `primary` class.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Class Selector**",
                  "text": "Class Selector",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Class Selector",
                      "text": "Class Selector",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": ",
                  "text": ": ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`Button.primary`",
                  "text": "Button.primary"
                },
                {
                  "type": "text",
                  "raw": " targets buttons with the ",
                  "text": " targets buttons with the ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`primary`",
                  "text": "primary"
                },
                {
                  "type": "text",
                  "raw": " class.",
                  "text": " class.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.",
          "task": false,
          "loose": false,
          "text": "**Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.",
              "text": "**Nested Selector**: `StackPanel > Button` targets buttons that are direct children of a StackPanel.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Nested Selector**",
                  "text": "Nested Selector",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Nested Selector",
                      "text": "Nested Selector",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": ",
                  "text": ": ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`StackPanel > Button`",
                  "text": "StackPanel > Button"
                },
                {
                  "type": "text",
                  "raw": " targets buttons that are direct children of a StackPanel.",
                  "text": " targets buttons that are direct children of a StackPanel.",
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
      "raw": "## Setting Properties\n",
      "depth": 2,
      "text": "Setting Properties",
      "tokens": [
        {
          "type": "text",
          "raw": "Setting Properties",
          "text": "Setting Properties",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Styles use **Setters** to change properties.",
      "text": "Styles use **Setters** to change properties.",
      "tokens": [
        {
          "type": "text",
          "raw": "Styles use ",
          "text": "Styles use ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**Setters**",
          "text": "Setters",
          "tokens": [
            {
              "type": "text",
              "raw": "Setters",
              "text": "Setters",
              "escaped": false
            }
          ]
        },
        {
          "type": "text",
          "raw": " to change properties.",
          "text": " to change properties.",
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
      "raw": "```xml:desc=Defining a custom style for a primary button\n<Style Selector=\"Button.primary\">\n  <Setter Property=\"Background\" Value=\"Blue\" />\n  <Setter Property=\"Foreground\" Value=\"White\" />\n  <Setter Property=\"CornerRadius\" Value=\"5\" />\n</Style>\n```",
      "lang": "xml:desc=Defining a custom style for a primary button",
      "text": "<Style Selector=\"Button.primary\">\n  <Setter Property=\"Background\" Value=\"Blue\" />\n  <Setter Property=\"Foreground\" Value=\"White\" />\n  <Setter Property=\"CornerRadius\" Value=\"5\" />\n</Style>"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Style Precedence\n",
      "depth": 2,
      "text": "Style Precedence",
      "tokens": [
        {
          "type": "text",
          "raw": "Style Precedence",
          "text": "Style Precedence",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Avalonia follows a specific order of precedence to determine which value wins:\n",
      "text": "Avalonia follows a specific order of precedence to determine which value wins:",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia follows a specific order of precedence to determine which value wins:",
          "text": "Avalonia follows a specific order of precedence to determine which value wins:",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. Local Value (set directly on the element).\n2. Style Triggers (e.g., `:pointerover`).\n3. Styles in the laest-defined style block.\n4. Default theme styles.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. Local Value (set directly on the element).\n",
          "task": false,
          "loose": false,
          "text": "Local Value (set directly on the element).",
          "tokens": [
            {
              "type": "text",
              "raw": "Local Value (set directly on the element).",
              "text": "Local Value (set directly on the element).",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Local Value (set directly on the element).",
                  "text": "Local Value (set directly on the element).",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "2. Style Triggers (e.g., `:pointerover`).\n",
          "task": false,
          "loose": false,
          "text": "Style Triggers (e.g., `:pointerover`).",
          "tokens": [
            {
              "type": "text",
              "raw": "Style Triggers (e.g., `:pointerover`).",
              "text": "Style Triggers (e.g., `:pointerover`).",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Style Triggers (e.g., ",
                  "text": "Style Triggers (e.g., ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`:pointerover`",
                  "text": ":pointerover"
                },
                {
                  "type": "text",
                  "raw": ").",
                  "text": ").",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "3. Styles in the laest-defined style block.\n",
          "task": false,
          "loose": false,
          "text": "Styles in the laest-defined style block.",
          "tokens": [
            {
              "type": "text",
              "raw": "Styles in the laest-defined style block.",
              "text": "Styles in the laest-defined style block.",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Styles in the laest-defined style block.",
                  "text": "Styles in the laest-defined style block.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "4. Default theme styles.",
          "task": false,
          "loose": false,
          "text": "Default theme styles.",
          "tokens": [
            {
              "type": "text",
              "raw": "Default theme styles.",
              "text": "Default theme styles.",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Default theme styles.",
                  "text": "Default theme styles.",
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
      "raw": "*Next: [MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)*\n",
      "text": "*Next: [MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)*",
          "text": "Next: [MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[MVVM Core Concepts](./../03-mvvm/01-mvvm-core-concepts.md)",
              "href": "./../03-mvvm/01-mvvm-core-concepts.md",
              "title": null,
              "text": "MVVM Core Concepts",
              "tokens": [
                {
                  "type": "text",
                  "raw": "MVVM Core Concepts",
                  "text": "MVVM Core Concepts",
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
