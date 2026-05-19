import { clsx } from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

import { match } from "ts-pattern";
import { useSidebar } from "../contexts/GeneratedDataContext";
import { useUIState } from "../core/store";
import { deslugify, stripTitlePrefix } from "../core/utils";
import { useMetadata } from "../features/metadata/MetadataProvider";
import { Sidebar, TableOfContents } from "../features/navigation";
import { GlobalSearch } from "../features/search/GlobalSearch";
import { useSearch } from "../features/search/SearchProvider";
import { useSeo } from "../features/seo";
import { useDocsTheme } from "../features/theme";
import { useServices } from "../services";
import { useKeyboardShortcut, useTitle } from "../shared/hooks";
import "../shared/styles/index.css";

import { DocEntrySchema } from "@naravisuals/shared-types";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { ASTViewer } from "../features/ast-viewer/ASTViewer";
import { DocViewerWithFallback } from "../features/docs";
import { ArticleFooter } from "../features/docs/ArticleFooter";
import { FrontmatterGraph, WordStatsPanel } from "../features/metadata";
import { AppShell } from "./components/AppShell";
import { MockupMenuPanel } from "./components/MockupMenuPanel";
import { SettingsPanel } from "./components/SettingsPanel";
import { ThreeColumnLayout } from "./components/ThreeColumnLayout";
import { TopBar } from "./components/TopBar";
import { useNavigation } from "./hooks/useNavigation";
import { printAllDocs } from "./utils/print-engine";

const docValidator = TypeCompiler.Compile(DocEntrySchema);

function DataLoadingError({
  type,
  error,
  onRetry,
}: {
  type: "sidebar" | "docs";
  error: Error;
  onRetry: () => void;
}) {
  return (
    <div className={`data-loading-error data-loading-error--${type}`}>
      <div className="error-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <title>Warning</title>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <span className="error-text">
        Failed to load {type}: {error.message}
      </span>
      <button type="button" className="error-retry-btn" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="site-wrapper">
      <div className="top-bar">
        <h1 className="site-title">Documentation</h1>
      </div>
      <div className="empty-state">
        <p>{message}</p>
      </div>
    </div>
  );
}

