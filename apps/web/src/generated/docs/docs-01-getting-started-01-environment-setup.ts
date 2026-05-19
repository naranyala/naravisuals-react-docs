// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_01_getting_started_01_environment_setup: DocEntry = {
  "id": "docs/01-getting-started/01-environment-setup",
  "slug": "docs/getting-started/environment-setup",
  "title": "Environment Setup",
  "sidebar_label": "Environment Setup",
  "sidebar_position": 1,
  "category": "docs",
  "original_category": "docs",
  "description": "Installing .NET SDK and IDEs for Avalonia development.",
  "content": "<h1 id=\"environment-setup\">Environment Setup<a class=\"hash-link\" href=\"#environment-setup\" aria-label=\"Environment Setup permalink\">#</a></h1><p>To begin developing with Avalonia UI, you need a compatible .NET environment.</p>\n<h2 id=\"net-sdk-installation\">.NET SDK Installation<a class=\"hash-link\" href=\"#net-sdk-installation\" aria-label=\".NET SDK Installation permalink\">#</a></h2><p>Avalonia requires the .NET SDK. We recommend <strong>.NET 8 or .NET 9</strong> for the latest performance and language features.</p>\n<ol>\n<li>Download the SDK from <a href=\"https://dotnet.microsoft.com/download\">dotnet.microsoft.com</a>.</li>\n<li>Verify installation by running <code>dotnet --version</code> in your terminal.</li>\n</ol>\n<h2 id=\"choosing-an-ide\">Choosing an IDE<a class=\"hash-link\" href=\"#choosing-an-ide\" aria-label=\"Choosing an IDE permalink\">#</a></h2><p>While you can use any text editor, a full IDE significantly improves productivity.</p>\n<h3 id=\"1-jetbrains-rider-recommended\">1. JetBrains Rider (Recommended)<a class=\"hash-link\" href=\"#1-jetbrains-rider-recommended\" aria-label=\"1. JetBrains Rider (Recommended) permalink\">#</a></h3><p>Rider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.</p>\n<h3 id=\"2-visual-studio\">2. Visual Studio<a class=\"hash-link\" href=\"#2-visual-studio\" aria-label=\"2. Visual Studio permalink\">#</a></h3><p>The industry standard for Windows. Install the <strong>Avalonia for Visual Studio</strong> extension to get XAML intellisense and previewing.</p>\n<h3 id=\"3-vs-code\">3. VS Code<a class=\"hash-link\" href=\"#3-vs-code\" aria-label=\"3. VS Code permalink\">#</a></h3><p>For a lightweight experience, install the <strong>Avalonia for VS Code</strong> extension.</p>\n<h2 id=\"installing-templates\">Installing Templates<a class=\"hash-link\" href=\"#installing-templates\" aria-label=\"Installing Templates permalink\">#</a></h2><p>Avalonia provides project templates to jumpstart your development. Install them via the CLI:</p>\n<div class=\"code-block\" data-lang=\"bash\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Bash</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre class=\"shiki github-dark\" style=\"background-color:#24292e;color:#e1e4e8\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">dotnet</span><span style=\"color:#9ECBFF\"> new</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> Avalonia.Templates</span></span></code></pre><div class=\"code-desc\">Installing Avalonia templates globally</div></div><hr>\n<p><em>Next: <a href=\"./02-creating-first-app.md\">Creating Your First App</a></em></p>\n",
  "rawContent": "\n# Environment Setup\n\nTo begin developing with Avalonia UI, you need a compatible .NET environment.\n\n## .NET SDK Installation\nAvalonia requires the .NET SDK. We recommend **.NET 8 or .NET 9** for the latest performance and language features.\n1. Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).\n2. Verify installation by running `dotnet --version` in your terminal.\n\n## Choosing an IDE\nWhile you can use any text editor, a full IDE significantly improves productivity.\n\n### 1. JetBrains Rider (Recommended)\nRider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.\n\n### 2. Visual Studio\nThe industry standard for Windows. Install the **Avalonia for Visual Studio** extension to get XAML intellisense and previewing.\n\n### 3. VS Code\nFor a lightweight experience, install the **Avalonia for VS Code** extension.\n\n## Installing Templates\nAvalonia provides project templates to jumpstart your development. Install them via the CLI:\n\n```bash:desc=Installing Avalonia templates globally\ndotnet new install Avalonia.Templates\n```\n\n---\n*Next: [Creating Your First App](./02-creating-first-app.md)*\n",
  "toc": [
    {
      "value": ".NET SDK Installation",
      "id": "net-sdk-installation",
      "level": 2
    },
    {
      "value": "Choosing an IDE",
      "id": "choosing-an-ide",
      "level": 2
    },
    {
      "value": "1. JetBrains Rider (Recommended)",
      "id": "1-jetbrains-rider-recommended",
      "level": 3
    },
    {
      "value": "2. Visual Studio",
      "id": "2-visual-studio",
      "level": 3
    },
    {
      "value": "3. VS Code",
      "id": "3-vs-code",
      "level": 3
    },
    {
      "value": "Installing Templates",
      "id": "installing-templates",
      "level": 2
    }
  ],
  "tags": [
    "setup",
    "dotnet",
    "ide"
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
      "raw": "# Environment Setup",
      "depth": 1,
      "text": "Environment Setup",
      "tokens": [
        {
          "type": "text",
          "raw": "Environment Setup",
          "text": "Environment Setup",
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
      "raw": "To begin developing with Avalonia UI, you need a compatible .NET environment.",
      "text": "To begin developing with Avalonia UI, you need a compatible .NET environment.",
      "tokens": [
        {
          "type": "text",
          "raw": "To begin developing with Avalonia UI, you need a compatible .NET environment.",
          "text": "To begin developing with Avalonia UI, you need a compatible .NET environment.",
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
      "raw": "## .NET SDK Installation\n",
      "depth": 2,
      "text": ".NET SDK Installation",
      "tokens": [
        {
          "type": "text",
          "raw": ".NET SDK Installation",
          "text": ".NET SDK Installation",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Avalonia requires the .NET SDK. We recommend **.NET 8 or .NET 9** for the latest performance and language features.\n",
      "text": "Avalonia requires the .NET SDK. We recommend **.NET 8 or .NET 9** for the latest performance and language features.",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia requires the .NET SDK. We recommend ",
          "text": "Avalonia requires the .NET SDK. We recommend ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**.NET 8 or .NET 9**",
          "text": ".NET 8 or .NET 9",
          "tokens": [
            {
              "type": "text",
              "raw": ".NET 8 or .NET 9",
              "text": ".NET 8 or .NET 9",
              "escaped": false
            }
          ]
        },
        {
          "type": "text",
          "raw": " for the latest performance and language features.",
          "text": " for the latest performance and language features.",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).\n2. Verify installation by running `dotnet --version` in your terminal.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).\n",
          "task": false,
          "loose": false,
          "text": "Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).",
          "tokens": [
            {
              "type": "text",
              "raw": "Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).",
              "text": "Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Download the SDK from ",
                  "text": "Download the SDK from ",
                  "escaped": false
                },
                {
                  "type": "link",
                  "raw": "[dotnet.microsoft.com](https://dotnet.microsoft.com/download)",
                  "href": "https://dotnet.microsoft.com/download",
                  "title": null,
                  "text": "dotnet.microsoft.com",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "dotnet.microsoft.com",
                      "text": "dotnet.microsoft.com",
                      "escaped": false
                    }
                  ]
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
          "raw": "2. Verify installation by running `dotnet --version` in your terminal.",
          "task": false,
          "loose": false,
          "text": "Verify installation by running `dotnet --version` in your terminal.",
          "tokens": [
            {
              "type": "text",
              "raw": "Verify installation by running `dotnet --version` in your terminal.",
              "text": "Verify installation by running `dotnet --version` in your terminal.",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Verify installation by running ",
                  "text": "Verify installation by running ",
                  "escaped": false
                },
                {
                  "type": "codespan",
                  "raw": "`dotnet --version`",
                  "text": "dotnet --version"
                },
                {
                  "type": "text",
                  "raw": " in your terminal.",
                  "text": " in your terminal.",
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
      "raw": "## Choosing an IDE\n",
      "depth": 2,
      "text": "Choosing an IDE",
      "tokens": [
        {
          "type": "text",
          "raw": "Choosing an IDE",
          "text": "Choosing an IDE",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "While you can use any text editor, a full IDE significantly improves productivity.",
      "text": "While you can use any text editor, a full IDE significantly improves productivity.",
      "tokens": [
        {
          "type": "text",
          "raw": "While you can use any text editor, a full IDE significantly improves productivity.",
          "text": "While you can use any text editor, a full IDE significantly improves productivity.",
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
      "raw": "### 1. JetBrains Rider (Recommended)\n",
      "depth": 3,
      "text": "1. JetBrains Rider (Recommended)",
      "tokens": [
        {
          "type": "text",
          "raw": "1. JetBrains Rider (Recommended)",
          "text": "1. JetBrains Rider (Recommended)",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Rider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.",
      "text": "Rider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.",
      "tokens": [
        {
          "type": "text",
          "raw": "Rider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.",
          "text": "Rider offers the best first-class support for Avalonia, including a powerful XAML previewer and deep integration with the .NET ecosystem.",
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
      "raw": "### 2. Visual Studio\n",
      "depth": 3,
      "text": "2. Visual Studio",
      "tokens": [
        {
          "type": "text",
          "raw": "2. Visual Studio",
          "text": "2. Visual Studio",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "The industry standard for Windows. Install the **Avalonia for Visual Studio** extension to get XAML intellisense and previewing.",
      "text": "The industry standard for Windows. Install the **Avalonia for Visual Studio** extension to get XAML intellisense and previewing.",
      "tokens": [
        {
          "type": "text",
          "raw": "The industry standard for Windows. Install the ",
          "text": "The industry standard for Windows. Install the ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**Avalonia for Visual Studio**",
          "text": "Avalonia for Visual Studio",
          "tokens": [
            {
              "type": "text",
              "raw": "Avalonia for Visual Studio",
              "text": "Avalonia for Visual Studio",
              "escaped": false
            }
          ]
        },
        {
          "type": "text",
          "raw": " extension to get XAML intellisense and previewing.",
          "text": " extension to get XAML intellisense and previewing.",
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
      "raw": "### 3. VS Code\n",
      "depth": 3,
      "text": "3. VS Code",
      "tokens": [
        {
          "type": "text",
          "raw": "3. VS Code",
          "text": "3. VS Code",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "For a lightweight experience, install the **Avalonia for VS Code** extension.",
      "text": "For a lightweight experience, install the **Avalonia for VS Code** extension.",
      "tokens": [
        {
          "type": "text",
          "raw": "For a lightweight experience, install the ",
          "text": "For a lightweight experience, install the ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**Avalonia for VS Code**",
          "text": "Avalonia for VS Code",
          "tokens": [
            {
              "type": "text",
              "raw": "Avalonia for VS Code",
              "text": "Avalonia for VS Code",
              "escaped": false
            }
          ]
        },
        {
          "type": "text",
          "raw": " extension.",
          "text": " extension.",
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
      "raw": "## Installing Templates\n",
      "depth": 2,
      "text": "Installing Templates",
      "tokens": [
        {
          "type": "text",
          "raw": "Installing Templates",
          "text": "Installing Templates",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Avalonia provides project templates to jumpstart your development. Install them via the CLI:",
      "text": "Avalonia provides project templates to jumpstart your development. Install them via the CLI:",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia provides project templates to jumpstart your development. Install them via the CLI:",
          "text": "Avalonia provides project templates to jumpstart your development. Install them via the CLI:",
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
      "raw": "```bash:desc=Installing Avalonia templates globally\ndotnet new install Avalonia.Templates\n```",
      "lang": "bash:desc=Installing Avalonia templates globally",
      "text": "dotnet new install Avalonia.Templates"
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
      "raw": "*Next: [Creating Your First App](./02-creating-first-app.md)*\n",
      "text": "*Next: [Creating Your First App](./02-creating-first-app.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Creating Your First App](./02-creating-first-app.md)*",
          "text": "Next: [Creating Your First App](./02-creating-first-app.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Creating Your First App](./02-creating-first-app.md)",
              "href": "./02-creating-first-app.md",
              "title": null,
              "text": "Creating Your First App",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Creating Your First App",
                  "text": "Creating Your First App",
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
