import { type RefObject, useCallback } from "react";

export function useTableEnhancer(ref: RefObject<HTMLDivElement | null>) {
  const handleTableZoom = useCallback((container: HTMLElement) => {
    const overlay = document.createElement("div");
    overlay.className = "mermaid-fullscreen-overlay table-zoom-overlay";
    overlay.innerHTML = `
      <div class="mermaid-fullscreen-header">
        <span class="mermaid-fullscreen-title">Table Preview</span>
        <div class="mermaid-fullscreen-controls"></div>
        <button class="mermaid-fullscreen-close">
          <span>Close Preview</span>
        </button>
      </div>
      <div class="mermaid-fullscreen-content table-zoom-content">
        <div class="mermaid-fullscreen-viewport table-zoom-viewport">
          <div class="mermaid-diagram-container table-zoom-container"></div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const targetContainer = overlay.querySelector<HTMLElement>(".mermaid-diagram-container");
    if (targetContainer) {
      const clone = container.cloneNode(true) as HTMLElement;
      clone.style.width = "max-content";
      clone.style.overflow = "visible";
      clone.style.margin = "0";

      const table = clone.querySelector("table");
      if (table) {
        table.style.width = "max-content";
      }
      targetContainer.appendChild(clone);
    }

    overlay.querySelector(".mermaid-fullscreen-close")?.addEventListener("click", () => {
      document.body.removeChild(overlay);
      document.body.style.overflow = "";
    });

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.body.removeChild(overlay);
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      }
    };
    window.addEventListener("keydown", handleEsc);
  }, []);

  const handleTableDownload = useCallback(async (container: HTMLElement, btn: HTMLElement) => {
    const originalContent = btn.innerHTML;
    try {
      (btn as HTMLButtonElement).disabled = true;
      btn.innerHTML = `<div class="mermaid-spinner"></div>`;

      const tempWrapper = document.createElement("div");
      tempWrapper.style.position = "absolute";
      tempWrapper.style.left = "-9999px";
      tempWrapper.style.top = "0";
      tempWrapper.style.width = "auto";

      const clone = container.cloneNode(true) as HTMLElement;
      clone.style.width = "max-content";
      clone.style.overflow = "visible";

      const table = clone.querySelector("table");
      if (table) {
        table.style.width = "max-content";
      }

      tempWrapper.appendChild(clone);
      document.body.appendChild(tempWrapper);

      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(clone, {
        backgroundColor: "#ffffff",
        logging: false,
        scale: 2,
        useCORS: true,
      });

      document.body.removeChild(tempWrapper);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `table-${Math.random().toString(36).slice(2, 9)}.png`;
      link.click();
    } catch (e) {
      console.error("Table download failed", e);
    } finally {
      (btn as HTMLButtonElement).disabled = false;
      btn.innerHTML = originalContent;
    }
  }, []);

  const renderTables = useCallback(() => {
    const containers = ref.current?.querySelectorAll<HTMLElement>(".table-container");
    if (!containers || containers.length === 0) return;

    for (const container of Array.from(containers)) {
      if (container.dataset.enhanced === "true") continue;

      let title = "Table";
      let prev = container.previousElementSibling;
      while (prev) {
        if (/^H[1-6]$/.test(prev.tagName)) {
          title = (prev.textContent?.trim() || "Table").replace(/#\s*$/, "");
          break;
        }
        prev = prev.previousElementSibling;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "table-enhanced-wrapper";

      const titlebar = document.createElement("div");
      titlebar.className = "table-enhanced-titlebar";

      const actions = document.createElement("div");
      actions.className = "table-enhanced-actions";

      const zoomBtn = document.createElement("button");
      zoomBtn.className = "table-enhanced-btn";
      zoomBtn.title = "Fullscreen";
      zoomBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`;
      zoomBtn.onclick = () => handleTableZoom(container);

      const downloadBtn = document.createElement("button");
      downloadBtn.className = "table-enhanced-btn";
      downloadBtn.title = "Download as Image";
      downloadBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;
      downloadBtn.onclick = (e) => handleTableDownload(container, e.currentTarget as HTMLElement);

      actions.appendChild(zoomBtn);
      actions.appendChild(downloadBtn);

      const titleEl = document.createElement("span");
      titleEl.className = "table-enhanced-title";
      titleEl.textContent = title;

      titlebar.appendChild(titleEl);
      titlebar.appendChild(actions);

      const contentDiv = document.createElement("div");
      contentDiv.className = "table-enhanced-container";

      wrapper.appendChild(titlebar);
      wrapper.appendChild(contentDiv);

      if (container.parentNode) {
        container.parentNode.insertBefore(wrapper, container);
        contentDiv.appendChild(container);
      }

      container.dataset.enhanced = "true";
    }
  }, [ref, handleTableDownload, handleTableZoom]);

  return { renderTables };
}
