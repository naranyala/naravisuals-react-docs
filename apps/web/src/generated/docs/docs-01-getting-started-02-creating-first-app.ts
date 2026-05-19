// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_01_getting_started_02_creating_first_app: DocEntry = {
  "id": "docs/01-getting-started/02-creating-first-app",
  "slug": "docs/getting-started/creating-first-app",
  "title": "Creating Your First App",
  "sidebar_label": "First Application",
  "sidebar_position": 2,
  "category": "docs",
  "original_category": "docs",
  "description": "Step-by-step guide to launching your first Avalonia window.",
  "content": "<h1 id=\"creating-your-first-app\">Creating Your First App<a class=\"hash-link\" href=\"#creating-your-first-app\" aria-label=\"Creating Your First App permalink\">#</a></h1><p>Now that your environment is ready, let's create a functional \"Hello World\" application.</p>\n<h2 id=\"generating-the-project\">Generating the Project<a class=\"hash-link\" href=\"#generating-the-project\" aria-label=\"Generating the Project permalink\">#</a></h2><p>Use the <code>dotnet new</code> command to create an Avalonia application. We recommend the <code>avalonia.app</code> template for desktop development.</p>\n<div class=\"code-block\" data-lang=\"bash\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Bash</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre class=\"shiki github-dark\" style=\"background-color:#24292e;color:#e1e4e8\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">dotnet</span><span style=\"color:#9ECBFF\"> new</span><span style=\"color:#9ECBFF\"> avalonia.app</span><span style=\"color:#79B8FF\"> -o</span><span style=\"color:#9ECBFF\"> MyFirstApp</span></span></code></pre><div class=\"code-desc\">Create a new Avalonia project named 'MyFirstApp</div></div><h2 id=\"running-the-application\">Running the Application<a class=\"hash-link\" href=\"#running-the-application\" aria-label=\"Running the Application permalink\">#</a></h2><p>Navigate into the project folder and execute the run command:</p>\n<div class=\"code-block\" data-lang=\"bash\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Bash</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre class=\"shiki github-dark\" style=\"background-color:#24292e;color:#e1e4e8\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#79B8FF\">cd</span><span style=\"color:#9ECBFF\"> MyFirstApp</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">dotnet</span><span style=\"color:#9ECBFF\"> run</span></span></code></pre><div class=\"code-desc\">Run the application</div></div><h2 id=\"breaking-down-the-code\">Breaking Down the Code<a class=\"hash-link\" href=\"#breaking-down-the-code\" aria-label=\"Breaking Down the Code permalink\">#</a></h2><p>When you open the project, you will notice two primary files for every window:</p>\n<ol>\n<li><code>MainWindow.axaml</code>: The declarative UI definition (XAML).</li>\n<li><code>MainWindow.axaml.cs</code>: The \"code-behind\" where logic and event handlers reside.</li>\n</ol>\n<hr>\n<p><em>Next: <a href=\"./03-project-structure.md\">Understanding Project Structure</a></em></p>\n",
  "rawContent": "\n# Creating Your First App\n\nNow that your environment is ready, let's create a functional \"Hello World\" application.\n\n## Generating the Project\nUse the `dotnet new` command to create an Avalonia application. We recommend the `avalonia.app` template for desktop development.\n\n```bash:desc=Create a new Avalonia project named 'MyFirstApp'\ndotnet new avalonia.app -o MyFirstApp\n```\n\n## Running the Application\nNavigate into the project folder and execute the run command:\n\n```bash:desc=Run the application\ncd MyFirstApp\ndotnet run\n```\n\n## Breaking Down the Code\nWhen you open the project, you will notice two primary files for every window:\n1. `MainWindow.axaml`: The declarative UI definition (XAML).\n2. `MainWindow.axaml.cs`: The \"code-behind\" where logic and event handlers reside.\n\n---\n*Next: [Understanding Project Structure](./03-project-structure.md)*\n",
  "toc": [
    {
      "value": "Generating the Project",
      "id": "generating-the-project",
      "level": 2
    },
    {
      "value": "Running the Application",
      "id": "running-the-application",
      "level": 2
    },
    {
      "value": "Breaking Down the Code",
      "id": "breaking-down-the-code",
      "level": 2
    }
  ],
  "tags": [
    "beginner",
    "project",
    "cli"
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
      "raw": "# Creating Your First App",
      "depth": 1,
      "text": "Creating Your First App",
      "tokens": [
        {
          "type": "text",
          "raw": "Creating Your First App",
          "text": "Creating Your First App",
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
      "raw": "Now that your environment is ready, let's create a functional \"Hello World\" application.",
      "text": "Now that your environment is ready, let's create a functional \"Hello World\" application.",
      "tokens": [
        {
          "type": "text",
          "raw": "Now that your environment is ready, let's create a functional \"Hello World\" application.",
          "text": "Now that your environment is ready, let's create a functional \"Hello World\" application.",
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
      "raw": "## Generating the Project\n",
      "depth": 2,
      "text": "Generating the Project",
      "tokens": [
        {
          "type": "text",
          "raw": "Generating the Project",
          "text": "Generating the Project",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Use the `dotnet new` command to create an Avalonia application. We recommend the `avalonia.app` template for desktop development.",
      "text": "Use the `dotnet new` command to create an Avalonia application. We recommend the `avalonia.app` template for desktop development.",
      "tokens": [
        {
          "type": "text",
          "raw": "Use the ",
          "text": "Use the ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`dotnet new`",
          "text": "dotnet new"
        },
        {
          "type": "text",
          "raw": " command to create an Avalonia application. We recommend the ",
          "text": " command to create an Avalonia application. We recommend the ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`avalonia.app`",
          "text": "avalonia.app"
        },
        {
          "type": "text",
          "raw": " template for desktop development.",
          "text": " template for desktop development.",
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
      "raw": "```bash:desc=Create a new Avalonia project named 'MyFirstApp'\ndotnet new avalonia.app -o MyFirstApp\n```",
      "lang": "bash:desc=Create a new Avalonia project named 'MyFirstApp'",
      "text": "dotnet new avalonia.app -o MyFirstApp"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Running the Application\n",
      "depth": 2,
      "text": "Running the Application",
      "tokens": [
        {
          "type": "text",
          "raw": "Running the Application",
          "text": "Running the Application",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Navigate into the project folder and execute the run command:",
      "text": "Navigate into the project folder and execute the run command:",
      "tokens": [
        {
          "type": "text",
          "raw": "Navigate into the project folder and execute the run command:",
          "text": "Navigate into the project folder and execute the run command:",
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
      "raw": "```bash:desc=Run the application\ncd MyFirstApp\ndotnet run\n```",
      "lang": "bash:desc=Run the application",
      "text": "cd MyFirstApp\ndotnet run"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## Breaking Down the Code\n",
      "depth": 2,
      "text": "Breaking Down the Code",
      "tokens": [
        {
          "type": "text",
          "raw": "Breaking Down the Code",
          "text": "Breaking Down the Code",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "When you open the project, you will notice two primary files for every window:\n",
      "text": "When you open the project, you will notice two primary files for every window:",
      "tokens": [
        {
          "type": "text",
          "raw": "When you open the project, you will notice two primary files for every window:",
          "text": "When you open the project, you will notice two primary files for every window:",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. `MainWindow.axaml`: The declarative UI definition (XAML).\n2. `MainWindow.axaml.cs`: The \"code-behind\" where logic and event handlers reside.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. `MainWindow.axaml`: The declarative UI definition (XAML).\n",
          "task": false,
          "loose": false,
          "text": "`MainWindow.axaml`: The declarative UI definition (XAML).",
          "tokens": [
            {
              "type": "text",
              "raw": "`MainWindow.axaml`: The declarative UI definition (XAML).",
              "text": "`MainWindow.axaml`: The declarative UI definition (XAML).",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`MainWindow.axaml`",
                  "text": "MainWindow.axaml"
                },
                {
                  "type": "text",
                  "raw": ": The declarative UI definition (XAML).",
                  "text": ": The declarative UI definition (XAML).",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "2. `MainWindow.axaml.cs`: The \"code-behind\" where logic and event handlers reside.",
          "task": false,
          "loose": false,
          "text": "`MainWindow.axaml.cs`: The \"code-behind\" where logic and event handlers reside.",
          "tokens": [
            {
              "type": "text",
              "raw": "`MainWindow.axaml.cs`: The \"code-behind\" where logic and event handlers reside.",
              "text": "`MainWindow.axaml.cs`: The \"code-behind\" where logic and event handlers reside.",
              "tokens": [
                {
                  "type": "codespan",
                  "raw": "`MainWindow.axaml.cs`",
                  "text": "MainWindow.axaml.cs"
                },
                {
                  "type": "text",
                  "raw": ": The \"code-behind\" where logic and event handlers reside.",
                  "text": ": The \"code-behind\" where logic and event handlers reside.",
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
      "raw": "*Next: [Understanding Project Structure](./03-project-structure.md)*\n",
      "text": "*Next: [Understanding Project Structure](./03-project-structure.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Understanding Project Structure](./03-project-structure.md)*",
          "text": "Next: [Understanding Project Structure](./03-project-structure.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Understanding Project Structure](./03-project-structure.md)",
              "href": "./03-project-structure.md",
              "title": null,
              "text": "Understanding Project Structure",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Understanding Project Structure",
                  "text": "Understanding Project Structure",
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
