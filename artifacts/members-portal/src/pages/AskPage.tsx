import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { ALL_COURSES } from "@/lib/data";
import { Send, CheckCircle } from "lucide-react";

const PURPLE = "#982FF7";

export default function AskPage() {
  const { family } = useAuth();
  const [question, setQuestion] = useState("");
  const [courseId, setCourseId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!family || !question.trim()) return;
    setSubmitting(true);
    setError("");

    const { error: insertError } = await supabase.from("questions").insert({
      family_id: family.id,
      course_id: courseId || null,
      question_text: question.trim(),
    });

    if (insertError) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  if (!family) return null;

  return (
    <Layout>
      <div className="max-w-xl mx-auto px-4 md:px-8 py-10">
        <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: "0.75rem" }}>
          Ask a Question
        </h1>
        <p className="mb-10" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          Gabby will respond within 48 hours.
        </p>

        {submitted ? (
          <div
            className="rounded-lg p-10 text-center"
            style={{ backgroundColor: "rgba(0,212,200,0.06)", border: "1px solid rgba(0,212,200,0.2)" }}
          >
            <CheckCircle size={40} className="mx-auto mb-4" style={{ color: "#00D4C8" }} />
            <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.3rem", marginBottom: "0.75rem" }}>
              Question submitted.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}>
              Gabby will respond within 48 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); setQuestion(""); setCourseId(""); }}
              className="mt-6 text-xs uppercase tracking-wider"
              style={{ color: "#00D4C8", background: "none", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
            >
              Ask another question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>Which course is this about? (optional)</label>
              <select
                value={courseId}
                onChange={e => setCourseId(e.target.value)}
                style={inputStyle}
              >
                <option value="">General / Not course-specific</option>
                {ALL_COURSES.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label style={labelStyle}>Your question *</label>
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                required
                rows={6}
                placeholder="Type your question here..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {error && <p style={{ color: "#FF2D78", fontSize: "0.85rem" }}>{error}</p>}

            <button
              type="submit"
              disabled={submitting || !question.trim()}
              className="flex items-center justify-center gap-3"
              style={{
                backgroundColor: PURPLE,
                color: "#fff",
                border: "none",
                padding: "0.875rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.7 : 1,
              }}
            >
              <Send size={15} />
              {submitting ? "Submitting..." : "Submit Question"}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  padding: "0.75rem 1rem",
  fontFamily: "'Oswald', sans-serif",
  fontSize: "0.95rem",
  outline: "none",
  width: "100%",
};
