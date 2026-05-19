# Naravisuals Web (docts)

Naravisuals Web is a high-performance, developer-centric Static Site Generator (SSG) engineered for technical documentation. Unlike traditional SSGs that produce static HTML, Naravisuals Web transforms Markdown into a type-safe TypeScript database, which is then consumed by a modern React 19 SPA.

## The Core Philosophy: Docs as Data

Most SSGs treat documentation as a series of HTML pages. Naravisuals Web treats documentation as structured data.

The build engine parses Markdown and generates a set of TypeScript files in apps/web/src/generated/. This allows the frontend to:
- Enjoy full type safety for all document metadata and content.
- Implement complex client-side features (like a global AST viewer or advanced search) without expensive API calls.
- Maintain near-instant page transitions through a React SPA architecture.

## Technical Architecture

### 1. The Hybrid Build Pipeline
The project employs a dual-engine approach to balance flexibility and speed.

#### TypeScript Engine (Bun)
The primary engine located in packages/compiler-ts/, designed for rapid iteration and easy plugin development.
- Orchestration: The DocumentationCompiler manages the full lifecycle.
- The Pipeline:
    1. Ingestion: Recursively scans content/docs/ for Markdown files.
    2. Preprocessing: Frontmatter extraction and metadata construction.
    3. Transformation: Lexing via marked.Lexer, token manipulation, and HTML rendering.
    4. Post-processing: Final HTML adjustments (e.g., Mermaid.js processing).
    5. Global Assembly: Cross-document analysis and link validation.
    6. Artifact Generation: Validates DocEntry against a TypeBox schema and writes TS constants.

#### Rust Engine (packages/compiler-rs)
A high-performance implementation of the compiler logic written in Rust, intended for massive documentation sets and optimized CI/CD pipelines.

### 2. The Frontend (React 19)
A sophisticated SPA that renders the generated data.

#### Dependency Injection (DI) Container
To maintain a clean separation between UI and browser APIs, the frontend uses a Service Container (apps/web/src/services/container.ts).
- Abstracted Services: IStorageService, IRouterService, IDomService, IThemeService, and ISidebarService.
- Benefit: Services can be swapped effortlessly for testing or different environment implementations without touching the React components.

#### Key Features
- AST Viewer: A specialized tool to inspect the parsed structure of documentation.
- Intelligence-Enhanced Mermaid: Build-time validation and auto-correction for Mermaid.js v11 diagrams.
- Visual Excellence: Shiki for VS Code-grade syntax highlighting and MathJax for LaTeX precision.
- Print-Ready: Dedicated CSS for professional PDF exports.

## Extension System

Extend the build process using the Stateful Middleware Pipeline. You can hook into any of these stages:

- onIngest: Filter or modify files as they are discovered.
- onPreParse: Modify raw Markdown before the lexer runs.
- onTransform: Manipulate the Token AST before HTML rendering.
- onPostProcess: Transform the final HTML output.
- onAssemble: Perform global checks (e.g., validating all internal links).

## Project Structure

- apps/web: React 19 Frontend Application
- apps/server: Production Server
- packages/compiler-ts: TS Build Engine (The Compiler)
- packages/compiler-rs: Rust-based High-Performance Engine
- content/docs: Markdown source files (the source of truth)
- tests: Integration and Unit tests

## Quick Start

### 1. Installation
```bash
bun install
```

### 2. Development
```bash
bun run dev
```

### 3. Production Build
```bash
# Use the flexible TypeScript engine
bun run build

# Use the high-performance Rust engine
bun run build --rust
```

## Contributing

1. Check TODOS.md for the roadmap.
2. Ensure bun run lint and bun run test pass.
3. Submit a PR.

## License
MIT
