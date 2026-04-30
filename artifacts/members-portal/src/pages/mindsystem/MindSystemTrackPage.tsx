import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { MINDSYSTEM_COURSE } from "@/lib/data";
import { ChevronLeft } from "lucide-react";

export default function MindSystemTrackPage() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  if (!family) return null;

  const TRACK_COLORS: Record<string, { from: string; to: string }> = {
    athlete: { from: "#982FF7", to: "#2B8BF5" },
    parent:  { from: "#FF2D78", to: "#982FF7" },
  };

  return (
    <Layout>
      <div
        className="max-w-4xl mx-auto px-4 md:px-8 py-10"
        style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}
      >
        {/* Back */}
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-2 mb-8"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: 0 }}
        >
          <ChevronLeft size={15} /> Back to Library
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: 36, height: 3, background: "linear-gradient(90deg, #982FF7, #FF2D78)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>MindSystem</span>
          </div>
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: "0.5rem" }}>
            Choose your track.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem" }}>
            Each track has the same 7 sections — Athlete content for your player, Parent content for you.
          </p>
        </div>

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MINDSYSTEM_COURSE.tracks.map((track) => {
            const colors = TRACK_COLORS[track.id] ?? { from: "#982FF7", to: "#FF2D78" };
            return (
              <div
                key={track.id}
                onClick={() => navigate(`/courses/mindsystem/${track.id}`)}
                className="relative rounded-xl overflow-hidden cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                  padding: "3rem 2rem",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Track
                  </p>
                  <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "2.5rem", lineHeight: 1.1, marginBottom: "0.75rem" }}>
                    {track.title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
                    {track.sections.length} sections →
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
