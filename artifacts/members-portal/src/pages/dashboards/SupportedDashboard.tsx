import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { AnnouncementBoard } from "@/components/AnnouncementBoard";
import { STRATEGY_SESSION_LINK, LIVE_SESSIONS, getWeekProgress } from "@/lib/data";

const SHIPPING_LINK = "https://api.leadconnectorhq.com/widget/form/nRhdYIoU5zdbBdoUyBDb";
// TODO: replace with GHL parent onboarding call booking link
const PARENT_ONBOARDING_LINK = "TODO_PARENT_ONBOARDING_BOOKING_LINK";
// TODO: replace with GHL athlete onboarding call booking link
const ATHLETE_ONBOARDING_LINK = "TODO_ATHLETE_ONBOARDING_BOOKING_LINK";

const PURPLE = "#982FF7";
const TEAL = "#00D4C8";

// Weeks where group calls happen
const GROUP_CALL_WEEKS = new Set([2, 3, 5, 6, 8, 10]);

const SUPPORTED_ROADMAP = [
  { week: 1, athlete: "Onboarding call booked, workbook begins, Compass Training - Getting Started + Bold Commitment", parent: "Onboarding call booked, Parent Training Lesson 1, Courtside Conversations - Your Starting Point" },
  { week: 2, athlete: "Compass Training - Mindset, Analyze, Zero In, Execute. Submit completed MAZE model.", parent: "Continue Courtside Conversations, parent workbook, submit parent MAZE model responses, first group calls" },
  { week: 3, athlete: "Execution map, habit tracker begins, game and practice pages active", parent: "Parent Training Lesson 2 unlocks. Begin parent journal. Group call." },
  { week: 4, athlete: "3 focus skills being tracked", parent: "Coach conversation - share athlete's 3 focus skills. Continue parent journal." },
  { week: 5, athlete: "Habit tracker in full swing", parent: "Review shared language framework. Group call." },
  { week: 6, athlete: "Monthly reflection", parent: "Monthly reflection, review habit tracker, group call." },
  { week: 7, athlete: "Skill milestone check", parent: "Dot connector - curate a learning experience" },
  { week: 8, athlete: "Game + practice pages active", parent: "Shared language check in. Group call." },
  { week: 9, athlete: "Post-game reflection review", parent: "Conversation you've been avoiding" },
  { week: 10, athlete: "Progress assessment on 3 focus skills", parent: "Prepare for 12 week milestone. Group call." },
  { week: 11, athlete: "Athlete reflection", parent: "Parent reflection, end of season conversation prep" },
  { week: 12, athlete: "12 week milestone worksheet", parent: "Complete together, review months 4-6" },
];

