import { useState } from "react";

const TEAL = "#00d4c8";
const PINK  = "#ff2d78";

const COURTSIDE_LINK = "https://link.fastpaydirect.com/payment-link/69c704f5fb727d9c905d2f06";

interface Column {
  id: string;
  label: string;
  color: string;
  badge: string | null;
  headline: string;
  subhead: string;
  price: string;
  priceNote: string;
  included: string[];
  notIncluded: string[];
  costOptions: { letter: string; text: string }[] | null;
  note: string | null;
  cta: string | null;
  ctaHref: string | null;
  minimum: string | null;
}

const COLUMNS: Column[] = [
  {
    id: "individual-courtside",
    label: "INDIVIDUAL",
    color: PINK,
    badge: null,
    headline: "Courtside Conversations",
    subhead: "Education for the whole family. On your schedule.",
    price: "$30 / month",
    priceNote: "$360 / year",
    included: [
      "Full access to the Courtside Conversations digital library",
      "Position breakdowns for parents",
      "Breakthrough Track — season-specific guidance for every phase",
      "Athlete performance tools and resources",
      "Nutrition and pressure practice content",
      "Courtside Reads and Collaborative Conversations podcast",
      "One live community session per month with Gabby",
    ],
    notIncluded: [
      "Athlete journal",
      "Parent journal",
      "Group calls",
      "Parent liaison support",
    ],
    costOptions: null,
    note: null,
    cta: "JOIN COURTSIDE CONVERSATIONS",
    ctaHref: COURTSIDE_LINK,
    minimum: null,
  },
  {
    id: "team-courtside",
    label: "TEAM PARTNER",
    color: TEAL,
    badge: "TEAM PARTNER PRICE",
    headline: "Courtside Conversations",
    subhead: "Program-wide education. One price per athlete.",
    price: "$8.25 / family / month",
    priceNote: "Individual equivalent: $99/year per family",
    included: [
      "Everything in Individual Courtside Conversations",
      "Program-wide access distributed to all enrolled families",
      "One live community session per month with Gabby — longer format, questions submitted in advance",
      "Access distribution handled by Gabby or by your program — your choice",
    ],
    notIncluded: [
      "Athlete journal",
      "Parent journal",
      "Group calls",
      "Parent liaison support",
    ],
    costOptions: [
      { letter: "A", text: "Add $8.25/month to dues. Families cover it." },
      { letter: "B", text: "Split the cost with families." },
      { letter: "C", text: "Program covers the full cost." },
    ],
    note: "Families who want to go further can upgrade to MindSystem Supported at any time.",
    cta: null,
    ctaHref: null,
    minimum: null,
  },
  {
    id: "individual-mindsystem",
    label: "INDIVIDUAL",
    color: PINK,
    badge: "MOST COMPLETE",
    headline: "MindSystem Supported",
    subhead: "Guided behavior modification. Built for the whole family.",
    price: "$3,500 / family",
    priceNote: "12 weeks guided + 12 months digital studio access",
    included: [
      "12 weeks of guided behavior modification — the foundation",
      "Custom athlete journal — personalized to her season",
      "Custom parent journal — personalized to her ecosystem",
      "Biweekly live group calls — athlete track and parent track",
      "Full access to MindSystem digital studio for 12 months after the guided program",
      "After the 12 weeks: ongoing digital studio access equivalent to Courtside Conversations",
    ],
    notIncluded: [
      "Private 1:1 calls (available as add-on — 4-pack at $1,000)",
    ],
    costOptions: null,
    note: "This builds a shared language between athlete, parent, and coach — a behavior modification system that compounds season over season.",
    cta: null,
    ctaHref: null,
    minimum: null,
  },
  {
    id: "team-mindsystem",
    label: "TEAM PARTNER",
    color: TEAL,
    badge: "80% BULK DISCOUNT",
    headline: "MindSystem Supported",
    subhead: "Gabby as your parent liaison. All season.",
    price: "$700 / family",
    priceNote: "Individual equivalent: $3,500 per family",
    included: [
      "Everything in Individual MindSystem Supported for every enrolled family",
      "Gabby acting as parent liaison for your program — families bring questions, concerns, and situations to Gabby first",
      "Role plays, hard conversations, sideline behavior — handled in the digital space",
      "Coaching staff protected from parent management",
      "Custom athlete journals branded to your program",
      "Custom parent journals branded to your program",
      "Program-specific coach orientation page — living resource with Q&A",
    ],
    notIncluded: [],
    costOptions: [
      { letter: "A", text: "Add $700 to annual dues. Families cover it." },
      { letter: "B", text: "Split $350 program / $350 family." },
      { letter: "C", text: "Program covers the full cost." },
    ],
    note: null,
    cta: null,
    ctaHref: null,
    minimum: "150 families minimum",
  },
];

