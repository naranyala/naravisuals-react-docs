# Project Roadmap

The application is transitioning from local component state and scattered event handling to a centralized Service-oriented reactivity model using mitt for events and better-result for functional error handling.

## Completed

### Core Infrastructure
- Dependency Injection Container: Implemented ServiceContainer to manage service lifecycles.
- Event Bus: Implemented IEventBusService using mitt for cross-cutting communication.
- Storage abstraction: Implemented IStorageService to wrap localStorage.
- Router abstraction: Implemented IRouterService to wrap History API.
- DOM abstraction: Implemented IDomService for browser API isolation.
- App Configuration: Implemented IAppConfig with runtime validation via TypeBox.

### Feature Reactivity
- Sidebar Navigation Reactivity:
    - Implemented ISidebarService to manage navigation depth (path).
    - Integrated with ServiceContainer and IEventBusService.
    - Rewrote Sidebar.tsx to be a reactive view of the service state.
    - Used better-result for path resolution logic.
- Theme and Appearance Reactivity:
    - Implemented IThemeService for dark/light mode management.
    - Centralized persistence logic using IStorageService.
    - Integrated with IEventBusService for reactive theme changes.

### Build and Tooling (SSG Pipeline)
- Unified CLI: Implemented docts CLI for project lifecycle management.
- Documentation Compiler: Implemented a custom SSG engine to generate src/generated from markdown.
- Build Pipeline: Integrated rspack for production bundling and dev server.
- Validation Suite: Implemented strict content validation and Mermaid deep validation.
- Rust Engine: Implemented a high-performance compiler alternative in scripts-rs.
- Quality Gate: Integrated Biome (linting) and tsc (type checking) into the build process.

## In Progress

### Document Lifecycle and Enhancement State
- Moved Mermaid loading states into IThemeService.
- Creating a dedicated ContentService to manage overall content rendering and loading states.
- Implementing centralized rendering state for global progress indicators.

## Planned Rewrites

### 1. Search State Management
- Current State: Search logic is embedded in features/search.
- Goal: Create a SearchService to manage the search query, results, and active filters.
- Key Changes:
    - Implement a reactive query state.
    - Emit search:resultsChanged events.
    - Use better-result to handle search engine failures.

### 2. Global UI State (Modals, Drawers, AST Viewer)
- Current State: Managed via useState in MainLayout or specific feature components.
- Goal: Create a UIService to manage the visibility of global overlays.
- Key Changes:
    - Implement togglePanel(panelId) and closeAllPanels().
    - Emit events when panels open/close to adjust main content margins.

## Implementation Guidelines

- Service-First: Logic must reside in a service, not a component.
- Event-Driven: Use IEventBusService for cross-cutting concerns.
- Functional Errors: Use better-result for any operation that can fail (lookups, API calls, parsing).
- DI Pattern: All services must be registered in ServiceContainer.
