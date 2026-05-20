/**
 * Service Container & Service Implementation Tests
 */

import { beforeEach, describe, expect, mock, test } from "bun:test";
import {
  createAppConfig,
  createContainer,
  defaultContainer,
} from "../apps/web/src/services/container";
import {
  createMockDom,
  createMockRouter,
  createMockStorage,
  createMockTheme,
  type MockDom,
  type MockRouter,
} from "../apps/web/src/services/mocks";

// ─── Container ────────────────────────────────────────────────────────────

describe("createContainer", () => {
  test("creates all services by default", () => {
    const c = createContainer();
    expect(c.storage).toBeDefined();
    expect(c.router).toBeDefined();
    expect(c.dom).toBeDefined();
    expect(c.theme).toBeDefined();
    expect(c.config).toBeDefined();
  });

  test("accepts service overrides", () => {
    const m = createMockStorage();
    const c = createContainer({ storage: m });
    expect(c.storage).toBe(m);
  });

  test("accepts config overrides", () => {
    const c = createContainer({
      config: {
        siteTitle: "Custom",
        repoEditUrl: "https://example.com",
        mobileBreakpoint: 600,
        tocBreakpoint: 900,
        routes: { docs: "documentation" },
      },
    });
    expect(c.config.siteTitle).toBe("Custom");
    expect(c.config.mobileBreakpoint).toBe(600);
    expect(c.config.routes.docs).toBe("documentation");
  });

  test("config merges with defaults", () => {
    const c = createContainer({ config: { siteTitle: "Custom" } });
    expect(c.config.siteTitle).toBe("Custom");
    expect(c.config.repoEditUrl).toBe("https://github.com/your-org/your-repo/edit/main");
    expect(c.config.mobileBreakpoint).toBe(800);
  });
});

describe("defaultContainer", () => {
  test("exports a pre-configured container", () => {
    expect(defaultContainer.storage).toBeDefined();
    expect(defaultContainer.router).toBeDefined();
    expect(defaultContainer.dom).toBeDefined();
    expect(defaultContainer.theme).toBeDefined();
    expect(defaultContainer.config).toBeDefined();
  });
});

// ─── Mock Services Functional Tests ────────────────────────────────────

describe("Mock Services", () => {
  test("Storage mock", () => {
    const s = createMockStorage();
    s.setItem("k", "v");
    expect(s.getItem("k")).toBe("v");
    s.removeItem("k");
    expect(s.getItem("k")).toBeNull();
    s.setItem("a", "1");
    s.clear();
    expect(s.getItem("a")).toBeNull();
  });

  test("Router mock", () => {
    const r = createMockRouter();
    expect(r.getCurrentPath()).toBe("/");
    r.pushState({}, "", "/docs/test");
    expect(r.getCurrentPath()).toBe("/docs/test");
    expect(r.buildUrl("docs", "test/slug")).toBe("/docs/test/slug");
  });

  test("DOM mock", () => {
    const d = createMockDom();
    expect(d.getViewportWidth()).toBe(1024);
    d._setViewportWidth(500);
    expect(d.getViewportWidth()).toBe(500);
    d.setBodyOverflow("hidden");
    expect(d._getBodyOverflow()).toBe("hidden");
  });

  test("Theme mock", () => {
    const storage = createMockStorage();
    const theme = createMockTheme(storage);
    expect(theme.getInitialTheme()).toBe(false);
    theme.toggleTheme(false);
    expect(theme.getInitialTheme()).toBe(true);
    expect(storage.getItem("theme")).toBe("dark");
  });
});

// ─── App Config ───────────────────────────────────────────────────────────

describe("App Config", () => {
  test("defaults", () => {
    const c = createAppConfig();
    expect(c.siteTitle).toBe((process.env.PROJECT_NAME || "Docs").replace(/-/g, " "));
    expect(c.repoEditUrl).toBe("https://github.com/your-org/your-repo/edit/main");
    expect(c.mobileBreakpoint).toBe(800);
    expect(c.tocBreakpoint).toBe(1100);
    expect(c.routes.docs).toBe("docs");
  });
  test("overrides merge with defaults", () => {
    const c = createAppConfig({
      siteTitle: "My Docs",
      routes: { docs: "guides" },
    });
    expect(c.siteTitle).toBe("My Docs");
    expect(c.routes.docs).toBe("guides");
    expect(c.mobileBreakpoint).toBe(800);
  });
});

// ─── Service Integration (isolated, no shared state) ─────────────────────

describe("Service Integration", () => {
  test("mock services work together", () => {
    const storage = createMockStorage();
    const theme = createMockTheme(storage);
    theme.toggleTheme(false);
    expect(storage.getItem("theme")).toBe("dark");
    expect(theme.getInitialTheme()).toBe(true);
  });

  test("container services are connected", () => {
    const storage = createMockStorage();
    const container = createContainer({ storage });
    // Theme was created with this same storage reference in createContainer
    container.theme.toggleTheme(false);
    expect(storage.getItem("theme")).toBe("dark");
  });
});
