// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_04_components_02_basic_controls: DocEntry = {
  "id": "docs/04-components/02-basic-controls",
  "slug": "docs/components/basic-controls",
  "title": "Basic Controls",
  "sidebar_label": "Basic Controls",
  "sidebar_position": 2,
  "category": "docs",
  "original_category": "docs",
  "description": "Using the most common Avalonia UI elements.",
  "content": "<h1 id=\"basic-controls\">Basic Controls<a class=\"hash-link\" href=\"#basic-controls\" aria-label=\"Basic Controls permalink\">#</a></h1><p>Avalonia provides a rich set of controls out of the box.</p>\n<h2 id=\"text-input\">Text Input<a class=\"hash-link\" href=\"#text-input\" aria-label=\"Text Input permalink\">#</a></h2><ul>\n<li><strong>TextBlock</strong>: Read-only text.</li>\n<li><strong>TextBox</strong>: User editable text.</li>\n<li><strong>PasswordBox</strong>: Masked text input.</li>\n</ul>\n<h2 id=\"selection-controls\">Selection Controls<a class=\"hash-link\" href=\"#selection-controls\" aria-label=\"Selection Controls permalink\">#</a></h2><ul>\n<li><strong>CheckBox</strong>: Binary choice.</li>\n<li><strong>RadioButton</strong>: Single choice from a group.</li>\n<li><strong>ComboBox</strong>: Drop-down selection.</li>\n</ul>\n<h2 id=\"action-controls\">Action Controls<a class=\"hash-link\" href=\"#action-controls\" aria-label=\"Action Controls permalink\">#</a></h2><ul>\n<li><strong>Button</strong>: Triggers a command.</li>\n<li><strong>MenuItem</strong>: Used in menus and context menus.</li>\n</ul>\n<h2 id=\"example-a-simple-form\">Example: A Simple Form<a class=\"hash-link\" href=\"#example-a-simple-form\" aria-label=\"Example: A Simple Form permalink\">#</a></h2><div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;StackPanel Spacing=\"10\"&gt;\n    &lt;TextBlock Text=\"Enter your name:\" /&gt;\n    &lt;TextBox Text=\"{Binding Name}\" /&gt;\n    &lt;Button Content=\"Submit\" Command=\"{Binding SubmitCommand}\" /&gt;\n&lt;/StackPanel&gt;</code></pre><div class=\"code-desc\">Combining controls in a StackPanel</div></div><hr>\n<p><em>Next: <a href=\"./03-custom-control-creation.md\">Custom Control Creation</a></em></p>\n",
  "rawContent": "\n# Basic Controls\n\nAvalonia provides a rich set of controls out of the box.\n\n## Text Input\n- **TextBlock**: Read-only text.\n- **TextBox**: User editable text.\n- **PasswordBox**: Masked text input.\n\n## Selection Controls\n- **CheckBox**: Binary choice.\n- **RadioButton**: Single choice from a group.\n- **ComboBox**: Drop-down selection.\n\n## Action Controls\n- **Button**: Triggers a command.\n- **MenuItem**: Used in menus and context menus.\n\n## Example: A Simple Form\n```xml:desc=Combining controls in a StackPanel\n<StackPanel Spacing=\"10\">\n    <TextBlock Text=\"Enter your name:\" />\n    <TextBox Text=\"{Binding Name}\" />\n    <Button Content=\"Submit\" Command=\"{Binding SubmitCommand}\" />\n</StackPanel>\n```\n\n---\n*Next: [Custom Control Creation](./03-custom-control-creation.md)*\n",
  "toc": [
    {
      "value": "Text Input",
      "id": "text-input",
      "level": 2
    },
    {
      "value": "Selection Controls",
      "id": "selection-controls",
      "level": 2
    },
    {
      "value": "Action Controls",
      "id": "action-controls",
      "level": 2
    },
    {
      "value": "Example: A Simple Form",
      "id": "example-a-simple-form",
      "level": 2
    }
  ],
  "tags": [
    "controls",
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
      "raw": "# Basic Controls",
      "depth": 1,
      "text": "Basic Controls",
      "tokens": [
        {
          "type": "text",
          "raw": "Basic Controls",
          "text": "Basic Controls",
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
      "raw": "Avalonia provides a rich set of controls out of the box.",
      "text": "Avalonia provides a rich set of controls out of the box.",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia provides a rich set of controls out of the box.",
          "text": "Avalonia provides a rich set of controls out of the box.",
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
      "raw": "## Text Input\n",
      "depth": 2,
      "text": "Text Input",
      "tokens": [
        {
          "type": "text",
          "raw": "Text Input",
          "text": "Text Input",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **TextBlock**: Read-only text.\n- **TextBox**: User editable text.\n- **PasswordBox**: Masked text input.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **TextBlock**: Read-only text.\n",
          "task": false,
          "loose": false,
          "text": "**TextBlock**: Read-only text.",
          "tokens": [
            {
              "type": "text",
              "raw": "**TextBlock**: Read-only text.",
              "text": "**TextBlock**: Read-only text.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**TextBlock**",
                  "text": "TextBlock",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "TextBlock",
                      "text": "TextBlock",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Read-only text.",
                  "text": ": Read-only text.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **TextBox**: User editable text.\n",
          "task": false,
          "loose": false,
          "text": "**TextBox**: User editable text.",
          "tokens": [
            {
              "type": "text",
              "raw": "**TextBox**: User editable text.",
              "text": "**TextBox**: User editable text.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**TextBox**",
                  "text": "TextBox",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "TextBox",
                      "text": "TextBox",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": User editable text.",
                  "text": ": User editable text.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **PasswordBox**: Masked text input.",
          "task": false,
          "loose": false,
          "text": "**PasswordBox**: Masked text input.",
          "tokens": [
            {
              "type": "text",
              "raw": "**PasswordBox**: Masked text input.",
              "text": "**PasswordBox**: Masked text input.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**PasswordBox**",
                  "text": "PasswordBox",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "PasswordBox",
                      "text": "PasswordBox",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Masked text input.",
                  "text": ": Masked text input.",
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
      "raw": "## Selection Controls\n",
      "depth": 2,
      "text": "Selection Controls",
      "tokens": [
        {
          "type": "text",
          "raw": "Selection Controls",
          "text": "Selection Controls",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **CheckBox**: Binary choice.\n- **RadioButton**: Single choice from a group.\n- **ComboBox**: Drop-down selection.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **CheckBox**: Binary choice.\n",
          "task": false,
          "loose": false,
          "text": "**CheckBox**: Binary choice.",
          "tokens": [
            {
              "type": "text",
              "raw": "**CheckBox**: Binary choice.",
              "text": "**CheckBox**: Binary choice.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**CheckBox**",
                  "text": "CheckBox",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "CheckBox",
                      "text": "CheckBox",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Binary choice.",
                  "text": ": Binary choice.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **RadioButton**: Single choice from a group.\n",
          "task": false,
          "loose": false,
          "text": "**RadioButton**: Single choice from a group.",
          "tokens": [
            {
              "type": "text",
              "raw": "**RadioButton**: Single choice from a group.",
              "text": "**RadioButton**: Single choice from a group.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**RadioButton**",
                  "text": "RadioButton",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "RadioButton",
                      "text": "RadioButton",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Single choice from a group.",
                  "text": ": Single choice from a group.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **ComboBox**: Drop-down selection.",
          "task": false,
          "loose": false,
          "text": "**ComboBox**: Drop-down selection.",
          "tokens": [
            {
              "type": "text",
              "raw": "**ComboBox**: Drop-down selection.",
              "text": "**ComboBox**: Drop-down selection.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**ComboBox**",
                  "text": "ComboBox",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "ComboBox",
                      "text": "ComboBox",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Drop-down selection.",
                  "text": ": Drop-down selection.",
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
      "raw": "## Action Controls\n",
      "depth": 2,
      "text": "Action Controls",
      "tokens": [
        {
          "type": "text",
          "raw": "Action Controls",
          "text": "Action Controls",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **Button**: Triggers a command.\n- **MenuItem**: Used in menus and context menus.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **Button**: Triggers a command.\n",
          "task": false,
          "loose": false,
          "text": "**Button**: Triggers a command.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Button**: Triggers a command.",
              "text": "**Button**: Triggers a command.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Button**",
                  "text": "Button",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Button",
                      "text": "Button",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Triggers a command.",
                  "text": ": Triggers a command.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **MenuItem**: Used in menus and context menus.",
          "task": false,
          "loose": false,
          "text": "**MenuItem**: Used in menus and context menus.",
          "tokens": [
            {
              "type": "text",
              "raw": "**MenuItem**: Used in menus and context menus.",
              "text": "**MenuItem**: Used in menus and context menus.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**MenuItem**",
                  "text": "MenuItem",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "MenuItem",
                      "text": "MenuItem",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Used in menus and context menus.",
                  "text": ": Used in menus and context menus.",
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
      "raw": "## Example: A Simple Form\n",
      "depth": 2,
      "text": "Example: A Simple Form",
      "tokens": [
        {
          "type": "text",
          "raw": "Example: A Simple Form",
          "text": "Example: A Simple Form",
          "escaped": false
        }
      ]
    },
    {
      "type": "code",
      "raw": "```xml:desc=Combining controls in a StackPanel\n<StackPanel Spacing=\"10\">\n    <TextBlock Text=\"Enter your name:\" />\n    <TextBox Text=\"{Binding Name}\" />\n    <Button Content=\"Submit\" Command=\"{Binding SubmitCommand}\" />\n</StackPanel>\n```",
      "lang": "xml:desc=Combining controls in a StackPanel",
      "text": "<StackPanel Spacing=\"10\">\n    <TextBlock Text=\"Enter your name:\" />\n    <TextBox Text=\"{Binding Name}\" />\n    <Button Content=\"Submit\" Command=\"{Binding SubmitCommand}\" />\n</StackPanel>"
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
      "raw": "*Next: [Custom Control Creation](./03-custom-control-creation.md)*\n",
      "text": "*Next: [Custom Control Creation](./03-custom-control-creation.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Custom Control Creation](./03-custom-control-creation.md)*",
          "text": "Next: [Custom Control Creation](./03-custom-control-creation.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Custom Control Creation](./03-custom-control-creation.md)",
              "href": "./03-custom-control-creation.md",
              "title": null,
              "text": "Custom Control Creation",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Custom Control Creation",
                  "text": "Custom Control Creation",
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
