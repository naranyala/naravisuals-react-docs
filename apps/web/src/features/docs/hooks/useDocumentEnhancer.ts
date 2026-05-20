import { type RefObject, useEffect } from "react";
import { useMathJax } from "./useMathJax";
import { useMermaid } from "./useMermaid";
import { useTableEnhancer } from "./useTableEnhancer";

/**
 * useDocumentEnhancer
 *
 * Orchestrates late-binding enhancements like Mermaid, MathJax, and Tables
 * on the rendered HTML content.
 */
export function useDocumentEnhancer(
  ref: RefObject<HTMLDivElement | null>,
  slug: string,
  _html: string,
  _onError?: (error: Error) => void
) {
  const { renderMermaid } = useMermaid(ref, slug);
  const { renderMath } = useMathJax(ref, slug);
  const { renderTables } = useTableEnhancer(ref);

  useEffect(() => {
    let mounted = true;

    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        if (mounted) {
          renderMermaid();
          renderTables();
          renderMath();
        }
      });
    }, 500);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [renderMermaid, renderTables, renderMath]);
}
