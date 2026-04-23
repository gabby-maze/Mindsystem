import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { TIER_COLORS, TIER_LABELS, COURTSIDE_COURSES, MINDSYSTEM_COURSES, TRAINING_MAP, getWeekProgress, hasTierAccess, STRATEGY_SESSION_LINK, type Tier } from "@/lib/data";
import { Lock, ChevronRight, Zap } from "lucide-react";

const MINDSYSTEM_TIERS: Tier[] = ["independent", "supported", "innerCircle"];

function CourseCard({ course, userTier }: { course: any; userTier: Tier }) {
  const [, navigate] = useLocation();
  const hasAccess = hasTierAccess(userTier, course.tier);
  const tierColor = TIER_COLORS[course.tier as Tier];

  return (
    <div
      onClick={() => hasAccess && navigate(`/courses/${course.id}`)}
      className="relative flex flex-col rounded-lg overflow-hidden transition-transform"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: `1px solid ${hasAccess ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}`,
        cursor: hasAccess ? "pointer" : "default",
        opacity: hasAccess ? 1 : 0.6,
      }}
    >
      {/* Tier stripe */}
      <div style={{ height: 3, backgroundColor: tierColor }} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: hasAccess ? "#fff" : "rgba(255,255,255,0.4)" }}>
            {course.title}
          </h3>
          {!hasAccess && <Lock size={14} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />}
        </div>
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{course.description}</p>

        {!hasAccess && (
          <p className="mt-3 text-xs uppercase tracking-wider" style={{ color: tierColor }}>
            {TIER_LABELS[course.tier as Tier]} +
          </p>
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { family } = useAuth();
  const [, navigate] = useLocation();

  if (!family) return null;

  const isMindSystemTier = MINDSYSTEM_TIERS.includes(family.tier);
  const weekData = isMindSystemTier && family.enrollment_date
    ? getWeekProgress(family.enrollment_date)
    : null;

  const tierColor = TIER_COLORS[family.tier];
  const tierLabel = TIER_LABELS[family.tier];

  const currentWeek = weekData?.weekNumber ?? 1;
  const currentWeekData = TRAINING_MAP[currentWeek - 1];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">

        {/* Welcome */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Welcome back
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
              {family.family_name}
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

        {/* 12-week progress bar */}
        {weekData && (
          <div className="mb-10 p-6 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>12 Week Progress</h2>
              <button
                onClick={() => navigate("/progress")}
                className="flex items-center gap-1 text-xs uppercase tracking-wider"
                style={{ color: tierColor }}
              >
                Full Map <ChevronRight size={12} />
              </button>
            </div>

            {/* Week boxes */}
            <div className="flex gap-1 mb-4 flex-wrap">
              {TRAINING_MAP.map((w) => (
                <div
                  key={w.week}
                  className="flex items-center justify-center text-xs font-bold rounded"
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: w.week < currentWeek ? tierColor : w.week === currentWeek ? `${tierColor}40` : "rgba(255,255,255,0.05)",
                    color: w.week <= currentWeek ? (w.week < currentWeek ? "#0a0a0a" : tierColor) : "rgba(255,255,255,0.3)",
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

        {/* Courtside courses */}
        <section className="mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Courtside Conversations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURTSIDE_COURSES.map(course => (
              <CourseCard key={course.id} course={course} userTier={family.tier} />
            ))}
          </div>
        </section>

        {/* MindSystem courses */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            MindSystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MINDSYSTEM_COURSES.map(course => (
              <CourseCard key={course.id} course={course} userTier={family.tier} />
            ))}
          </div>
        </section>

        {/* Upgrade banner — show for free + courtside */}
        {(family.tier === "free" || family.tier === "courtside") && (
          <div
            className="rounded-lg p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(152,47,247,0.15), rgba(255,45,120,0.1))",
              border: "1px solid rgba(152,47,247,0.3)",
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              Ready to go deeper?
            </p>
            <p className="mb-2" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.4rem" }}>
              MindSystem gives your family a shared compass for the full season.
            </p>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Book a $250 strategy session to find out which plan is right for you.
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
        )}
      </div>
    </Layout>
  );
}
