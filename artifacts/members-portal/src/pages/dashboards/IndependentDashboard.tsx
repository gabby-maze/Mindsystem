import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { STRATEGY_SESSION_LINK, getWeekProgress } from "@/lib/data";

const SHIPPING_LINK = "https://api.leadconnectorhq.com/widget/form/nRhdYIoU5zdbBdoUyBDb";
// TODO: replace with GHL MindSystem Supported payment link
const UPGRADE_SUPPORTED_LINK = "TODO_MINDSYSTEM_SUPPORTED_GHL_LINK";

const BLUE = "#2B8BF5";

const INDIE_ROADMAP = [
  { week: 1, athlete: "Onboarding video, workbook begins, Compass Training — Getting Started + Bold Commitment", parent: "Onboarding video, Parent Training Lesson 1, start Courtside Conversations — Your Starting Point" },
  { week: 2, athlete: "Compass Training — Mindset, Analyze, Zero In, Execute. Submit completed MAZE model.", parent: "Continue Courtside Conversations, parent workbook, submit parent workbook responses" },
  { week: 3, athlete: "Execution map built, habit tracker begins, game and practice pages active", parent: "Parent Training Lesson 2 unlocks after Gabby receives MAZE model. Begin parent journal." },
  { week: 4, athlete: "Game and practice pages active, 3 focus skills being tracked", parent: "Coach conversation — share athlete's 3 focus skills. Continue parent journal." },
  { week: 5, athlete: "Habit tracker in full swing", parent: "Review shared language framework" },
  { week: 6, athlete: "Monthly reflection", parent: "Monthly reflection, review habit tracker data" },
  { week: 7, athlete: "Skill milestone check — beginning vs now", parent: "Dot connector — curate a learning experience for your athlete" },
  { week: 8, athlete: "Game + practice pages active", parent: "Shared language check in" },
  { week: 9, athlete: "Post-game reflection review", parent: "Conversation you've been avoiding" },
  { week: 10, athlete: "Progress assessment on 3 focus skills", parent: "Prepare for 12 week milestone" },
  { week: 11, athlete: "Athlete reflection", parent: "Parent reflection, end of season conversation prep" },
  { week: 12, athlete: "12 week milestone worksheet", parent: "Complete together, review months 4-6" },
];

