import { useState } from "react";
import { useLocation } from "wouter";
import { signUp } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";

const PURPLE = "#982FF7";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreedFamily, setAgreedFamily] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { refresh } = useAuth();

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setError("");
    setStep(2);
  }

  async function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    if (!agreedFamily || !agreedTerms) { setError("Please check both acknowledgment boxes to continue."); return; }
    setError("");
    setLoading(true);
    const { error } = await signUp(email, password, familyName);
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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#0a0a0a", color: "#fff", fontFamily: "'Oswald', sans-serif" }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            Gabby Cole
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Create Your Family Account
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex gap-2 mb-10">
          {[1, 2].map(s => (
            <div
              key={s}
              style={{
                flex: 1,
                height: 3,
                backgroundColor: s <= step ? PURPLE : "rgba(255,255,255,0.1)",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>

        {step === 1 && (
          <form onSubmit={handleStep1} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>Family Name</label>
              <input
                type="text"
                value={familyName}
                onChange={e => setFamilyName(e.target.value)}
                required
                style={inputStyle}
                placeholder="The Smith Family"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label style={labelStyle}>Email Address</label>
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
              <label style={labelStyle}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} placeholder="••••••••" />
            </div>

            <div className="flex flex-col gap-2">
              <label style={labelStyle}>Confirm Password</label>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required style={inputStyle} placeholder="••••••••" />
            </div>

            {error && <p style={{ color: "#FF2D78", fontSize: "0.85rem" }}>{error}</p>}

            <button type="submit" style={btnStyle}>Continue</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleStep2} className="flex flex-col gap-6">
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "1.5rem",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <p className="mb-4" style={{ color: "#fff", fontWeight: 700 }}>By creating a MindSystem family account you acknowledge and agree to the following:</p>
              <p className="mb-3">This is a family-monitored account. As the account creator you are responsible for all activity on this account.</p>
              <p className="mb-3">This account may be accessed by up to 3 family members (recommended: parent/guardian + athlete). You agree not to share login credentials outside your immediate family.</p>
              <p>Young athletes using this platform are doing so under parental supervision. All content is designed for family use and parental oversight is encouraged.</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedFamily}
                onChange={e => setAgreedFamily(e.target.checked)}
                style={{ accentColor: PURPLE, width: 18, height: 18, flexShrink: 0, marginTop: 2 }}
              />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                I confirm this is a family account and will be monitored by a parent or guardian.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={e => setAgreedTerms(e.target.checked)}
                style={{ accentColor: PURPLE, width: 18, height: 18, flexShrink: 0, marginTop: 2 }}
              />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                I agree to the MindSystem{" "}
                <a href="https://www.gabbycole.com/terms-of-service" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="https://www.gabbycole.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>
                  Privacy Policy
                </a>.
              </span>
            </label>

            {error && <p style={{ color: "#FF2D78", fontSize: "0.85rem" }}>{error}</p>}

            <button type="submit" disabled={loading} style={{ ...btnStyle, opacity: loading ? 0.7 : 1 }}>
              {loading ? "Creating account..." : "Continue"}
            </button>
          </form>
        )}

        <div className="text-center mt-8">
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            Already have an account?{" "}
            <a href="#" style={{ color: PURPLE }} onClick={e => { e.preventDefault(); navigate("/login"); }}>
              Sign in
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

const labelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
};

const btnStyle: React.CSSProperties = {
  backgroundColor: "#982FF7",
  color: "#fff",
  border: "none",
  padding: "0.875rem",
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 700,
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  cursor: "pointer",
  width: "100%",
};
