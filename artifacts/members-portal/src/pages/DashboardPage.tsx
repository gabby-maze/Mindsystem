import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { ChecklistWidget } from "@/components/ChecklistWidget";
import {
  TIER_COLORS,
  TIER_LABELS,
  COURTSIDE_COURSES,
  MINDSYSTEM_COURSES,
  TRAINING_MAP,
  getWeekProgress,
  hasTierAccess,
  STRATEGY_SESSION_LINK,
  type Tier,
} from "@/lib/data";
import { Lock, ChevronRight, Zap, ExternalLink } from "lucide-react";

const COURTSIDE_UPGRADE_LINK = "TODO_COURTSIDE_GHL_LINK"; // replace when GHL page is built

function CourseCard({ course, userTier }: { course: any; userTier: Tier }) {
  const [, navigate] = useLocation();
  const hasAccess = hasTierAccess(userTier, course.tier);
  const tierColor = TIER_COLORS[course.tier as Tier];

  return (
    <div
      onClick={() => hasAccess && navigate(`/courses/${course.id}`)}
      className="relative flex flex-col rounded-lg overflow-hidden transition-all"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: `1px solid ${hasAccess ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}`,
        cursor: hasAccess ? "pointer" : "default",
        opacity: hasAccess ? 1 : 0.55,
      }}
    >
      <div style={{ height: 3, backgroundColor: tierColor }} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: hasAccess ? "#fff" : "rgba(255,255,255,0.4)" }}
          >
            {course.title}
          </h3>
          {!hasAccess && <Lock size={14} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />}
        </div>
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          {course.description}
        </p>
        {!hasAccess && (
          <p className="mt-3 text-xs uppercase tracking-wider" style={{ color: tierColor }}>
            {TIER_LABELS[course.tier as Tier]} +
          </p>
        )}
      </div>
    </div>
  );
}

// ── FREE TIER ─────────────────────────────────────────────────────────────────
function FreeDashboard({ familyName }: { familyName: string }) {
  const [, navigate] = useLocation();
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          Welcome
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            {familyName}
          </h1>
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: `${TIER_COLORS.free}20`, color: TIER_COLORS.free, border: `1px solid ${TIER_COLORS.free}40` }}
          >
            Free
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", maxWidth: 500 }}>
          You have access to the first lesson. See what MindSystem is about before going deeper.
        </p>
      </div>

      {/* Lesson 1 CTA */}
      <div
        className="rounded-lg p-8 mb-10"
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
          Start here
        </p>
        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Watch This First
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          Understanding the Ecosystem — the foundation of everything in the Courtside library.
        </p>
        <button
          onClick={() => navigate("/courses/video-game-library/lessons/watch-first")}
          style={{
            backgroundColor: TIER_COLORS.courtside,
            color: "#0a0a0a",
            border: "none",
            padding: "0.875rem 2rem",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            cursor: "pointer",
          }}
        >
          Watch Lesson 1
        </button>
      </div>

      {/* Upgrade banner */}
      <div
        className="rounded-lg p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,200,0.1), rgba(43,139,245,0.08))",
          border: "1px solid rgba(0,212,200,0.2)",
        }}
      >
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
          Ready to unlock the full library?
        </p>
        <p
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.4rem",
            marginBottom: "0.75rem",
          }}
        >
          Courtside Conversations
        </p>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          5 deep-dive video series + monthly live calls with Gabby for $30/month.
        </p>
        <a
          href={COURTSIDE_UPGRADE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: TIER_COLORS.courtside,
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
          Join Courtside — $30/mo
        </a>
      </div>
    </div>
  );
}

