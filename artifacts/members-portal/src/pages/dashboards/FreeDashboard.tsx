import { useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { UpgradeModal, MINDSYSTEM_MODAL_PROPS } from "@/components/UpgradeModal";
import { COURTSIDE_COURSES, MINDSYSTEM_COURSE } from "@/lib/data";
import { canAccessSection } from "@/lib/access";
import { CheckCircle, Lock } from "lucide-react";

type ModalContext = "courtside" | "mindsystem" | null;

// TODO: replace with GHL Courtside payment link
const COURTSIDE_LINK = "TODO_COURTSIDE_GHL_LINK";

const UNLOCKS = [
  "Lessons 2 through 5 on every topic",
  "Access to all 7 course libraries",
  "Your Starting Point — the seasonal guide",
  "Monthly live session with Gabby",
  "Full replay library",
  "Community comments and Q&A with Gabby",
];

export default function FreeDashboard() {
  const [, navigate] = useLocation();
  const [modalContext, setModalContext] = useState<ModalContext>(null);

  return (
    <Layout>
      <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>

        {/* Section 1 — Hero */}
        <section
          className="w-full px-6 md:px-16 py-20"
          style={{ backgroundColor: "#2C2C2A" }}
        >
          <div className="max-w-3xl mx-auto">
            <h1
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "clamp(2rem,5vw,3.2rem)",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              You've seen the videos. Now go deeper.
            </h1>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              The Video Game Library is where the conversation keeps going — past
              the reel, past the caption, and into the work that actually changes things.
            </p>
            <button
              onClick={() => navigate("/courses/video-game-library")}
              style={{
                backgroundColor: "#FF2D78",
                color: "#fff",
                border: "none",
                padding: "1rem 2.25rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                cursor: "pointer",
              }}
            >
              Watch Your First Lesson →
            </button>
          </div>
        </section>

        {/* Section 2 — What's Free Today */}
        <section className="px-6 md:px-16 py-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                label: "Watch First",
                desc: "The Instagram video you already know, now with context",
              },
              {
                label: "Lesson 1",
                desc: "The deep dive on every topic — yours right now, no payment required",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-6 rounded-lg"
                style={{
                  backgroundColor: "rgba(0,212,200,0.06)",
                  border: "1px solid rgba(0,212,200,0.3)",
                }}
              >
                <CheckCircle size={20} style={{ color: "#00D4C8", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide mb-1" style={{ color: "#00D4C8" }}>
                    ✓ {item.label}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — What Unlocks */}
        <section
          className="px-6 md:px-16 py-16"
          style={{ backgroundColor: "rgba(255,255,255,0.025)" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-bold mb-8"
              style={{ fontSize: "clamp(1.2rem,3vw,1.6rem)", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              What unlocks with Courtside Conversations
            </h2>
            <ul className="flex flex-col gap-3 mb-10">
              {UNLOCKS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} style={{ color: "#FF2D78", flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="mb-8 font-bold"
              style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", color: "#fff" }}
            >
              $30 a month. Cancel anytime.
            </p>
            <a
              href={COURTSIDE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5"
              style={{
                backgroundColor: "#FF2D78",
                color: "#fff",
                padding: "1rem 2.25rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
              }}
            >
              Unlock Courtside Conversations →
            </a>
            <br />
            <button
              onClick={() => navigate("/courses/video-game-library")}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              Keep exploring free content
            </button>
          </div>
        </section>

        {/* Section 4 — Course Grid */}
        <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto">
          <h2
            className="mb-2"
            style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.6rem,4vw,2.2rem)" }}
          >
            Your Training Library
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
            Unlock everything with Courtside Conversations — $30/month.
          </p>
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))" }}
          >
            {COURTSIDE_COURSES.map((course) => {
              const isVideoGame = course.id === "video-game-library";
              const accessible = canAccessSection("free", course.id);
              return (
                <div
                  key={course.id}
                  onClick={() => accessible ? navigate(`/courses/${course.id}`) : setModalContext("courtside")}
                  className="relative rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    aspectRatio: "4/3",
                    background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})`,
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
                >
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75))" }} />
                  <div className="absolute top-3 right-3">
                    {isVideoGame ? (
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#00D4C8", color: "#0a0a0a", fontSize: "0.65rem" }}>
                        1 Free Lesson Available
                      </span>
                    ) : (
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                        <Lock size={11} style={{ color: "rgba(255,255,255,0.7)" }} />
                        <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Courtside</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {course.title}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* MindSystem tile — locked for free */}
            <div
              onClick={() => setModalContext("mindsystem")}
              className="relative rounded-lg overflow-hidden cursor-pointer"
              style={{
                aspectRatio: "4/3",
                background: `linear-gradient(135deg, ${MINDSYSTEM_COURSE.gradientFrom}, ${MINDSYSTEM_COURSE.gradientTo})`,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75))" }} />
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                  <Lock size={11} style={{ color: "rgba(255,255,255,0.7)" }} />
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>MindSystem</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  MindSystem
                </p>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>
                  Athlete + Parent journal training
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Reassurance */}
        <section className="px-6 md:px-16 py-16 text-center" style={{ backgroundColor: "#2C2C2A" }}>
          <p
            className="max-w-2xl mx-auto"
            style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1rem,2.5vw,1.3rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}
          >
            No pressure. No pitch. Just the conversation the youth sports industry hasn't been
            willing to have — and the tools to actually do something about it.
          </p>
        </section>
      </div>

      {modalContext === "courtside" && (
        <UpgradeModal onClose={() => setModalContext(null)} />
      )}
      {modalContext === "mindsystem" && (
        <UpgradeModal onClose={() => setModalContext(null)} {...MINDSYSTEM_MODAL_PROPS} />
      )}
    </Layout>
  );
}
