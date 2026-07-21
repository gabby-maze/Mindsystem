import { useState } from "react";
import type { FuelCategory, Recipe } from "@/lib/nutritionData";

const PINK = "#FF2D78";
const MUTED = "#A0A0A0";

function OverviewPage({ category }: { category: FuelCategory }) {
  const { accentColor, label, tagline, overview } = category;
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(2rem,5vw,2.8rem)", color: "#fff" }}>
          {label}
        </h2>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.05rem", color: accentColor, marginTop: "0.5rem" }}>
          {tagline}
        </p>
      </div>

      {/* Why it matters */}
      <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: accentColor, textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Why This Fuel Matters
        </p>
        {overview.paragraphs.map((p, i) => (
          <p key={i} style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: i < overview.paragraphs.length - 1 ? "0.75rem" : 0 }}>
            {p}
          </p>
        ))}
      </div>

      {/* When to use */}
      <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: accentColor, textTransform: "uppercase", marginBottom: "0.75rem" }}>
          When to Use It
        </p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
          {overview.when}
        </p>
      </div>

      {/* Look for / Avoid grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="rounded-lg p-6" style={{ backgroundColor: "#141414", border: `1px solid ${accentColor}30` }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: accentColor, textTransform: "uppercase", marginBottom: "0.75rem" }}>
            What to Look For
          </p>
          <ul className="flex flex-col gap-2">
            {overview.lookFor.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: accentColor, marginTop: "0.35rem", flexShrink: 0, fontSize: "0.5rem" }}>●</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg p-6" style={{ backgroundColor: "#141414", border: "1px solid rgba(255,45,120,0.2)" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: PINK, textTransform: "uppercase", marginBottom: "0.75rem" }}>
            What to Avoid
          </p>
          <ul className="flex flex-col gap-2">
            {overview.avoid.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: PINK, marginTop: "0.35rem", flexShrink: 0, fontSize: "0.5rem" }}>●</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Law tie-in */}
      <div className="rounded-lg p-6 text-center" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: PINK, textTransform: "uppercase", marginBottom: "1rem" }}>
          MazePerformance Principle
        </p>
        <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.1rem,2.5vw,1.4rem)", color: "#fff", lineHeight: 1.5 }}>
          "{overview.lawTieIn}"
        </p>
      </div>
    </div>
  );
}

function RecipePage({ recipe, accentColor }: { recipe: Recipe; accentColor: string }) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded mb-3" style={{ backgroundColor: `${accentColor}20`, color: accentColor, fontFamily: "'Oswald', sans-serif" }}>
          Recipe {recipe.number}
        </span>
        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.8rem,4vw,2.5rem)", color: "#fff" }}>
          {recipe.name}
        </h2>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", color: MUTED, marginTop: "0.5rem", lineHeight: 1.6 }}>
          {recipe.why}
        </p>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[
          { label: "Prep", value: recipe.prepTime },
          { label: "Cook", value: recipe.cookTime },
          { label: "Serves", value: recipe.servings },
        ].map(({ label, value }) => (
          <div key={label} className="px-4 py-2 rounded" style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", color: MUTED, textTransform: "uppercase", letterSpacing: "0.15em" }}>{label} · </span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: "#fff" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Nutrition snapshot */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Protein", value: recipe.protein },
          { label: "Carbs", value: recipe.carbs },
          { label: "Fat", value: recipe.fat },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg p-4 text-center" style={{ backgroundColor: "#141414", border: `1px solid ${accentColor}30` }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: accentColor }}>{value}</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", color: MUTED, textTransform: "uppercase", letterSpacing: "0.12em", marginTop: "0.2rem" }}>{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Ingredients */}
        <div className="rounded-lg p-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: accentColor, textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Ingredients
          </p>
          <ul className="flex flex-col gap-2">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: accentColor, marginTop: "0.3rem", flexShrink: 0 }}>–</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="rounded-lg p-6" style={{ backgroundColor: "#141414", border: "1px solid #2A2A2A" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: accentColor, textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Instructions
          </p>
          <ol className="flex flex-col gap-3">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: accentColor, minWidth: "1.25rem", marginTop: "0.15rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Athlete tip */}
      <div className="rounded-lg p-5 mb-5" style={{ backgroundColor: "#141414", borderLeft: `3px solid ${PINK}`, border: "1px solid #2A2A2A", borderLeftWidth: "3px", borderLeftColor: PINK }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", color: PINK, textTransform: "uppercase", marginBottom: "0.4rem" }}>
          Athlete Tip
        </p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", fontStyle: "italic", color: PINK, lineHeight: 1.6 }}>
          {recipe.athleteTip}
        </p>
      </div>

      {/* PDF download + Video link */}
      <div className="flex flex-wrap gap-3">
        {recipe.pdfUrl && (
          <a
            href={recipe.pdfUrl}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: accentColor,
              color: "#0a0a0a",
              padding: "0.875rem 2rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textDecoration: "none",
              borderRadius: "3px",
            }}
          >
            ↓ Download Recipe Card
          </a>
        )}
        {recipe.videoUrl && (
          <a
            href={recipe.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "transparent",
              color: accentColor,
              padding: "0.875rem 2rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textDecoration: "none",
              borderRadius: "3px",
              border: `1px solid ${accentColor}60`,
            }}
          >
            ▶ Watch Video
          </a>
        )}
      </div>
    </div>
  );
}

interface Props {
  category: FuelCategory;
}

export default function FuelCategoryView({ category }: Props) {
  const [activeRecipe, setActiveRecipe] = useState<number | "overview">("overview");

  return (
    <div>
      {/* Sub-navigation: Overview + Recipe buttons */}
      <div className="mb-8">
        {/* Overview button */}
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => setActiveRecipe("overview")}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              backgroundColor: activeRecipe === "overview" ? "#982FF7" : "#1A1A1A",
              color: "#fff",
              border: "1px solid " + (activeRecipe === "overview" ? "#982FF7" : "#2A2A2A"),
              cursor: "pointer",
              borderRadius: "3px",
              transition: "all 0.15s",
            }}
          >
            Overview
          </button>
        </div>

        {/* Recipe buttons — 2-column grid on mobile */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
          {category.recipes.map((recipe, i) => {
            const active = activeRecipe === i;
            return (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipe(i)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.4rem 0.85rem",
                  backgroundColor: active ? "#141414" : "#1A1A1A",
                  color: active ? "#fff" : "rgba(255,255,255,0.65)",
                  border: "1px solid " + (active ? "#2A2A2A" : "#2A2A2A"),
                  borderLeft: active ? `3px solid ${PINK}` : "1px solid #2A2A2A",
                  cursor: "pointer",
                  borderRadius: "3px",
                  transition: "all 0.15s",
                  textAlign: "left",
                }}
              >
                {recipe.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {activeRecipe === "overview" ? (
        <OverviewPage category={category} />
      ) : (
        <RecipePage
          recipe={category.recipes[activeRecipe as number]}
          accentColor={category.accentColor}
        />
      )}
    </div>
  );
}
