import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

const PINK = "#FF2D78";
const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_QUESTION_WEBHOOK_URL ?? "";

interface Props {
  courseId: string;
  lessonId: string;
  lessonTitle: string;
  accentColor?: string;
}

export default function LessonQuestionBox({ courseId, lessonId, lessonTitle, accentColor = PINK }: Props) {
  const { family } = useAuth();
  const [question, setQuestion] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!question.trim() || !family) return;
    setSubmitting(true);
    setError("");

    const { error: dbError } = await supabase.from("questions").insert({
      family_id: family.id,
      course_id: courseId,
      lesson_id: lessonId,
      question_text: question.trim(),
    });

    if (dbError) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    if (GHL_WEBHOOK_URL) {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            family_name: family.family_name,
            email: user?.email ?? "",
            tier: family.tier,
            course_id: courseId,
            lesson_title: lessonTitle,
            question: question.trim(),
            submitted_at: new Date().toISOString(),
          }),
        });
      } catch {
        // Webhook failure is non-blocking — question is already saved to DB
      }
    }

    setSubmitted(true);
    setSubmitting(false);
    setQuestion("");
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl px-6 py-8 text-center"
        style={{
          backgroundColor: `${accentColor}10`,
          border: `1px solid ${accentColor}30`,
        }}
      >
        <p
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.1rem",
            color: accentColor,
            marginBottom: "0.4rem",
          }}
        >
          Question received.
        </p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
          Gabby will get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            marginTop: "1.25rem",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            cursor: "pointer",
          }}
        >
          Ask another question
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl px-6 py-7"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.3)",
          marginBottom: "0.5rem",
        }}
      >
        Ask Gabby
      </p>
      <p
        style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: "1.1rem",
          color: "#fff",
          marginBottom: "1.25rem",
        }}
      >
        Have a question about this lesson?
      </p>

      <textarea
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        rows={4}
        style={{
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.05)",
          border: `1px solid rgba(255,255,255,0.12)`,
          borderRadius: "8px",
          color: "#fff",
          padding: "0.85rem 1rem",
          fontFamily: "'Oswald', sans-serif",
          fontSize: "0.95rem",
          resize: "vertical",
          outline: "none",
          marginBottom: "0.75rem",
          boxSizing: "border-box",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = `${accentColor}60`)}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
      />

      {error && (
        <p style={{ color: "#FF2D78", fontSize: "0.8rem", fontFamily: "'Oswald', sans-serif", marginBottom: "0.5rem" }}>
          {error}
        </p>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={submitting || !question.trim()}
          style={{
            backgroundColor: question.trim() && !submitting ? accentColor : "rgba(255,255,255,0.08)",
            color: question.trim() && !submitting ? "#fff" : "rgba(255,255,255,0.25)",
            border: "none",
            borderRadius: "6px",
            padding: "0.65rem 1.75rem",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            cursor: submitting || !question.trim() ? "not-allowed" : "pointer",
            transition: "background-color 0.15s, color 0.15s",
          }}
        >
          {submitting ? "Sending..." : "Send Question"}
        </button>
      </div>
    </div>
  );
}
