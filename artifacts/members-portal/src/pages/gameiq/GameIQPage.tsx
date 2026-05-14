import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { hasTierAccess } from "@/lib/data";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";

const TEAL = "#00D4C8";
const BLUE = "#2B8BF5";
const PURPLE = "#982FF7";

const CATEGORIES = [
  {
    id: "position-series",
    title: "Position Series",
    description: "The mental and physical demands of every position — for athletes and parents.",
    path: "/position-series",
    gradient: { from: TEAL, to: BLUE },
  },
];

export default function GameIQPage() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  if (!family) return null;

  const hasAccess = hasTierAccess(family.tier, "courtside");

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
          style={{
            background: "none", border: "none",
            color: "rgba(255,255,255,0.4)", cursor: "pointer",
            fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem",
            textTransform: "uppercase", letterSpacing: "0.1em", padding: 0,
          }}
        >
          <ChevronLeft size={15} /> Back to Library
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: 36, height: 3, background: `linear-gradient(90deg, ${TEAL}, ${PURPLE})` }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
              Courtside Conversations
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              marginBottom: "0.5rem",
            }}
          >
            Volleyball Game IQ
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem" }}>
            Understanding the game at a deeper level.
          </p>
        </div>

        {/* Category cards */}
        {!hasAccess ? (
          <div
            className="flex flex-col items-center justify-center rounded-xl py-20 px-8 text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Lock size={28} style={{ color: "rgba(255,255,255,0.2)", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.4rem", marginBottom: "0.6rem" }}>
              Courtside Access Required
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", maxWidth: 380, lineHeight: 1.7 }}>
              Volleyball Game IQ is available with a Courtside Conversations subscription or any MindSystem training program.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {CATEGORIES.map((cat, i) => {
              const colors = cat.gradient;
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate(cat.path)}
                  className="flex items-center justify-between px-5 py-5 rounded-xl cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}22, ${colors.to}22)`,
                    border: `1px solid ${colors.from}40`,
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                    (e.currentTarget as HTMLDivElement).style.background = `linear-gradient(135deg, ${colors.from}33, ${colors.to}33)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLDivElement).style.background = `linear-gradient(135deg, ${colors.from}22, ${colors.to}22)`;
                  }}
                >
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: colors.from }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p
                      className="font-bold uppercase tracking-wide mb-1"
                      style={{ fontSize: "1rem", color: "#fff" }}
                    >
                      {cat.title}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                      {cat.description}
                    </p>
                  </div>
                  <ChevronRight size={18} style={{ color: colors.from, flexShrink: 0, marginLeft: "1rem" }} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
