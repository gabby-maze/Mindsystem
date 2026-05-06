import { useState, useEffect } from "react";
import { CheckCircle, Circle, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { Family } from "@/lib/auth";

const PURPLE = "#982FF7";
const TEAL = "#00D4C8";

const STEPS = [
  {
    key: "welcome_checklist",
    when: "Today",
    action: "Complete welcome checklist",
    detail: "Submit shipping address + book your onboarding call",
    unlocks: "Your journal ships",
  },
  {
    key: "onboarding_call",
    when: "Week 1",
    action: "Book onboarding call",
    detail: "Within 7 days of purchase - opens program orientation",
    unlocks: "Program orientation",
  },
  {
    key: "maze_model_begin",
    when: "Journal arrives",
    action: "Begin MAZE Model",
    detail: "Mindset → Analyze → Zero In → Execute",
    unlocks: "Unlocks group calls",
  },
  {
    key: "maze_completion_form",
    when: "MAZE complete",
    action: "Submit MAZE completion form",
    detail: "Athlete submits their outputs to Gabby",
    unlocks: "Parent journal process",
  },
  {
    key: "parent_ecosystem_form",
    when: "After form",
    action: "Parent fills ecosystem form",
    detail: "Parent completes their companion form",
    unlocks: "Journal personalization",
  },
  {
    key: "book_first_calls",
    when: "Journal ships",
    action: "Book first calls",
    detail: "Athlete call first · Parent call second",
    unlocks: "12-week program begins",
  },
  {
    key: "active_season",
    when: "Week 3+",
    action: "Active season begins",
    detail: "Game + Practice pages go live, bi-weekly calls active",
    unlocks: "Bi-weekly calls",
  },
  {
    key: "midseason_checkin",
    when: "Week 6",
    action: "Mid-season check-in",
    detail: "Complete survey before your check-in call",
    unlocks: "Reflection section",
  },
  {
    key: "end_of_season",
    when: "Week 12",
    action: "End-of-season close",
    detail: "Survey + offboarding decision",
    unlocks: "Season complete",
  },
];

export function ChecklistWidget({ family }: { family: Family }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState<string | null>(null);

  useEffect(() => {
    loadProgress();
  }, [family.id]);

  async function loadProgress() {
    const { data } = await supabase
      .from("checklist_progress")
      .select("step_key")
      .eq("family_id", family.id);
    setCompleted(new Set((data ?? []).map((r: { step_key: string }) => r.step_key)));
    setLoading(false);
  }

  async function completeStep(key: string, stepIndex: number) {
    const firstUncompleted = STEPS.findIndex((s) => !completed.has(s.key));
    if (stepIndex !== firstUncompleted) return;
    setMarking(key);
    await supabase.from("checklist_progress").insert({
      family_id: family.id,
      step_key: key,
    });
    setCompleted((prev) => new Set([...prev, key]));
    setMarking(null);
  }

  if (loading) return null;

  const completedCount = completed.size;
  const totalCount = STEPS.length;
  const pct = (completedCount / totalCount) * 100;
  const firstUncompleted = STEPS.findIndex((s) => !completed.has(s.key));

  return (
    <div
      className="rounded-lg p-6 mb-8"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          className="text-sm uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Your Journey
        </h2>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          {completedCount}/{totalCount} complete
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="w-full rounded-full mb-6"
        style={{ height: 3, backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="rounded-full transition-all duration-500"
          style={{ height: 3, width: `${pct}%`, backgroundColor: PURPLE }}
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-2">
        {STEPS.map((step, i) => {
          const isDone = completed.has(step.key);
          const isActive = i === firstUncompleted;
          const isLocked = i > firstUncompleted;

          return (
            <div
              key={step.key}
              onClick={() => isActive && !marking && completeStep(step.key, i)}
              className="flex items-start gap-4 p-4 rounded-lg transition-all"
              style={{
                backgroundColor: isDone
                  ? "rgba(0,212,200,0.04)"
                  : isActive
                  ? "rgba(152,47,247,0.08)"
                  : "transparent",
                border: `1px solid ${
                  isDone
                    ? "rgba(0,212,200,0.12)"
                    : isActive
                    ? "rgba(152,47,247,0.25)"
                    : "rgba(255,255,255,0.04)"
                }`,
                cursor: isActive ? "pointer" : "default",
                opacity: isLocked ? 0.4 : 1,
              }}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle size={18} style={{ color: TEAL }} />
                ) : isLocked ? (
                  <Lock size={18} style={{ color: "rgba(255,255,255,0.2)" }} />
                ) : (
                  <Circle
                    size={18}
                    style={{ color: marking === step.key ? TEAL : PURPLE }}
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p
                    className="text-sm font-bold"
                    style={{
                      color: isDone
                        ? "rgba(255,255,255,0.4)"
                        : isActive
                        ? "#fff"
                        : "rgba(255,255,255,0.35)",
                      textDecoration: isDone ? "line-through" : "none",
                    }}
                  >
                    {marking === step.key ? "Marking complete..." : step.action}
                  </p>
                  <span
                    className="text-xs shrink-0 mt-0.5 uppercase tracking-wider"
                    style={{
                      color: isActive
                        ? PURPLE
                        : isDone
                        ? "rgba(0,212,200,0.6)"
                        : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {step.when}
                  </span>
                </div>

                <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {step.detail}
                </p>

                {isActive && (
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.22)" }}>
                    Unlocks: {step.unlocks}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
