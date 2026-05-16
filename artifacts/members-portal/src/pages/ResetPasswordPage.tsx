import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

const PURPLE = "#982FF7";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Supabase redirects here with access_token in the URL hash
    // The supabase client handles the session automatically
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      setDone(true);
      setTimeout(() => navigate("/dashboard"), 2500);
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
            Set New Password
          </p>
        </div>

        {done ? (
          <div style={{
            backgroundColor: "rgba(152,47,247,0.1)",
            border: "1px solid rgba(152,47,247,0.3)",
            borderRadius: 8,
            padding: "1.5rem",
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            textAlign: "center",
          }}>
            Password updated! Redirecting to your dashboard...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                placeholder="••••••••"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>
                Confirm Password
              </label>
              <input
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
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
                placeholder="••••••••"
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
              {loading ? "Updating..." : "Set New Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