// ── COURTSIDE TIER ────────────────────────────────────────────────────────────
function CourtsiDashboard({ familyName }: { familyName: string }) {
  const [, navigate] = useLocation();
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          Welcome back
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            {familyName}
          </h1>
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${TIER_COLORS.courtside}20`,
              color: TIER_COLORS.courtside,
              border: `1px solid ${TIER_COLORS.courtside}40`,
            }}
          >
            Courtside
          </span>
        </div>
      </div>

      {/* Course grid */}
      <section className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
          Courtside Conversations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURTSIDE_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} userTier="courtside" />
          ))}
        </div>
      </section>

      {/* Locked MindSystem teaser */}
      <div
        className="rounded-lg p-8"
        style={{
          background: "linear-gradient(135deg, rgba(152,47,247,0.08), rgba(255,45,120,0.06))",
          border: "1px solid rgba(152,47,247,0.2)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Lock size={16} style={{ color: "rgba(152,47,247,0.7)" }} />
          <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(152,47,247,0.7)" }}>
            MindSystem — Locked
          </p>
        </div>
        <p
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.3rem",
            marginBottom: "0.75rem",
          }}
        >
          The full 12-week family performance framework
        </p>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          Physical journals, cohort calls, live coaching, and a personalized roadmap for your family's season.
        </p>
        <a
          href={STRATEGY_SESSION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          style={{
            display: "inline-flex",
            backgroundColor: "#982FF7",
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
          Book a Strategy Session · $250 <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

// ── INDEPENDENT TIER ──────────────────────────────────────────────────────────
function IndependentDashboard({ familyName }: { familyName: string }) {
  const [, navigate] = useLocation();
  const mazeSteps = ["Mindset", "Analyze", "Zero In", "Execute"];
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          Welcome back
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            {familyName}
          </h1>
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${TIER_COLORS.independent}20`,
              color: TIER_COLORS.independent,
              border: `1px solid ${TIER_COLORS.independent}40`,
            }}
          >
            Independent
          </span>
        </div>
      </div>

      {/* MAZE Program */}
      <div
        className="rounded-lg p-8 mb-8"
        style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          MAZE Self-Paced Program
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {mazeSteps.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: `${TIER_COLORS.independent}15`,
                border: `1px solid ${TIER_COLORS.independent}30`,
              }}
            >
              <span style={{ color: TIER_COLORS.independent, fontWeight: 700, fontSize: "0.75rem" }}>
                {i + 1}
              </span>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>{step}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/courses/athlete-compass-training")}
          style={{
            backgroundColor: TIER_COLORS.independent,
            color: "#fff",
            border: "none",
            padding: "0.875rem 2rem",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            cursor: "pointer",
          }}
        >
          Open Athlete Compass Training
        </button>
      </div>

      {/* All accessible courses */}
      <section className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
          Your Courses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...COURTSIDE_COURSES, ...MINDSYSTEM_COURSES].map((course) => (
            <CourseCard key={course.id} course={course} userTier="independent" />
          ))}
        </div>
      </section>

      {/* Upgrade to Supported */}
      <div
        className="rounded-lg p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(152,47,247,0.12), rgba(255,45,120,0.08))",
          border: "1px solid rgba(152,47,247,0.25)",
        }}
      >
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
          Want live coaching?
        </p>
        <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.3rem", marginBottom: "0.75rem" }}>
          MindSystem Supported
        </p>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          Add cohort calls, physical journals, and direct support from Gabby throughout the 12 weeks.
        </p>
        <a
          href={STRATEGY_SESSION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#982FF7",
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
          Book a Strategy Session · $250
        </a>
      </div>
    </div>
  );
}

