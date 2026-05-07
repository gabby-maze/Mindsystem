import { FUEL_CATEGORIES } from "@/lib/nutritionData";

const PINK = "#FF2D78";
const MUTED = "#A0A0A0";

export default function NutritionGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 1.15, color: "#fff" }}>
          Fuel the athlete.<br />Build the person.
        </h2>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.1rem", color: PINK, marginTop: "0.75rem", letterSpacing: "0.02em" }}>
          Everything your body does on the court starts with what you put in it.
        </p>
      </div>

      {/* Section 01 */}
      <div className="mb-8 rounded-lg p-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: PINK, textTransform: "uppercase", marginBottom: "0.75rem" }}>
          01
        </p>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", marginBottom: "1rem" }}>
          What Is Nutrition for an Athlete
        </h3>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>
          Athletic nutrition is not a diet — it is a performance system. Food is information for the body. Every meal is either building the athlete or breaking her down. There is no neutral ground.
        </p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginTop: "0.75rem" }}>
          The difference between an athlete who fuels deliberately and one who doesn't is not visible after one week. It compounds over months and years — in energy levels, recovery speed, injury resistance, and mental sharpness. Nutrition is a long game, the same way development is a long game.
        </p>
      </div>

      {/* Section 02 */}
      <div className="mb-8 rounded-lg p-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: PINK, textTransform: "uppercase", marginBottom: "0.75rem" }}>
          02
        </p>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", marginBottom: "1rem" }}>
          Why It Matters More Than Most Athletes Think
        </h3>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>
          Most athletes understand that food affects energy and physical performance. Far fewer understand that nutrition directly affects decision-making, emotional regulation, and focus under pressure.
        </p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginTop: "0.75rem" }}>
          When an athlete is under-fueled, the first thing to go is not strength — it is the mental game. The cognitive sharpness, the emotional composure, the ability to reset after a mistake. The same gaps athletes work in practice disappear faster when the body isn't supported. Every skill you've built in the gym or on the court becomes harder to access when you're running on empty.
        </p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginTop: "0.75rem" }}>
          Nutrition also affects injury risk, hormonal health, bone density, and recovery time — all of which are directly connected to how long an athlete stays in the game.
        </p>
      </div>

      {/* Section 04 */}
      <div className="mb-8 rounded-lg p-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: PINK, textTransform: "uppercase", marginBottom: "0.75rem" }}>
          04
        </p>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", marginBottom: "1rem" }}>
          The Five Fuels — How This Library Is Organized
        </h3>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
          This library is organized around five fuel categories. Each one addresses a specific performance need and includes an overview explaining the why, the timing, what to look for, and what to avoid — plus 10 recipes built for that category.
        </p>
        <div className="flex flex-col gap-3">
          {FUEL_CATEGORIES.map(cat => (
            <div key={cat.id} className="flex items-start gap-4 p-4 rounded" style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: cat.accentColor }} />
              <div>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: cat.accentColor, textTransform: "uppercase" }}>
                  {cat.label}
                </p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: MUTED, marginTop: "0.2rem" }}>
                  {cat.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 05 — One Law */}
      <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: PINK, textTransform: "uppercase", marginBottom: "1.5rem" }}>
          05 · One Law
        </p>
        <blockquote style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.4rem,3.5vw,2rem)", color: "#fff", lineHeight: 1.4, marginBottom: "1.25rem" }}>
          "The process is the point.<br />The outcome is the byproduct."
        </blockquote>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", color: MUTED, letterSpacing: "0.05em" }}>
          What you fuel today, you perform tomorrow.
        </p>
      </div>
    </div>
  );
}
