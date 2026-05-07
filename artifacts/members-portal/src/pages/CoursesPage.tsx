import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { UpgradeModal, MINDSYSTEM_MODAL_PROPS } from "@/components/UpgradeModal";
import { COURTSIDE_COURSES, MINDSYSTEM_COURSE, type Course } from "@/lib/data";
import { canAccessSection } from "@/lib/access";
import { Lock } from "lucide-react";

type ModalContext = "courtside" | "mindsystem" | null;

function SectionCard({
  course,
  userTier,
  onLockedClick,
}: {
  course: Course;
  userTier: string;
  onLockedClick: () => void;
}) {
  const [, navigate] = useLocation();
  const isVideoGame = course.id === "video-game-library";
  const hasAccess = canAccessSection(userTier, course.id);

  function handleClick() {
    if (hasAccess) {
      navigate(course.linkTo ?? `/courses/${course.id}`);
    } else {
      onLockedClick();
    }
  }

  return (
    <div
      onClick={handleClick}
      className="relative rounded-lg overflow-hidden cursor-pointer"
      style={{
        aspectRatio: "4/3",
        background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75) 100%)" }} />

      <div className="absolute top-3 right-3">
        {!hasAccess && !isVideoGame && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
            <Lock size={11} style={{ color: "rgba(255,255,255,0.7)" }} />
          </div>
        )}
        {userTier === "free" && isVideoGame && (
          <div className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: "#00D4C8", color: "#0a0a0a", fontSize: "0.65rem" }}>
            1 Free Lesson
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {course.title}
        </p>
      </div>
    </div>
  );
}

function MindSystemCard({ userTier, onLockedClick }: { userTier: string; onLockedClick: () => void }) {
  const [, navigate] = useLocation();
  const hasAccess = canAccessSection(userTier, "mindsystem");

  function handleClick() {
    if (hasAccess) navigate("/courses/mindsystem");
    else onLockedClick();
  }

  return (
    <div
      onClick={handleClick}
      className="relative rounded-lg overflow-hidden cursor-pointer"
      style={{
        aspectRatio: "4/3",
        background: `linear-gradient(135deg, ${MINDSYSTEM_COURSE.gradientFrom}, ${MINDSYSTEM_COURSE.gradientTo})`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75) 100%)" }} />

      <div className="absolute top-3 right-3">
        {!hasAccess && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
            <Lock size={11} style={{ color: "rgba(255,255,255,0.7)" }} />
            <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>MindSystem Only</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          MindSystem
        </p>
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>
          Athlete + Parent journal training
        </p>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const { family } = useAuth();
  const [modalContext, setModalContext] = useState<ModalContext>(null);

  if (!family) return null;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-10">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: "0.5rem" }}>
            Your Training Library
          </h1>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, color: "rgba(255,255,255,0.45)", fontSize: "0.95rem" }}>
            Choose a section to begin.
          </p>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))" }}>
          {COURTSIDE_COURSES.map((course) => (
            <SectionCard
              key={course.id}
              course={course}
              userTier={family.tier}
              onLockedClick={() => setModalContext("courtside")}
            />
          ))}
          <MindSystemCard
            userTier={family.tier}
            onLockedClick={() => setModalContext("mindsystem")}
          />
        </div>
      </div>

      {modalContext === "courtside" && (
        <UpgradeModal onClose={() => setModalContext(null)} />
      )}
      {modalContext === "mindsystem" && (
        <UpgradeModal
          onClose={() => setModalContext(null)}
          {...MINDSYSTEM_MODAL_PROPS}
        />
      )}
    </Layout>
  );
}
