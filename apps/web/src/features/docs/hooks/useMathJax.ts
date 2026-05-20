import { type RefObject, useCallback } from "react";
import { useServices } from "../../../services";

export function useMathJax(ref: RefObject<HTMLDivElement | null>, slug: string) {
  const { events } = useServices();

  const renderMath = useCallback(async () => {
    if (typeof window === "undefined" || !(window as any).MathJax) return;
    try {
      await (window as any).MathJax.typesetPromise([ref.current]);
      events.emit("mathjax:rendered", { slug });
    } catch (e) {
      console.warn("MathJax typeset failed", e);
    }
  }, [ref, events, slug]);

  return { renderMath };
}
