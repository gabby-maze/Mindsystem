import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

const PINK = "#FF2D78";
const PURPLE = "#982FF7";
const MUTED = "#A0A0A0";

interface Answer {
  id: string;
  answer_text: string;
  answered_by: string;
  created_at: string;
}

interface Question {
  id: string;
  created_at: string;
  member_name: string;
  question_text: string;
  is_answered: boolean;
  answers: Answer[];
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function AskGabbySection() {
  const { family } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [questionText, setQuestionText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [answerText, setAnswerText] = useState<Record<string, string>>({});
  const [postingAnswer, setPostingAnswer] = useState<Record<string, boolean>>({});
  const [dbError, setDbError] = useState(false);

  const isAdmin = family?.is_admin === true;

  const fetchQuestions = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("questions")
        .select("*, answers(*)")
        .order("is_answered", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) {
        setDbError(true);
        return;
      }
      setDbError(false);
      setQuestions((data as Question[]) ?? []);
    } catch {
      setDbError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!questionText.trim() || !family) return;
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setSubmitError("Not logged in."); return; }

      const { error } = await supabase.from("questions").insert({
        member_id: user.id,
        member_name: family.family_name,
        question_text: questionText.trim(),
      });

      if (error) { setSubmitError(error.message); return; }

      setQuestionText("");
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
      await fetchQuestions();
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handlePostAnswer(questionId: string) {
    const text = answerText[questionId]?.trim();
    if (!text) return;
    setPostingAnswer(p => ({ ...p, [questionId]: true }));

    try {
      const { error: ansError } = await supabase.from("answers").insert({
        question_id: questionId,
        answer_text: text,
        answered_by: "Gabby · MazePerformance",
      });
      if (ansError) { alert(ansError.message); return; }

      await supabase.from("questions").update({ is_answered: true }).eq("id", questionId);
      setAnswerText(a => ({ ...a, [questionId]: "" }));
      await fetchQuestions();
    } finally {
      setPostingAnswer(p => ({ ...p, [questionId]: false }));
    }
  }

  return (
    <div style={{ borderTop: "1px solid #2A2A2A", paddingTop: "3rem", marginTop: "3rem" }}>
      {/* Header */}
      <div className="mb-8">
        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.4rem)", color: "#fff" }}>
          Ask Gabby
        </h2>
        <div style={{ height: "2px", width: "100%", backgroundColor: "#2A2A2A", margin: "0.75rem 0" }} />
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", color: MUTED, lineHeight: 1.6 }}>
          Got a question about nutrition? Ask it here.<br />
          Gabby reads every question and answers personally.
        </p>
      </div>

      {/* Submission form */}
      <form onSubmit={handleSubmit} className="mb-10">
        <textarea
          value={questionText}
          onChange={e => setQuestionText(e.target.value)}
          placeholder="What do you want to know about fueling your athlete?"
          rows={4}
          style={{
            width: "100%",
            backgroundColor: "#1A1A1A",
            border: "1px solid #2A2A2A",
            color: "#fff",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "1rem",
            padding: "1rem",
            borderRadius: "6px",
            resize: "vertical",
            outline: "none",
            marginBottom: "0.75rem",
          }}
        />
        {submitError && (
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", color: PINK, marginBottom: "0.5rem" }}>
            {submitError}
          </p>
        )}
        {submitSuccess && (
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", color: "#00D4C8", marginBottom: "0.5rem" }}>
            Question submitted — Gabby will answer soon.
          </p>
        )}
        <button
          type="submit"
          disabled={submitting || !questionText.trim()}
          style={{
            backgroundColor: PINK,
            color: "#fff",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.65rem 1.5rem",
            border: "none",
            borderRadius: "4px",
            cursor: submitting || !questionText.trim() ? "not-allowed" : "pointer",
            opacity: submitting || !questionText.trim() ? 0.5 : 1,
            transition: "opacity 0.15s",
          }}
        >
          {submitting ? "Submitting..." : "Ask Gabby"}
        </button>
      </form>

      {/* Questions feed */}
      {dbError && (
        <div className="rounded-lg p-6 text-center" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: MUTED }}>
            Q&A section requires the questions table to be set up in Supabase.
          </p>
        </div>
      )}

      {!dbError && loading && (
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", color: MUTED }}>Loading questions...</p>
      )}

      {!dbError && !loading && questions.length === 0 && (
        <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: MUTED }}>
            No questions yet. Be the first to ask.
          </p>
        </div>
      )}

      {!dbError && questions.map(q => {
        const answer = q.answers?.[0];
        return (
          <div key={q.id} className="rounded-lg p-6 mb-4" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
            {/* Question header */}
            <div className="flex items-center justify-between gap-4 mb-3">
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.8rem", color: MUTED }}>
                {q.member_name} · {timeAgo(q.created_at)}
              </p>
              {!q.is_answered && (
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.72rem", fontStyle: "italic", color: MUTED }}>
                  Waiting for Gabby
                </span>
              )}
            </div>

            {/* Question text */}
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "#fff", lineHeight: 1.7, marginBottom: "1rem" }}>
              {q.question_text}
            </p>

            {/* Answer block */}
            {answer && (
              <div className="rounded p-4" style={{ backgroundColor: "#1A1A1A", borderLeft: `3px solid ${PINK}` }}>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", color: PINK, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {answer.answered_by}
                </p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}>
                  {answer.answer_text}
                </p>
              </div>
            )}

            {/* Admin answer form */}
            {isAdmin && !q.is_answered && (
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid #2A2A2A" }}>
                <textarea
                  value={answerText[q.id] ?? ""}
                  onChange={e => setAnswerText(a => ({ ...a, [q.id]: e.target.value }))}
                  placeholder="Type your answer..."
                  rows={3}
                  style={{
                    width: "100%",
                    backgroundColor: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    color: "#fff",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.95rem",
                    padding: "0.75rem",
                    borderRadius: "4px",
                    resize: "vertical",
                    outline: "none",
                    marginBottom: "0.5rem",
                  }}
                />
                <button
                  onClick={() => handlePostAnswer(q.id)}
                  disabled={postingAnswer[q.id] || !answerText[q.id]?.trim()}
                  style={{
                    backgroundColor: PURPLE,
                    color: "#fff",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.5rem 1.2rem",
                    border: "none",
                    borderRadius: "4px",
                    cursor: postingAnswer[q.id] || !answerText[q.id]?.trim() ? "not-allowed" : "pointer",
                    opacity: postingAnswer[q.id] || !answerText[q.id]?.trim() ? 0.5 : 1,
                  }}
                >
                  {postingAnswer[q.id] ? "Posting..." : "Post Answer"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