const FAQS = [
  {
    q: "What is the difference between education and MindSystem?",
    a: "Courtside Conversations is education — tools, content, and monthly live sessions your families can use at their own pace. MindSystem is a guided behavior modification program — 12 weeks of structured work with custom journals, live group calls, and Gabby actively managing your parent ecosystem. Education gives families information. MindSystem changes behavior.",
  },
  {
    q: "What does team partner pricing require?",
    a: "A minimum enrollment of 150 families for MindSystem Supported. Courtside Conversations team partner pricing has no minimum — programs can enroll any number of athletes.",
  },
  {
    q: "Can families upgrade from Courtside Conversations to MindSystem?",
    a: "Yes. Families who start with Courtside Conversations can move into MindSystem Supported at any time at the individual family rate.",
  },
  {
    q: "How are team partner journals customized?",
    a: "MindSystem team partner journals feature your program logo, colors, and team photos on the cover. Inside, athletes and parents work through the same proven MindSystem framework, in a journal that looks and feels like it belongs to your program.",
  },
  {
    q: "Who handles access distribution for Courtside Conversations?",
    a: "Either Gabby or your program — your choice. Provide your family email list and Gabby distributes access, or Gabby provides the access links and your program distributes them directly.",
  },
];

function CheckIcon({ color }: { color: string }) {
  return <span style={{ color, fontSize: "0.85rem", lineHeight: 1.5 }}>✓</span>;
}

function XItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
      <span style={{ marginTop: 2, opacity: 0.4, flexShrink: 0 }}>✕</span>
      {text}
    </li>
  );
}

