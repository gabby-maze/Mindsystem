import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { TRAINING_MAP, TIER_COLORS, getWeekProgress } from "@/lib/data";
import { CheckCircle, Circle } from "lucide-react";

export default function ProgressPage() {
  const { family } = useAuth();
  if (!family) return null;

  const isMindSystem = ["independent", "supported", "innerCircle"].includes(family.tier);
  const tierColor = TIER_COLORS[family.tier];

  const weekData = isMindSystem && family.enrollment_date
    ? getWeekProgress(family.enrollment_date)
    : null;

  const currentWeek = weekData?.weekNumber ?? 1;

  const BADGES = [
    { label: "Getting Started", desc: "First lesson complete", earned: false },
    { label: "In the Maze", desc: "25% of plan complete", earned: false },
    { label: "Finding Direction", desc: "50% complete", earned: false },
    { label: "Compass Earned", desc: "100% complete", earned: false },
    { label: "MAZE Model Complete", desc: "Athlete completes MAZE model", earned: !!family.maze_model_complete },
    { label: "Week 6 — Halfway", desc: "Reaches week 6", earned: isMindSystem && currentWeek >= 6 },
    { label: "Week 12 — Done", desc: "Completes week 12", earned: isMindSystem && currentWeek >= 12 },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: "2.5rem" }}>
          My Progress
        </h1>

        {/* Week countdown */}
        {weekData && (
          <div className="mb-10 p-6 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex flex-wrap gap-8 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Current Week</p>
                <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "3rem", color: tierColor, lineHeight: 1 }}>
                  {weekData.weekNumber}
                  <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif", marginLeft: "0.5rem" }}>of 12</span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Days Remaining</p>
                <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "3rem", color: "rgba(255,255,255,0.7)", lineHeight: 1 }}>
                  {weekData.daysRemaining}
                </p>
              </div>
            </div>

            {/* Week boxes */}
            <div className="flex gap-2 flex-wrap">
              {TRAINING_MAP.map((w) => (
                <div
                  key={w.week}
                  className="flex flex-col items-center gap-1"
                >
                  <div
                    className="flex items-center justify-center rounded text-xs font-bold"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: w.week < currentWeek ? tierColor : w.week === currentWeek ? `${tierColor}30` : "rgba(255,255,255,0.05)",
                      color: w.week < currentWeek ? "#0a0a0a" : w.week === currentWeek ? tierColor : "rgba(255,255,255,0.3)",
                      border: w.week === currentWeek ? `2px solid ${tierColor}` : "none",
                      fontFamily: "'Oswald', sans-serif",
                    }}
                  >
                    {w.week}
                  </div>
                  <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", textAlign: "center", width: 50, lineHeight: 1.2 }}>
                    {w.title.split(" ").slice(0, 2).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Training Map */}
        {isMindSystem && (
          <section className="mb-12">
            <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              12 Week Training Map
            </h2>
            <div className="flex flex-col gap-4">
              {TRAINING_MAP.map((week) => {
                const isCurrentWeek = week.week === currentWeek;
                const isPastWeek = week.week < currentWeek;
                return (
                  <div
                    key={week.week}
                    className="rounded-lg p-5"
                    style={{
                      backgroundColor: isCurrentWeek ? `${tierColor}0d` : "rgba(255,255,255,0.02)",
                      border: `1px solid ${isCurrentWeek ? `${tierColor}40` : "rgba(255,255,255,0.07)"}`,
                      opacity: !isMindSystem ? 0.4 : 1,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex items-center justify-center rounded text-xs font-bold shrink-0"
                        style={{
                          width: 36,
                          height: 36,
                          backgroundColor: isPastWeek ? tierColor : isCurrentWeek ? `${tierColor}20` : "rgba(255,255,255,0.05)",
                          color: isPastWeek ? "#0a0a0a" : isCurrentWeek ? tierColor : "rgba(255,255,255,0.3)",
                          fontFamily: "'Oswald', sans-serif",
                        }}
                      >
                        {week.week}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: isCurrentWeek ? tierColor : isPastWeek ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.4)" }}>
                          Week {week.week}: {week.title}
                          {isCurrentWeek && <span className="ml-2 text-xs" style={{ color: tierColor }}>(Current)</span>}
                        </h3>
                        <ul className="flex flex-col gap-2">
                          {week.tasks.map((task) => (
                            <li key={task} className="flex items-start gap-2">
                              {isPastWeek ? (
                                <CheckCircle size={14} style={{ color: tierColor, flexShrink: 0, marginTop: 2 }} />
                              ) : (
                                <Circle size={14} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: 2 }} />
                              )}
                              <span style={{ fontSize: "0.85rem", color: isPastWeek ? "rgba(255,255,255,0.6)" : isCurrentWeek ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
                                {task}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Milestone Badges */}
        <section>
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            Milestone Badges
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center p-4 rounded-lg"
                style={{
                  backgroundColor: badge.earned ? `${tierColor}10` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${badge.earned ? `${tierColor}30` : "rgba(255,255,255,0.06)"}`,
                  opacity: badge.earned ? 1 : 0.45,
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full mb-3"
                  style={{ width: 48, height: 48, backgroundColor: badge.earned ? `${tierColor}20` : "rgba(255,255,255,0.05)" }}
                >
                  {badge.earned ? (
                    <CheckCircle size={22} style={{ color: tierColor }} />
                  ) : (
                    <Circle size={22} style={{ color: "rgba(255,255,255,0.2)" }} />
                  )}
                </div>
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: badge.earned ? "#fff" : "rgba(255,255,255,0.4)" }}>
                  {badge.label}
                </p>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{badge.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
