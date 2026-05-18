import { useParams, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { COURTSIDE_COURSES } from "@/lib/data";
import { canAccessVGLLesson } from "@/lib/access";
import { ChevronLeft, Lock } from "lucide-react";
import PdfSlideViewer from "@/pages/nutrition/PdfSlideViewer";

const TEAL = "#00D4C8";
const BLUE = "#2B8BF5";

export default function VGLLessonPage() {
  const { family } = useAuth();
  const { topicId, lessonId } = useParams<{ topicId: string; lessonId: string }>();
  const [, navigate] = useLocation();
  if (!family) return null;

  const vgl = COURTSIDE_COURSES.find((c) => c.id === "video-game-library");
  const topic = vgl?.topics?.find((t) => t.id === topicId);
  const lesson = topic?.lessons.find((l) => String(l.id) === lessonId);

  const backPath = `/courses/video-game-library/${topicId}`;

  if (!topic || !lesson) {
    return (
      <Layout>
        <div
          className="max-w-4xl mx-auto px-8 py-20 text-center"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}
        >
          Lesson not found.
        </div>
      </Layout>
    );
  }

  const accessible = canAccessVGLLesson(family.tier, lesson);
  const hasPdf = !!lesson.pdfUrl;
  const isPlaceholder = !hasPdf && (lesson.youtubeId === "PLACEHOLDER" || !lesson.youtubeId);

  if (!accessible) {
    return (
      <Layout>
        <div
          className="max-w-4xl mx-auto px-4 md:px-8 py-10"
          style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}
        >
          <button
            onClick={() => navigate(backPath)}
            className="flex items-center gap-2 mb-8"
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.4)",
              cursor: "pointer",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: 0,
            }}
          >
            <ChevronLeft size={15} /> {topic.title}
          </button>
          <div
            className="flex flex-col items-center justify-center rounded-xl py-20 px-8 text-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full mb-6"
              style={{
                width: 64,
                height: 64,
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Lock size={24} style={{ color: "rgba(255,255,255,0.3)" }} />
            </div>
            <h2
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "1.4rem",
                marginBottom: "0.75rem",
              }}
            >
              {lesson.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", maxWidth: 400, lineHeight: 1.7 }}>
              This lesson is available with a Courtside Conversation subscription or any MindSystem training program.
            </p>
            <button
              onClick={() => navigate(backPath)}
              className="mt-8"
              style={{
                background: "none",
                border: "none",
                color: TEAL,
                cursor: "pointer",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Back to {topic.title}
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className={`mx-auto py-10 ${hasPdf ? "max-w-6xl px-2 md:px-4" : "max-w-4xl px-4 md:px-8"}`}
        style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}
      >
        <button
          onClick={() => navigate(backPath)}
          className="flex items-center gap-2 mb-8"
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: 0,
          }}
        >
          <ChevronLeft size={15} /> {topic.title}
        </button>

        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Video Game Library · {topic.title}
        </p>

        <h1
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "clamp(1.6rem,4vw,2.2rem)",
            marginBottom: "2rem",
          }}
        >
          {lesson.title}
        </h1>

        {lesson.free && (
          <div className="mb-4">
            <span
              className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${TEAL}20`,
                color: TEAL,
                border: `1px solid ${TEAL}40`,
                fontSize: "0.65rem",
              }}
            >
              Free
            </span>
          </div>
        )}

        {hasPdf ? (
          <PdfSlideViewer
            pdfUrl={lesson.pdfUrl!}
            startPage={lesson.pdfStartPage}
            endPage={lesson.pdfEndPage}
          />
        ) : isPlaceholder ? (
          <div
            className="w-full rounded-xl"
            style={{ aspectRatio: "16/9", backgroundColor: "#111" }}
          />
        ) : (
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{ aspectRatio: "16/9", backgroundColor: "#000" }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0&modestbranding=1`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        )}

        <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button
            onClick={() => navigate(backPath)}
            className="flex items-center gap-2"
            style={{
              background: "none",
              border: "none",
              color: TEAL,
              cursor: "pointer",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: 0,
            }}
          >
            <ChevronLeft size={14} /> Back to {topic.title}
          </button>
        </div>
      </div>
    </Layout>
  );
}
