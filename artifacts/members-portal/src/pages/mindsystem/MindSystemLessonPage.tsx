import { useParams, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { MINDSYSTEM_COURSE } from "@/lib/data";
import { ChevronLeft } from "lucide-react";

const PURPLE = "#982FF7";

export default function MindSystemLessonPage() {
  const { family } = useAuth();
  const params = useParams<{
    track: string;
    section: string;
    subsection?: string;
    lessonId: string;
  }>();
  const [, navigate] = useLocation();
  if (!family) return null;

  const { track, section: sectionId, subsection: subSectionId, lessonId } = params;

  const trackData = MINDSYSTEM_COURSE.tracks.find((t) => t.id === track);
  const sectionData = trackData?.sections.find((s) => s.id === sectionId);
  if (!trackData || !sectionData) return null;

  let lesson = null;
  let backPath = "";
  let breadcrumb = "";

  if (subSectionId) {
    const subSection = sectionData.subSections?.find((ss) => ss.id === subSectionId);
    lesson = subSection?.lessons.find((l) => String(l.id) === lessonId);
    backPath = `/courses/mindsystem/${track}/${sectionId}/${subSectionId}`;
    breadcrumb = `${sectionData.title} · ${subSection?.title ?? ""}`;
  } else {
    lesson = sectionData.lessons?.find((l) => String(l.id) === lessonId);
    backPath = `/courses/mindsystem/${track}/${sectionId}`;
    breadcrumb = sectionData.title;
  }

  if (!lesson) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}>
          Lesson not found.
        </div>
      </Layout>
    );
  }

  const isPlaceholder = lesson.videoId === "PLACEHOLDER" || !lesson.videoId;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>
        {/* Back */}
        <button
          onClick={() => navigate(backPath)}
          className="flex items-center gap-2 mb-8"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: 0 }}
        >
          <ChevronLeft size={15} /> {breadcrumb}
        </button>

        {/* Breadcrumb */}
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
          MindSystem · {trackData.title} · {breadcrumb} · Lesson {lesson.id}
        </p>

        {/* Title */}
        <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.6rem,4vw,2.2rem)", marginBottom: "2rem" }}>
          {lesson.title}
        </h1>

        {/* Video */}
        {isPlaceholder ? (
          <div
            className="w-full flex flex-col items-center justify-center rounded-xl"
            style={{
              aspectRatio: "16/9",
              backgroundColor: "#111",
              border: `2px dashed ${PURPLE}40`,
            }}
          >
            <div
              className="flex items-center justify-center rounded-full mb-4"
              style={{ width: 64, height: 64, backgroundColor: `${PURPLE}20`, border: `2px solid ${PURPLE}50` }}
            >
              <span style={{ fontSize: "1.5rem" }}>▶</span>
            </div>
            <p className="text-sm uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
              Video coming soon
            </p>
            <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.2)" }}>
              YouTube ID will be added when content is ready
            </p>
          </div>
        ) : (
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{ aspectRatio: "16/9", backgroundColor: "#000" }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}?rel=0&modestbranding=1`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        )}

        {/* No comments section for MindSystem — instructional content */}
        <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button
            onClick={() => navigate(backPath)}
            className="flex items-center gap-2"
            style={{ background: "none", border: "none", color: PURPLE, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: 0 }}
          >
            <ChevronLeft size={14} /> Back to {breadcrumb}
          </button>
        </div>
      </div>
    </Layout>
  );
}
