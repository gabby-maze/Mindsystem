import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { AnnouncementBoard } from "@/components/AnnouncementBoard";
import { STRATEGY_SESSION_LINK, LIVE_SESSIONS, getWeekProgress } from "@/lib/data";

const SHIPPING_LINK = "https://api.leadconnectorhq.com/widget/form/nRhdYIoU5zdbBdoUyBDb";
const PARENT_ONBOARDING_LINK = "https://calendly.com/gabby-mazeperformance/supported-onboarding-call-parent";
const ATHLETE_ONBOARDING_LINK = "https://calendly.com/gabby-mazeperformance/supported-onboarding-call-athlete";

const PURPLE = "#982FF7";
const TEAL = "#00D4C8";

interface RoadmapBlock {
  label: string;
  theme: string;
  athlete: string[];
  parent: string[];
  hardGate?: boolean;
  groupCall?: boolean;
  isReflection?: boolean;
  weekStart: number;
  weekEnd: number;
}

const ROADMAP_BLOCKS: RoadmapBlock[] = [
  {
    label: "Weeks 1–2",
    theme: "The MAZE",
    weekStart: 1, weekEnd: 2,
    hardGate: true,
    groupCall: true,
    athlete: [
      "Complete all four phases of the MAZE — Mindset, Analyze, Zero In, Execute.",
      "Submit the MAZE Completion Form when all four phases are done.",
      "Nothing moves forward without it.",
    ],
    parent: [
      "Work through the MAZE Mirror workbook alongside your athlete's progress.",
      "Submit your ecosystem responses after your athlete submits hers.",
      "Both forms go to Gabby before journals ship.",
    ],
  },
  {
    label: "Week 3",
    theme: "The season begins",
    weekStart: 3, weekEnd: 3,
    groupCall: true,
    athlete: [
      "Both journals arrive.",
      "Execution map, habit tracker, game pages, and practice pages all go live this week.",
      "The system is now running.",
    ],
    parent: [
      "Both journals arrive.",
      "Your Parent Compass is in hand. The daily practice begins.",
      "Open the parent track and start the daily loop.",
    ],
  },
  {
    label: "Weeks 4–5",
    theme: "Building the habit",
    weekStart: 4, weekEnd: 5,
    groupCall: true,
    athlete: [
      "Tracking all three focus skills consistently.",
      "Mantra running three times a day — morning, before practice, before bed.",
      "Accountability buddy active and checking in weekly.",
    ],
    parent: [
      "Coach conversation done — athlete's three focus skills shared.",
      "Language swap in effect — manager language replaced with collaborator language.",
      "All four daily commitments running.",
    ],
  },
  {
    label: "Weeks 6–7",
    theme: "The middle",
    weekStart: 6, weekEnd: 7,
    groupCall: true,
    athlete: [
      "This is the hardest stretch. Expect resistance. Stay in it.",
      "Mid-season checkpoint — rescore your three focus skills and name what shifted.",
      "Check in with your full ecosystem.",
    ],
    parent: [
      "Mid-season support audit — honest review of your four commitments.",
      "Where have you held the line? Where have you slipped back?",
      "Check in with your ecosystem and name one adjustment for the second half.",
    ],
  },
  {
    label: "Weeks 8–9",
    theme: "Staying in it",
    weekStart: 8, weekEnd: 9,
    groupCall: true,
    athlete: [
      "Pull your game and practice page data — look at the pattern, not just individual sessions.",
      "Pattern recognition first. Honest adjustment second.",
      "What is the data actually telling you?",
    ],
    parent: [
      "Post-game protocol check — are you giving the sixty minutes before reacting?",
      "Review your language patterns over the past four weeks.",
      "Name one honest adjustment and make it before Week 10.",
    ],
  },
  {
    label: "Weeks 10–11",
    theme: "The final push",
    weekStart: 10, weekEnd: 11,
    groupCall: true,
    athlete: [
      "Look back at your three focus skills from Zero In.",
      "Score each one honestly. Name what moved. Name what didn't.",
      "Begin preparing for the closing conversation.",
    ],
    parent: [
      "Prepare the closing conversation — this one is about you, not just the season.",
      "Honestly review your two season goals.",
      "What did you actually do? What will you carry forward?",
    ],
  },
  {
    label: "Week 12",
    theme: "Reflection",
    weekStart: 12, weekEnd: 12,
    isReflection: true,
    athlete: [
      "Rescore the satisfaction wheel — all eight categories.",
      "Write three insights per category.",
      "Name four things you are carrying forward into next season.",
    ],
    parent: [
      "Rescore your own support wheel.",
      "Write three insights from your season as a parent.",
      "Name four things you are carrying forward.",
    ],
  },
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
              { num: 4, label: "Onboarding video", btn: "Watch Onboarding Video →", nav: "/courses/supported-onboarding", downloadUrl: "/MP_ATHLETE_COMPASS_WORKBOOK_v1.pdf", parentDownloadUrl: "/MP_PARENT_COMPASS_WORKBOOK_v1.pdf" },
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
                        Download Athlete Workbook ↓
                      </a>
                    )}
                    {(item as any).parentDownloadUrl && (
                      <a href={(item as any).parentDownloadUrl} download
                        style={{ display: "inline-block", backgroundColor: "transparent", border: `1px solid ${PURPLE}60`, color: PURPLE, padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
                        Download Parent Workbook ↓
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

        {/* May 2026 Calendar */}
        <section className="px-6 md:px-16 py-10 max-w-4xl mx-auto w-full">
          <h2 className="font-bold mb-5 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            May 2026 Call Calendar
          </h2>
          <div style={{ borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", overflowX: "auto" }}>
            <iframe
              src={`${import.meta.env.BASE_URL}may-2026-calendar.html`}
              width="100%"
              height="820"
              frameBorder="0"
              style={{ display: "block", border: "none", minWidth: 620 }}
              title="May 2026 Group Call Schedule"
            />
          </div>
        </section>

        {/* Section 4 - Content Roadmap Summary */}
        <section className="px-6 md:px-16 py-14 max-w-4xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            Content Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-lg flex flex-col gap-4" style={{ border: `1px solid ${PURPLE}30`, backgroundColor: `${PURPLE}08` }}>
              <p className="font-bold text-xs uppercase tracking-wider" style={{ color: PURPLE }}>Athlete Track</p>
              <p className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Weeks 1-2: Your athlete completes the MAZE. Mindset. Analyze. Zero In. Execute. When she is done - she submits her MAZE Completion Form. Nothing moves forward without it.
              </p>
              <a href={SHIPPING_LINK} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", backgroundColor: PURPLE, color: "#fff", padding: "0.65rem 1.4rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", textAlign: "center" }}>
                Submit Athlete MAZE Completion Form →
              </a>
            </div>
            <div className="p-5 rounded-lg flex flex-col gap-4" style={{ border: `1px solid ${TEAL}30`, backgroundColor: `${TEAL}08` }}>
              <p className="font-bold text-xs uppercase tracking-wider" style={{ color: TEAL }}>Parent Track</p>
              <p className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                While your athlete completes the MAZE - browse her trainings, complete your Parent Onboarding, and work through the MAZE Mirror in your workbook. You are not behind. You are preparing. When she is done, she submits her form. Then you submit yours. Both go to Gabby. Your personalized Parent Compass ships after that.
              </p>
              <a href={SHIPPING_LINK} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", backgroundColor: PURPLE, color: "#fff", padding: "0.65rem 1.4rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", textAlign: "center" }}>
                Submit Your Ecosystem Responses →
              </a>
            </div>
          </div>
        </section>

        {/* Section 5 - 12 Week Roadmap */}
        <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto">
          <h2 className="font-bold mb-2 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            12 Week Roadmap
          </h2>
          <p className="mb-8 text-xs" style={{ color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Your current block is highlighted
          </p>
          <div className="flex flex-col gap-4">
            {ROADMAP_BLOCKS.map((block) => {
              const isCurrent = currentWeek >= block.weekStart && currentWeek <= block.weekEnd;
              const isPast = currentWeek > block.weekEnd;
              return (
                <div key={block.label}
                  style={{
                    borderRadius: 10,
                    border: isCurrent ? `1.5px solid ${PURPLE}60` : "1px solid rgba(255,255,255,0.07)",
                    backgroundColor: isCurrent ? `${PURPLE}10` : isPast ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.03)",
                    opacity: isPast ? 0.55 : 1,
                    overflow: "hidden",
                  }}>
                  {/* Block header */}
                  <div className="flex items-center gap-3 px-5 py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: isCurrent ? `${PURPLE}18` : "rgba(255,255,255,0.025)" }}>
                    <span className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: isCurrent ? PURPLE : "rgba(255,255,255,0.35)", minWidth: 80 }}>{block.label}</span>
                    <span style={{ width: 1, height: 14, backgroundColor: "rgba(255,255,255,0.15)", display: "inline-block" }} />
                    <span className="font-bold uppercase tracking-wide"
                      style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: isCurrent ? "#fff" : "rgba(255,255,255,0.6)" }}>
                      {block.theme}
                    </span>
                    {block.hardGate && (
                      <span className="ml-auto text-xs px-2 py-0.5 rounded"
                        style={{ backgroundColor: "#FF2D7820", color: "#FF2D78", border: "1px solid #FF2D7840", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
                        Hard gate
                      </span>
                    )}
                    {isCurrent && !block.hardGate && (
                      <span className="ml-auto text-xs px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${PURPLE}25`, color: PURPLE, border: `1px solid ${PURPLE}40`, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        You are here
                      </span>
                    )}
                  </div>
                  {/* Athlete + Parent columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {[
                      { label: "Athlete", color: PURPLE, items: block.athlete },
                      { label: "Parent", color: "#FF2D78", items: block.parent },
                    ].map(({ label, color, items }, ci) => (
                      <div key={label} className="px-5 py-4"
                        style={{ borderRight: ci === 0 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color }}>{label}</p>
                        <ul className="flex flex-col gap-1.5">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                              <span style={{ color, marginTop: 3, flexShrink: 0 }}>—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {/* Group call footer */}
                  {block.groupCall && (
                    <div className="px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-2"
                      style={{ borderTop: `1px solid ${TEAL}20`, backgroundColor: `${TEAL}06` }}>
                      <span className="text-xs px-2 py-0.5 rounded shrink-0"
                        style={{ backgroundColor: `${TEAL}18`, color: TEAL, border: `1px solid ${TEAL}35`, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Bimonthly Group Call
                      </span>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        Your group call lands somewhere in this window — check the call calendar above for your exact date. Complete the pre-call check-in form before you join.
                      </p>
                    </div>
                  )}
                  {/* Week 12 closing conversation note */}
                  {block.isReflection && (
                    <div className="px-5 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                        The closing conversation is not about the season. It is about who you both became during it.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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
