import { useParams, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { MINDSYSTEM_COURSE, type MSSection } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SECTION_COLORS = [
  { from: "#982FF7", to: "#2B8BF5" },
  { from: "#2B8BF5", to: "#00D4C8" },
  { from: "#00D4C8", to: "#982FF7" },
  { from: "#FF2D78", to: "#982FF7" },
  { from: "#982FF7", to: "#FF2D78" },
  { from: "#2B8BF5", to: "#982FF7" },
  { from: "#FF2D78", to: "#2B8BF5" },
];

export default function MindSystemSectionsPage() {
  const { family } = useAuth();
  const { track } = useParams<{ track: string }>();
  const [, navigate] = useLocation();
  if (!family) return null;

  const trackData = MINDSYSTEM_COURSE.tracks.find((t) => t.id === track);
  if (!trackData) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}>
          Track not found.
        </div>
      </Layout>
    );
  }

  function getSectionRoute(section: MSSection) {
    return `/courses/mindsystem/${track}/${section.id}`;
  }

  return (
    <Layout>
      <div
        className="max-w-4xl mx-auto px-4 md:px-8 py-10"
        style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}
      >
        {/* Back */}
        <button
          onClick={() => navigate("/courses/mindsystem")}
          className="flex items-center gap-2 mb-8"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: 0 }}
        >
          <ChevronLeft size={15} /> MindSystem
        </button>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
            MindSystem — {trackData.title} Track
          </p>
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            Choose a section.
          </h1>
        </div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trackData.sections.map((section, i) => {
            const colors = SECTION_COLORS[i % SECTION_COLORS.length];
            const lessonCount = section.subSections
              ? section.subSections.length
              : (section.lessons?.length ?? 0);
            const label = section.subSections ? "sub-sections" : "lessons";

            return (
              <div
                key={section.id}
                onClick={() => navigate(getSectionRoute(section))}
                className="flex items-center justify-between px-5 py-4 rounded-lg cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${colors.from}22, ${colors.to}22)`,
                  border: `1px solid ${colors.from}40`,
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; }}
              >
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: colors.from }}>
                    Step {i + 1}
                  </p>
                  <p className="font-bold uppercase tracking-wide" style={{ fontSize: "0.95rem", color: "#fff" }}>
                    {section.title}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: "0.2rem" }}>
                    {lessonCount} {label}
                  </p>
                </div>
                <ChevronRight size={16} style={{ color: colors.from, flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
