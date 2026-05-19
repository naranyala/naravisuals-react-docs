// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_01_getting_started: DocEntry = {
  "id": "docs/01-getting-started",
  "slug": "docs/getting-started",
  "title": "Getting Started",
  "sidebar_label": "Getting Started",
  "sidebar_position": 2,
  "category": "docs",
  "original_category": "docs",
  "description": "Environment setup and creating your first Avalonia application.",
  "content": "<h1 id=\"getting-started-with-avalonia-ui\">Getting Started with Avalonia UI<a class=\"hash-link\" href=\"#getting-started-with-avalonia-ui\" aria-label=\"Getting Started with Avalonia UI permalink\">#</a></h1><h2 id=\"prerequisites\">Prerequisites<a class=\"hash-link\" href=\"#prerequisites\" aria-label=\"Prerequisites permalink\">#</a></h2><ol>\n<li><strong>.NET SDK</strong>: Install from <a href=\"https://dotnet.microsoft.com/download\">dotnet.microsoft.com</a>.</li>\n<li><strong>IDE</strong>: JetBrains Rider or Visual Studio.</li>\n</ol>\n<h2 id=\"setup\">Setup<a class=\"hash-link\" href=\"#setup\" aria-label=\"Setup permalink\">#</a></h2><div class=\"code-block\" data-lang=\"bash\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Bash</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre class=\"shiki github-dark\" style=\"background-color:#24292e;color:#e1e4e8\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">dotnet</span><span style=\"color:#9ECBFF\"> new</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> Avalonia.Templates</span></span></code></pre><div class=\"code-desc\">Install Avalonia templates</div></div><div class=\"code-block\" data-lang=\"bash\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Bash</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre class=\"shiki github-dark\" style=\"background-color:#24292e;color:#e1e4e8\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">dotnet</span><span style=\"color:#9ECBFF\"> new</span><span style=\"color:#9ECBFF\"> avalonia.app</span><span style=\"color:#79B8FF\"> -o</span><span style=\"color:#9ECBFF\"> MyFirstAvaloniaApp</span></span></code></pre><div class=\"code-desc\">Create a new project</div></div><h2 id=\"references\">References<a class=\"hash-link\" href=\"#references\" aria-label=\"References permalink\">#</a></h2><ul>\n<li><a href=\"https://docs.avaloniaui.net/\">Avalonia Official Docs</a></li>\n</ul>\n",
  "rawContent": "\n# Getting Started with Avalonia UI\n\n## Prerequisites\n1. **.NET SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).\n2. **IDE**: JetBrains Rider or Visual Studio.\n\n## Setup\n```bash:desc=Install Avalonia templates\ndotnet new install Avalonia.Templates\n```\n\n```bash:desc=Create a new project\ndotnet new avalonia.app -o MyFirstAvaloniaApp\n```\n\n## References\n- [Avalonia Official Docs](https://docs.avaloniaui.net/)\n",
  "toc": [
    {
      "value": "Prerequisites",
      "id": "prerequisites",
      "level": 2
    },
    {
      "value": "Setup",
      "id": "setup",
      "level": 2
    },
    {
      "value": "References",
      "id": "references",
      "level": 2
    }
  ],
  "tags": [
    "setup",
    "installation",
    "dotnet"
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
      "raw": "# Getting Started with Avalonia UI",
      "depth": 1,
      "text": "Getting Started with Avalonia UI",
      "tokens": [
        {
          "type": "text",
          "raw": "Getting Started with Avalonia UI",
          "text": "Getting Started with Avalonia UI",
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
      "raw": "## Prerequisites\n",
      "depth": 2,
      "text": "Prerequisites",
      "tokens": [
        {
          "type": "text",
          "raw": "Prerequisites",
          "text": "Prerequisites",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. **.NET SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).\n2. **IDE**: JetBrains Rider or Visual Studio.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. **.NET SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).\n",
          "task": false,
          "loose": false,
          "text": "**.NET SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).",
          "tokens": [
            {
              "type": "text",
              "raw": "**.NET SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).",
              "text": "**.NET SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**.NET SDK**",
                  "text": ".NET SDK",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": ".NET SDK",
                      "text": ".NET SDK",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Install from ",
                  "text": ": Install from ",
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
          "raw": "2. **IDE**: JetBrains Rider or Visual Studio.",
          "task": false,
          "loose": false,
          "text": "**IDE**: JetBrains Rider or Visual Studio.",
          "tokens": [
            {
              "type": "text",
              "raw": "**IDE**: JetBrains Rider or Visual Studio.",
              "text": "**IDE**: JetBrains Rider or Visual Studio.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**IDE**",
                  "text": "IDE",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "IDE",
                      "text": "IDE",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": JetBrains Rider or Visual Studio.",
                  "text": ": JetBrains Rider or Visual Studio.",
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
      "raw": "## Setup\n",
      "depth": 2,
      "text": "Setup",
      "tokens": [
        {
          "type": "text",
          "raw": "Setup",
          "text": "Setup",
          "escaped": false
        }
      ]
    },
    {
      "type": "code",
      "raw": "```bash:desc=Install Avalonia templates\ndotnet new install Avalonia.Templates\n```",
      "lang": "bash:desc=Install Avalonia templates",
      "text": "dotnet new install Avalonia.Templates"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "code",
      "raw": "```bash:desc=Create a new project\ndotnet new avalonia.app -o MyFirstAvaloniaApp\n```",
      "lang": "bash:desc=Create a new project",
      "text": "dotnet new avalonia.app -o MyFirstAvaloniaApp"
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
      "raw": "- [Avalonia Official Docs](https://docs.avaloniaui.net/)\n",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- [Avalonia Official Docs](https://docs.avaloniaui.net/)",
          "task": false,
          "loose": false,
          "text": "[Avalonia Official Docs](https://docs.avaloniaui.net/)",
          "tokens": [
            {
              "type": "text",
              "raw": "[Avalonia Official Docs](https://docs.avaloniaui.net/)",
              "text": "[Avalonia Official Docs](https://docs.avaloniaui.net/)",
              "tokens": [
                {
                  "type": "link",
                  "raw": "[Avalonia Official Docs](https://docs.avaloniaui.net/)",
                  "href": "https://docs.avaloniaui.net/",
                  "title": null,
                  "text": "Avalonia Official Docs",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Avalonia Official Docs",
                      "text": "Avalonia Official Docs",
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
