import { useRoute, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { ALL_COURSES, STRATEGY_SESSION_LINK, type Lesson } from "@/lib/data";
import { supabase } from "@/lib/supabase";
import { CheckCircle, ArrowLeft, ArrowRight, Lock, ExternalLink, Download } from "lucide-react";
import LessonQuestionBox from "@/components/LessonQuestionBox";

const PURPLE = "#982FF7";
const COURTSIDE_UPGRADE_LINK = "TODO_COURTSIDE_GHL_LINK"; // replace when GHL page is built

function YouTubeEmbed({ youtubeId }: { youtubeId: string }) {
  if (youtubeId === "PLACEHOLDER") {
    return (
      <div
        className="w-full flex items-center justify-center rounded-lg"
        style={{ aspectRatio: "16/9", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
      </div>
    );
  }
  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Lesson video"
      />
    </div>
  );
}

export default function LessonPage() {
  const { family } = useAuth();
  const [, params] = useRoute("/courses/:courseId/lessons/:lessonId");
  const [, navigate] = useLocation();
  const [completed, setCompleted] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const courseId = params?.courseId ?? "";
  const lessonId = params?.lessonId ?? "";

  const course = ALL_COURSES.find(c => c.id === courseId);
  let lesson: Lesson | undefined;
  let allLessons: Lesson[] = [];

  if (course) {
    if (course.topics) {
      for (const topic of course.topics) {
        allLessons.push(...topic.lessons);
      }
    } else if (course.lessons) {
      allLessons = course.lessons;
    }
    lesson = allLessons.find(l => String(l.id) === String(lessonId));
  }

  const currentIndex = allLessons.findIndex(l => String(l.id) === String(lessonId));
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  useEffect(() => {
    if (!family || !course || !lesson) return;
    loadComments();
    checkCompleted();
  }, [family, courseId, lessonId]);

  async function loadComments() {
    const { data } = await supabase
      .from("comments")
      .select("*, families(family_name)")
      .eq("course_id", courseId)
      .eq("lesson_id", lessonId)
      .order("created_at", { ascending: false });
    setComments(data ?? []);
  }

  async function checkCompleted() {
    if (!family) return;
    const { data } = await supabase
      .from("progress")
      .select("id")
      .eq("family_id", family.id)
      .eq("course_id", courseId)
      .eq("lesson_id", lessonId)
      .maybeSingle();
    setCompleted(!!data);
  }

  async function markComplete() {
    if (!family) return;
    await supabase.from("progress").upsert({
      family_id: family.id,
      course_id: courseId,
      lesson_id: lessonId,
    }, { onConflict: "family_id,course_id,lesson_id" });
    setCompleted(true);
  }

  async function submitComment() {
    if (!family || !comment.trim()) return;
    setSubmitting(true);
    await supabase.from("comments").insert({
      family_id: family.id,
      course_id: courseId,
      lesson_id: lessonId,
      comment_text: comment.trim(),
    });
    setComment("");
    await loadComments();
    setSubmitting(false);
  }

  if (!family) return null;
  if (!course || !lesson) {
    return (
      <Layout>
        <div className="p-8 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>Lesson not found.</div>
      </Layout>
    );
  }

  const isTimeLocked = lesson.timeLocked && !family.maze_model_complete;

  // Upgrade CTA logic
  const isLastFreeLesson =
    family.tier === "free" && lesson.free === true && (!nextLesson || nextLesson.free === false);
  const isLastCourtsideLesson =
    family.tier === "courtside" && !nextLesson && course.tier === "courtside";

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
          <button onClick={() => navigate(`/courses/${courseId}`)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.35)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", padding: 0 }}>
            {course.title}
          </button>
          {" / "}
          <span style={{ color: "rgba(255,255,255,0.7)" }}>{lesson.title}</span>
        </p>

        {/* Time-locked state */}
        {isTimeLocked ? (
          <div className="rounded-lg p-10 text-center" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Lock size={36} className="mx-auto mb-5" style={{ color: "rgba(255,165,0,0.6)" }} />
            <p className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "rgba(255,165,0,0.9)" }}>
              This lesson is time-locked
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              {lesson.lockMessage}
            </p>
          </div>
        ) : (
          <>
            {/* Video */}
            <div className="mb-8">
              <YouTubeEmbed youtubeId={lesson.youtubeId ?? "PLACEHOLDER"} />
            </div>

            {/* Worksheet download — shown when the lesson has an attached PDF */}
            {lesson.downloadUrl && (
              <div className="mb-8">
                <a
                  href={lesson.downloadUrl}
                  download
                  className="inline-flex items-center gap-3"
                  style={{
                    backgroundColor: "rgba(0,212,200,0.1)",
                    border: "1px solid rgba(0,212,200,0.35)",
                    color: "#00D4C8",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                  }}
                >
                  <Download size={15} />
                  {lesson.downloadLabel ?? "Download Worksheet"}
                </a>
              </div>
            )}

            <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.3rem,3vw,1.8rem)", marginBottom: "1rem" }}>
              {lesson.title}
            </h1>

            {/* Mark complete */}
            <button
              onClick={markComplete}
              disabled={completed}
              className="flex items-center gap-3 px-6 py-3 rounded-lg mb-10 transition-all"
              style={{
                backgroundColor: completed ? "rgba(0,212,200,0.1)" : PURPLE,
                border: completed ? "1px solid rgba(0,212,200,0.3)" : "none",
                color: completed ? "#00D4C8" : "#fff",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                cursor: completed ? "default" : "pointer",
              }}
            >
              <CheckCircle size={16} />
              {completed ? "Completed" : "Mark as Complete"}
            </button>

            {/* Upgrade CTA - Free tier at end of last free lesson */}
            {isLastFreeLesson && (
              <div
                className="rounded-lg p-8 mb-8 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,200,0.1), rgba(43,139,245,0.07))",
                  border: "1px solid rgba(0,212,200,0.25)",
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(0,212,200,0.7)" }}>
                  The rest of this series is inside Courtside
                </p>
                <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                  5 deep-dive video series + monthly live calls
                </p>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  $30/month - cancel any time.
                </p>
                <a
                  href={COURTSIDE_UPGRADE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{
                    backgroundColor: "#00D4C8",
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
                  Join Courtside - $30/mo <ExternalLink size={12} />
                </a>
              </div>
            )}

            {/* Upgrade CTA - Courtside tier at end of last Courtside lesson */}
            {isLastCourtsideLesson && (
              <div
                className="rounded-lg p-8 mb-8 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(152,47,247,0.12), rgba(255,45,120,0.07))",
                  border: "1px solid rgba(152,47,247,0.25)",
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(152,47,247,0.7)" }}>
                  Ready for the full framework?
                </p>
                <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                  MindSystem gives your family a compass for the whole season
                </p>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Physical journals, cohort calls, and 12 weeks of live support from Gabby.
                </p>
                <a
                  href={STRATEGY_SESSION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{
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
            )}

            {/* Prev / Next */}
            <div className="flex justify-between mb-12">
              {prevLesson ? (
                <button
                  onClick={() => navigate(`/courses/${courseId}/lessons/${prevLesson.id}`)}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
                >
                  <ArrowLeft size={14} /> Previous
                </button>
              ) : <div />}
              {nextLesson && (
                <button
                  onClick={() => navigate(`/courses/${courseId}/lessons/${nextLesson.id}`)}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider"
                  style={{ color: "#982FF7", background: "none", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
                >
                  Next <ArrowRight size={14} />
                </button>
              )}
            </div>

            {/* Ask Gabby */}
            <div className="mb-10">
              <LessonQuestionBox
                courseId={courseId}
                lessonId={lessonId}
                lessonTitle={lesson.title}
                accentColor={PURPLE}
              />
            </div>

            {/* Comments */}
            <div>
              <h2 className="text-sm uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                Comments
              </h2>

              <div className="flex flex-col gap-2 mb-5">
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Leave a comment or question..."
                  rows={3}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "0.75rem 1rem",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.95rem",
                    resize: "vertical",
                    outline: "none",
                    width: "100%",
                  }}
                />
                <button
                  onClick={submitComment}
                  disabled={submitting || !comment.trim()}
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: PURPLE,
                    color: "#fff",
                    border: "none",
                    padding: "0.6rem 1.5rem",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? "Posting..." : "Post Comment"}
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {comments.map(c => (
                  <div
                    key={c.id}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold" style={{ color: c.is_gabby_reply ? "#FF2D78" : "#fff" }}>
                        {c.is_gabby_reply ? "Gabby Cole" : (c.families?.family_name ?? "Member")}
                      </span>
                      {c.is_gabby_reply && (
                        <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(255,45,120,0.15)", color: "#FF2D78" }}>
                          Gabby
                        </span>
                      )}
                      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                        {new Date(c.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{c.comment_text}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
