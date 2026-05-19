// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_02_architecture_01_xaml_fundamentals: DocEntry = {
  "id": "docs/02-architecture/01-xaml-fundamentals",
  "slug": "docs/architecture/xaml-fundamentals",
  "title": "XAML Fundamentals",
  "sidebar_label": "XAML Basics",
  "sidebar_position": 1,
  "category": "docs",
  "original_category": "docs",
  "description": "Understanding the declarative language of Avalonia UI.",
  "content": "<h1 id=\"xaml-fundamentals\">XAML Fundamentals<a class=\"hash-link\" href=\"#xaml-fundamentals\" aria-label=\"XAML Fundamentals permalink\">#</a></h1><p>XAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.</p>\n<h2 id=\"basic-syntax\">Basic Syntax<a class=\"hash-link\" href=\"#basic-syntax\" aria-label=\"Basic Syntax permalink\">#</a></h2><p>XAML elements map directly to C# classes. For example, <code>&lt;Button /&gt;</code> in XAML creates an instance of the <code>Avalonia.Controls.Button</code> class.</p>\n<div class=\"code-block\" data-lang=\"xml\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml\">&lt;Button Content=\"Click Me\" \n        Background=\"Blue\" \n        Foreground=\"White\" \n        Width=\"100\" \n        Height=\"40\" /&gt;</code></pre><div class=\"code-desc\">Basic XAML Button definition</div></div><h2 id=\"properties-and-attributes\">Properties and Attributes<a class=\"hash-link\" href=\"#properties-and-attributes\" aria-label=\"Properties and Attributes permalink\">#</a></h2><p>Most properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use \"Property Element Syntax\":</p>\n<div class=\"code-block\" data-lang=\"xml,desc=Setting a complex property using element syntax\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Xml,desc=Setting a complex property using element syntax</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-xml,desc=Setting a complex property using element syntax\">&lt;StackPanel&gt;\n    &lt;StackPanel.Margin&gt;\n        &lt;Thickness Left=\"10\" Top=\"10\" Right=\"10\" Bottom=\"10\" /&gt;\n    &lt;/StackPanel.Margin&gt;\n    &lt;TextBlock Text=\"Hello World\" /&gt;\n&lt;/StackPanel&gt;</code></pre></div><h2 id=\"namespaces\">Namespaces<a class=\"hash-link\" href=\"#namespaces\" aria-label=\"Namespaces permalink\">#</a></h2><p>Namespaces are used to bring in controls from other libraries.</p>\n<ul>\n<li><code>xmlns=\"https://github.com/avaloniaui\"</code>: The default Avalonia namespace.</li>\n<li><code>xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"</code>: Used for XAML-specific features like <code>x:Name</code>.</li>\n</ul>\n<hr>\n<p><em>Next: <a href=\"./02-rendering-pipeline.md\">The Rendering Pipeline</a></em></p>\n",
  "rawContent": "\n# XAML Fundamentals\n\nXAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.\n\n## Basic Syntax\nXAML elements map directly to C# classes. For example, `<Button />` in XAML creates an instance of the `Avalonia.Controls.Button` class.\n\n```xml:desc=Basic XAML Button definition\n<Button Content=\"Click Me\" \n        Background=\"Blue\" \n        Foreground=\"White\" \n        Width=\"100\" \n        Height=\"40\" />\n```\n\n## Properties and Attributes\nMost properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use \"Property Element Syntax\":\n\n```xml,desc=Setting a complex property using element syntax\n<StackPanel>\n    <StackPanel.Margin>\n        <Thickness Left=\"10\" Top=\"10\" Right=\"10\" Bottom=\"10\" />\n    </StackPanel.Margin>\n    <TextBlock Text=\"Hello World\" />\n</StackPanel>\n```\n\n## Namespaces\nNamespaces are used to bring in controls from other libraries.\n- `xmlns=\"https://github.com/avaloniaui\"`: The default Avalonia namespace.\n- `xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`: Used for XAML-specific features like `x:Name`.\n\n---\n*Next: [The Rendering Pipeline](./02-rendering-pipeline.md)*\n",
  "toc": [
    {
      "value": "Basic Syntax",
      "id": "basic-syntax",
      "level": 2
    },
    {
      "value": "Properties and Attributes",
      "id": "properties-and-attributes",
      "level": 2
    },
    {
      "value": "Namespaces",
      "id": "namespaces",
      "level": 2
    }
  ],
  "tags": [
    "xaml",
    "ui",
    "markup"
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
      "raw": "# XAML Fundamentals",
      "depth": 1,
      "text": "XAML Fundamentals",
      "tokens": [
        {
          "type": "text",
          "raw": "XAML Fundamentals",
          "text": "XAML Fundamentals",
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
      "raw": "XAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.",
      "text": "XAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.",
      "tokens": [
        {
          "type": "text",
          "raw": "XAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.",
          "text": "XAML (Extensible Application Markup Language) is a XML-based language used to define the UI of an Avalonia application.",
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
      "raw": "## Basic Syntax\n",
      "depth": 2,
      "text": "Basic Syntax",
      "tokens": [
        {
          "type": "text",
          "raw": "Basic Syntax",
          "text": "Basic Syntax",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "XAML elements map directly to C# classes. For example, `<Button />` in XAML creates an instance of the `Avalonia.Controls.Button` class.",
      "text": "XAML elements map directly to C# classes. For example, `<Button />` in XAML creates an instance of the `Avalonia.Controls.Button` class.",
      "tokens": [
        {
          "type": "text",
          "raw": "XAML elements map directly to C# classes. For example, ",
          "text": "XAML elements map directly to C# classes. For example, ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`<Button />`",
          "text": "<Button />"
        },
        {
          "type": "text",
          "raw": " in XAML creates an instance of the ",
          "text": " in XAML creates an instance of the ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`Avalonia.Controls.Button`",
          "text": "Avalonia.Controls.Button"
        },
        {
          "type": "text",
          "raw": " class.",
          "text": " class.",
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
      "raw": "```xml:desc=Basic XAML Button definition\n<Button Content=\"Click Me\" \n        Background=\"Blue\" \n        Foreground=\"White\" \n        Width=\"100\" \n        Height=\"40\" />\n```",
      "lang": "xml:desc=Basic XAML Button definition",
      "text": "<Button Content=\"Click Me\" \n        Background=\"Blue\" \n        Foreground=\"White\" \n        Width=\"100\" \n        Height=\"40\" />"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Properties and Attributes\n",
      "depth": 2,
      "text": "Properties and Attributes",
      "tokens": [
        {
          "type": "text",
          "raw": "Properties and Attributes",
          "text": "Properties and Attributes",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Most properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use \"Property Element Syntax\":",
      "text": "Most properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use \"Property Element Syntax\":",
      "tokens": [
        {
          "type": "text",
          "raw": "Most properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use \"Property Element Syntax\":",
          "text": "Most properties of a control can be set as attributes in XAML. For more complex properties (like lists), you use \"Property Element Syntax\":",
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
      "raw": "```xml,desc=Setting a complex property using element syntax\n<StackPanel>\n    <StackPanel.Margin>\n        <Thickness Left=\"10\" Top=\"10\" Right=\"10\" Bottom=\"10\" />\n    </StackPanel.Margin>\n    <TextBlock Text=\"Hello World\" />\n</StackPanel>\n```",
      "lang": "xml,desc=Setting a complex property using element syntax",
      "text": "<StackPanel>\n    <StackPanel.Margin>\n        <Thickness Left=\"10\" Top=\"10\" Right=\"10\" Bottom=\"10\" />\n    </StackPanel.Margin>\n    <TextBlock Text=\"Hello World\" />\n</StackPanel>"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Namespaces\n",
      "depth": 2,
      "text": "Namespaces",
      "tokens": [
        {
          "type": "text",
          "raw": "Namespaces",
          "text": "Namespaces",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Namespaces are used to bring in controls from other libraries.\n",
      "text": "Namespaces are used to bring in controls from other libraries.",
      "tokens": [
        {
          "type": "text",
          "raw": "Namespaces are used to bring in controls from other libraries.",
          "text": "Namespaces are used to bring in controls from other libraries.",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- `xmlns=\"https://github.com/avaloniaui\"`: The default Avalonia namespace.\n- `xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`: Used for XAML-specific features like `x:Name`.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- `xmlns=\"https://github.com/avaloniaui\"`: The default Avalonia namespace.\n",
          "task": false,
          "loose": false,
          "text": "`xmlns=\"https://github.com/avaloniaui\"`: The default Avalonia namespace.",
          "tokens": [
            {
              "type": "text",
              "raw": "`xmlns=\"https://github.com/avaloniaui\"`: The default Avalonia namespace.",
              "text": "`xmlns=\"https://github.com/avaloniaui\"`: The default Avalonia namespace.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`xmlns=\"https://github.com/avaloniaui\"`",
                  "text": "xmlns=\"https://github.com/avaloniaui\""
                },
                {
                  "type": "text",
                  "raw": ": The default Avalonia namespace.",
                  "text": ": The default Avalonia namespace.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- `xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`: Used for XAML-specific features like `x:Name`.",
          "task": false,
          "loose": false,
          "text": "`xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`: Used for XAML-specific features like `x:Name`.",
          "tokens": [
            {
              "type": "text",
              "raw": "`xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`: Used for XAML-specific features like `x:Name`.",
              "text": "`xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`: Used for XAML-specific features like `x:Name`.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"`",
                  "text": "xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\""
                },
                {
                  "type": "text",
                  "raw": ": Used for XAML-specific features like ",
                  "text": ": Used for XAML-specific features like ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`x:Name`",
                  "text": "x:Name"
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
      "type": "hr",
      "raw": "---\n"
    },
    {
      "type": "paragraph",
      "raw": "*Next: [The Rendering Pipeline](./02-rendering-pipeline.md)*\n",
      "text": "*Next: [The Rendering Pipeline](./02-rendering-pipeline.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [The Rendering Pipeline](./02-rendering-pipeline.md)*",
          "text": "Next: [The Rendering Pipeline](./02-rendering-pipeline.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[The Rendering Pipeline](./02-rendering-pipeline.md)",
              "href": "./02-rendering-pipeline.md",
              "title": null,
              "text": "The Rendering Pipeline",
              "tokens": [
                {
                  "type": "text",
                  "raw": "The Rendering Pipeline",
                  "text": "The Rendering Pipeline",
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
