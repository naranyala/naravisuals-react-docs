import { FrontmatterGraph, WordStatsPanel } from "../../features/metadata";
import { Sidebar } from "../../features/navigation";

interface LayoutSidebarAreaProps {
  sidebarData: any;
  currentSlug: string;
  onNavigate: (slug: string) => void;
  isMobile: boolean;
  articlePosition?: { current: number; total: number };
}

export function LayoutSidebarArea({
  sidebarData,
  currentSlug,
  onNavigate,
  isMobile,
  articlePosition,
}: LayoutSidebarAreaProps) {
  return (
    <>
      <Sidebar
        sidebar={sidebarData}
        currentSlug={currentSlug}
        onNavigate={onNavigate}
        isMobile={isMobile}
        articlePosition={articlePosition}
      />

      <WordStatsPanel />
      <FrontmatterGraph />
    </>
  );
}
