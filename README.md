# Naravisuals Web (docts)

Naravisuals Web is a high-performance, developer-centric Static Site Generator (SSG) designed for technical documentation. It transforms Markdown into a type-safe TypeScript database, which is then consumed by a modern React 19 Single Page Application (SPA).

## Core Philosophy: Docs as Data

Unlike traditional SSGs that produce static HTML, Naravisuals Web treats documentation as structured data. The build engine parses Markdown and generates TypeScript files in apps/web/src/generated/. This architecture enables:

- Full type safety for all document metadata and content.
- Implementation of complex client-side features (such as a global AST viewer and advanced search) without API overhead.
- Near-instant page transitions via a React SPA architecture.

## Technical Architecture

### 1. Hybrid Build Pipeline

The project utilizes a dual-engine approach to balance development velocity and execution speed.

#### TypeScript Engine (Bun)
Located in packages/compiler-ts/, this engine is optimized for rapid iteration and plugin development.
- Orchestration: The DocumentationCompiler manages the full lifecycle.
- Pipeline:
    1. Ingestion: Recursively scans content/docs/ for Markdown files.
    2. Preprocessing: Frontmatter extraction and metadata construction.
    3. Transformation: Lexing via marked.Lexer, token manipulation, and HTML rendering.
    4. Post-processing: Final HTML adjustments, including Mermaid.js processing.
    5. Global Assembly: Cross-document analysis and link validation.
    6. Artifact Generation: Validates DocEntry against a TypeBox schema and writes TS constants.

#### Rust Engine (packages/compiler-rs)
A high-performance implementation of the compiler logic written in Rust, designed for massive documentation sets and optimized CI/CD pipelines.

### 2. Frontend (React 19)

The frontend is a sophisticated SPA that renders the generated data.

#### Dependency Injection (DI) Container
To ensure a clean separation between UI and browser APIs, the frontend employs a Service Container (apps/web/src/services/container.ts).
- Abstracted Services: IStorageService, IRouterService, IDomService, IThemeService, and ISidebarService.
- Benefit: Services can be swapped for testing or environment-specific implementations without modifying React components.

#### Key Features
- AST Viewer: Specialized tool for inspecting the parsed structure of documentation.
- Intelligence-Enhanced Mermaid: Build-time validation and auto-correction for Mermaid.js v11 diagrams.
- Visual Excellence: Shiki for VS Code-grade syntax highlighting and MathJax for LaTeX precision.
- Print-Ready: Dedicated CSS for professional PDF exports.

## Extension System

Extend the build process via the Stateful Middleware Pipeline. Available hooks include:

- onIngest: Filter or modify files during discovery.
- onPreParse: Modify raw Markdown before lexing.
- onTransform: Manipulate the Token AST before HTML rendering.
- onPostProcess: Transform the final HTML output.
- onAssemble: Perform global checks, such as internal link validation.

## Project Structure

- apps/web: React 19 Frontend Application
- apps/server: Production Server
- packages/compiler-ts: TS Build Engine (The Compiler)
- packages/compiler-rs: Rust-based High-Performance Engine
- content/docs: Markdown source files (Source of Truth)
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
# Using the TypeScript engine
bun run build

# Using the high-performance Rust engine
bun run build --rust
```

## Contributing

1. Review TODOS.md for the current roadmap.
2. Ensure bun run lint and bun run test pass.
3. Submit a Pull Request.

## License
MIT
