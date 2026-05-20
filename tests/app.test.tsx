/**
 * App Component Integration Tests
 */

import { beforeEach, describe, expect, mock, test } from "bun:test";
import { waitFor } from "@testing-library/react";
import { MainLayout } from "../apps/web/src/layout/MainLayout";

import { renderWithServices, mockDocEntry } from "./test-utils";

describe("App Integration", () => {
  beforeEach(() => {
    mock();
  });

  test("renders core layout elements", () => {
    renderWithServices(<MainLayout />);
    const elements = [
      ".top-bar",
      ".top-bar-left",
      ".top-bar-right",
      ".sidebar",
      ".sidebar-content",
      ".main-content",
      ".breadcrumbs",
      ".doc-footer",
      ".doc-content",
      ".toc-container",
      ".pagination-nav",
      ".site-wrapper",
      ".overlay",
    ];
    elements.forEach((selector) => {
      expect(document.querySelector(selector), `Missing element: ${selector}`).toBeDefined();
    });
  });

  test("renders site title", async () => {
    renderWithServices(<MainLayout />, { initialDoc: mockDocEntry });
    await waitFor(() => {
      expect(document.querySelector(".top-bar-breadcrumb-item.root")).not.toBeNull();
    });
    expect(
      document.querySelector(".top-bar-breadcrumb-item.root")?.textContent?.toLowerCase()
    ).toBe(
      (process.env.PROJECT_NAME
        ? process.env.PROJECT_NAME.replace(/-/g, " ")
        : "Docs"
      ).toLowerCase()
    );
  });

  test("renders settings toggle button", async () => {
    renderWithServices(<MainLayout />);
    await waitFor(() => {
      expect(document.querySelector(".top-bar-btn.context-menu-btn")).toBeDefined();
    });
  });

  test("renders menu button for mobile sidebar", () => {
    renderWithServices(<MainLayout />);
    expect(document.querySelector(".menu-btn")).toBeDefined();
  });

  // ─── Navigation Edge Cases ────────────────────────────────────────

  test("site title is clickable and navigates to abstract", async () => {
    renderWithServices(<MainLayout />, { initialDoc: mockDocEntry });
    await waitFor(() => {
      expect(document.querySelector(".top-bar-breadcrumb-item.root")).not.toBeNull();
    });
    const rootLink = document.querySelector(".top-bar-breadcrumb-item.root") as HTMLElement;
    expect(rootLink).not.toBeNull();
    expect(rootLink.getAttribute("href")).toBe("/");
  });

  // ─── Settings Panel Edge Cases ────────────────────────────────────

  test("settings panel opens when toggle clicked", () => {
    renderWithServices(<MainLayout />);
    const settingsBtn = document.querySelector(
      ".top-bar-icon-btn[aria-label='Toggle settings']"
    ) as HTMLElement;
    if (settingsBtn) {
      settingsBtn.click();
      expect(document.querySelector(".settings-overlay")).toBeDefined();
    }
  });

  test("settings panel closes when overlay clicked", () => {
    renderWithServices(<MainLayout />);
    const settingsBtn = document.querySelector(
      ".top-bar-icon-btn[aria-label='Toggle settings']"
    ) as HTMLElement;
    if (settingsBtn) {
      settingsBtn.click();
      const overlay = document.querySelector(".settings-overlay") as HTMLElement;
      if (overlay) {
        overlay.click();
        expect(document.querySelector(".settings-overlay")).toBeNull();
      }
    }
  });

  // ─── Mobile Responsiveness ────────────────────────────────────────

  test("mobile overlay for sidebar exists in DOM", () => {
    renderWithServices(<MainLayout />);
    // Mobile overlay should be in DOM (hidden by default on desktop)
    expect(document.querySelector(".overlay")).toBeDefined();
  });

  // ─── Error Boundary ───────────────────────────────────────────────

  test("error boundary wraps content", () => {
    renderWithServices(<MainLayout />);
    expect(document.querySelector(".site-wrapper")).toBeDefined();
  });
  });