// ── SUPPORTED / INNER CIRCLE TIER ─────────────────────────────────────────────
function SupportedDashboard({
  familyName,
  tier,
  enrollmentDate,
  family,
}: {
  familyName: string;
  tier: "supported" | "innerCircle";
  enrollmentDate?: string;
  family: any;
}) {
  const [, navigate] = useLocation();
  const tierColor = TIER_COLORS[tier];
  const tierLabel = TIER_LABELS[tier];
  const weekData = enrollmentDate ? getWeekProgress(enrollmentDate) : null;
  const currentWeek = weekData?.weekNumber ?? 1;
  const currentWeekData = TRAINING_MAP[currentWeek - 1];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          Welcome back
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            {familyName}
          </h1>
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: `${tierColor}20`, color: tierColor, border: `1px solid ${tierColor}40` }}
          >
            {tierLabel}
          </span>
        </div>
        {weekData && (
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
            Week {weekData.weekNumber} of 12 · {weekData.daysRemaining} days remaining
          </p>
        )}
      </div>

      {/* Inner Circle — Gabby direct booking */}
      {tier === "innerCircle" && (
        <div
          className="rounded-lg p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(255,45,120,0.12), rgba(152,47,247,0.08))",
            border: "1px solid rgba(255,45,120,0.3)",
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,45,120,0.8)" }}>
              Inner Circle · Private Access
            </p>
            <p className="font-bold" style={{ color: "#fff" }}>
              Book your 1-on-1 with Gabby
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              Your direct line to Gabby is always open.
            </p>
          </div>
          <a
            href={STRATEGY_SESSION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0"
            style={{
              backgroundColor: "#FF2D78",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              textDecoration: "none",
            }}
          >
            Book Session <ExternalLink size={12} />
          </a>
        </div>
      )}

      {/* Checklist widget */}
      <ChecklistWidget family={family} />

      {/* 12-week progress */}
      {weekData && (
        <div
          className="mb-10 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
              12 Week Progress
            </h2>
            <button
              onClick={() => navigate("/progress")}
              className="flex items-center gap-1 text-xs uppercase tracking-wider"
              style={{ color: tierColor, background: "none", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
            >
              Full Map <ChevronRight size={12} />
            </button>
          </div>

          <div className="flex gap-1 mb-4 flex-wrap">
            {TRAINING_MAP.map((w) => (
              <div
                key={w.week}
                className="flex items-center justify-center text-xs font-bold rounded"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor:
                    w.week < currentWeek
                      ? tierColor
                      : w.week === currentWeek
                      ? `${tierColor}40`
                      : "rgba(255,255,255,0.05)",
                  color:
                    w.week <= currentWeek
                      ? w.week < currentWeek
                        ? "#0a0a0a"
                        : tierColor
                      : "rgba(255,255,255,0.3)",
                  border: w.week === currentWeek ? `2px solid ${tierColor}` : "none",
                  fontFamily: "'Oswald', sans-serif",
                }}
              >
                {w.week}
              </div>
            ))}
          </div>

          {currentWeekData && (
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: tierColor }}>
                Week {currentWeek}: {currentWeekData.title}
              </p>
              <ul className="flex flex-col gap-1">
                {currentWeekData.tasks.slice(0, 3).map((task) => (
                  <li key={task} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <Zap size={12} style={{ color: tierColor, flexShrink: 0, marginTop: 3 }} />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Course grid */}
      <section className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
          Courtside Conversations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURTSIDE_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} userTier={tier} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
          MindSystem
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MINDSYSTEM_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} userTier={tier} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const { family } = useAuth();
  if (!family) return null;

  const { tier, family_name, enrollment_date } = family;

  if (tier === "free") {
    return (
      <Layout>
        <FreeDashboard familyName={family_name} />
      </Layout>
    );
  }

  if (tier === "courtside") {
    return (
      <Layout>
        <CourtsiDashboard familyName={family_name} />
      </Layout>
    );
  }

  if (tier === "independent") {
    return (
      <Layout>
        <IndependentDashboard familyName={family_name} />
      </Layout>
    );
  }

  if (tier === "supported" || tier === "innerCircle") {
    return (
      <Layout>
        <SupportedDashboard
          familyName={family_name}
          tier={tier as "supported" | "innerCircle"}
          enrollmentDate={enrollment_date}
          family={family}
        />
      </Layout>
    );
  }

  return null;
}
