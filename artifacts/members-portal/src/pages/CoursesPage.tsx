import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { TIER_COLORS, TIER_LABELS, COURTSIDE_COURSES, MINDSYSTEM_COURSES, hasTierAccess, type Tier } from "@/lib/data";
import { Lock } from "lucide-react";

function CourseRow({ course, userTier }: { course: any; userTier: Tier }) {
  const [, navigate] = useLocation();
  const hasAccess = hasTierAccess(userTier, course.tier);
  const tierColor = TIER_COLORS[course.tier as Tier];

  return (
    <div
      onClick={() => hasAccess && navigate(`/courses/${course.id}`)}
      className="flex items-center gap-5 p-5 rounded-lg transition-all"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        cursor: hasAccess ? "pointer" : "default",
        opacity: hasAccess ? 1 : 0.55,
      }}
    >
      <div style={{ width: 4, height: 44, backgroundColor: tierColor, borderRadius: 2, flexShrink: 0 }} />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: hasAccess ? "#fff" : "rgba(255,255,255,0.4)" }}>
          {course.title}
        </h3>
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>{course.description}</p>
      </div>
      {!hasAccess ? (
        <div className="flex items-center gap-2 shrink-0">
          <Lock size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
          <span className="text-xs uppercase tracking-wider hidden md:block" style={{ color: tierColor }}>
            {TIER_LABELS[course.tier as Tier]}
          </span>
        </div>
      ) : (
        <span className="text-xs uppercase tracking-wider shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>
          Open →
        </span>
      )}
    </div>
  );
}

export default function CoursesPage() {
  const { family } = useAuth();
  if (!family) return null;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: "2.5rem" }}>
          Courses
        </h1>

        <section className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Courtside Conversations
          </p>
          <div className="flex flex-col gap-3">
            {COURTSIDE_COURSES.map(c => (
              <CourseRow key={c.id} course={c} userTier={family.tier} />
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            MindSystem
          </p>
          <div className="flex flex-col gap-3">
            {MINDSYSTEM_COURSES.map(c => (
              <CourseRow key={c.id} course={c} userTier={family.tier} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
