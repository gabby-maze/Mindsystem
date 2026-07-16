import { useState } from "react";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { hasTierAccess } from "@/lib/data";
import { FUEL_CATEGORIES, type FuelCategoryId } from "@/lib/nutritionData";
import NutritionGuide from "./NutritionGuide";
import FuelCategoryView from "./FuelCategoryView";
import AskGabbySection from "./AskGabbySection";
import { UpgradeModal } from "@/components/UpgradeModal";

const PINK = "#FF2D78";

type ActiveTab = "guide" | FuelCategoryId;

export default function NutritionPage() {
  const { family } = useAuth();
  const [activeTab, setActiveTab] = useState<ActiveTab>("guide");
  const [showUpgrade, setShowUpgrade] = useState(false);

  if (!family) return null;

  const hasRecipeAccess = hasTierAccess(family.tier, "courtside");

  function handleTabClick(tabId: ActiveTab) {
    if (tabId === "guide") {
      setActiveTab("guide");
      return;
    }
    if (!hasRecipeAccess) {
      setShowUpgrade(true);
      return;
    }
    setActiveTab(tabId);
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

        {/* Tab buttons */}
        <div
          className="flex justify-center flex-wrap gap-2 mb-10"
          style={{ rowGap: "0.5rem" }}
        >
          {/* Guide tab — always free */}
          <button
            onClick={() => handleTabClick("guide")}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: activeTab === "guide" ? 700 : 600,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.5rem 1.1rem",
              backgroundColor: "#1A1A1A",
              color: activeTab === "guide" ? "#fff" : "#A0A0A0",
              border: activeTab === "guide" ? `2px solid ${PINK}` : "1px solid #2A2A2A",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "all 0.15s",
            }}
          >
            Nutrition Guide
          </button>

          {/* Recipe category tabs — locked for free */}
          {FUEL_CATEGORIES.map(cat => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: active ? 700 : 600,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1.1rem",
                  backgroundColor: "#1A1A1A",
                  color: active ? "#fff" : hasRecipeAccess ? "#A0A0A0" : "rgba(255,255,255,0.3)",
                  border: active ? `2px solid ${PINK}` : "1px solid #2A2A2A",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "all 0.15s",
                  position: "relative" as const,
                }}
              >
                {cat.label}
                {!hasRecipeAccess && (
                  <span style={{ marginLeft: "0.4rem", fontSize: "0.6rem", opacity: 0.5 }}>🔒</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#2A2A2A", marginBottom: "2.5rem" }} />

        {/* Content area */}
        <div className="mb-4">
          {activeTab === "guide" && <NutritionGuide />}
          {activeFuelCategory && hasRecipeAccess && <FuelCategoryView category={activeFuelCategory} />}
        </div>

        {/* Ask Gabby — always visible */}
        <AskGabbySection />
      </div>

      {showUpgrade && (
        <UpgradeModal
          onClose={() => setShowUpgrade(false)}
          headline="Recipes are part of Courtside Conversations."
          body="Upgrade to Courtside Conversations to unlock all 5 recipe categories — Recovery, Energy, Focus, Build, and Quick Fuel — plus the full training library."
        />
      )}
    </Layout>
  );
}
