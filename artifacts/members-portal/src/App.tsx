import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import DashboardPage from "@/pages/DashboardPage";
import CoursesPage from "@/pages/CoursesPage";
import CoursePage from "@/pages/CoursePage";
import LessonPage from "@/pages/LessonPage";
import LivePage from "@/pages/LivePage";
import ProgressPage from "@/pages/ProgressPage";
import AskPage from "@/pages/AskPage";
import NotificationsPage from "@/pages/NotificationsPage";
import MindSystemTrackPage from "@/pages/mindsystem/MindSystemTrackPage";
import MindSystemSectionsPage from "@/pages/mindsystem/MindSystemSectionsPage";
import MindSystemSectionPage from "@/pages/mindsystem/MindSystemSectionPage";
import MindSystemLessonPage from "@/pages/mindsystem/MindSystemLessonPage";
import VGLTopicsPage from "@/pages/vgl/VGLTopicsPage";
import VGLTopicPage from "@/pages/vgl/VGLTopicPage";
import VGLLessonPage from "@/pages/vgl/VGLLessonPage";
import NutritionPage from "@/pages/nutrition/NutritionPage";
import PostseasonPage from "@/pages/postseason/PostseasonPage";
import PreseasonPage from "@/pages/preseason/PreseasonPage";

const queryClient = new QueryClient();

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { family, loading } = useAuth();
  const [, navigate] = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0a0a0a" }}>
        <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Oswald', sans-serif", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          Loading...
        </div>
      </div>
    );
  }

  if (!family) {
    navigate("/login");
    return null;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/dashboard" component={() => <ProtectedRoute component={DashboardPage} />} />
      <Route path="/courses" component={() => <ProtectedRoute component={CoursesPage} />} />

      {/* MindSystem routes - most specific first */}
      <Route path="/courses/mindsystem/:track/:section/:subsection/lessons/:lessonId"
        component={() => <ProtectedRoute component={MindSystemLessonPage} />} />
      <Route path="/courses/mindsystem/:track/:section/lessons/:lessonId"
        component={() => <ProtectedRoute component={MindSystemLessonPage} />} />
      <Route path="/courses/mindsystem/:track/:section/:subsection"
        component={() => <ProtectedRoute component={MindSystemSectionPage} />} />
      <Route path="/courses/mindsystem/:track/:section"
        component={() => <ProtectedRoute component={MindSystemSectionPage} />} />
      <Route path="/courses/mindsystem/:track"
        component={() => <ProtectedRoute component={MindSystemSectionsPage} />} />
      <Route path="/courses/mindsystem"
        component={() => <ProtectedRoute component={MindSystemTrackPage} />} />

      {/* VGL routes - most specific first, before generic course routes */}
      <Route path="/courses/video-game-library/:topicId/lessons/:lessonId"
        component={() => <ProtectedRoute component={VGLLessonPage} />} />
      <Route path="/courses/video-game-library/:topicId"
        component={() => <ProtectedRoute component={VGLTopicPage} />} />
      <Route path="/courses/video-game-library"
        component={() => <ProtectedRoute component={VGLTopicsPage} />} />

      {/* Standard course routes */}
      <Route path="/courses/:courseId/lessons/:lessonId" component={() => <ProtectedRoute component={LessonPage} />} />
      <Route path="/courses/:courseId" component={() => <ProtectedRoute component={CoursePage} />} />

      <Route path="/live" component={() => <ProtectedRoute component={LivePage} />} />
      <Route path="/nutrition" component={() => <ProtectedRoute component={NutritionPage} />} />
      <Route path="/postseason" component={() => <ProtectedRoute component={PostseasonPage} />} />
      <Route path="/preseason" component={() => <ProtectedRoute component={PreseasonPage} />} />
      <Route path="/progress" component={() => <ProtectedRoute component={ProgressPage} />} />
      <Route path="/ask" component={() => <ProtectedRoute component={AskPage} />} />
      <Route path="/notifications" component={() => <ProtectedRoute component={NotificationsPage} />} />
      <Route path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
