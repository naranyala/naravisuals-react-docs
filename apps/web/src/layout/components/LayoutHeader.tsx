import { clsx } from "clsx";
import { TopBar } from "./TopBar";

interface LayoutHeaderProps {
  breadcrumbs: any[];
  onNavigate: (target: string) => void;
  mermaidLoading: boolean;
  viewMode: string;
  setViewMode: (mode: any) => void;
}

export function LayoutHeader({
  breadcrumbs,
  onNavigate,
  mermaidLoading,
  viewMode,
  setViewMode,
}: LayoutHeaderProps) {
  return (
    <>
      <TopBar breadcrumbs={breadcrumbs} onNavigate={onNavigate} mermaidLoading={mermaidLoading} />

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
    </>
  );
}
