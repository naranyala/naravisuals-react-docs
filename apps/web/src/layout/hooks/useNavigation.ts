import type { DocEntry, SidebarItem } from "@naravisuals/shared-types";
import { useCallback, useEffect, useState } from "react";
import { useDocState } from "../../core/store";
import type { ServiceContainer } from "../../services";

export function useNavigation(services: ServiceContainer, sidebarItems: SidebarItem[] = []) {
  const { setDoc } = useDocState();
  const [docsError, setDocsError] = useState<Error | null>(null);
  const [docsLoading, setDocsLoading] = useState(false);
  const [docs, setDocs] = useState<DocEntry[]>([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    setDocsLoading(true);
    setDocsError(null);

    const loadDocs = async () => {
      try {
        const docsModule = await import(/* @vite-ignore */ "../../generated/docs/index.ts");
        if (!mounted) return;
        setDocs(docsModule.allDocs as DocEntry[]);
        setDocsLoading(false);
      } catch (err) {
        if (!mounted) return;
        setDocsError(err instanceof Error ? err : new Error(String(err)));
        setDocsLoading(false);
      }
    };

    loadDocs();

    return () => {
      mounted = false;
    };
  }, [retryCount]);

  const resolveSlug = useCallback((): string => {
    const path = services.router.getCurrentPath();
    if (path === "/" || path === "") return "abstract";
    if (path === `/${services.config.routes.docs}` || path === `/${services.config.routes.docs}/`) {
      return "abstract";
    }
    if (path.startsWith(`/${services.config.routes.docs}/`)) {
      return path.replace(`/${services.config.routes.docs}/`, "");
    }
    return docs[0]?.slug || "abstract";
  }, [services.router, services.config.routes.docs, docs]);

  const [currentSlug, setCurrentSlug] = useState(resolveSlug);
  const currentDoc = docs.find((d) => d.slug === currentSlug || d.id === currentSlug) ?? null;

  useEffect(() => {
    if (currentDoc) {
      setDoc(currentDoc as any);
    }
  }, [currentDoc, setDoc]);

  const navigate = (
    target: string,
    isMobile: boolean,
    setSidebarVisible: (v: boolean) => void,
    setTocVisible: (v: boolean) => void
  ) => {
    const [slug] = target.split("#");
    if (!slug) return;

    services.events.emit("nav:navigate", { target, isMobile });

    if (slug === "/") {
      setCurrentSlug("abstract");
      services.router.pushState({}, "", "/");
    } else {
      setCurrentSlug(slug);
      services.router.pushState(
        {},
        "",
        services.router.buildUrl(services.config.routes.docs, target)
      );
    }
    setSidebarVisible(!isMobile);
    setTocVisible(false);
  };

  useEffect(() => {
    services.events.emit("nav:resolved", { slug: currentSlug });
  }, [currentSlug, services.events]);

  const getDocsInSidebarOrder = useCallback((): DocEntry[] => {
    const ordered: DocEntry[] = [];

    const traverse = (items: SidebarItem[]) => {
      for (const item of items) {
        if (item.type === "doc") {
          const doc = docs.find((d) => d.slug === item.slug || d.id === item.id);
          if (doc && !ordered.find((d) => d.slug === doc.slug)) {
            ordered.push(doc);
          }
        } else if (item.type === "category") {
          if (item.link) {
            const linkDoc = docs.find((d) => d.slug === item.link?.id || d.id === item.link?.id);
            if (linkDoc && !ordered.find((d) => d.slug === linkDoc.slug)) {
              ordered.push(linkDoc);
            }
          }
          if (item.items) {
            traverse(item.items);
          }
        }
      }
    };

    traverse(sidebarItems.length > 0 ? sidebarItems : []);
    return ordered;
  }, [docs, sidebarItems]);

  useEffect(() => {
    const unsubscribe = services.router.onPopState(() => {
      setCurrentSlug(resolveSlug());
    });
    return unsubscribe;
  }, [services.router.onPopState, resolveSlug]);

  return {
    currentSlug,
    currentDoc,
    navigate,
    getDocsInSidebarOrder,
    setCurrentSlug,
    resolveSlug,
    docsError,
    docsLoading,
    retryDocs: () => setRetryCount((c) => c + 1),
  };
}