export function MainLayout() {
  const services = useServices();
  const { sidebar: sidebarService } = services;
  const docsTheme = useDocsTheme();

  const {
    sidebar: sidebarFromContext,
    error: sidebarError,
    isLoading: sidebarLoading,
  } = useSidebar();

  const [mermaidLoading, setMermaidLoading] = useState(false);

  useEffect(() => {
    return services.events.on("mermaid:loading", (loading) => {
      setMermaidLoading(loading);
    });
  }, [services.events]);

  const {
    currentDoc,
    currentSlug,
    navigate,
    getDocsInSidebarOrder,
    setCurrentSlug,
    resolveSlug,
    docsError,
    docsLoading,
  } = useNavigation(services, sidebarFromContext ?? []);

  const [sidebarPath, setSidebarPath] = useState(sidebarService.getCurrentPath());

  useEffect(() => {
    const unsubscribe = sidebarService.onPathChange((path) => {
      setSidebarPath(path);
    });
    return unsubscribe;
  }, [sidebarService]);

  useEffect(() => {
    if (currentDoc) {
      const doc = currentDoc as any;
      if (!docValidator.Check(doc)) {
        const errors = [...docValidator.Errors(doc)];
        console.warn(`Document validation failed for ${doc.slug}:`, errors);
      }
    }
  }, [currentDoc]);

  const {
    isMobile,
    sidebarVisible,
    isTocMobile,
    tocVisible,
    settingsOpen,
    menuOpen,
    viewMode,
    updateResponsive,
    toggleSidebar,
    toggleToc,
    setSidebar,
    setToc,
    setViewMode,
    setSettingsOpen,
    setMenuOpen,
  } = useUIState();
  const { setSearch } = useSearch();
  const { wordStatsOpen, setWordStatsOpen } = useMetadata();

  useEffect(() => {
    const update = () => {
      updateResponsive(
        services.dom.getViewportWidth(),
        services.config.mobileBreakpoint,
        services.config.tocBreakpoint
      );
    };
    update();
    return services.dom.onResize(update);
  }, [services, updateResponsive]);

  useEffect(() => {
    if (!isMobile) {
      setSidebar(true);
    }
  }, [isMobile, setSidebar]);

  useTitle(currentDoc?.title || "", services.config.siteTitle);

  useSeo({
    title: currentDoc?.title,
    description: currentDoc?.description,
    slug: currentDoc?.slug,
    siteUrl: "https://your-docs-site.com",
    siteName: services.config.siteTitle,
    author: currentDoc?.author,
    date: currentDoc?.date,
    tags: currentDoc?.tags as any,
    toc: currentDoc?.toc as any,
  });

  useKeyboardShortcut(() => isMobile && toggleSidebar(), { key: "b", meta: true });
  useKeyboardShortcut(() => setSearch(true), { key: "k", meta: true });
  useKeyboardShortcut(() => setWordStatsOpen(!wordStatsOpen), { key: "g", meta: true });

  useEffect(() => {
    const unsubscribe = services.router.onPopState(() => {
      setCurrentSlug(resolveSlug());
      setSidebar(false);
    });
    return unsubscribe;
  }, [services, resolveSlug, setCurrentSlug, setSidebar]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentDoc?.slug]);

  const handleNavigate = useCallback(
    (target: string) => {
      navigate(
        target,
        isMobile,
        (v) => setSidebar(v),
        (v) => setToc(v)
      );
    },
    [navigate, isMobile, setSidebar, setToc]
  );

  const sorted = getDocsInSidebarOrder();
  const idx = sorted.findIndex((d) => d.slug === currentSlug || d.id === currentSlug);
  const prevDoc = idx > 0 ? sorted[idx - 1] : null;
  const nextDoc = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const getFirstDocSlug = useCallback((item: any): string | undefined => {
    if (!item) return undefined;
    if (item.type === "doc") return item.slug || item.id;
    if (item.type === "category" && Array.isArray(item.items)) {
      for (const subItem of item.items) {
        const slug = getFirstDocSlug(subItem);
        if (slug) return slug;
      }
    }
    return undefined;
  }, []);

  const sidebarData = sidebarFromContext ?? [];

  const breadcrumbs = useMemo(() => {
    const root = { label: deslugify(services.config.siteTitle || "Docs"), slug: "abstract" };

    const docPathResult = sidebarService.resolvePathForSlug(sidebarData, currentSlug);
    const actualDocPath = docPathResult.isOk() ? docPathResult.value : [];

    const activePath = sidebarPath;

    const intermediates = activePath.map((p) => ({
      label: deslugify(p.label),
      slug: p.link?.id ?? getFirstDocSlug(p) ?? "abstract",
    }));

    const isDescendant =
      actualDocPath.length >= activePath.length &&
      actualDocPath.slice(0, activePath.length).every((p, i) => p.label === activePath[i]?.label);

    if (currentDoc && isDescendant) {
      return [root, ...intermediates, { label: deslugify(currentDoc.title), slug: currentSlug }];
    }

    return [root, ...intermediates];
  }, [
    currentSlug,
    services.config.siteTitle,
    currentDoc,
    sidebarPath,
    sidebarService,
    getFirstDocSlug,
    sidebarData,
  ]);

  if (sidebarLoading || docsLoading) {
    return (
      <div className="site-wrapper">
        <div className="top-bar">
          <h1 className="site-title">{services.config.siteTitle}</h1>
        </div>
        <div className="loading-state">
          <div className="loading-spinner" />
          <p>Loading documentation...</p>
        </div>
      </div>
    );
  }

  if (sidebarError && !sidebarData.length) {
    return <EmptyState message={`Failed to load sidebar: ${sidebarError.message}`} />;
  }

  if (!currentDoc && !docsError) {
    return <EmptyState message="No documentation found." />;
  }

  return (
    <AppShell
      topBar={
        <TopBar
          mermaidLoading={mermaidLoading}
          onNavigate={handleNavigate}
          breadcrumbs={breadcrumbs}
        />
      }
      search={<GlobalSearch onNavigate={handleNavigate} />}
      settings={
        settingsOpen && (
          <SettingsPanel
            onClose={() => setSettingsOpen(false)}
            codeTheme={docsTheme.codeTheme}
            setCodeTheme={docsTheme.setCodeTheme as any}
            font={docsTheme.font}
            setFont={docsTheme.setFont}
            codeFontSize={docsTheme.codeFontSize}
            setCodeFontSize={docsTheme.setCodeFontSize}
          />
        )
      }
    >
      <MockupMenuPanel
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onPrint={async () => {
          await printAllDocs(sorted, services.config, services.dom);
        }}
        onToggleSettings={() => setSettingsOpen(!settingsOpen)}
        isTopDrawer={true}
      />
      <WordStatsPanel />
      <FrontmatterGraph />
      <ThreeColumnLayout
        sidebarCollapsed={!sidebarVisible}
        sidebar={
          <>
            {sidebarError && sidebarData.length > 0 && (
              <DataLoadingError
                type="sidebar"
                error={sidebarError}
                onRetry={() => window.location.reload()}
              />
            )}
            <Sidebar
              sidebar={sidebarData}
              currentSlug={currentSlug}
              onNavigate={handleNavigate}
              isMobile={isMobile}
              articlePosition={idx >= 0 ? { current: idx + 1, total: sorted.length } : undefined}
            />
          </>
        }
        content={
          <>
            <div className="view-mode-container">
              <div className={clsx("view-mode-switcher", viewMode)}>
                <div className="view-mode-slider" />
                <button type="button" className="view-mode-btn" onClick={() => setViewMode("view")}>
                  View
                </button>
                <button type="button" className="view-mode-btn" onClick={() => setViewMode("ast")}>
                  AST
                </button>
                <button type="button" className="view-mode-btn" onClick={() => setViewMode("raw")}>
                  Raw
                </button>
              </div>
            </div>

            <h1 className="sr-only">{currentDoc?.title || "Document"}</h1>

            {isTocMobile && currentDoc?.toc && currentDoc.toc.length > 0 && (
              <div className="toc-mobile-collapsible">
                <button type="button" className="toc-mobile-header" onClick={() => toggleToc()}>
                  <span>Table of Contents</span>
                  <span className={clsx("toc-chevron", { open: tocVisible })}>▾</span>
                </button>
                {tocVisible && <TableOfContents items={currentDoc.toc} />}
              </div>
            )}

            {docsError && !currentDoc ? (
              <div className="doc-content-error">
                <div className="error-container">
                  <div className="error-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <title>Error</title>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <h2 className="error-title">Failed to load document</h2>
                  <p className="error-message">{docsError.message}</p>
                  <button
                    type="button"
                    className="error-retry-btn"
                    onClick={() => window.location.reload()}
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : currentDoc ? (
              match(viewMode)
                .with("view", () => (
                  <>
                    <DocViewerWithFallback html={currentDoc.content} slug={currentDoc.slug} />
                    <ArticleFooter
                      contentHtml={currentDoc.content}
                      markdownAst={currentDoc.ast}
                      onNavigate={handleNavigate}
                      prevDoc={
                        prevDoc
                          ? {
                              title: stripTitlePrefix(prevDoc.sidebar_label || prevDoc.title),
                              slug: prevDoc.slug,
                            }
                          : undefined
                      }
                      nextDoc={
                        nextDoc
                          ? {
                              title: stripTitlePrefix(nextDoc.sidebar_label || nextDoc.title),
                              slug: nextDoc.slug,
                            }
                          : undefined
                      }
                    />
                  </>
                ))
                .with("ast", () => (
                  <div className="ast-content-viewer">
                    <ASTViewer ast={currentDoc.ast as any} />
                  </div>
                ))
                .with("raw", () => (
                  <div className="raw-content-viewer">
                    <pre className="raw-markdown">{currentDoc.rawContent}</pre>
                  </div>
                ))
                .exhaustive()
            ) : null}

            {docsError && currentDoc && (
              <div className="doc-content-warning">
                <span>Some content features may be unavailable due to loading errors.</span>
              </div>
            )}
          </>
        }
        reference={currentDoc?.toc ? <TableOfContents items={currentDoc.toc} /> : undefined}
      />
    </AppShell>
  );
}

export default MainLayout;
