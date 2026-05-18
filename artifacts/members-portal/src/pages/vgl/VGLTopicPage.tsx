import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { UpgradeModal } from "@/components/UpgradeModal";
import { COURTSIDE_COURSES } from "@/lib/data";
import { canAccessVGLLesson } from "@/lib/access";
import { ChevronLeft, ChevronRight, Lock, Play } from "lucide-react";

const TEAL = "#00D4C8";
const BLUE = "#2B8BF5";
const PURPLE = "#982FF7";

const VGL_LOCKED_MODAL = {
  headline: "This lesson requires a subscription.",
  body: "This lesson is available with a Courtside Conversation subscription or any MindSystem training program.",
  ctaText: "Upgrade to Courtside →",
};

export default function VGLTopicPage() {
  const { family } = useAuth();
  const { topicId } = useParams<{ topicId: string }>();
  const [, navigate] = useLocation();
  const [showModal, setShowModal] = useState(false);
  if (!family) return null;

  const vgl = COURTSIDE_COURSES.find((c) => c.id === "video-game-library");
  const topic = vgl?.topics?.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <Layout>
        <div
          className="max-w-4xl mx-auto px-8 py-20 text-center"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}
        >
          Topic not found.
        </div>
      </Layout>
    );
  }

  function lessonColor(index: number): { from: string; to: string } {
    if (index === 0) return { from: TEAL, to: BLUE };
    if (index === 1) return { from: BLUE, to: PURPLE };
    return { from: PURPLE, to: "#FF2D78" };
  }

  return (
    <Layout>
      <div
        className="max-w-4xl mx-auto px-4 md:px-8 py-10"
        style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}
      >
        <button
          onClick={() => navigate("/courses/video-game-library")}
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
          <ChevronLeft size={15} /> Video Game Library
        </button>

        <div className="mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Video Game Library
          </p>
          <h1
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(1.6rem,4vw,2.2rem)",
            }}
          >
            {topic.title}
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          {topic.lessons.map((lesson, i) => {
            const accessible = canAccessVGLLesson(family.tier, lesson);
            const colors = lessonColor(i);
            const isPlaceholder = lesson.youtubeId === "PLACEHOLDER" || !lesson.youtubeId;

            function handleClick() {
              if (!accessible) {
                setShowModal(true);
                return;
              }
              navigate(`/courses/video-game-library/${topicId}/lessons/${lesson.id}`);
            }

            if (accessible) {
              return (
                <div
                  key={lesson.id}
                  onClick={handleClick}
                  className="flex items-center justify-between px-5 py-4 rounded-lg cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}22, ${colors.to}22)`,
                    border: `1px solid ${colors.from}50`,
                    transition: "transform 0.15s, background 0.2s",
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
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center rounded-full shrink-0"
                      style={{
                        width: 36,
                        height: 36,
                        background: `linear-gradient(135deg, ${colors.from}40, ${colors.to}40)`,
                        border: `1px solid ${colors.from}60`,
                      }}
                    >
                      <Play size={13} style={{ color: colors.from }} />
                    </div>
                    <div>
                      {lesson.free && (
                        <span
                          className="inline-block text-xs uppercase tracking-wider px-2 py-0.5 rounded-full mb-1"
                          style={{
                            backgroundColor: `${colors.from}25`,
                            color: colors.from,
                            fontSize: "0.6rem",
                            letterSpacing: "0.12em",
                          }}
                        >
                          Free
                        </span>
                      )}
                      <p
                        className="font-bold uppercase tracking-wide"
                        style={{ fontSize: "0.9rem", color: "#fff" }}
                      >
                        {lesson.title}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={15} style={{ color: colors.from, flexShrink: 0 }} />
                </div>
              );
            }

            return (
              <div
                key={lesson.id}
                onClick={handleClick}
                className="flex items-center justify-between px-5 py-4 rounded-lg cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Lock size={13} style={{ color: "rgba(255,255,255,0.3)" }} />
                  </div>
                  <div>
                    <p
                      className="font-bold uppercase tracking-wide"
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}
                    >
                      {lesson.title}
                    </p>
                    <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", marginTop: "0.15rem" }}>
                      Available with Courtside or any MindSystem program
                    </p>
                  </div>
                </div>
                <Lock size={13} style={{ color: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      </div>

      {showModal && (
        <UpgradeModal
          onClose={() => setShowModal(false)}
          {...VGL_LOCKED_MODAL}
        />
      )}
    </Layout>
  );
}
