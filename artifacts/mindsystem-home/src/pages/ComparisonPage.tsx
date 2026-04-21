import { useState } from "react";

const TEAL   = "#00d4c8";
const PURPLE = "#9b2ff7";
const PINK   = "#ff2d78";

const TEAL_BG   = "rgba(0,212,200,0.08)";
const PURPLE_BG = "rgba(155,47,247,0.08)";
const PINK_BG   = "rgba(255,45,120,0.08)";

const TIERS = [
  {
    id: "independent",
    tag: "Self-led",
    name: "Independent",
    description: "Everything your family needs to run the MindSystem framework on your own, at your own pace.",
    price: "$899",
    plan: "or 2 payments of $449",
    color: TEAL,
    bg: TEAL_BG,
  },
  {
    id: "supported",
    tag: "Most popular",
    name: "Supported",
    description: "The full framework plus live group calls with Gabby for athletes and parents throughout the 12 weeks.",
    price: "$3,500",
    plan: "or 3 payments of $1,300",
    color: PURPLE,
    bg: PURPLE_BG,
  },
  {
    id: "inner-circle",
    tag: "Full support",
    name: "Inner Circle",
    description: "The highest level of access. Direct contact with Gabby and a private onboarding call for your family.",
    price: "$10,000",
    plan: "or 3 payments of $3,700",
    color: PINK,
    bg: PINK_BG,
  },
];

type Check = true | false;
interface Feature {
  label: string;
  independent: Check;
  supported: Check;
  innerCircle: Check;
}

const FEATURES: Feature[] = [
  { label: "Physical athlete journal, 6 months",                              independent: true,  supported: true,  innerCircle: true  },
  { label: "Digital family journal",                                           independent: true,  supported: true,  innerCircle: true  },
  { label: "Athlete Compass Training (video)",                                 independent: true,  supported: true,  innerCircle: true  },
  { label: "Guided video instruction for both journals",                       independent: true,  supported: true,  innerCircle: true  },
  { label: "6 months community access",                                        independent: true,  supported: true,  innerCircle: true  },
  { label: "Physical family journal, shipped",                                 independent: false, supported: true,  innerCircle: true  },
  { label: "Live family onboarding session",                                   independent: false, supported: true,  innerCircle: true  },
  { label: "Biweekly live group athlete calls",                                independent: false, supported: true,  innerCircle: true  },
  { label: "Biweekly live group parent calls",                                 independent: false, supported: true,  innerCircle: true  },
  { label: "Private athlete onboarding call with Gabby",                       independent: false, supported: false, innerCircle: true  },
  { label: "Private parent onboarding call with Gabby",                        independent: false, supported: false, innerCircle: true  },
  { label: "Direct Voxer access to Gabby, 12 weeks with 24 hour response time", independent: false, supported: false, innerCircle: true  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill={color} fillOpacity="0.15" />
      <path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="rgba(255,255,255,0.05)" />
      <path d="M8 8L14 14M14 8L8 14" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ComparisonPage() {
  const [selected, setSelected] = useState<string | null>(null);

  function toggle(id: string) {
    setSelected(prev => (prev === id ? null : id));
  }

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      {/* Minimal header */}
      <header
        className="text-center px-6 py-6 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.2rem",
            letterSpacing: "0.02em",
          }}
        >
          Gabby Cole
        </span>
      </header>

      <main className="px-4 md:px-8 pb-24" style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* ── SECTION 1: Page Header ── */}
        <section className="text-center pt-20 pb-16">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-5"
            style={{ color: TEAL }}
          >
            MindSystem
          </p>
          <h1
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            The compass your family<br className="hidden md:block" /> has been missing.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.75,
              fontSize: "1rem",
            }}
          >
            MindSystem is a 12-week family performance framework for youth sports families who are ready to stop reacting to the season and start moving through it together, with intention.
          </p>
        </section>

        {/* ── SECTION 2: Three Pillars ── */}
        <section className="pb-20">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { num: "01", title: "Shared Language",               body: "Everyone in the family learns to talk about performance the same way, so no one is speaking a different dialect under pressure." },
              { num: "02", title: "Shared Definition of Success",  body: "You stop measuring success against other families and start measuring it against your own family's compass." },
              { num: "03", title: "Shared System for Tracking Progress", body: "A physical and digital framework that keeps the whole family oriented, accountable, and moving in the same direction." },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "1.5rem",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {num}
                </p>
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: "#fff" }}
                >
                  {title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: Tier Cards ── */}
        <section className="pb-16">
          <h2
            className="text-center mb-10"
            style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.5rem,4vw,2.5rem)" }}
          >
            Choose Your Tier
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIERS.map(tier => {
              const isSelected = selected === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => toggle(tier.id)}
                  className="text-left w-full transition-all"
                  style={{
                    backgroundColor: isSelected ? tier.bg : "rgba(255,255,255,0.03)",
                    border: `2px solid ${isSelected ? tier.color : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 12,
                    padding: "1.75rem",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{
                      backgroundColor: isSelected ? tier.color : "rgba(255,255,255,0.08)",
                      color: isSelected ? "#0a0a0a" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {tier.tag}
                  </span>
                  <h3
                    className="font-bold uppercase tracking-wider mb-2"
                    style={{
                      fontFamily: "'Permanent Marker', cursive",
                      fontSize: "1.3rem",
                      color: isSelected ? tier.color : "#fff",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {tier.description}
                  </p>
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ color: tier.color }}
                  >
                    {tier.price}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
                    {tier.plan}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 4: Comparison Table ── */}
        <section className="pb-20">
          <h2
            className="text-center mb-10"
            style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.5rem,4vw,2.5rem)" }}
          >
            What's Included
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 560,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.3)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      width: "46%",
                    }}
                  >
                    Feature
                  </th>
                  {TIERS.map(t => (
                    <th
                      key={t.id}
                      style={{
                        textAlign: "center",
                        padding: "0.75rem 0.5rem",
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: t.color,
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        width: "18%",
                      }}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f, i) => (
                  <tr
                    key={f.label}
                    style={{
                      backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.9rem 1rem",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.7)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      {f.label}
                    </td>
                    <td style={{ textAlign: "center", padding: "0.9rem 0.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {f.independent ? <CheckIcon color={TEAL} /> : <XIcon />}
                    </td>
                    <td style={{ textAlign: "center", padding: "0.9rem 0.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {f.supported ? <CheckIcon color={PURPLE} /> : <XIcon />}
                    </td>
                    <td style={{ textAlign: "center", padding: "0.9rem 0.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {f.innerCircle ? <CheckIcon color={PINK} /> : <XIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 5: Bottom CTA ── */}
        <section className="pb-8">
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "2.5rem",
              textAlign: "center",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "clamp(1.3rem,3.5vw,1.9rem)",
                marginBottom: "1rem",
              }}
            >
              Still deciding which tier is right for you?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                fontSize: "0.95rem",
              }}
            >
              Your payment links were included in your follow up email from Gabby. If you have questions before enrolling, just hit reply on that email and she'll get back to you directly.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
