import { clsx } from "clsx";
import { useEffect, useMemo, useState } from "react";
import { match } from "ts-pattern";

import { useDocState, useUIState } from "../core/store";
import { stripTitlePrefix } from "../core/utils";
import { ASTViewer } from "../features/ast-viewer";
import { ArticleFooter } from "../features/docs/ArticleFooter";
import { DocViewerWithFallback } from "../features/docs/DocViewer";
import { TableOfContents } from "../features/navigation/TableOfContents";
import { useSeo } from "../features/seo";
import { useServices } from "../services";
import { AppShell } from "./components/AppShell";
import { LayoutHeader } from "./components/LayoutHeader";
import { LayoutSidebarArea } from "./components/LayoutSidebarArea";
import { MockupMenuPanel } from "./components/MockupMenuPanel";
import { SplashScreen } from "./components/SplashScreen";
import { ThreeColumnLayout } from "./components/ThreeColumnLayout";

export function MainLayout() {
  const services = useServices();
  const { currentDoc, setDoc } = useDocState();
  const {
    sidebarVisible,
    tocVisible,
    menuOpen,
    viewMode,
    isMobile,
    setMenuOpen,
    setViewMode,
    toggleToc,
    updateResponsive,
  } = useUIState();

  const [docsError] = useState<Error | null>(null);
  const [mermaidLoading, setMermaidLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Responsive synchronization
  useEffect(() => {
    const handleResize = () => {
      updateResponsive(window.innerWidth, 768, 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateResponsive]);

  // Router synchronization
  useEffect(() => {
    const syncDoc = () => {
      const path = services.router.getCurrentPath();
      const slug = path.startsWith(`/${services.config.routes.docs}/`)
        ? path.replace(`/${services.config.routes.docs}/`, "")
        : path === "/"
        ? "abstract"
        : "";

      const doc = services.docs.getDocBySlug(slug);
      if (doc) {
        setDoc(doc);
      }
    };

    syncDoc();
    const unsubscribe = services.router.onPopState(syncDoc);
    return () => unsubscribe();
  }, [services, setDoc]);

  // Mermaid loading event
  useEffect(() => {
    const sub = services.events.on("mermaid:loading", (loading) => {
      setMermaidLoading(loading);
    });
    return () => sub();
  }, [services.events]);

  // Initial load delay for splash screen
  useEffect(() => {
    const delay = process.env.NODE_ENV === "test" ? 0 : 1200;
    const timer = setTimeout(() => setShowSplash(false), delay);
    return () => clearTimeout(timer);
  }, []);

  // SEO Synchronization
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

  // Navigation Logic
  const handleNavigate = (slug: string) => {
    const doc = services.docs.getDocBySlug(slug);
    if (doc) {
      setDoc(doc);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Content Memoization
  const { sidebarData, breadcrumbs, prevDoc, nextDoc, sorted, idx } = useMemo(() => {
    const tree = services.docs.getDocTree();
    const sortedDocs = services.docs.getSortedDocs();
    const currentIdx = sortedDocs.findIndex((d) => d.slug === currentDoc?.slug);

    const bcs = [
      { label: services.config.siteTitle || "Home", slug: "" },
      ...(currentDoc?.category ? [{ label: currentDoc.category }] : []),
      { label: stripTitlePrefix(currentDoc?.title || ""), slug: currentDoc?.slug },
    ];

    return {
      sidebarData: tree,
      breadcrumbs: bcs,
      prevDoc: currentIdx > 0 ? sortedDocs[currentIdx - 1] : null,
      nextDoc: currentIdx < sortedDocs.length - 1 ? sortedDocs[currentIdx + 1] : null,
      sorted: sortedDocs,
      idx: currentIdx,
    };
  }, [services.docs, currentDoc]);

  if (showSplash || (!currentDoc && !docsError)) {
    return <SplashScreen title={services.config.siteTitle} />;
  }

  return (
    <AppShell topBar={null} search={null} settings={null}>
      <ThreeColumnLayout
        sidebarCollapsed={!sidebarVisible}
        menuOpen={menuOpen}
        menu={
          <MockupMenuPanel
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onPrint={handlePrint}
            onToggleSettings={() => {}}
            isSidebar
          />
        }
        sidebar={
          <LayoutSidebarArea
            sidebarData={sidebarData}
            currentSlug={currentDoc?.slug || ""}
            onNavigate={handleNavigate}
            isMobile={isMobile}
            articlePosition={idx >= 0 ? { current: idx + 1, total: sorted.length } : undefined}
          />
        }
        content={
          <>
            <LayoutHeader
              breadcrumbs={breadcrumbs}
              onNavigate={handleNavigate}
              mermaidLoading={mermaidLoading}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />

            <h1 className="sr-only">{currentDoc?.title || "Document"}</h1>

            {currentDoc?.toc && currentDoc.toc.length > 0 && (
              <div className="toc-mobile-collapsible">
                <button type="button" className="toc-mobile-header" onClick={() => toggleToc()}>
                  <span>Table of Contents</span>
                  <span className={clsx("toc-chevron", { open: tocVisible })}>▾</span>
                </button>
                {tocVisible && <TableOfContents items={currentDoc.toc} />}
              </div>
            )}

            {currentDoc
              ? match(viewMode)
                  .with("view", () => (
                    <>
                      <DocViewerWithFallback html={currentDoc.content} slug={currentDoc.slug} />
                      <ArticleFooter
                        contentHtml={currentDoc.content}
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
              : null}
          </>
        }
        reference={undefined}
      />
    </AppShell>
  );
}
