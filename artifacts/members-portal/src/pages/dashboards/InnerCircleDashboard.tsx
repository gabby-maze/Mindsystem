import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { STRATEGY_SESSION_LINK, getWeekProgress } from "@/lib/data";

const SHIPPING_LINK = "https://api.leadconnectorhq.com/widget/form/nRhdYIoU5zdbBdoUyBDb";
const PARENT_ECOSYSTEM_SURVEY = "https://api.leadconnectorhq.com/widget/form/3BDaO0XP03QgfocArSbh";
const ATHLETE_PRECALL_SURVEY = "https://api.leadconnectorhq.com/widget/form/jW4QG8NWlfyi3FRqLQEk";
const PARENT_PRECALL_SURVEY = "https://api.leadconnectorhq.com/widget/form/vx5VByITGITwn9iLDQ93";
// TODO: replace with GHL private parent onboarding call booking link
const PRIVATE_PARENT_CALL_LINK = "TODO_PRIVATE_PARENT_ONBOARDING_LINK";
// TODO: replace with GHL private athlete onboarding call booking link
const PRIVATE_ATHLETE_CALL_LINK = "TODO_PRIVATE_ATHLETE_ONBOARDING_LINK";
// TODO: replace with GHL monthly private call booking link
const MONTHLY_CALL_LINK = "TODO_MONTHLY_PRIVATE_CALL_LINK";
// TODO: add Gabby's Voxer username - then replace "GABBY_VOXER_USERNAME" below
const VOXER_LINK = "https://voxer.com/u/GABBY_VOXER_USERNAME";

const PINK = "#FF2D78";

const IC_ROADMAP = [
  { week: 1, athlete: "Private onboarding call, workbook begins, Getting Started + Bold Commitment", parent: "Private onboarding call, Parent Training Lesson 1, Courtside - Your Starting Point", voxer: "Introduce yourself and your family" },
  { week: 2, athlete: "Mindset, Analyze, Zero In, Execute. Submit MAZE model.", parent: "Courtside Conversations, parent workbook, submit parent MAZE model responses", voxer: "Share anything from onboarding calls" },
  { week: 3, athlete: "Execution map, habit tracker begins", parent: "Parent Training Lesson 2 unlocks. Parent journal begins.", voxer: "Any friction in the process - bring it here" },
  { week: 4, athlete: "3 focus skills being tracked", parent: "Coach conversation - share athlete's 3 focus skills", voxer: "Share the three skills - Gabby can give direct feedback" },
  { week: 5, athlete: "Habit tracker in full swing", parent: "Review shared language framework", voxer: "How is the system landing at home?" },
  { week: 6, athlete: "Monthly reflection", parent: "Monthly reflection, book monthly private call", voxer: "Monthly check in - book your call" },
  { week: 7, athlete: "Skill milestone check", parent: "Dot connector - curate a learning experience", voxer: "Any moments you don't know how to navigate" },
  { week: 8, athlete: "Game + practice pages active", parent: "Shared language check in", voxer: "How is the car ride home going?" },
  { week: 9, athlete: "Post-game reflection review", parent: "Conversation you've been avoiding", voxer: "Bring it to Voxer - Gabby can help you prep" },
  { week: 10, athlete: "Progress assessment on 3 skills", parent: "12 week milestone prep", voxer: "What's shifted?" },
  { week: 11, athlete: "Athlete reflection", parent: "End of season conversation prep", voxer: "How do you want to close this season?" },
  { week: 12, athlete: "12 week milestone worksheet", parent: "Complete together", voxer: "Final check in with Gabby" },
];

