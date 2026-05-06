import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { UpgradeModal } from "@/components/UpgradeModal";
import { ALL_COURSES, TIER_COLORS, STRATEGY_SESSION_LINK, type Course, type Lesson, type Topic } from "@/lib/data";
import { canAccessSection, canAccessLesson } from "@/lib/access";
import { Lock, Play, ChevronLeft, CheckCircle } from "lucide-react";

// ── Sub-topic selector (for "your-starting-point") ────────────────────────────
function SubTopicGrid({
  topics,
  course,
  userTier,
  onLockedClick,
}: {
  topics: Topic[];
  course: Course;
  userTier: string;
  onLockedClick: () => void;
}) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const hasAccess = canAccessSection(userTier, course.id);

  function handleTopicClick(topic: Topic) {
    if (!hasAccess) { onLockedClick(); return; }
    setSelectedTopic(topic);
  }

  if (selectedTopic) {
    return (
      <div>
        <button
          onClick={() => setSelectedTopic(null)}
          className="flex items-center gap-2 mb-8 text-xs uppercase tracking-wider"
          style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
        >
          <ChevronLeft size={14} /> Back to sections
        </button>
        <p
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.3rem",
            marginBottom: "1.5rem",
            color: TIER_COLORS[course.tier],
          }}
        >
          {selectedTopic.title}
        </p>
        <LessonList
          lessons={selectedTopic.lessons}
          courseId={course.id}
          userTier={userTier}
          onLockedClick={onLockedClick}
          topicId={selectedTopic.id}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {topics.map((topic) => (
        <div
          key={topic.id}
          onClick={() => handleTopicClick(topic)}
          className="flex items-center gap-4 p-5 rounded-lg cursor-pointer transition-all"
          style={{
            background: `linear-gradient(135deg, ${course.gradientFrom}22, ${course.gradientTo}11)`,
            border: `1px solid ${course.gradientFrom}40`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${course.gradientFrom}80`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${course.gradientFrom}40`;
          }}
        >
          {!hasAccess ? (
            <Lock size={16} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
          ) : (
            <Play size={16} style={{ color: TIER_COLORS[course.tier], flexShrink: 0 }} />
          )}
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: hasAccess ? "#fff" : "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {topic.title}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Lesson list ───────────────────────────────────────────────────────────────
function LessonList({
  lessons,
  courseId,
  userTier,
  onLockedClick,
  topicId,
}: {
  lessons: Lesson[];
  courseId: string;
  userTier: string;
  onLockedClick: () => void;
  topicId?: string;
}) {
  const [, navigate] = useLocation();
  const mazeComplete = false;

  return (
    <div className="flex flex-col gap-2">
      {lessons.map((lesson, index) => {
        const hasLessonAccess = canAccessLesson(userTier, courseId, index);
        const isTimeLocked = !!(lesson.timeLocked && !mazeComplete);
        const canOpen = hasLessonAccess && !isTimeLocked;

        function handleLessonClick() {
          if (!canAccessSection(userTier, courseId)) {
            onLockedClick();
            return;
          }
          if (!hasLessonAccess) {
            onLockedClick();
            return;
          }
          if (canOpen) {
            navigate(`/courses/${courseId}/lessons/${lesson.id}`);
          }
        }

        return (
          <div
            key={lesson.id}
            onClick={handleLessonClick}
            className="flex items-center gap-4 p-4 rounded-lg transition-all"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              cursor: canOpen || !hasLessonAccess ? "pointer" : "default",
              opacity: isTimeLocked ? 0.5 : 1,
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
              {isTimeLocked ? (
                <Lock size={14} style={{ color: "rgba(255,165,0,0.7)" }} />
              ) : hasLessonAccess ? (
                <Play size={14} style={{ color: "#982FF7" }} />
              ) : (
                <Lock size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-bold"
                style={{ color: canOpen ? "#fff" : "rgba(255,255,255,0.45)" }}
              >
                {lesson.title}
              </p>
              {isTimeLocked && lesson.lockMessage && (
                <p style={{ fontSize: "0.75rem", color: "rgba(255,165,0,0.8)", marginTop: "0.25rem" }}>
                  {lesson.lockMessage}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function CoursePage() {
  const { family } = useAuth();
  const [, params] = useRoute("/courses/:courseId");
  const [, navigate] = useLocation();
  const [showModal, setShowModal] = useState(false);

  const courseId = params?.courseId;
  const course = ALL_COURSES.find((c) => c.id === courseId) as Course | undefined;

  if (!family || !course) {
    return (
      <Layout>
        <div className="p-8 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
          Course not found.
        </div>
      </Layout>
    );
  }

  const hasAccess = canAccessSection(family.tier, course.id);
  const tierColor = TIER_COLORS[course.tier];
  const isYourStartingPoint = course.id === "your-starting-point";

  // Flat lessons from topics (for non-sub-topic courses)
  const flatLessons: Lesson[] = course.topics
    ? course.topics.flatMap((t) => t.lessons)
    : course.lessons ?? [];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <p
          className="text-xs uppercase tracking-widest mb-6"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <button
            onClick={() => navigate("/courses")}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.35)",
              cursor: "pointer",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              padding: 0,
            }}
          >
            Library
          </button>
          {" / "}
          <span style={{ color: "rgba(255,255,255,0.7)" }}>{course.title}</span>
        </p>

        {/* Gradient accent bar */}
        {course.gradientFrom && (
          <div
            className="mb-4 rounded-full"
            style={{
              width: 40,
              height: 3,
              background: `linear-gradient(90deg, ${course.gradientFrom}, ${course.gradientTo})`,
            }}
          />
        )}

        <h1
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "clamp(1.5rem,4vw,2rem)",
            marginBottom: "0.75rem",
          }}
        >
          {course.title}
        </h1>
        <p
          className="mb-10"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
        >
          {course.description}
        </p>

        {/* "Your Starting Point" - sub-topic selector */}
        {isYourStartingPoint && course.topics && (
          <SubTopicGrid
            topics={course.topics}
            course={course}
            userTier={family.tier}
            onLockedClick={() => setShowModal(true)}
          />
        )}

        {/* Video Game Library - flat topic + lesson list */}
        {!isYourStartingPoint && course.topics && course.topics.map((topic) => (
          <div key={topic.id} className="mb-8">
            <h2
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: tierColor }}
            >
              {topic.title}
            </h2>
            <LessonList
              lessons={topic.lessons}
              courseId={course.id}
              userTier={family.tier}
              onLockedClick={() => setShowModal(true)}
              topicId={topic.id}
            />
          </div>
        ))}

        {/* Flat lessons (MindSystem / simple courses) */}
        {course.lessons && (
          <LessonList
            lessons={course.lessons}
            courseId={course.id}
            userTier={family.tier}
            onLockedClick={() => setShowModal(true)}
          />
        )}

        {/* End-of-course upsell for courtside/free (paid MindSystem) */}
        {hasAccess && (family.tier === "free" || family.tier === "courtside") && (
          <div
            className="mt-16 p-8 text-center rounded-lg"
            style={{
              backgroundColor: "rgba(152,47,247,0.08)",
              border: "1px solid rgba(152,47,247,0.25)",
            }}
          >
            <CheckCircle
              size={32}
              className="mx-auto mb-4"
              style={{ color: "#982FF7" }}
            />
            <p
              className="mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.3rem" }}
            >
              Ready to take this further?
            </p>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
            >
              MindSystem gives your family the full compass - a shared system for the
              athlete, the parent, and everyone navigating this together.
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
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
              }}
            >
              Book a $250 Strategy Session
            </a>
          </div>
        )}
      </div>

      {showModal && <UpgradeModal onClose={() => setShowModal(false)} />}
    </Layout>
  );
}
