import { useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { hasTierAccess } from "@/lib/data";
import { POSITIONS } from "@/lib/positionSeriesData";
import { ChevronLeft, Lock, Play } from "lucide-react";

const TEAL = "#00D4C8";
const BLUE = "#2B8BF5";

export default function PositionSeriesPage() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  const [activeId, setActiveId] = useState(POSITIONS[0].id);
  const [athleteOpen, setAthleteOpen] = useState(true);
  const [parentOpen, setParentOpen] = useState(false);

  if (!family) return null;

  const hasAccess = hasTierAccess(family.tier, "courtside");
  const position = POSITIONS.find((p) => p.id === activeId) ?? POSITIONS[0];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>

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
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: 36, height: 3, background: `linear-gradient(90deg, ${TEAL}, ${BLUE})` }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
              Volleyball Game IQ
            </span>
          </div>
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.4rem)", marginBottom: "0.4rem" }}>
            Position Series
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
            The mental and physical demands of every position — for athletes and parents.
          </p>
        </div>

        {/* Position pills — wrapping grid so all are always visible */}
        <div className="flex flex-wrap gap-2 mb-8">
          {POSITIONS.map((p) => {
            const active = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => { setActiveId(p.id); setAthleteOpen(true); setParentOpen(false); }}
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "999px",
                  border: active ? `1px solid ${TEAL}` : "1px solid rgba(255,255,255,0.12)",
                  background: active ? `${TEAL}22` : "rgba(255,255,255,0.04)",
                  color: active ? TEAL : "rgba(255,255,255,0.5)",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Gated */}
        {!hasAccess ? (
          <div className="flex flex-col items-center justify-center rounded-xl py-20 px-8 text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Lock size={28} style={{ color: "rgba(255,255,255,0.2)", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.5rem", marginBottom: "0.6rem" }}>
              Courtside Access Required
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", maxWidth: 380, lineHeight: 1.7 }}>
              Position Series videos are available with a Courtside Conversations subscription or any MindSystem training program.
            </p>
          </div>
        ) : (
          <div>
            {/* Core Skill label */}
            <div className="mb-5">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Core Skill
              </span>
              <p style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "clamp(1.1rem,3vw,1.5rem)",
                color: TEAL,
                marginTop: "0.2rem",
              }}>
                {position.coreSkill}
              </p>
            </div>

            {/* Core skill description */}
            <p style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "680px",
            }}>
              {position.coreSkillDesc}
            </p>

            {/* Video embed */}
            {position.youtubeId ? (
              <div className="flex justify-center mb-8">
                <div
                  style={{
                    width: "100%",
                    maxWidth: "360px",
                    aspectRatio: "9/16",
                    borderRadius: "16px",
                    overflow: "hidden",
                    backgroundColor: "#000",
                    border: `1px solid ${TEAL}30`,
                  }}
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(position.youtubeId)}?rel=0&modestbranding=1`}
                    title={position.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center mb-8">
                <div
                  className="flex flex-col items-center justify-center"
                  style={{
                    width: "100%",
                    maxWidth: "360px",
                    aspectRatio: "9/16",
                    borderRadius: "16px",
                    backgroundColor: "#111",
                    border: `2px dashed ${BLUE}40`,
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full mb-4"
                    style={{ width: 56, height: 56, backgroundColor: `${BLUE}20`, border: `2px solid ${BLUE}50` }}
                  >
                    <Play size={20} style={{ color: BLUE }} />
                  </div>
                </div>
              </div>
            )}

            {/* Script accordion */}
            <div className="flex flex-col gap-3">

              {/* For the Athlete */}
              <div
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${TEAL}30`,
                  background: `${TEAL}08`,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setAthleteOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-4"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ width: 3, height: 20, background: TEAL, borderRadius: 2 }} />
                    <span style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: TEAL, textTransform: "uppercase" }}>
                      For the Athlete
                    </span>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.1rem", transition: "transform 0.2s", display: "inline-block", transform: athleteOpen ? "rotate(180deg)" : "rotate(0)" }}>
                    ▾
                  </span>
                </button>
                {athleteOpen && (
                  <div className="px-5 pb-5">
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                      {position.athlete.summary}
                    </p>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                      Key Takeaways
                    </p>
                    <ul className="flex flex-col gap-3">
                      {position.athlete.takeaways.map((t, i) => (
                        <li key={i} className="flex gap-3">
                          <span style={{ color: TEAL, flexShrink: 0, fontSize: "0.75rem", marginTop: "0.22rem" }}>▸</span>
                          <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{t}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* For the Parent */}
              <div
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${BLUE}30`,
                  background: `${BLUE}08`,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setParentOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-4"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ width: 3, height: 20, background: BLUE, borderRadius: 2 }} />
                    <span style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: BLUE, textTransform: "uppercase" }}>
                      For the Parent
                    </span>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.1rem", transition: "transform 0.2s", display: "inline-block", transform: parentOpen ? "rotate(180deg)" : "rotate(0)" }}>
                    ▾
                  </span>
                </button>
                {parentOpen && (
                  <div className="px-5 pb-5">
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                      {position.parent.summary}
                    </p>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                      Key Takeaways
                    </p>
                    <ul className="flex flex-col gap-3">
                      {position.parent.takeaways.map((t, i) => (
                        <li key={i} className="flex gap-3">
                          <span style={{ color: BLUE, flexShrink: 0, fontSize: "0.75rem", marginTop: "0.22rem" }}>▸</span>
                          <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{t}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