export default function InnerCircleDashboard() {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  if (!family) return null;

  const weekData = family.enrollment_date ? getWeekProgress(family.enrollment_date) : null;
  const currentWeek = weekData?.weekNumber ?? 1;

  return (
    <Layout>
      <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif" }}>

        {/* Section 1 - Hero */}
        <section className="w-full px-6 md:px-16 py-20 relative" style={{ backgroundColor: "#2C2C2A" }}>
          <div className="absolute top-6 right-6">
            <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: `${PINK}22`, color: PINK, border: `1px solid ${PINK}50` }}>
              MindSystem Inner Circle
            </span>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Welcome, {family.family_name}
            </p>
            <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4.5vw,2.8rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              You have Gabby in your corner. Here's how to use every part of this.
            </h1>
            <p className="mb-6" style={{ fontWeight: 400, fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: 580, lineHeight: 1.7 }}>
              Your complete Inner Circle guide - your private call schedule, your Voxer access, your roadmap, and everything you need to make the most of the next 12 weeks.
            </p>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.8 }}>
              You made the most committed investment available inside MindSystem. That means you get the full system - the journals, the content, the community - plus Gabby directly in your corner for the full 12 weeks. This is a partnership.
            </p>
          </div>
        </section>

        {/* Section 2 - First Week Checklist */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            First Week Checklist
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { num: 1, label: "Shipping address", btn: "Submit Shipping Address →", href: SHIPPING_LINK },
              { num: 2, label: "Private parent onboarding call", sub: "Available Sun / Mon / Tue / Wed / Thu / Sat", btn: "Book Private Parent Onboarding Call →", href: PRIVATE_PARENT_CALL_LINK, surveyBtn: "Complete Parent Pre-Call Survey →", surveyHref: PARENT_PRECALL_SURVEY },
              { num: 3, label: "Private athlete onboarding call", btn: "Book Private Athlete Onboarding Call →", href: PRIVATE_ATHLETE_CALL_LINK, surveyBtn: "Complete Athlete Pre-Call Survey →", surveyHref: ATHLETE_PRECALL_SURVEY },
              { num: 4, label: "Connect on Voxer", sub: "Download Voxer at voxer.com. Voice gets faster responses - 24hr response time.", btn: "Open Voxer →", href: VOXER_LINK, voxer: true },
              { num: 5, label: "Watch onboarding video", btn: "Inner Circle Onboarding - Watch Now →", nav: "/courses/inner-circle-onboarding" },
              { num: 6, label: "Submit Parent Ecosystem Responses", sub: "Complete after your parent onboarding call — both athlete and parent forms go to Gabby.", btn: "Submit Parent Ecosystem Responses →", href: PARENT_ECOSYSTEM_SURVEY },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4 p-5 rounded-lg"
                style={{
                  backgroundColor: item.voxer ? `${PINK}08` : "rgba(255,255,255,0.03)",
                  border: item.voxer ? `1px solid ${PINK}40` : "1px solid rgba(255,255,255,0.08)",
                }}>
                <div className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 32, height: 32, backgroundColor: `${PINK}20`, border: `1px solid ${PINK}40` }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: PINK }}>{item.num}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm mb-1" style={{ color: "#fff" }}>{item.label}</p>
                  {item.sub && <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</p>}
                  {!item.sub && <div className="mb-3" />}
                  <div className="flex flex-wrap gap-3">
                    {item.nav ? (
                      <button onClick={() => navigate(item.nav!)}
                        style={{ backgroundColor: PINK, color: "#fff", border: "none", padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
                        {item.btn}
                      </button>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-block", backgroundColor: PINK, color: "#fff", padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
                        {item.btn}
                      </a>
                    )}
                    {(item as any).surveyHref && (
                      <a href={(item as any).surveyHref} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-block", backgroundColor: "transparent", border: `1px solid ${PINK}60`, color: PINK, padding: "0.5rem 1.25rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
                        {(item as any).surveyBtn}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Private Call Schedule */}
        <section className="px-6 md:px-16 py-14" style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold mb-3 uppercase tracking-wider" style={{ fontSize: "1.1rem", color: PINK }}>
              Your Private Call Schedule
            </h2>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              All of your calls are private - just you and Gabby. There are no group calls on the Inner Circle tier.
            </p>
            <a href={MONTHLY_CALL_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: PINK, color: "#fff", padding: "0.875rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", marginBottom: "1.5rem" }}>
              Book Monthly Private Call →
            </a>
            <ul className="flex flex-col gap-2 mt-4">
              {["Mid-season recalibration", "Processing a hard moment", "Reviewing progress", "Preparing for coach conversation", "Closing out a phase"].map((u) => (
                <li key={u} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <span style={{ color: PINK }}>→</span> {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4 - Voxer */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <div className="p-7 rounded-lg" style={{ border: `2px solid ${PINK}50`, backgroundColor: `${PINK}08` }}>
            <h2 className="font-bold mb-3 uppercase tracking-wider" style={{ fontSize: "1.1rem", color: PINK }}>
              Your Direct Line - Voxer
            </h2>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
              Your Voxer access is active now. This is your direct line to Gabby for the full 12 weeks - voice and text, 24 hour response time.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {["Use it for real moments", "Voice gets faster responses", "This is a support line for a family actively doing the work", "Gabby responds within 24 hours - usually much faster"].map((i) => (
                <li key={i} className="text-sm flex items-start gap-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <span style={{ color: PINK, flexShrink: 0 }}>→</span> {i}
                </li>
              ))}
            </ul>
            <a href={VOXER_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: PINK, color: "#fff", padding: "0.875rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", marginBottom: "1.5rem" }}>
              Open Voxer →
            </a>
            <div className="p-4 rounded-lg mt-2" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                "The families who get the most out of this tier are not the ones who wait for something to go wrong before using Voxer. They check in. They share wins. They bring the small moments. Use her."
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - 12 Week Roadmap with Voxer Column */}
        <section className="px-4 md:px-16 pb-16 max-w-6xl mx-auto">
          <h2 className="font-bold mb-6 uppercase tracking-wider text-center" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
            12 Week Roadmap
          </h2>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="w-full" style={{ borderCollapse: "collapse", minWidth: 700 }}>
              <thead>
                <tr style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  {["Week", "Athlete", "Parent", "Voxer"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs uppercase tracking-wider"
                      style={{ color: h === "Voxer" ? PINK : "rgba(255,255,255,0.5)", fontFamily: "'Oswald', sans-serif", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {IC_ROADMAP.map((row) => {
                  const isCurrent = row.week === currentWeek;
                  const isPast = row.week < currentWeek;
                  return (
                    <tr key={row.week} style={{
                      backgroundColor: isCurrent ? `${PINK}12` : "transparent",
                      borderLeft: isCurrent ? `3px solid ${PINK}` : "3px solid transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      opacity: isPast ? 0.5 : 1,
                    }}>
                      <td className="px-4 py-3 text-xs font-bold" style={{ color: isCurrent ? PINK : "rgba(255,255,255,0.4)", fontFamily: "'Oswald', sans-serif", whiteSpace: "nowrap" }}>
                        Wk {row.week}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{row.athlete}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{row.parent}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: `${PINK}cc`, lineHeight: 1.6, fontStyle: "italic" }}>{row.voxer}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 - Months 4-6 */}
        <section className="px-6 md:px-16 py-14" style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold mb-3 uppercase tracking-wider" style={{ fontSize: "1.1rem" }}>Months 4–6 - What Happens After Week 12</h2>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Your 12 week guided program is complete but your access continues for 6 full months from your start date. Note: Voxer access ends at Week 12.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {["Continue game + practice pages", "End of season reflection", "Explore Courtside Conversations", "Stay connected to community"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ color: PINK }}>→</span> {item}
                </li>
              ))}
            </ul>
            <a href={STRATEGY_SESSION_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "0.65rem 1.4rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
              Book additional $250 strategy sessions as needed →
            </a>
          </div>
        </section>

        {/* Section 7 - Help */}
        <section className="px-6 md:px-16 py-14 max-w-3xl mx-auto">
          <p className="font-bold mb-2 text-sm uppercase tracking-wide" style={{ color: PINK }}>You have Voxer. Use it.</p>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>For content or technical questions:</p>
          <button onClick={() => navigate("/ask")}
            style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.65)", padding: "0.7rem 1.5rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}>
            Submit a Question →
          </button>
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Voxer: 24hr response. Questions: 48hr response.</p>
        </section>

      </div>
    </Layout>
  );
}
