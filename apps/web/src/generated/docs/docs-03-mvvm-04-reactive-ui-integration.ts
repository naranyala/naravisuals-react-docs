// AUTO-GENERATED — DO NOT EDIT.
import type { DocEntry } from "@/generated/types";

export const doc_docs_03_mvvm_04_reactive_ui_integration: DocEntry = {
  "id": "docs/03-mvvm/04-reactive-ui-integration",
  "slug": "docs/mvvm/reactive-ui-integration",
  "title": "ReactiveUI Integration",
  "sidebar_label": "ReactiveUI",
  "sidebar_position": 4,
  "category": "docs",
  "original_category": "docs",
  "description": "Leveraging Reactive Extensions for powerful UI logic.",
  "content": "<h1 id=\"reactiveui-integration\">ReactiveUI Integration<a class=\"hash-link\" href=\"#reactiveui-integration\" aria-label=\"ReactiveUI Integration permalink\">#</a></h1><p>Avalonia has deep integration with <strong>ReactiveUI</strong>, a framework based on Reactive Extensions (Rx).</p>\n<h2 id=\"why-reactiveui\">Why ReactiveUI?<a class=\"hash-link\" href=\"#why-reactiveui\" aria-label=\"Why ReactiveUI? permalink\">#</a></h2><p>It allows you to treat events and property changes as \"streams\" of data. You can filter, transform, and combine these streams using LINQ-like operators.</p>\n<h2 id=\"example-search-as-you-type\">Example: Search-as-you-type<a class=\"hash-link\" href=\"#example-search-as-you-type\" aria-label=\"Example: Search-as-you-type permalink\">#</a></h2><p>Instead of triggering a search on every keystroke, you can \"debounce\" the input.</p>\n<div class=\"code-block\" data-lang=\"csharp\" data-copy=\"true\" data-zoom=\"true\"><div class=\"code-header\"><span class=\"code-lang\">Csharp</span><button class=\"code-copy-btn\" aria-label=\"Copy code\" onclick=\"copyCode(this)\">Copy</button></div><pre><code class=\"language-csharp\">this.WhenAnyValue(x =&gt; x.SearchText)\n    .Throttle(TimeSpan.FromMilliseconds(400))\n    .ObserveOn(RxApp.MainThreadScheduler)\n    .Subscribe(async text =&gt; await PerformSearch(text));</code></pre><div class=\"code-desc\">Debounced search implementation</div></div><h2 id=\"the-viewmodelbase\">The ViewModelBase<a class=\"hash-link\" href=\"#the-viewmodelbase\" aria-label=\"The ViewModelBase permalink\">#</a></h2><p>By inheriting from <code>ReactiveObject</code>, your ViewModel gains the ability to notify the UI of changes via <code>this.RaiseAndSetIfChanged</code>.</p>\n<hr>\n<p><em>Next: <a href=\"./../04-components/01-layout-containers.md\">Layout Containers</a></em></p>\n",
  "rawContent": "\n# ReactiveUI Integration\n\nAvalonia has deep integration with **ReactiveUI**, a framework based on Reactive Extensions (Rx).\n\n## Why ReactiveUI?\nIt allows you to treat events and property changes as \"streams\" of data. You can filter, transform, and combine these streams using LINQ-like operators.\n\n## Example: Search-as-you-type\nInstead of triggering a search on every keystroke, you can \"debounce\" the input.\n\n```csharp:desc=Debounced search implementation\nthis.WhenAnyValue(x => x.SearchText)\n    .Throttle(TimeSpan.FromMilliseconds(400))\n    .ObserveOn(RxApp.MainThreadScheduler)\n    .Subscribe(async text => await PerformSearch(text));\n```\n\n## The ViewModelBase\nBy inheriting from `ReactiveObject`, your ViewModel gains the ability to notify the UI of changes via `this.RaiseAndSetIfChanged`.\n\n---\n*Next: [Layout Containers](./../04-components/01-layout-containers.md)*\n",
  "toc": [
    {
      "value": "Why ReactiveUI?",
      "id": "why-reactiveui",
      "level": 2
    },
    {
      "value": "Example: Search-as-you-type",
      "id": "example-search-as-you-type",
      "level": 2
    },
    {
      "value": "The ViewModelBase",
      "id": "the-viewmodelbase",
      "level": 2
    }
  ],
  "tags": [
    "[reactiveui",
    "rx",
    "",
    "async]"
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
      "raw": "# ReactiveUI Integration",
      "depth": 1,
      "text": "ReactiveUI Integration",
      "tokens": [
        {
          "type": "text",
          "raw": "ReactiveUI Integration",
          "text": "ReactiveUI Integration",
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
      "raw": "Avalonia has deep integration with **ReactiveUI**, a framework based on Reactive Extensions (Rx).",
      "text": "Avalonia has deep integration with **ReactiveUI**, a framework based on Reactive Extensions (Rx).",
      "tokens": [
        {
          "type": "text",
          "raw": "Avalonia has deep integration with ",
          "text": "Avalonia has deep integration with ",
          "escaped": false
        },
        {
          "type": "strong",
          "raw": "**ReactiveUI**",
          "text": "ReactiveUI",
          "tokens": [
            {
              "type": "text",
              "raw": "ReactiveUI",
              "text": "ReactiveUI",
              "escaped": false
            }
          ]
        },
        {
          "type": "text",
          "raw": ", a framework based on Reactive Extensions (Rx).",
          "text": ", a framework based on Reactive Extensions (Rx).",
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
      "raw": "## Why ReactiveUI?\n",
      "depth": 2,
      "text": "Why ReactiveUI?",
      "tokens": [
        {
          "type": "text",
          "raw": "Why ReactiveUI?",
          "text": "Why ReactiveUI?",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "It allows you to treat events and property changes as \"streams\" of data. You can filter, transform, and combine these streams using LINQ-like operators.",
      "text": "It allows you to treat events and property changes as \"streams\" of data. You can filter, transform, and combine these streams using LINQ-like operators.",
      "tokens": [
        {
          "type": "text",
          "raw": "It allows you to treat events and property changes as \"streams\" of data. You can filter, transform, and combine these streams using LINQ-like operators.",
          "text": "It allows you to treat events and property changes as \"streams\" of data. You can filter, transform, and combine these streams using LINQ-like operators.",
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
      "raw": "## Example: Search-as-you-type\n",
      "depth": 2,
      "text": "Example: Search-as-you-type",
      "tokens": [
        {
          "type": "text",
          "raw": "Example: Search-as-you-type",
          "text": "Example: Search-as-you-type",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "Instead of triggering a search on every keystroke, you can \"debounce\" the input.",
      "text": "Instead of triggering a search on every keystroke, you can \"debounce\" the input.",
      "tokens": [
        {
          "type": "text",
          "raw": "Instead of triggering a search on every keystroke, you can \"debounce\" the input.",
          "text": "Instead of triggering a search on every keystroke, you can \"debounce\" the input.",
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
      "raw": "```csharp:desc=Debounced search implementation\nthis.WhenAnyValue(x => x.SearchText)\n    .Throttle(TimeSpan.FromMilliseconds(400))\n    .ObserveOn(RxApp.MainThreadScheduler)\n    .Subscribe(async text => await PerformSearch(text));\n```",
      "lang": "csharp:desc=Debounced search implementation",
      "text": "this.WhenAnyValue(x => x.SearchText)\n    .Throttle(TimeSpan.FromMilliseconds(400))\n    .ObserveOn(RxApp.MainThreadScheduler)\n    .Subscribe(async text => await PerformSearch(text));"
    },
    {
      "type": "space",
      "raw": "\n\n"
    },
    {
      "type": "heading",
      "raw": "## The ViewModelBase\n",
      "depth": 2,
      "text": "The ViewModelBase",
      "tokens": [
        {
          "type": "text",
          "raw": "The ViewModelBase",
          "text": "The ViewModelBase",
          "escaped": false
        }
      ]
    },
    {
      "type": "paragraph",
      "raw": "By inheriting from `ReactiveObject`, your ViewModel gains the ability to notify the UI of changes via `this.RaiseAndSetIfChanged`.",
      "text": "By inheriting from `ReactiveObject`, your ViewModel gains the ability to notify the UI of changes via `this.RaiseAndSetIfChanged`.",
      "tokens": [
        {
          "type": "text",
          "raw": "By inheriting from ",
          "text": "By inheriting from ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`ReactiveObject`",
          "text": "ReactiveObject"
        },
        {
          "type": "text",
          "raw": ", your ViewModel gains the ability to notify the UI of changes via ",
          "text": ", your ViewModel gains the ability to notify the UI of changes via ",
          "escaped": false
        },
        {
          "type": "codespan",
          "raw": "`this.RaiseAndSetIfChanged`",
          "text": "this.RaiseAndSetIfChanged"
        },
        {
          "type": "text",
          "raw": ".",
          "text": ".",
          "escaped": false
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
      "raw": "*Next: [Layout Containers](./../04-components/01-layout-containers.md)*\n",
      "text": "*Next: [Layout Containers](./../04-components/01-layout-containers.md)*",
      "tokens": [
        {
          "type": "em",
          "raw": "*Next: [Layout Containers](./../04-components/01-layout-containers.md)*",
          "text": "Next: [Layout Containers](./../04-components/01-layout-containers.md)",
          "tokens": [
            {
              "type": "text",
              "raw": "Next: ",
              "text": "Next: ",
              "escaped": false
            },
            {
              "type": "link",
              "raw": "[Layout Containers](./../04-components/01-layout-containers.md)",
              "href": "./../04-components/01-layout-containers.md",
              "title": null,
              "text": "Layout Containers",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Layout Containers",
                  "text": "Layout Containers",
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
