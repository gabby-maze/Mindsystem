import { useAuth } from "@/context/AuthContext";
import FreeDashboard from "@/pages/dashboards/FreeDashboard";
import CoursesideDashboard from "@/pages/dashboards/CoursesideDashboard";
import IndependentDashboard from "@/pages/dashboards/IndependentDashboard";
import SupportedDashboard from "@/pages/dashboards/SupportedDashboard";
import InnerCircleDashboard from "@/pages/dashboards/InnerCircleDashboard";
import GabbyAdminDashboard from "@/pages/dashboards/GabbyAdminDashboard";

function getDashboardForTier(tier: string) {
  switch (tier) {
    case "courtside":   return <CoursesideDashboard />;
    case "independent": return <IndependentDashboard />;
    case "supported":   return <SupportedDashboard />;
    case "innerCircle": return <InnerCircleDashboard />;
    default:            return <FreeDashboard />;
  }
}

export default function DashboardPage() {
  const { family } = useAuth();

  if (!family) return null;

  if (family.is_admin) {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");
    if (preview) {
      return (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              backgroundColor: "#FF2D78",
              color: "#fff",
              textAlign: "center",
              padding: "0.5rem 1rem",
              fontSize: "0.75rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <span>Admin preview: {preview} tier</span>
            <a
              href="/members-portal/"
              style={{ color: "#fff", textDecoration: "underline", fontSize: "0.7rem" }}
            >
              Exit preview
            </a>
          </div>
          <div style={{ paddingTop: "2rem" }}>
            {getDashboardForTier(preview)}
          </div>
        </div>
      );
    }
    return <GabbyAdminDashboard />;
  }

  return getDashboardForTier(family.tier);
}
