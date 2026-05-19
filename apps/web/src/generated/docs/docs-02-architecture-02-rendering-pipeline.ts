// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_02_architecture_02_rendering_pipeline: DocEntry = {
  "id": "docs/02-architecture/02-rendering-pipeline",
  "slug": "docs/architecture/rendering-pipeline",
  "title": "The Rendering Pipeline",
  "sidebar_label": "Rendering Pipeline",
  "sidebar_position": 2,
  "category": "docs",
  "original_category": "docs",
  "description": "How Avalonia draws pixels on different platforms.",
  "content": "<h1 id=\"the-rendering-pipeline\">The Rendering Pipeline<a class=\"hash-link\" href=\"#the-rendering-pipeline\" aria-label=\"The Rendering Pipeline permalink\">#</a></h1><p>Avalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.</p>\n<h2 id=\"skiasharp\">SkiaSharp<a class=\"hash-link\" href=\"#skiasharp\" aria-label=\"SkiaSharp permalink\">#</a></h2><p>At the core of Avalonia is <strong>SkiaSharp</strong>, a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.</p>\n<h2 id=\"the-rendering-process\">The Rendering Process<a class=\"hash-link\" href=\"#the-rendering-process\" aria-label=\"The Rendering Process permalink\">#</a></h2><ol>\n<li><strong>Measure Pass</strong>: The framework calculates how much space each element needs.</li>\n<li><strong>Arrange Pass</strong>: The framework positions elements within their allocated space.</li>\n<li><strong>Render Pass</strong>: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.</li>\n</ol>\n<h2 id=\"hardware-acceleration\">Hardware Acceleration<a class=\"hash-link\" href=\"#hardware-acceleration\" aria-label=\"Hardware Acceleration permalink\">#</a></h2><p>Avalonia supports multiple rendering backends:</p>\n<ul>\n<li><strong>OpenGL</strong>: For high-performance GPU acceleration.</li>\n<li><strong>Vulkan</strong>: Modern GPU acceleration.</li>\n<li><strong>Software</strong>: A fallback for environments without GPU support.</li>\n</ul>\n<hr>\n<p><em>Next: <a href=\"./03-logical-vs-visual-tree.md\">Logical vs Visual Tree</a></em></p>\n",
  "rawContent": "\n# The Rendering Pipeline\n\nAvalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.\n\n## SkiaSharp\nAt the core of Avalonia is **SkiaSharp**, a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.\n\n## The Rendering Process\n1. **Measure Pass**: The framework calculates how much space each element needs.\n2. **Arrange Pass**: The framework positions elements within their allocated space.\n3. **Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.\n\n## Hardware Acceleration\nAvalonia supports multiple rendering backends:\n- **OpenGL**: For high-performance GPU acceleration.\n- **Vulkan**: Modern GPU acceleration.\n- **Software**: A fallback for environments without GPU support.\n\n---\n*Next: [Logical vs Visual Tree](./03-logical-vs-visual-tree.md)*\n",
  "toc": [
    {
      "value": "SkiaSharp",
      "id": "skiasharp",
      "level": 2
    },
    {
      "value": "The Rendering Process",
      "id": "the-rendering-process",
      "level": 2
    },
    {
      "value": "Hardware Acceleration",
      "id": "hardware-acceleration",
      "level": 2
    }
  ],
  "tags": [
    "rendering",
    "performance",
    "skia"
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
      "raw": "# The Rendering Pipeline",
      "depth": 1,
      "text": "The Rendering Pipeline",
      "tokens": [
        {
          "type": "text",
          "raw": "The Rendering Pipeline",
          "text": "The Rendering Pipeline",
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
      "raw": "Avalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.",
      "text": "Avalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.",
          "text": "Avalonia is unique because it doesn't rely on native OS controls for its primary rendering. Instead, it uses a custom composition engine.",
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
      "raw": "## SkiaSharp\n",
      "depth": 2,
      "text": "SkiaSharp",
      "tokens": [
        {
          "type": "text",
          "raw": "SkiaSharp",
          "text": "SkiaSharp",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "At the core of Avalonia is **SkiaSharp**, a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.",
      "text": "At the core of Avalonia is **SkiaSharp**, a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.",
      "tokens": [
        {
          "type": "text",
          "raw": "At the core of Avalonia is ",
          "text": "At the core of Avalonia is ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**SkiaSharp**",
          "text": "SkiaSharp",
          "tokens": [
            {
              "type": "text",
              "raw": "SkiaSharp",
              "text": "SkiaSharp",
              "escaped": false
            }
          ]
        },
        {
          "type": "text",
          "raw": ", a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.",
          "text": ", a .NET wrapper for the Skia Graphics Library. This allows Avalonia to draw the same UI on Windows, Linux, and macOS with pixel-perfect consistency.",
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
      "raw": "## The Rendering Process\n",
      "depth": 2,
      "text": "The Rendering Process",
      "tokens": [
        {
          "type": "text",
          "raw": "The Rendering Process",
          "text": "The Rendering Process",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "1. **Measure Pass**: The framework calculates how much space each element needs.\n2. **Arrange Pass**: The framework positions elements within their allocated space.\n3. **Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
      "ordered": true,
      "start": 1,
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "1. **Measure Pass**: The framework calculates how much space each element needs.\n",
          "task": false,
          "loose": false,
          "text": "**Measure Pass**: The framework calculates how much space each element needs.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Measure Pass**: The framework calculates how much space each element needs.",
              "text": "**Measure Pass**: The framework calculates how much space each element needs.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Measure Pass**",
                  "text": "Measure Pass",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Measure Pass",
                      "text": "Measure Pass",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": The framework calculates how much space each element needs.",
                  "text": ": The framework calculates how much space each element needs.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "2. **Arrange Pass**: The framework positions elements within their allocated space.\n",
          "task": false,
          "loose": false,
          "text": "**Arrange Pass**: The framework positions elements within their allocated space.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Arrange Pass**: The framework positions elements within their allocated space.",
              "text": "**Arrange Pass**: The framework positions elements within their allocated space.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Arrange Pass**",
                  "text": "Arrange Pass",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Arrange Pass",
                      "text": "Arrange Pass",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": The framework positions elements within their allocated space.",
                  "text": ": The framework positions elements within their allocated space.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "3. **Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
          "task": false,
          "loose": false,
          "text": "**Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
              "text": "**Render Pass**: The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Render Pass**",
                  "text": "Render Pass",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Render Pass",
                      "text": "Render Pass",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
                  "text": ": The framework generates a set of drawing commands (brushes, geometries, text) which are then executed by Skia.",
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
      "raw": "## Hardware Acceleration\n",
      "depth": 2,
      "text": "Hardware Acceleration",
      "tokens": [
        {
          "type": "text",
          "raw": "Hardware Acceleration",
          "text": "Hardware Acceleration",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Avalonia supports multiple rendering backends:\n",
      "text": "Avalonia supports multiple rendering backends:",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia supports multiple rendering backends:",
          "text": "Avalonia supports multiple rendering backends:",
          "escaped": false
        }
      ]
    },
    {
      "type": "list",
      "raw": "- **OpenGL**: For high-performance GPU acceleration.\n- **Vulkan**: Modern GPU acceleration.\n- **Software**: A fallback for environments without GPU support.",
      "ordered": false,
      "start": "",
      "loose": false,
      "items": [
        {
          "type": "list_item",
          "raw": "- **OpenGL**: For high-performance GPU acceleration.\n",
          "task": false,
          "loose": false,
          "text": "**OpenGL**: For high-performance GPU acceleration.",
          "tokens": [
            {
              "type": "text",
              "raw": "**OpenGL**: For high-performance GPU acceleration.",
              "text": "**OpenGL**: For high-performance GPU acceleration.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**OpenGL**",
                  "text": "OpenGL",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "OpenGL",
                      "text": "OpenGL",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": For high-performance GPU acceleration.",
                  "text": ": For high-performance GPU acceleration.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **Vulkan**: Modern GPU acceleration.\n",
          "task": false,
          "loose": false,
          "text": "**Vulkan**: Modern GPU acceleration.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Vulkan**: Modern GPU acceleration.",
              "text": "**Vulkan**: Modern GPU acceleration.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Vulkan**",
                  "text": "Vulkan",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Vulkan",
                      "text": "Vulkan",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": Modern GPU acceleration.",
                  "text": ": Modern GPU acceleration.",
                  "escaped": false
                }
              ]
            }
          ]
        },
        {
          "type": "list_item",
          "raw": "- **Software**: A fallback for environments without GPU support.",
          "task": false,
          "loose": false,
          "text": "**Software**: A fallback for environments without GPU support.",
          "tokens": [
            {
              "type": "text",
              "raw": "**Software**: A fallback for environments without GPU support.",
              "text": "**Software**: A fallback for environments without GPU support.",
              "tokens": [
                {
                  "type": "strong",
                  "raw": "**Software**",
                  "text": "Software",
                  "tokens": [
                    {
                      "type": "text",
                      "raw": "Software",
                      "text": "Software",
                      "escaped": false
                    }
                  ]
                },
                {
                  "type": "text",
                  "raw": ": A fallback for environments without GPU support.",
                  "text": ": A fallback for environments without GPU support.",
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
      "raw": "*Next: [Logical vs Visual Tree](./03-logical-vs-visual-tree.md)*\n",
      "text": "*Next: [Logical vs Visual Tree](./03-logical-vs-visual-tree.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Logical vs Visual Tree](./03-logical-vs-visual-tree.md)*",
          "text": "Next: [Logical vs Visual Tree](./03-logical-vs-visual-tree.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Logical vs Visual Tree](./03-logical-vs-visual-tree.md)",
              "href": "./03-logical-vs-visual-tree.md",
              "title": null,
              "text": "Logical vs Visual Tree",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Logical vs Visual Tree",
                  "text": "Logical vs Visual Tree",
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
