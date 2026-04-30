import { X } from "lucide-react";

// TODO: replace with GHL Courtside landing page URL
const COURTSIDE_UPGRADE_LINK = "TODO_COURTSIDE_GHL_LINK";
// TODO: replace with GHL MindSystem info page link
const MINDSYSTEM_INFO_LINK = "TODO_MINDSYSTEM_INFO_GHL_LINK";

interface UpgradeModalProps {
  onClose: () => void;
  headline?: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function UpgradeModal({
  onClose,
  headline = "This section is part of Courtside Conversations.",
  body = "Upgrade to Courtside Conversations to unlock all 7 training sections, plus new content added every month.",
  ctaText = "Upgrade to Courtside →",
  ctaLink = COURTSIDE_UPGRADE_LINK,
}: UpgradeModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-lg p-8"
        style={{
          backgroundColor: "#111",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <X size={18} />
        </button>

        {/* Accent bar */}
        <div style={{ width: 36, height: 3, backgroundColor: "#FF2D78", marginBottom: "1.5rem" }} />

        <h2
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            color: "#fff",
            lineHeight: 1.3,
          }}
        >
          {headline}
        </h2>

        <p
          className="mb-8"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}
        >
          {body}
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            style={{
              backgroundColor: "#FF2D78",
              color: "#fff",
              padding: "0.875rem 2rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textDecoration: "none",
            }}
          >
            {ctaText}
          </a>

          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.5)",
              padding: "0.75rem 2rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              cursor: "pointer",
            }}
          >
            Not right now
          </button>
        </div>
      </div>
    </div>
  );
}

// Preset: MindSystem locked modal
export const MINDSYSTEM_MODAL_PROPS = {
  headline: "This is MindSystem territory.",
  body: "The MindSystem video library is available to MindSystem Independent, Supported, and Inner Circle members. This is where you learn to use your journals and navigate the full MAZE model.",
  ctaText: "Learn More About MindSystem →",
  ctaLink: MINDSYSTEM_INFO_LINK,
};
