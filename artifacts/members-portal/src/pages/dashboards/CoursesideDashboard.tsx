import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { AnnouncementBoard } from "@/components/AnnouncementBoard";
import { UpgradeModal, MINDSYSTEM_MODAL_PROPS } from "@/components/UpgradeModal";
import { COURTSIDE_COURSES, MINDSYSTEM_COURSE } from "@/lib/data";
import { Lock } from "lucide-react";

// TODO: replace with live session link
const LIVE_SESSION_LINK = "TODO_LIVE_SESSION_GHL_LINK";
// TODO: replace with GHL MindSystem Supported payment link
const MINDSYSTEM_UPGRADE_LINK = "TODO_MINDSYSTEM_SUPPORTED_GHL_LINK";

const TEAL = "#00D4C8";

export default function CoursesideDashboard() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  const [showMindSystemModal, setShowMindSystemModal] = useState(false);

  if (!family) return null;

  return (
    <>
    <Layout>
      <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>

        {/* Section 1 - Hero */}
        <section className="w-full px-6 md:px-16 py-20 relative" style={{ backgroundColor: "#2C2C2A" }}>
          {/* Tier badge */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: `${TEAL}22`, color: TEAL, border: `1px solid ${TEAL}50` }}
            >
              Courtside Member
            </span>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Welcome back, {family.family_name}
            </p>
            <h1
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "clamp(2rem,5vw,3rem)",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              Stop surviving the season. Start navigating it.
            </h1>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: 580,
                lineHeight: 1.7,
              }}
            >
              Courtside Conversations is the community for youth sports families who are done
              guessing and ready to build something real.
            </p>
          </div>
        </section>

        {/* Section 2 - Three Step Visual */}
        <section className="px-6 md:px-16 py-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "01", text: "Choose your section." },
              { num: "02", text: "Watch the lesson. Run the session." },
              { num: "03", text: "Come back for the next drop." },
            ].map((step, i) => (
              <div
                key={step.num}
                className="flex items-center gap-4 p-5 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.6rem", color: TEAL, flexShrink: 0 }}
                >
                  {step.num}
                </span>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {step.text}
                </p>
                {i < 2 && (
                  <span className="hidden md:block ml-auto text-lg" style={{ color: "rgba(255,255,255,0.2)" }}>→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Full Course Grid */}
        <section className="px-6 md:px-16 pb-16 max-w-6xl mx-auto">
          <h2 className="mb-2" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.6rem,4vw,2.2rem)" }}>
            Your Training Library
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
            New content drops every month. Check back here.
          </p>
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))" }}
          >
            {COURTSIDE_COURSES.map((course) => {
              const isVideoGame = course.id === "video-game-library";
              const isStartingPoint = course.id === "your-starting-point";
              return (
                <div
                  key={course.id}
                  onClick={() => navigate(course.linkTo ?? `/courses/${course.id}`)}
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
                  {(isVideoGame || isStartingPoint) && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: TEAL, color: "#0a0a0a", fontSize: "0.6rem" }}
                      >
                        {isVideoGame ? "New lessons added monthly" : "Start here"}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {course.title}
                    </p>
                    {isStartingPoint && (
                      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>
                        Pick your season entry point
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* MindSystem tile - locked for Courtside */}
            <div
              onClick={() => setShowMindSystemModal(true)}
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
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>MindSystem Only</span>
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

        {/* Section 4 - Monthly Live */}
        <section
          className="px-6 md:px-16 py-14"
          style={{ backgroundColor: "rgba(0,212,200,0.04)", borderTop: "1px solid rgba(0,212,200,0.1)", borderBottom: "1px solid rgba(0,212,200,0.1)" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold mb-3" style={{ fontSize: "1.3rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Monthly Live with Gabby
            </h2>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 560 }}>
              Every month Gabby goes live inside Courtside Conversations. You bring what's on your
              mind. Gabby brings the framework. Miss it live - the replay is always there.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={LIVE_SESSION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: TEAL,
                  color: "#0a0a0a",
                  padding: "0.875rem 2rem",
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  textDecoration: "none",
                }}
              >
                Join This Month's Live →
              </a>
              <button
                onClick={() => navigate("/live")}
                style={{
                  background: "none",
                  border: `1px solid ${TEAL}50`,
                  color: TEAL,
                  padding: "0.875rem 1.5rem",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                }}
              >
                View Replay Library →
              </button>
            </div>
          </div>
        </section>

        {/* Section 5 - Community Board */}
        <section className="px-6 md:px-16 py-14 max-w-4xl mx-auto">
          <h2 className="font-bold mb-2" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            The Community
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
            A community of parents navigating the exact same maze you are.
          </p>
          <AnnouncementBoard family={family} />
        </section>

        {/* Section 6 - MindSystem Upgrade Banner */}
        <section
          className="w-full px-6 md:px-16 py-14 text-center"
          style={{ backgroundColor: "rgba(152,47,247,0.12)", borderTop: "1px solid rgba(152,47,247,0.2)" }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(152,47,247,0.8)" }}>
              Ready to go deeper?
            </p>
            <h3
              className="mb-3"
              style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.3rem,3vw,1.8rem)" }}
            >
              MindSystem Supported is now open.
            </h3>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              This is not a program. This is the full family performance framework - the compass,
              the journals, the shared system for the season.
            </p>
            <a
              href={MINDSYSTEM_UPGRADE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4"
              style={{
                backgroundColor: "#FF2D78",
                color: "#fff",
                padding: "0.875rem 2.25rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
              }}
            >
              Learn More About MindSystem →
            </a>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
              Not ready yet? You're exactly where you should be.
            </p>
          </div>
        </section>

      </div>
    </Layout>

    {showMindSystemModal && (
      <UpgradeModal
        onClose={() => setShowMindSystemModal(false)}
        {...MINDSYSTEM_MODAL_PROPS}
      />
    )}
  </>
  );
}
