import { useAuth } from "@/context/AuthContext";
import FreeDashboard from "@/pages/dashboards/FreeDashboard";
import CoursesideDashboard from "@/pages/dashboards/CoursesideDashboard";
import IndependentDashboard from "@/pages/dashboards/IndependentDashboard";
import SupportedDashboard from "@/pages/dashboards/SupportedDashboard";
import InnerCircleDashboard from "@/pages/dashboards/InnerCircleDashboard";
import GabbyAdminDashboard from "@/pages/dashboards/GabbyAdminDashboard";

export default function DashboardPage() {
  const { family } = useAuth();

  if (!family) return null;

  if (family.is_admin) return <GabbyAdminDashboard />;

  switch (family.tier) {
    case "courtside":   return <CoursesideDashboard />;
    case "independent": return <IndependentDashboard />;
    case "supported":   return <SupportedDashboard />;
    case "innerCircle": return <InnerCircleDashboard />;
    default:            return <FreeDashboard />;
  }
}
