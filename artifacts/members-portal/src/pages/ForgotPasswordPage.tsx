import { useState } from "react";
import { useLocation } from "wouter";

const PURPLE = "#982FF7";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://members.gabbycole.com/reset-password",
      });
      if (error) {
        setError(error.message);
      } else {
        setSent(true);
      }
    } catch {
      setError("Network error — please try again.");
    }
    setLoading(false);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#0a0a0a", color: "#fff", fontFamily: "'Oswald', sans-serif" }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            Gabby Cole
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Reset Your Password
          </p>
        </div>

        {sent ? (
          <div className="text-center flex flex-col gap-6">
            <div style={{
              backgroundColor: "rgba(152,47,247,0.1)",
              border: "1px solid rgba(152,47,247,0.3)",
              borderRadius: 8,
              padding: "1.5rem",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}>
              Check your inbox at <strong>{email}</strong>. Click the link in the email to set a new password.
            </div>
            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{ color: PURPLE, background: "none", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}
            >
              ← Back to Sign In
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
              Enter your email and we'll send you a link to reset your password.
            </p>
            <div className="flex flex-col gap-2">
              <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "1rem",
                  outline: "none",
                  width: "100%",
                }}
                placeholder="family@email.com"
              />
            </div>

            {error && <p style={{ color: "#FF2D78", fontSize: "0.85rem" }}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
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
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                marginTop: "0.5rem",
              }}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                cursor: "pointer",
                textAlign: "center",
                padding: "0.25rem",
              }}
            >
              ← Back to Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
