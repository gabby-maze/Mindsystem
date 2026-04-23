import { useRoute, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { ALL_COURSES, TIER_COLORS, hasTierAccess, STRATEGY_SESSION_LINK, type Course, type Lesson } from "@/lib/data";
import { Lock, CheckCircle, Play } from "lucide-react";

function LessonRow({ lesson, courseId, userCanAccess, isLocked }: {
  lesson: Lesson;
  courseId: string;
  userCanAccess: boolean;
  isLocked: boolean;
}) {
  const [, navigate] = useLocation();
  const canOpen = userCanAccess && !isLocked;

  return (
    <div
      onClick={() => canOpen && navigate(`/courses/${courseId}/lessons/${lesson.id}`)}
      className="flex items-center gap-4 p-4 rounded-lg transition-all"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        cursor: canOpen ? "pointer" : "default",
        opacity: canOpen ? 1 : 0.55,
      }}
    >
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 36,
          height: 36,
          backgroundColor: canOpen ? "rgba(152,47,247,0.15)" : "rgba(255,255,255,0.05)",
        }}
      >
        {isLocked ? (
          <Lock size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
        ) : userCanAccess ? (
          <Play size={14} style={{ color: "#982FF7" }} />
        ) : (
          <Lock size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold" style={{ color: canOpen ? "#fff" : "rgba(255,255,255,0.4)" }}>
          {lesson.title}
        </p>
        {lesson.timeLocked && isLocked && (
          <p style={{ fontSize: "0.75rem", color: "rgba(255,165,0,0.8)", marginTop: "0.25rem" }}>
            {lesson.lockMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CoursePage() {
  const { family } = useAuth();
  const [, params] = useRoute("/courses/:courseId");
  const courseId = params?.courseId;

  const course = ALL_COURSES.find(c => c.id === courseId) as Course | undefined;
  if (!family || !course) return <Layout><div className="p-8 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>Course not found.</div></Layout>;

  const hasAccess = hasTierAccess(family.tier, course.tier);
  const tierColor = TIER_COLORS[course.tier];
  const mazeComplete = family.maze_model_complete ?? false;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
          <a href="/members-portal/courses" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Courses</a>
          {" / "}
          <span style={{ color: "rgba(255,255,255,0.7)" }}>{course.title}</span>
        </p>

        {/* Header */}
        <div className="mb-3" style={{ width: 40, height: 3, backgroundColor: tierColor }} />
        <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.5rem,4vw,2rem)", marginBottom: "1rem" }}>
          {course.title}
        </h1>
        <p className="mb-10" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{course.description}</p>

        {/* No access state */}
        {!hasAccess && (
          <div className="rounded-lg p-8 text-center mb-10" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Lock size={32} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.3)" }} />
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              This course requires a higher tier. Book a strategy session to find the right plan for your family.
            </p>
            <a
              href={STRATEGY_SESSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#982FF7", color: "#fff", padding: "0.75rem 1.5rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none" }}
            >
              Book a Strategy Session
            </a>
          </div>
        )}

        {/* Topics & lessons */}
        {course.topics && course.topics.map(topic => (
          <div key={topic.id} className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: tierColor }}>
              {topic.title}
            </h2>
            <div className="flex flex-col gap-2">
              {topic.lessons.map(lesson => (
                <LessonRow
                  key={lesson.id}
                  lesson={lesson}
                  courseId={course.id}
                  userCanAccess={hasAccess || !!lesson.free}
                  isLocked={!!(lesson.timeLocked && !mazeComplete)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Flat lessons (MindSystem courses) */}
        {course.lessons && (
          <div className="flex flex-col gap-2">
            {course.lessons.map(lesson => (
              <LessonRow
                key={lesson.id}
                lesson={lesson}
                courseId={course.id}
                userCanAccess={hasAccess}
                isLocked={!!(lesson.timeLocked && !mazeComplete)}
              />
            ))}
          </div>
        )}

        {/* End-of-course upsell for courtside/free tiers */}
        {hasAccess && (family.tier === "free" || family.tier === "courtside") && (
          <div
            className="mt-16 p-8 text-center rounded-lg"
            style={{ backgroundColor: "rgba(152,47,247,0.08)", border: "1px solid rgba(152,47,247,0.25)" }}
          >
            <CheckCircle size={32} className="mx-auto mb-4" style={{ color: "#982FF7" }} />
            <p className="mb-2" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.3rem" }}>
              Ready to take this further?
            </p>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              MindSystem gives your family the full compass — a shared system for the athlete, the parent, and everyone navigating this together.
            </p>
            <a
              href={STRATEGY_SESSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#982FF7", color: "#fff", padding: "0.875rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none" }}
            >
              Book a $250 Strategy Session
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