export default function SupportedDashboard() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  if (!family) return null;

  const weekData = family.enrollment_date ? getWeekProgress(family.enrollment_date) : null;
  const currentWeek = weekData?.weekNumber ?? 1;

  const parentCalls = LIVE_SESSIONS.filter(s => s.id.startsWith("supported-parent"));
  const athleteCalls = LIVE_SESSIONS.filter(s => s.id.startsWith("supported-athlete"));

  return (
    <Layout>
      <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>

        {/* Section 1 - Hero */}
        <section className="w-full px-6 md:px-16 py-20 relative" style={{ backgroundColor: "#2C2C2A" }}>
          <div className="absolute top-6 right-6">
            <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: `${PURPLE}22`, color: PURPLE, border: `1px solid ${PURPLE}50` }}>
              MindSystem Supported
            </span>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Welcome, {family.family_name}
            </p>
            <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4.5vw,2.8rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              You have the compass and the community. Here's how to use both.
            </h1>
            <p className="mb-6" style={{ fontWeight: 400, fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: 580, lineHeight: 1.7 }}>
              Everything you need for the next 12 weeks - your schedule, your roadmap, and your next step - all in one place.
            </p>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.8 }}>
              You didn't just invest in a program. You invested in a system - for your athlete, for yourself, and for the way your whole family moves through this season. Nothing falls through the cracks when you know where to look.
            </p>
          </div>
        </section>

        {/* Waypoints Banner */}
        <section className="px-6 md:px-16 py-10" style={{ backgroundColor: `${PURPLE}12`, borderTop: `1px solid ${PURPLE}30`, borderBottom: `1px solid ${PURPLE}30` }}>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
                This program is built on 12 beliefs about how confidence is built, how families navigate pressure, and what it actually means to support an athlete. Download the Waypoints before you begin. They are the whole reason this works.
              </p>
            </div>
            <div className="shrink-0">
              <a href="/MP_12_WAYPOINTS_v1.pdf" download
                style={{ display: "inline-block", backgroundColor: PURPLE, color: "#fff", padding: "0.75rem 1.6rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none", whiteSpace: "nowrap" }}>
                Download the 12 Waypoints →
              </a>
            </div>
          </div>
        </section>

        {/* Section 2 - First Week Checklist */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            First Week Checklist
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { num: 1, label: "Shipping address", btn: "Submit Shipping Address →", href: SHIPPING_LINK, external: true },
              { num: 2, label: "Parent onboarding call", sub: "Wed 9–10am PST / Sun 10–11am PST", btn: "Book Parent Onboarding Call →", href: PARENT_ONBOARDING_LINK, external: true },
              { num: 3, label: "Athlete onboarding call", sub: "Wed 5:30–6:30pm PST / Sat 11am–12pm PST", btn: "Book Athlete Onboarding Call →", href: ATHLETE_ONBOARDING_LINK, external: true },
              { num: 4, label: "Onboarding video", btn: "Watch Onboarding Video →", nav: "/courses/supported-onboarding", downloadUrl: "/MP_ATHLETE_COMPASS_WORKBOOK_v1.pdf" },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4 p-5 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 32, height: 32, backgroundColor: `${PURPLE}20`, border: `1px solid ${PURPLE}40` }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: PURPLE }}>{item.num}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm mb-1" style={{ color: "#fff" }}>{item.label}</p>
                  {item.sub && <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</p>}
                  {!item.sub && <div className="mb-3" />}
                  <div className="flex flex-wrap gap-3">
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-block", backgroundColor: PURPLE, color: "#fff", padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
                        {item.btn}
                      </a>
                    ) : (
                      <button onClick={() => navigate(item.nav!)}
                        style={{ backgroundColor: PURPLE, color: "#fff", border: "none", padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
                        {item.btn}
                      </button>
                    )}
                    {item.downloadUrl && (
                      <a href={item.downloadUrl} download
                        style={{ display: "inline-block", backgroundColor: "transparent", border: `1px solid ${PURPLE}60`, color: PURPLE, padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
                        Download Workbook ↓
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Group Call Schedule */}
        <section className="px-6 md:px-16 py-14" style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold mb-3 uppercase tracking-wider" style={{ fontSize: "1.1rem" }}>Your Group Call Schedule</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Your biweekly group calls start in Week 2. Choose one time for each and save the Zoom link. The link stays the same every session.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[
                { title: "Parent Group Calls", calls: parentCalls },
                { title: "Athlete Group Calls", calls: athleteCalls },
              ].map(({ title, calls }) => (
                <div key={title} className="p-5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="font-bold text-xs uppercase tracking-wider mb-4" style={{ color: TEAL }}>{title}</p>
                  {calls.map((c) => (
                    <div key={c.id} className="flex items-center justify-between mb-3">
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{c.time}</p>
                      <a href={c.zoomLink} target="_blank" rel="noopener noreferrer"
                        style={{ backgroundColor: TEAL, color: "#0a0a0a", padding: "0.35rem 0.9rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                        Join Zoom
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Can't make it? Every session is recorded. Replays available inside Group Call Replays within 24 hours.{" "}
              <button onClick={() => navigate("/live")}
                style={{ background: "none", border: "none", color: TEAL, cursor: "pointer", fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em", padding: 0 }}>
                View Replays →
              </button>
            </p>
          </div>
        </section>

        {/* Section 4 - Content Roadmap Summary */}
        <section className="px-6 md:px-16 py-14 max-w-4xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            Content Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="p-5 rounded-lg" style={{ border: `1px solid ${PURPLE}30`, backgroundColor: `${PURPLE}08` }}>
              <p className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: PURPLE }}>Athlete Track</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Your athlete moves through Compass Training sections 1–6 within the first 2 weeks.
              </p>
            </div>
            <div className="p-5 rounded-lg" style={{ border: `1px solid ${TEAL}30`, backgroundColor: `${TEAL}08` }}>
              <p className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: TEAL }}>Parent Track</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Your job in the early weeks is NOT to follow along with what your athlete is doing. Your track runs parallel - not behind her.
              </p>
            </div>
          </div>
          <a href={SHIPPING_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "0.65rem 1.4rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
            Submit Parent MAZE Model Responses →
          </a>
        </section>

        {/* Section 5 - 12 Week Roadmap */}
        <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider text-center" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            12 Week Roadmap
          </h2>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="w-full" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  {["Week", "Athlete", "Parent"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Oswald', sans-serif", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SUPPORTED_ROADMAP.map((row) => {
                  const isCurrent = row.week === currentWeek;
                  const isPast = row.week < currentWeek;
                  const isGroupCall = GROUP_CALL_WEEKS.has(row.week);
                  return (
                    <tr key={row.week} style={{
                      backgroundColor: isCurrent ? `${PURPLE}15` : "transparent",
                      borderLeft: isCurrent ? `3px solid ${PURPLE}` : isGroupCall ? `3px solid ${TEAL}50` : "3px solid transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      opacity: isPast ? 0.5 : 1,
                    }}>
                      <td className="px-4 py-3" style={{ whiteSpace: "nowrap" }}>
                        <p className="text-xs font-bold" style={{ color: isCurrent ? PURPLE : "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif" }}>
                          Wk {row.week}
                        </p>
                        {isGroupCall && (
                          <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: `${TEAL}20`, color: TEAL, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            Group Call
                          </span>
                        )}
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

        {/* Section 6 - Community Board */}
        <section className="px-6 md:px-16 py-14 max-w-4xl mx-auto">
          <h2 className="font-bold mb-2 uppercase tracking-wider" style={{ fontSize: "1.1rem" }}>Your Cohort Community</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>You're not doing this alone. This is your group.</p>
          <AnnouncementBoard family={family} />
        </section>

        {/* Section 7 - Strategy Session + Help */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <div className="p-7 rounded-lg mb-8" style={{ border: `1px solid ${PURPLE}40`, backgroundColor: `${PURPLE}08` }}>
            <h3 className="font-bold mb-2 uppercase tracking-wide text-sm" style={{ color: PURPLE }}>Want a 1:1 touchpoint with Gabby?</h3>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              Book a $250 strategy session. The $250 applies to any MindSystem plan if you decide to upgrade.
            </p>
            <a href={STRATEGY_SESSION_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: PURPLE, color: "#fff", padding: "0.7rem 1.5rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
              Book a Strategy Session - $250
            </a>
          </div>
          <div>
            <p className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.5)" }}>Need help?</p>
            <div className="flex flex-col gap-2 mb-5">
              {["Rewatch onboarding video", "Check the roadmap above", "Check group call replays"].map((l) => (
                <span key={l} className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>→ {l}</span>
              ))}
            </div>
            <button onClick={() => navigate("/ask")}
              style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.65)", padding: "0.7rem 1.5rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
              Submit a Question →
            </button>
            <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Questions answered within 48 hours.</p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
