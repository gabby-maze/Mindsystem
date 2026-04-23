import { useState } from "react";
import { useLocation } from "wouter";
import { signIn } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";

const PURPLE = "#982FF7";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { refresh } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      await refresh();
      navigate("/dashboard");
    }
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
            Member Area
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={inputStyle}
              placeholder="family@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={inputStyle}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p style={{ color: "#FF2D78", fontSize: "0.85rem", marginTop: "0.25rem" }}>{error}</p>
          )}

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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-8">
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            Don't have an account?{" "}
            <a
              href="/members-portal/signup"
              style={{ color: PURPLE, textDecoration: "none" }}
              onClick={e => { e.preventDefault(); navigate("/signup"); }}
            >
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  padding: "0.75rem 1rem",
  fontFamily: "'Oswald', sans-serif",
  fontSize: "1rem",
  outline: "none",
  width: "100%",
};
