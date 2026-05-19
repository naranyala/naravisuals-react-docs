import { memo, type ReactNode, useRef, useState } from "react";
import { useDocumentEnhancer } from "./hooks/useDocumentEnhancer";

interface DocViewerProps {
  html: string;
  slug: string;
}

interface ErrorState {
  hasError: boolean;
  message: string;
  rawHtml?: string;
}

function ErrorFallback({
  message,
  onRetry,
  children,
}: {
  message: string;
  onRetry: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="doc-content-error">
      <div className="error-container">
        <div className="error-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <title>Error</title>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="error-title">Failed to render document</h2>
        <p className="error-message">{message}</p>
        {children && <div className="error-details">{children}</div>}
        <button type="button" className="error-retry-btn" onClick={onRetry}>
          Retry
        </button>
      </div>
    </div>
  );
}

export const DocViewer = memo(function DocViewer({ html, slug }: DocViewerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [errorState, setErrorState] = useState<ErrorState | null>(null);

  useDocumentEnhancer(ref, slug, html, (error) => {
    setErrorState({
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
      rawHtml: html,
    });
  });

  const handleRetry = () => {
    setErrorState(null);
  };

  if (errorState?.hasError) {
    return (
      <ErrorFallback message={errorState.message} onRetry={handleRetry}>
        <details className="error-raw-toggle">
          <summary>Show raw content</summary>
          <pre className="error-raw-content">{errorState.rawHtml || html}</pre>
        </details>
      </ErrorFallback>
    );
  }

  return <div ref={ref} className="doc-content" dangerouslySetInnerHTML={{ __html: html }} />;
});

export function DocViewerWithFallback({ html, slug }: DocViewerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error | null>(null);

  useDocumentEnhancer(ref, slug, html, (err) => {
    console.error(`DocViewer error for "${slug}":`, err);
    setError(err instanceof Error ? err : new Error(String(err)));
  });

  if (error) {
    return (
      <ErrorFallback
        message={`Failed to render content for "${slug}"`}
        onRetry={() => setError(null)}
      >
        <p className="error-info">
          The document content failed to enhance properly. The raw content is still available below.
        </p>
        <details className="error-raw-toggle">
          <summary>Show raw content</summary>
          <pre className="error-raw-content">{html}</pre>
        </details>
      </ErrorFallback>
    );
  }

  return <div ref={ref} className="doc-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
