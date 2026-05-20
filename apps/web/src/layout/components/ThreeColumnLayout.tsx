import { clsx } from "clsx";
import type React from "react";

interface ThreeColumnLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  reference: React.ReactNode;
  menu: React.ReactNode;
  sidebarCollapsed?: boolean;
  menuOpen?: boolean;
}

export function ThreeColumnLayout({
  sidebar,
  content,
  reference,
  menu,
  sidebarCollapsed = false,
  menuOpen = false,
}: ThreeColumnLayoutProps) {
  return (
    <div className={clsx("doc-page-layout", { "menu-open": menuOpen })}>
      {/* Navigation Column */}
      <nav className={clsx("sidebar", { collapsed: sidebarCollapsed })}>{sidebar}</nav>
      {/* Main Content Column */}
      <main className="main-content">{content}</main>
      {/* Reference Column (TOC, Metadata, Refs) */}
      <aside className="toc-container">{reference}</aside>
      {/* Context Menu Column (Push Layout) */}
      {menu}
    </div>
  );
}