export default function IndependentDashboard() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  if (!family) return null;

  const weekData = family.enrollment_date ? getWeekProgress(family.enrollment_date) : null;
  const currentWeek = weekData?.weekNumber ?? 1;

  return (
    <Layout>
      <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>

        {/* Section 1 — Hero */}
        <section className="w-full px-6 md:px-16 py-20 relative" style={{ backgroundColor: "#2C2C2A" }}>
          <div className="absolute top-6 right-6">
            <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: `${BLUE}22`, color: BLUE, border: `1px solid ${BLUE}50` }}>
              MindSystem Independent
            </span>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Welcome, {family.family_name}
            </p>
            <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(2rem,5vw,3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              You have the compass. Here's how to use it.
            </h1>
            <p className="mb-6" style={{ fontWeight: 400, fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: 580, lineHeight: 1.7 }}>
              Everything you need to navigate the next 6 months — in one place.
            </p>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.8 }}>
              Welcome to MindSystem Independent. You made a decision to stop winging it. This is
              what that looks like now. This page is your home base. Bookmark it. Come back to it.
              Every time you feel lost — start here.
            </p>
          </div>
        </section>

        {/* Section 2 — Four Step Visual */}
        <section className="px-6 md:px-16 py-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", text: "Fill address form." },
              { num: "02", text: "Journal ships." },
              { num: "03", text: "Begin MAZE." },
              { num: "04", text: "Complete the season." },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center p-5 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.8rem", color: BLUE, marginBottom: "0.5rem" }}>
                  {step.num}
                </span>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Action Steps */}
        <section className="px-6 md:px-16 pb-16 max-w-3xl mx-auto">
          <h2 className="font-bold mb-8 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            Your Action Steps
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { label: "Step 1 — Journals", desc: "Submit shipping address → journal arrives within 48 hours.", btn: "Submit Shipping Address →", href: SHIPPING_LINK, external: true },
              { label: "Step 2 — Onboarding", desc: "Watch your onboarding video.", btn: "Go to Independent Onboarding →", href: null, nav: "/courses/independent-onboarding" },
              { label: "Step 3 — Athlete Compass", desc: "Athlete moves through Compass Training sections 1–6 within first 2 weeks.", btn: "Go to Athlete Compass Training →", href: null, nav: "/courses/athlete-compass-training" },
              { label: "Step 4 — Parent Track", desc: "Parent starts Courtside Conversations → Your Starting Point + fills parent workbook.", btn: "Start Your Starting Point →", href: null, nav: "/courses/your-starting-point" },
              { label: "Step 5 — Parent Training", desc: "Lesson 1 available now. Lesson 2 unlocks after Gabby receives athlete MAZE model.", btn: "Go to Parent Training →", href: null, nav: "/courses/parent-training-core" },
            ].map((step, i) => (
              <div key={i} className="p-5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid rgba(43,139,245,0.2)` }}>
                <p className="font-bold text-sm uppercase tracking-wide mb-1" style={{ color: BLUE }}>{step.label}</p>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{step.desc}</p>
                {step.external ? (
                  <a href={step.href!} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-block", backgroundColor: BLUE, color: "#fff", padding: "0.6rem 1.4rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
                    {step.btn}
                  </a>
                ) : (
                  <button onClick={() => navigate(step.nav!)}
                    style={{ backgroundColor: BLUE, color: "#fff", border: "none", padding: "0.6rem 1.4rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
                    {step.btn}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — 12 Week Roadmap */}
        <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider text-center" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            12 Week Roadmap
          </h2>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="w-full" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  {["Week", "Athlete", "Parent"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Oswald', sans-serif", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INDIE_ROADMAP.map((row) => {
                  const isCurrent = row.week === currentWeek;
                  const isPast = row.week < currentWeek;
                  return (
                    <tr key={row.week} style={{
                      backgroundColor: isCurrent ? `${BLUE}15` : "transparent",
                      borderLeft: isCurrent ? `3px solid ${BLUE}` : "3px solid transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      opacity: isPast ? 0.5 : 1,
                    }}>
                      <td className="px-4 py-3 text-xs font-bold" style={{ color: isCurrent ? BLUE : "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif", whiteSpace: "nowrap" }}>
                        Wk {row.week}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{row.athlete}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{row.parent}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 — Months 4-6 */}
        <section className="px-6 md:px-16 py-14" style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold mb-3 uppercase tracking-wider" style={{ fontSize: "1.1rem" }}>Months 4–6 — What Happens After Week 12</h2>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Your 12 week guided program is complete but your access continues for 6 full months from your start date.
            </p>
            <ul className="flex flex-col gap-2">
              {["Continue game + practice pages", "End of season reflection", "Explore Courtside Conversations", "Stay connected to community"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ color: BLUE }}>→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6 — Strategy Session */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <div className="p-7 rounded-lg" style={{ border: `1px solid ${BLUE}40`, backgroundColor: `${BLUE}08` }}>
            <h3 className="font-bold mb-2 uppercase tracking-wide" style={{ fontSize: "0.95rem", color: BLUE }}>Want a 1:1 touchpoint with Gabby?</h3>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              MindSystem Independent is self-led — but that doesn't mean you have to figure everything out alone. If you want Gabby's eyes on your specific situation — book a $250 strategy session. The $250 applies to any MindSystem plan if you decide to upgrade.
            </p>
            <a href={STRATEGY_SESSION_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: BLUE, color: "#fff", padding: "0.75rem 1.75rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
              Book a Strategy Session — $250
            </a>
          </div>
        </section>

        {/* Section 7 — Upgrade Banner */}
        <section className="w-full px-6 md:px-16 py-12 text-center"
          style={{ backgroundColor: "rgba(152,47,247,0.1)", borderTop: "1px solid rgba(152,47,247,0.2)" }}>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)" }}>
              Want the community and the calls? Upgrade to MindSystem Supported.
            </p>
            <a href={UPGRADE_SUPPORTED_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#FF2D78", color: "#fff", padding: "0.875rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none" }}>
              Upgrade to Supported →
            </a>
          </div>
        </section>

        {/* Section 8 — Help */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <p className="font-bold mb-5 uppercase tracking-wide text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            If something feels unclear — start here before reaching out.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            <button onClick={() => navigate("/courses/independent-onboarding")}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", textAlign: "left", padding: 0, letterSpacing: "0.05em" }}>
              → Rewatch onboarding video
            </button>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>→ Check the roadmap above</span>
          </div>
          <button onClick={() => navigate("/ask")}
            style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "0.75rem 1.5rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
            Submit a Question →
          </button>
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Questions are answered within 48 hours.</p>
        </section>

      </div>
    </Layout>
  );
}
