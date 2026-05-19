import type { DocEntry, SidebarItem } from "@naravisuals/shared-types";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

interface GeneratedDataState {
  sidebar: SidebarItem[] | null;
  docs: DocEntry[] | null;
  errors: {
    sidebar: Error | null;
    docs: Error | null;
  };
  isLoading: boolean;
}

interface GeneratedDataContextValue extends GeneratedDataState {
  getDocBySlug: (slug: string) => DocEntry | undefined;
  getDocById: (id: string) => DocEntry | undefined;
  getSidebarItem: (slug: string) => SidebarItem | undefined;
}

const GeneratedDataContext = createContext<GeneratedDataContextValue | null>(null);

interface GeneratedDataProviderProps {
  children: ReactNode;
}

export function GeneratedDataProvider({ children }: GeneratedDataProviderProps) {
  const [state, setState] = useState<GeneratedDataState>({
    sidebar: null,
    docs: null,
    errors: { sidebar: null, docs: null },
    isLoading: true,
  });

  useEffect(() => {
    let mounted = true;
    let sidebarData: SidebarItem[] | null = null;
    let docsData: DocEntry[] | null = null;

    const loadData = async () => {
      try {
        const [sidebarModule, docsModule] = await Promise.all([
          import(/* @vite-ignore */ "../generated/sidebar.ts"),
          import(/* @vite-ignore */ "../generated/docs/index.ts"),
        ]);

        if (!mounted) return;

        sidebarData = sidebarModule.sidebarData as SidebarItem[];
        docsData = docsModule.allDocs as DocEntry[];

        setState({
          sidebar: sidebarData,
          docs: docsData,
          errors: { sidebar: null, docs: null },
          isLoading: false,
        });
      } catch (err) {
        if (!mounted) return;

        const error = err instanceof Error ? err : new Error(String(err));

        if (sidebarData === null) {
          setState((prev) => ({
            ...prev,
            errors: { ...prev.errors, sidebar: error },
            isLoading: prev.docs !== null,
          }));
        }

        if (docsData === null) {
          setState((prev) => ({
            ...prev,
            errors: { ...prev.errors, docs: error },
            isLoading: prev.sidebar !== null,
          }));
        }
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  const getDocBySlug = (slug: string): DocEntry | undefined => {
    return state.docs?.find((d) => d.slug === slug || d.id === slug);
  };

  const getDocById = (id: string): DocEntry | undefined => {
    return state.docs?.find((d) => d.id === id);
  };

  const getSidebarItem = (slug: string): SidebarItem | undefined => {
    const findInItems = (items: SidebarItem[]): SidebarItem | undefined => {
      for (const item of items) {
        if ((item as any).slug === slug || (item as any).id === slug) {
          return item;
        }
        if ((item as any).items) {
          const found = findInItems((item as any).items);
          if (found) return found;
        }
      }
      return undefined;
    };
    return state.sidebar ? findInItems(state.sidebar) : undefined;
  };

  const value: GeneratedDataContextValue = {
    ...state,
    getDocBySlug,
    getDocById,
    getSidebarItem,
  };

  return <GeneratedDataContext.Provider value={value}>{children}</GeneratedDataContext.Provider>;
}

export function useGeneratedData(): GeneratedDataContextValue {
  const context = useContext(GeneratedDataContext);
  if (!context) {
    throw new Error("useGeneratedData must be used within a GeneratedDataProvider");
  }
  return context;
}

export function useSidebar(): {
  sidebar: SidebarItem[] | null;
  error: Error | null;
  isLoading: boolean;
} {
  const { sidebar, errors, isLoading } = useGeneratedData();
  return {
    sidebar,
    error: errors.sidebar,
    isLoading,
  };
}

export function useDocs(): {
  docs: DocEntry[] | null;
  error: Error | null;
  isLoading: boolean;
  getDocBySlug: (slug: string) => DocEntry | undefined;
  getDocById: (id: string) => DocEntry | undefined;
} {
  const { docs, errors, isLoading, getDocBySlug, getDocById } = useGeneratedData();
  return {
    docs,
    error: errors.docs,
    isLoading,
    getDocBySlug,
    getDocById,
  };
}
