import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PINK = "#FF2D78";
const MUTED = "#A0A0A0";

interface Props {
  pdfUrl: string;
}

export default function PdfSlideViewer({ pdfUrl }: Props) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const observer = new ResizeObserver(entries => {
        setContainerWidth(entries[0].contentRect.width);
      });
      observer.observe(node);
      setContainerWidth(node.getBoundingClientRect().width);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function prev() {
    setCurrentPage(p => Math.max(1, p - 1));
  }

  function next() {
    setCurrentPage(p => Math.min(numPages, p + 1));
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
  }

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKey}
      tabIndex={0}
      style={{ outline: "none" }}
    >
      {/* Slide container */}
      <div
        className="rounded-lg overflow-hidden relative"
        style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}
      >
        {loading && (
          <div
            className="flex items-center justify-center"
            style={{ height: "400px" }}
          >
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Loading slides...
            </p>
          </div>
        )}

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.error("PDF load error:", err)}
          loading=""
        >
          <Page
            pageNumber={currentPage}
            width={containerWidth > 0 ? containerWidth : 800}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* Navigation bar */}
      {numPages > 0 && (
        <div className="flex items-center justify-between mt-4 px-1">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={currentPage === 1}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              backgroundColor: currentPage === 1 ? "#1A1A1A" : PINK,
              color: currentPage === 1 ? "rgba(255,255,255,0.25)" : "#fff",
              border: "1px solid " + (currentPage === 1 ? "#2A2A2A" : PINK),
              borderRadius: "4px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              transition: "all 0.15s",
            }}
          >
            ← Prev
          </button>

          {/* Slide counter + dot strip */}
          <div className="flex flex-col items-center gap-2">
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.8rem", color: MUTED, letterSpacing: "0.1em" }}>
              {currentPage} / {numPages}
            </p>
            {/* Dot indicators — only show up to 20 dots */}
            {numPages <= 20 && (
              <div className="flex gap-1 flex-wrap justify-center" style={{ maxWidth: "200px" }}>
                {Array.from({ length: numPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: i + 1 === currentPage ? PINK : "#2A2A2A",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "background-color 0.15s",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={currentPage === numPages}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              backgroundColor: currentPage === numPages ? "#1A1A1A" : PINK,
              color: currentPage === numPages ? "rgba(255,255,255,0.25)" : "#fff",
              border: "1px solid " + (currentPage === numPages ? "#2A2A2A" : PINK),
              borderRadius: "4px",
              cursor: currentPage === numPages ? "not-allowed" : "pointer",
              transition: "all 0.15s",
            }}
          >
            Next →
          </button>
        </div>
      )}

      {/* Keyboard hint */}
      {numPages > 0 && (
        <p className="text-center mt-3" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
          Use arrow keys to navigate
        </p>
      )}
    </div>
  );
}
