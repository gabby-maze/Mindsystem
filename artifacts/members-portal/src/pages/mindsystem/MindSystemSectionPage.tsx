import { useParams, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { MINDSYSTEM_COURSE, type MSSection, type MSSubSection } from "@/lib/data";
import { ChevronLeft, ChevronRight, Play, Download } from "lucide-react";

const PINK = "#FF2D78";
const PURPLE = "#982FF7";

export default function MindSystemSectionPage() {
  const { family } = useAuth();
  const { track, section: sectionId, subsection: subSectionId } = useParams<{
    track: string;
    section: string;
    subsection?: string;
  }>();
  const [, navigate] = useLocation();
  if (!family) return null;

  const trackData = MINDSYSTEM_COURSE.tracks.find((t) => t.id === track);
  const sectionData = trackData?.sections.find((s) => s.id === sectionId);

  if (!trackData || !sectionData) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}>
          Section not found.
        </div>
      </Layout>
    );
  }

  // If subsection param provided - show that sub-section's lessons
  if (subSectionId) {
    const subSection = sectionData.subSections?.find((ss) => ss.id === subSectionId);
    if (!subSection) {
      return (
        <Layout>
          <div className="max-w-4xl mx-auto px-8 py-20 text-center" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}>
            Sub-section not found.
          </div>
        </Layout>
      );
    }
    return <LessonList
      track={track}
      section={sectionData}
      subSection={subSection}
      backLabel={sectionData.title}
      backPath={`/courses/mindsystem/${track}/${sectionId}`}
      navigate={navigate}
    />;
  }

  // Section has sub-sections (Execute) - show sub-section cards
  if (sectionData.subSections) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>
          <button
            onClick={() => navigate(`/courses/mindsystem/${track}`)}
            className="flex items-center gap-2 mb-8"
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: 0 }}
          >
            <ChevronLeft size={15} /> {trackData.title} Track
          </button>
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
              MindSystem · {trackData.title} · {sectionData.title}
            </p>
            <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
              {sectionData.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectionData.subSections.map((ss: MSSubSection, i) => (
              <div
                key={ss.id}
                onClick={() => navigate(`/courses/mindsystem/${track}/${sectionId}/${ss.id}`)}
                className="flex items-center justify-between px-5 py-4 rounded-lg cursor-pointer"
                style={{
                  background: `${PURPLE}15`,
                  border: `1px solid ${PURPLE}40`,
                  transition: "transform 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; }}
              >
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: PURPLE }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-bold uppercase tracking-wide" style={{ fontSize: "0.95rem", color: "#fff" }}>
                    {ss.title}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", marginTop: "0.2rem" }}>
                    {ss.lessons.length} {ss.lessons.length === 1 ? "lesson" : "lessons"}
                  </p>
                </div>
                <ChevronRight size={16} style={{ color: PURPLE, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  // Regular section - show lesson cards
  return <LessonList
    track={track}
    section={sectionData}
    backLabel={`${trackData.title} Track`}
    backPath={`/courses/mindsystem/${track}`}
    navigate={navigate}
  />;
}

function LessonList({
  track,
  section,
  subSection,
  backLabel,
  backPath,
  navigate,
}: {
  track: string;
  section: MSSection;
  subSection?: MSSubSection;
  backLabel: string;
  backPath: string;
  navigate: (to: string) => void;
}) {
  const lessons = subSection ? subSection.lessons : (section.lessons ?? []);
  const basePath = subSection
    ? `/courses/mindsystem/${track}/${section.id}/${subSection.id}`
    : `/courses/mindsystem/${track}/${section.id}`;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>
        <button
          onClick={() => navigate(backPath)}
          className="flex items-center gap-2 mb-8"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: 0 }}
        >
          <ChevronLeft size={15} /> {backLabel}
        </button>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
            MindSystem · {subSection ? `${section.title} · ${subSection.title}` : section.title}
          </p>
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            {subSection ? subSection.title : section.title}
          </h1>
          {!subSection && section.workbookUrl && section.workbookUrl !== "TODO_MINDSET_WORKBOOK_URL" && (
            <a
              href={section.workbookUrl}
              download
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg"
              style={{
                background: `${PURPLE}22`,
                border: `1px solid ${PURPLE}55`,
                color: "#fff",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${PURPLE}44`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${PURPLE}22`; }}
            >
              <Download size={14} style={{ color: PURPLE }} />
              Download Work Book
            </a>
          )}
          {!subSection && section.benchGuideUrl && (
            <a
              href={`${import.meta.env.BASE_URL}${section.benchGuideUrl}`}
              download
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-lg"
              style={{
                background: `${PINK}15`,
                border: `1px solid ${PINK}50`,
                color: "#fff",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${PINK}30`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${PINK}15`; }}
            >
              <Download size={14} style={{ color: PINK }} />
              Bench Athlete Guide — Download PDF
            </a>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {lessons.map((lesson, i) => (
            <div
              key={lesson.id}
              onClick={() => navigate(`${basePath}/lessons/${lesson.id}`)}
              className="relative rounded-xl overflow-hidden cursor-pointer flex flex-col items-center justify-center py-10 px-6 text-center gap-3"
              style={{
                background: i === 0
                  ? `linear-gradient(135deg, ${PURPLE}, ${PINK})`
                  : `linear-gradient(135deg, ${PINK}, #c42bee)`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />
              <div className="relative z-10">
                <div className="flex items-center justify-center rounded-full mb-3 mx-auto"
                  style={{ width: 40, height: 40, backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                  <Play size={14} style={{ color: "#fff" }} />
                </div>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Lesson {lesson.id}
                </p>
                <p className="font-bold uppercase tracking-wide" style={{ fontSize: "0.95rem", color: "#fff" }}>
                  {lesson.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
