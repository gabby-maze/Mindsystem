import { useState } from "react";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { hasTierAccess } from "@/lib/data";
import { FUEL_CATEGORIES, type FuelCategoryId } from "@/lib/nutritionData";
import NutritionGuide from "./NutritionGuide";
import FuelCategoryView from "./FuelCategoryView";
import AskGabbySection from "./AskGabbySection";
import { Lock } from "lucide-react";

const PINK = "#FF2D78";

type ActiveTab = "guide" | FuelCategoryId;

export default function NutritionPage() {
  const { family } = useAuth();
  const [activeTab, setActiveTab] = useState<ActiveTab>("guide");

  if (!family) return null;

  const hasAccess = hasTierAccess(family.tier, "courtside");

  if (!hasAccess) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <Lock size={32} style={{ color: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }} />
          <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.8rem", color: "#fff", marginBottom: "0.75rem" }}>
            Nutrition Library
          </h2>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", maxWidth: "400px" }}>
            The Nutrition Library is available on Courtside Conversations and above.
          </p>
        </div>
      </Layout>
    );
  }

  const activeFuelCategory = activeTab !== "guide"
    ? FUEL_CATEGORIES.find(c => c.id === activeTab) ?? null
    : null;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">

        {/* Page title */}
        <div className="text-center mb-8">
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            MazePerformance
          </p>
          <h1 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "#fff" }}>
            Nutrition Library
          </h1>
        </div>

        {/* Nutrition Guide main tab */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("guide")}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.65rem 2rem",
              borderRadius: "100px",
              backgroundColor: activeTab === "guide" ? PINK : "#1A1A1A",
              color: "#fff",
              border: activeTab === "guide" ? `1px solid ${PINK}` : "1px solid #2A2A2A",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            Nutrition Guide
          </button>
        </div>

        {/* Fuel category buttons */}
        <div
          className="flex justify-center flex-wrap gap-2 mb-10"
          style={{ rowGap: "0.5rem" }}
        >
          {FUEL_CATEGORIES.map(cat => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: active ? 700 : 600,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1.1rem",
                  backgroundColor: "#1A1A1A",
                  color: active ? "#fff" : "#A0A0A0",
                  border: active ? `2px solid ${PINK}` : "1px solid #2A2A2A",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "all 0.15s",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#2A2A2A", marginBottom: "2.5rem" }} />

        {/* Content area */}
        <div className="mb-4">
          {activeTab === "guide" && <NutritionGuide />}
          {activeFuelCategory && <FuelCategoryView category={activeFuelCategory} />}
        </div>

        {/* Ask Gabby — always visible */}
        <AskGabbySection />
      </div>
    </Layout>
  );
}
