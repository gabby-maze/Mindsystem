import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { LIVE_SESSIONS, TIER_COLORS, hasTierAccess, type Tier } from "@/lib/data";
import { Radio, Lock, ExternalLink } from "lucide-react";

const TEAL = "#00D4C8";

export default function LivePage() {
  const { family } = useAuth();
  if (!family) return null;

  function canJoin(sessionTier: Tier) {
    if (family!.tier === "free") return false;
    return hasTierAccess(family!.tier, sessionTier);
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center gap-3 mb-10">
          <Radio size={22} style={{ color: TEAL }} />
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            Live Sessions
          </h1>
        </div>

        {/* Courtside sessions */}
        <section className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Courtside Conversations
          </p>
          {LIVE_SESSIONS.filter(s => s.tier === "courtside").map(session => {
            const accessible = canJoin(session.tier);
            const tierColor = TIER_COLORS[session.tier];
            return (
              <div
                key={session.id}
                className="rounded-lg p-6 mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${accessible ? "rgba(0,212,200,0.2)" : "rgba(255,255,255,0.07)"}` }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-1">{session.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>{session.schedule}</p>
                    {session.time !== "Time TBD" && (
                      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>{session.time}</p>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-wider px-2 py-1 rounded shrink-0" style={{ backgroundColor: `${tierColor}15`, color: tierColor }}>
                    Recurring
                  </span>
                </div>

                {accessible ? (
                  <a
                    href={session.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider px-4 py-2 transition-opacity hover:opacity-80"
                    style={{ backgroundColor: tierColor, color: "#0a0a0a", fontFamily: "'Oswald', sans-serif", fontWeight: 700, textDecoration: "none" }}
                  >
                    Join Zoom <ExternalLink size={12} />
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <Lock size={13} style={{ color: "rgba(255,255,255,0.3)" }} />
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
                      Live sessions are available on Courtside Conversations and above.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* MindSystem supported+ sessions */}
        <section>
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            MindSystem - Supported & Above
          </p>

          {/* Call booking schedule */}
          {hasTierAccess(family.tier, "supported") && (
            <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: "rgba(152,47,247,0.06)", border: "1px solid rgba(152,47,247,0.2)" }}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#982FF7" }}>Your Call Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Parent Onboarding Call</p>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    Wednesdays 9:00–10:00 AM PST / 12:00 PM EST<br />
                    Sundays 10:00–11:00 AM PST / 1:00 PM EST
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Athlete Onboarding Call</p>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    Wednesdays 5:30–6:30 PM PST / 8:30 PM EST<br />
                    Saturdays 11:00 AM–12:00 PM PST / 2:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {LIVE_SESSIONS.filter(s => s.tier !== "courtside").map(session => {
              const accessible = canJoin(session.tier);
              const tierColor = TIER_COLORS[session.tier];
              return (
                <div
                  key={session.id}
                  className="rounded-lg p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${accessible ? "rgba(152,47,247,0.2)" : "rgba(255,255,255,0.07)"}`, opacity: accessible ? 1 : 0.5 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider mb-1">{session.title}</h3>
                      <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>{session.schedule} · {session.time}</p>
                    </div>
                    {!accessible && <Lock size={14} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />}
                  </div>
                  {accessible && (
                    <a
                      href={session.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider px-4 py-2 mt-2"
                      style={{ backgroundColor: tierColor, color: "#fff", fontFamily: "'Oswald', sans-serif", fontWeight: 700, textDecoration: "none" }}
                    >
                      Join Zoom <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
