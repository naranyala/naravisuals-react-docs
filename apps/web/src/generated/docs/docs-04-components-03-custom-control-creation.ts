// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_04_components_03_custom_control_creation: DocEntry = {
  "id": "docs/04-components/03-custom-control-creation",
  "slug": "docs/components/custom-control-creation",
  "title": "Custom Control Creation",
  "sidebar_label": "Custom Controls",
  "sidebar_position": 3,
  "category": "docs",
  "original_category": "docs",
  "description": "Building your own reusable UI components.",
  "content": "<h1 id=\"custom-control-creation\">Custom Control Creation<a class=\"hash-link\" href=\"#custom-control-creation\" aria-label=\"Custom Control Creation permalink\">#</a></h1><p>When built-in controls aren't enough, you can create your own.</p>\n<h2 id=\"usercontrols-vs-templatedcontrols\">UserControls vs TemplatedControls<a class=\"hash-link\" href=\"#usercontrols-vs-templatedcontrols\" aria-label=\"UserControls vs TemplatedControls permalink\">#</a></h2><ul>\n<li><strong>UserControl</strong>: A composition of existing controls. Easy to create, defined in XAML + Code-behind.</li>\n<li><strong>TemplatedControl</strong>: A completely custom control with a separate <code>ControlTemplate</code>. Best for reusable libraries.</li>\n</ul>\n<h2 id=\"creating-a-usercontrol\">Creating a UserControl<a class=\"hash-link\" href=\"#creating-a-usercontrol\" aria-label=\"Creating a UserControl permalink\">#</a></h2><ol>\n<li>Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.</li>\n<li>Define the UI in <code>.axaml</code>.</li>\n<li>Add logic to <code>.axaml.cs</code>.</li>\n</ol>\n<h2 id=\"styling-your-control\">Styling Your Control<a class=\"hash-link\" href=\"#styling-your-control\" aria-label=\"Styling Your Control permalink\">#</a></h2><p>You can use the <code>Styles</code> block to define how your custom control looks in different states (e.g., <code>:pointerover</code>).</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Style Selector=\"my:CustomButton\"&gt;\n    &lt;Setter Property=\"Background\" Value=\"Gray\" /&gt;\n&lt;/Style&gt;\n&lt;Style Selector=\"my:CustomButton:pointerover\"&gt;\n    &lt;Setter Property=\"Background\" Value=\"LightGray\" /&gt;\n&lt;/Style&gt;</code></pre><div class=\"code-desc\">Defining a style for a custom control</div></div><hr>\n<p><em>You have completed the Avalonia UI basics! Check the <a href=\"./../02-architecture/01-xaml-fundamentals.md\">Architecture</a> section to go deeper.</em></p>\n",
  "rawContent": "\n# Custom Control Creation\n\nWhen built-in controls aren't enough, you can create your own.\n\n## UserControls vs TemplatedControls\n- **UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.\n- **TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.\n\n## Creating a UserControl\n1. Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.\n2. Define the UI in `.axaml`.\n3. Add logic to `.axaml.cs`.\n\n## Styling Your Control\nYou can use the `Styles` block to define how your custom control looks in different states (e.g., `:pointerover`).\n\n```xml:desc=Defining a style for a custom control\n<Style Selector=\"my:CustomButton\">\n    <Setter Property=\"Background\" Value=\"Gray\" />\n</Style>\n<Style Selector=\"my:CustomButton:pointerover\">\n    <Setter Property=\"Background\" Value=\"LightGray\" />\n</Style>\n```\n\n---\n*You have completed the Avalonia UI basics! Check the [Architecture](./../02-architecture/01-xaml-fundamentals.md) section to go deeper.*\n",
  "toc": [
    {
      "value": "UserControls vs TemplatedControls",
      "id": "usercontrols-vs-templatedcontrols",
      "level": 2
    },
    {
      "value": "Creating a UserControl",
      "id": "creating-a-usercontrol",
      "level": 2
    },
    {
      "value": "Styling Your Control",
      "id": "styling-your-control",
      "level": 2
    }
  ],
  "tags": [
    "advanced",
    "custom-controls",
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
      "raw": "# Custom Control Creation",
      "depth": 1,
      "text": "Custom Control Creation",
      "tokens": [
        {
          "type": "text",
          "raw": "Custom Control Creation",
          "text": "Custom Control Creation",
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
      "raw": "When built-in controls aren't enough, you can create your own.",
      "text": "When built-in controls aren't enough, you can create your own.",
      "tokens": [
        {
          "type": "text",
          "raw": "When built-in controls aren't enough, you can create your own.",
          "text": "When built-in controls aren't enough, you can create your own.",
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
      "raw": "## UserControls vs TemplatedControls\n",
      "depth": 2,
      "text": "UserControls vs TemplatedControls",
      "tokens": [
        {
          "type": "text",
          "raw": "UserControls vs TemplatedControls",
          "text": "UserControls vs TemplatedControls",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.\n- **TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.\n",
          "task": false,
          "loose": false,
          "text": "**UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.",
          "tokens": [
            {
              "type": "text",
              "raw": "**UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.",
              "text": "**UserControl**: A composition of existing controls. Easy to create, defined in XAML + Code-behind.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**UserControl**",
                  "text": "UserControl",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "UserControl",
                      "text": "UserControl",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": A composition of existing controls. Easy to create, defined in XAML + Code-behind.",
                  "text": ": A composition of existing controls. Easy to create, defined in XAML + Code-behind.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.",
          "task": false,
          "loose": false,
          "text": "**TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.",
          "tokens": [
            {
              "type": "text",
              "raw": "**TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.",
              "text": "**TemplatedControl**: A completely custom control with a separate `ControlTemplate`. Best for reusable libraries.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**TemplatedControl**",
                  "text": "TemplatedControl",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "TemplatedControl",
                      "text": "TemplatedControl",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": A completely custom control with a separate ",
                  "text": ": A completely custom control with a separate ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`ControlTemplate`",
                  "text": "ControlTemplate"
                },
                {
                  "type": "text",
                  "raw": ". Best for reusable libraries.",
                  "text": ". Best for reusable libraries.",
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
      "raw": "## Creating a UserControl\n",
      "depth": 2,
      "text": "Creating a UserControl",
      "tokens": [
        {
          "type": "text",
          "raw": "Creating a UserControl",
          "text": "Creating a UserControl",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.\n2. Define the UI in `.axaml`.\n3. Add logic to `.axaml.cs`.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.\n",
          "task": false,
          "loose": false,
          "text": "Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.",
          "tokens": [
            {
              "type": "text",
              "raw": "Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.",
              "text": "Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.",
                  "text": "Right-click project $\\rightarrow$ Add New Item $\\rightarrow$ Avalonia UserControl.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "2. Define the UI in `.axaml`.\n",
          "task": false,
          "loose": false,
          "text": "Define the UI in `.axaml`.",
          "tokens": [
            {
              "type": "text",
              "raw": "Define the UI in `.axaml`.",
              "text": "Define the UI in `.axaml`.",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Define the UI in ",
                  "text": "Define the UI in ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`.axaml`",
                  "text": ".axaml"
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
          "type": "list_item",
          "raw": "3. Add logic to `.axaml.cs`.",
          "task": false,
          "loose": false,
          "text": "Add logic to `.axaml.cs`.",
          "tokens": [
            {
              "type": "text",
              "raw": "Add logic to `.axaml.cs`.",
              "text": "Add logic to `.axaml.cs`.",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Add logic to ",
                  "text": "Add logic to ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`.axaml.cs`",
                  "text": ".axaml.cs"
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
        }
      ]
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Styling Your Control\n",
      "depth": 2,
      "text": "Styling Your Control",
      "tokens": [
        {
          "type": "text",
          "raw": "Styling Your Control",
          "text": "Styling Your Control",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "You can use the `Styles` block to define how your custom control looks in different states (e.g., `:pointerover`).",
      "text": "You can use the `Styles` block to define how your custom control looks in different states (e.g., `:pointerover`).",
      "tokens": [
        {
          "type": "text",
          "raw": "You can use the ",
          "text": "You can use the ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`Styles`",
          "text": "Styles"
        },
        {
          "type": "text",
          "raw": " block to define how your custom control looks in different states (e.g., ",
          "text": " block to define how your custom control looks in different states (e.g., ",
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
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "code",
      "raw": "```xml:desc=Defining a style for a custom control\n<Style Selector=\"my:CustomButton\">\n    <Setter Property=\"Background\" Value=\"Gray\" />\n</Style>\n<Style Selector=\"my:CustomButton:pointerover\">\n    <Setter Property=\"Background\" Value=\"LightGray\" />\n</Style>\n```",
      "lang": "xml:desc=Defining a style for a custom control",
      "text": "<Style Selector=\"my:CustomButton\">\n    <Setter Property=\"Background\" Value=\"Gray\" />\n</Style>\n<Style Selector=\"my:CustomButton:pointerover\">\n    <Setter Property=\"Background\" Value=\"LightGray\" />\n</Style>"
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
      "raw": "*You have completed the Avalonia UI basics! Check the [Architecture](./../02-architecture/01-xaml-fundamentals.md) section to go deeper.*\n",
      "text": "*You have completed the Avalonia UI basics! Check the [Architecture](./../02-architecture/01-xaml-fundamentals.md) section to go deeper.*",
      "tokens": [
        {
          "type": "em",
          "raw": "*You have completed the Avalonia UI basics! Check the [Architecture](./../02-architecture/01-xaml-fundamentals.md) section to go deeper.*",
          "text": "You have completed the Avalonia UI basics! Check the [Architecture](./../02-architecture/01-xaml-fundamentals.md) section to go deeper.",
          "tokens": [
            {
              "type": "text",
              "raw": "You have completed the Avalonia UI basics! Check the ",
              "text": "You have completed the Avalonia UI basics! Check the ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Architecture](./../02-architecture/01-xaml-fundamentals.md)",
              "href": "./../02-architecture/01-xaml-fundamentals.md",
              "title": null,
              "text": "Architecture",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Architecture",
                  "text": "Architecture",
                  "escaped": false
                }
              ]
            },
            {
              "type": "text",
              "raw": " section to go deeper.",
              "text": " section to go deeper.",
              "escaped": false
            }
          ]
        }
      ]
    }
  ]
};