export default function B2BComparePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: "'Oswald', sans-serif" }}>

      {/* Minimal header */}
      <header className="text-center px-6 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.2rem", letterSpacing: "0.02em" }}>
          Gabby Cole
        </span>
      </header>

      <main className="px-4 md:px-8 pb-24" style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Hero ── */}
        <section className="text-center pt-20 pb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: TEAL }}>
            Team Partnership Pricing
          </p>
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Two programs. Two ways to bring them to your team.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: "1rem" }}>
            Individual pricing is available to any family. Team partner pricing is available to programs enrolling 150+ families.
          </p>
        </section>

        {/* ── Pricing Type Descriptions ── */}
        <section className="pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Individual */}
            <div style={{ backgroundColor: `${PINK}08`, border: `1.5px solid ${PINK}25`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: PINK }}>Individual Pricing</p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                Individual pricing is for families who enroll directly — one athlete, one parent, one family moving through the program on their own. No club involvement required.
              </p>
            </div>
            {/* Club Partner */}
            <div style={{ backgroundColor: `${TEAL}08`, border: `1.5px solid ${TEAL}25`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TEAL }}>Club Partner Pricing</p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                Club partner pricing is for clubs that bring MazePerformance into their program as an organization. The club coordinates enrollment for their families, and in return every enrolled family gets access at a significantly reduced rate. Club partner pricing requires a minimum of 150 families for MindSystem Supported. There is no minimum for Courtside Conversations club partner access.
              </p>
            </div>
          </div>
        </section>

        {/* ── Four Columns ── */}
        <section className="pb-20">
          {/* Column group labels */}
          <div className="hidden xl:grid grid-cols-4 gap-5 mb-3">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: `${PINK}20`, color: PINK }}>Individual Pricing</span>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: `${TEAL}20`, color: TEAL }}>Club Partner Pricing</span>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: `${PINK}20`, color: PINK }}>Individual Pricing</span>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: `${TEAL}20`, color: TEAL }}>Club Partner Pricing</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {COLUMNS.map((col) => (
              <div
                key={col.id}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${col.color}30`,
                  borderRadius: 12,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card header */}
                <div style={{ backgroundColor: `${col.color}10`, borderBottom: `1px solid ${col.color}25`, padding: "1.25rem 1.5rem" }}>
                  {col.badge && (
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                      style={{ backgroundColor: col.color, color: "#0a0a0a" }}
                    >
                      {col.badge}
                    </span>
                  )}
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: col.color }}>
                    {col.label}
                  </p>
                  <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.25rem", color: "#fff", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                    {col.headline}
                  </h2>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    {col.subhead}
                  </p>
                </div>

                {/* Pricing */}
                <div style={{ padding: "1.25rem 1.5rem", borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                  <p style={{ fontSize: "1.5rem", fontWeight: 700, color: col.color, lineHeight: 1.1, marginBottom: "0.25rem" }}>
                    {col.price}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{col.priceNote}</p>
                  {col.minimum && (
                    <p className="text-xs mt-2 font-bold uppercase tracking-wider" style={{ color: col.color }}>
                      {col.minimum}
                    </p>
                  )}
                </div>

                {/* Included */}
                <div style={{ padding: "1.25rem 1.5rem", flex: 1 }}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                    What's included
                  </p>
                  <ul className="flex flex-col gap-2 mb-4">
                    {col.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                        <CheckIcon color={col.color} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {col.notIncluded.length > 0 && (
                    <>
                      <p className="text-xs font-bold uppercase tracking-wider mb-3 mt-4" style={{ color: "rgba(255,255,255,0.25)" }}>
                        Not included
                      </p>
                      <ul className="flex flex-col gap-2 mb-4">
                        {col.notIncluded.map((item, i) => (
                          <XItem key={i} text={item} />
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Cost structure options */}
                  {col.costOptions && (
                    <div style={{ backgroundColor: `${col.color}08`, border: `1px solid ${col.color}20`, borderRadius: 8, padding: "1rem", marginTop: "1rem", marginBottom: "0.75rem" }}>
                      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: col.color }}>
                        How programs structure the cost
                      </p>
                      <ul className="flex flex-col gap-2">
                        {col.costOptions.map((opt) => (
                          <li key={opt.letter} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                            <span className="font-bold shrink-0" style={{ color: col.color }}>Option {opt.letter} —</span>
                            {opt.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {col.note && (
                    <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.65, fontStyle: "italic" }}>
                      {col.note}
                    </p>
                  )}
                </div>

                {/* CTA — only shown for Individual Courtside */}
                {col.ctaHref && (
                  <div style={{ padding: "1.25rem 1.5rem", borderTop: `1px solid rgba(255,255,255,0.06)` }}>
                    <a
                      href={col.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        backgroundColor: col.color,
                        color: "#0a0a0a",
                        padding: "0.75rem 1rem",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        textDecoration: "none",
                        borderRadius: 4,
                      }}
                    >
                      {col.cta}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pb-20" style={{ maxWidth: 740, margin: "0 auto" }}>
          <h2 className="text-center mb-10" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.5rem,4vw,2.2rem)" }}>
            Questions
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    overflow: "hidden",
                    backgroundColor: isOpen ? "rgba(255,255,255,0.03)" : "transparent",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-4"
                    style={{ padding: "1.1rem 1.4rem", background: "none", border: "none", cursor: "pointer", color: "#fff", fontFamily: "'Oswald', sans-serif" }}
                  >
                    <span className="font-bold text-sm uppercase tracking-wide" style={{ lineHeight: 1.5 }}>{faq.q}</span>
                    <span style={{ color: TEAL, fontSize: "1.1rem", flexShrink: 0, lineHeight: 1 }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 1.4rem 1.2rem 1.4rem" }}>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.75 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Footer note ── */}
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
            <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.3rem,3.5vw,1.9rem)", marginBottom: "1rem" }}>
              Questions? Just reply.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75, fontSize: "0.95rem" }}>
              Reach out directly and Gabby will send everything you need to move forward.
            </p>
            <p style={{ color: TEAL, fontSize: "0.9rem", marginTop: "0.75rem", letterSpacing: "0.05em" }}>
              gabby@mazeperformance.ai
            </p>
          </div>
        </section>
      </main>

      {/* Page footer */}
      <footer className="text-center py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
          mazeperformance.ai · gabby@mazeperformance.ai
        </p>
      </footer>
    </div>
  );
}
