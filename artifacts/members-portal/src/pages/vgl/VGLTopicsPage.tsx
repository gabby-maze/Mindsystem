import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { COURTSIDE_COURSES } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOPIC_COLORS = [
  { from: "#00D4C8", to: "#2B8BF5" },
  { from: "#2B8BF5", to: "#982FF7" },
  { from: "#982FF7", to: "#FF2D78" },
  { from: "#FF2D78", to: "#00D4C8" },
];

export default function VGLTopicsPage() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  if (!family) return null;

  const vgl = COURTSIDE_COURSES.find((c) => c.id === "video-game-library");
  const topics = vgl?.topics ?? [];

  return (
    <Layout>
      <div
        className="max-w-4xl mx-auto px-4 md:px-8 py-10"
        style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}
      >
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-2 mb-8"
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: 0,
          }}
        >
          <ChevronLeft size={15} /> Back to Library
        </button>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div
              style={{
                width: 36,
                height: 3,
                background: "linear-gradient(90deg, #00D4C8, #982FF7)",
              }}
            />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Video Game Library
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              marginBottom: "0.5rem",
            }}
          >
            Choose a topic.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem" }}>
            Each topic includes a free Watch This First and Deep Dive. Additional lessons require a subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((topic, i) => {
            const colors = TOPIC_COLORS[i % TOPIC_COLORS.length];
            return (
              <div
                key={topic.id}
                onClick={() => navigate(`/courses/video-game-library/${topic.id}`)}
                className="flex items-center justify-between px-5 py-4 rounded-lg cursor-pointer"
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
                    className="font-bold uppercase tracking-wide"
                    style={{ fontSize: "0.95rem", color: "#fff" }}
                  >
                    {topic.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "0.2rem",
                    }}
                  >
                    6 lessons · 2 free
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
