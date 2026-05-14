import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { hasTierAccess } from "@/lib/data";
import PdfSlideViewer from "@/pages/nutrition/PdfSlideViewer";
import { Lock } from "lucide-react";

const PURPLE = "#982FF7";

export default function SummerPage() {
  const { family } = useAuth();

  if (!family) return null;

  const hasAccess = hasTierAccess(family.tier, "courtside");

  if (!hasAccess) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <Lock size={32} style={{ color: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }} />
          <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.8rem", color: "#fff", marginBottom: "0.75rem" }}>
            Summer Camp Season
          </h2>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", maxWidth: "400px" }}>
            The Summer guide is available on Courtside Conversations and above.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">

        {/* Page header */}
        <div className="text-center mb-10">
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            Breakthrough Track · Your Starting Point
          </p>
          <h1 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "clamp(1.6rem,4vw,2.4rem)",
            color: "#fff",
            marginBottom: "0.75rem",
          }}>
            Summer Camp Season
          </h1>
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Rest is not the enemy of development. Neglect is.
          </p>
        </div>

        {/* Accent line */}
        <div style={{
          height: "3px",
          width: "48px",
          background: `linear-gradient(90deg, ${PURPLE}, #2B8BF5)`,
          margin: "0 auto 2.5rem",
          borderRadius: "2px",
        }} />

        {/* Slide deck */}
        <div className="max-w-4xl mx-auto">
          <PdfSlideViewer pdfUrl={`${import.meta.env.BASE_URL}summer-guide.pdf`} />
        </div>

      </div>
    </Layout>
  );
}
