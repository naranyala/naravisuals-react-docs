import { type RefObject, useCallback } from "react";
import { useServices } from "../../../services";

export function useMermaid(ref: RefObject<HTMLDivElement | null>, slug: string) {
  const { events } = useServices();

  const handleDownload = useCallback(
    async (target: SVGSVGElement | HTMLElement, filename: string, format: "svg" | "jpg") => {
      if (format === "svg") {
        const svgEl = target as SVGSVGElement;
        const svgData = new XMLSerializer().serializeToString(svgEl);
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = `${filename}.svg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(svgUrl);
      } else {
        const { default: html2canvas } = await import("html2canvas");
        const canvas = await html2canvas(target as HTMLElement, {
          backgroundColor: "#ffffff",
          scale: 2,
          useCORS: true,
        });
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg", 0.9);
        link.download = `${filename}.jpg`;
        link.click();
      }
    },
    []
  );

  const handleZoom = useCallback((svgHtml: string) => {
    const overlay = document.createElement("div");
    overlay.className = "mermaid-fullscreen-overlay";
    overlay.innerHTML = `
      <div class="mermaid-fullscreen-header">
        <span class="mermaid-fullscreen-title">Diagram Preview</span>
        <div class="mermaid-fullscreen-controls">
          <button class="mermaid-fullscreen-zoom-btn" data-action="zoom-out" title="Zoom Out">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
          <span class="mermaid-zoom-level">100%</span>
          <button class="mermaid-fullscreen-zoom-btn" data-action="zoom-in" title="Zoom In">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
        </div>
        <button class="mermaid-fullscreen-close">
          <span>Close Preview</span>
        </button>
      </div>
      <div class="mermaid-fullscreen-content">
        <div class="mermaid-fullscreen-viewport">
          <div class="mermaid-diagram-container">${svgHtml}</div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const container = overlay.querySelector<HTMLElement>(".mermaid-diagram-container");
    const content = overlay.querySelector<HTMLElement>(".mermaid-fullscreen-content");

    if (!container || !content) {
      document.body.removeChild(overlay);
      document.body.style.overflow = "";
      return;
    }

    let scale = 1;
    let pointX = 0;
    let pointY = 0;
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    const updateTransform = () => {
      container.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
      const zoomLevelEl = overlay.querySelector(".mermaid-zoom-level");
      if (zoomLevelEl) zoomLevelEl.textContent = `${Math.round(scale * 100)}%`;
    };

    overlay.querySelector('[data-action="zoom-in"]')?.addEventListener("click", (e) => {
      e.stopPropagation();
      scale = Math.min(scale * 1.2, 8);
      updateTransform();
    });

    overlay.querySelector('[data-action="zoom-out"]')?.addEventListener("click", (e) => {
      e.stopPropagation();
      scale = Math.max(scale / 1.2, 0.1);
      updateTransform();
    });

    overlay.querySelector(".mermaid-fullscreen-close")?.addEventListener("click", () => {
      document.body.removeChild(overlay);
      document.body.style.overflow = "";
    });

    content.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX - pointX;
      startY = e.clientY - pointY;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      pointX = e.clientX - startX;
      pointY = e.clientY - startY;
      updateTransform();
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    content.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale = Math.min(Math.max(scale * delta, 0.1), 10);
        updateTransform();
      },
      { passive: false }
    );

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.body.removeChild(overlay);
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      }
    };
    window.addEventListener("keydown", handleEsc);
  }, []);

  const attachMermaidActions = useCallback(
    (container: HTMLElement, id: string, source: string) => {
      const zoomBtn = container.querySelector(".mermaid-zoom-btn");
      const downloadSvgBtn = container.querySelector(".mermaid-download-svg-btn");
      const downloadJpgBtn = container.querySelector(".mermaid-download-jpg-btn");
      const codeBtn = container.querySelector(".mermaid-code-btn");
      const sourceContainer = container.querySelector<HTMLElement>(".mermaid-source-container");
      const copyBtn = container.querySelector(".mermaid-source-copy-btn");

      zoomBtn?.addEventListener("click", () => {
        const diagramEl = container.querySelector(".mermaid");
        const svgEl = diagramEl?.querySelector("svg");
        if (svgEl) {
          handleZoom(svgEl.outerHTML);
          container.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      downloadSvgBtn?.addEventListener("click", () => {
        const diagramEl = container.querySelector(".mermaid");
        const svgEl = diagramEl?.querySelector("svg");
        if (svgEl instanceof SVGSVGElement) {
          handleDownload(svgEl, `diagram-${id}`, "svg");
          container.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      downloadJpgBtn?.addEventListener("click", () => {
        const diagramEl = container.querySelector(".mermaid");
        if (diagramEl) {
          handleDownload(diagramEl as HTMLElement, `diagram-${id}`, "jpg");
          container.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      codeBtn?.addEventListener("click", () => {
        if (sourceContainer) {
          const isHidden = sourceContainer.style.display === "none";
          sourceContainer.style.display = isHidden ? "block" : "none";
          codeBtn.classList.toggle("active", isHidden);
          if (isHidden) {
            setTimeout(() => {
              const mermaidEl = container.querySelector(".mermaid");
              const diagramHeight = mermaidEl ? (mermaidEl as HTMLElement).offsetHeight : 0;
              const elementPosition = sourceContainer.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - diagramHeight / 2;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }, 50);
          }
        }
      });

      copyBtn?.addEventListener("click", () => {
        navigator.clipboard.writeText(source).then(() => {
          copyBtn.textContent = "Copied!";
          copyBtn.classList.add("copied");
          setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
          }, 2000);
        });
      });
    },
    [handleDownload, handleZoom]
  );

  const renderMermaid = useCallback(async () => {
    const diagrams = ref.current?.querySelectorAll<HTMLElement>(".mermaid-diagram");
    if (!diagrams || diagrams.length === 0) return;

    const hasUnprocessed = Array.from(diagrams).some((w) => w.dataset.processed !== "true");
    if (!hasUnprocessed) return;

    events.emit("mermaid:loading", true);

    try {
      let mermaid: any;
      if ((window as any).mermaid) {
        mermaid = (window as any).mermaid;
      } else {
        const m = await import("mermaid");
        mermaid = m.default;
      }

      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
        fontFamily: "var(--font-family, sans-serif)",
        flowchart: { htmlLabels: true, useMaxWidth: false, curve: "basis" },
        sequence: { useMaxWidth: false, htmlLabels: true },
      });

      for (const w of Array.from(diagrams)) {
        if (w.dataset.processed === "true") continue;

        const mermaidEl = w.querySelector<HTMLElement>(".mermaid");
        if (!mermaidEl) continue;

        mermaidEl.style.visibility = "hidden";
        mermaidEl.style.display = "block";

        let source =
          w.dataset.mermaidSource ||
          mermaidEl.getAttribute("data-source") ||
          mermaidEl.textContent?.trim() ||
          "";

        if (source.includes("&")) {
          const decoder = document.createElement("div");
          decoder.innerHTML = source;
          source = decoder.textContent || source;
        }

        if (!source) continue;

        try {
          const id = `d${Math.random().toString(36).slice(2, 9)}`;
          const { svg } = await mermaid.render(id, source, mermaidEl);
          mermaidEl.innerHTML = svg;
          mermaidEl.style.visibility = "visible";
          w.dataset.processed = "true";
          attachMermaidActions(w, id, source);
          events.emit("mermaid:rendered", { slug, count: 1 });
        } catch (e) {
          console.error("Mermaid render failed", e);
          mermaidEl.innerHTML = `<div class="mermaid-error">
            <div class="mermaid-error-title">Mermaid Render Error</div>
            <pre class="mermaid-error-msg">${e instanceof Error ? e.message : String(e)}</pre>
          </div>`;
          mermaidEl.style.visibility = "visible";
        }
      }
    } finally {
      events.emit("mermaid:loading", false);
    }
  }, [ref, events, slug, attachMermaidActions]);

  return { renderMermaid };
}
