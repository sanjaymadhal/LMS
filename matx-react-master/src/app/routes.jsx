import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

// Session pages
import sessionRoutes from "./views/sessions/session-routes";

// Dashboard
const Analytics = Loadable(lazy(() => import("./views/dashboard/Analytics")));

// Live Classroom
const LiveClassroom = Loadable(lazy(() => import("./views/live-classroom/LiveClassroom")));

// Virtual Classroom
const VirtualClassroom = Loadable(lazy(() => import("./views/virtual-classroom/VirtualClassroom")));

// Students
const StudentList = Loadable(lazy(() => import("./views/students/StudentList")));
const Attendance = Loadable(lazy(() => import("./views/students/Attendance")));
const Performance = Loadable(lazy(() => import("./views/students/Performance")));

// Calendar
const Calendar = Loadable(lazy(() => import("./views/calendar/Calendar")));

// AI Tools
const ContentGenerator = Loadable(lazy(() => import("./views/ai-tools/ContentGenerator")));
const QuizCreator = Loadable(lazy(() => import("./views/ai-tools/QuizCreator")));
const FeedbackAssistant = Loadable(lazy(() => import("./views/ai-tools/FeedbackAssistant")));

// Analytics
const ClassPerformance = Loadable(lazy(() => import("./views/analytics/ClassPerformance")));
const EngagementMetrics = Loadable(lazy(() => import("./views/analytics/EngagementMetrics")));
const LearningInsights = Loadable(lazy(() => import("./views/analytics/LearningInsights")));

// Assignments
const CreateAssignment = Loadable(lazy(() => import("./views/assignments/CreateAssignment")));
const GradeAssignments = Loadable(lazy(() => import("./views/assignments/GradeAssignments")));
const AssignmentLibrary = Loadable(lazy(() => import("./views/assignments/AssignmentLibrary")));

const routes = [
  { path: "/", element: <Navigate to="dashboard/default" /> },
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      // Dashboard
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      
      // Live Classroom
      { path: "/live-classroom", element: <LiveClassroom />, auth: authRoles.admin },
      
      // Virtual Classroom
      { path: "/virtual-classroom", element: <VirtualClassroom />, auth: authRoles.admin },
      
      // Students
      { path: "/students/list", element: <StudentList />, auth: authRoles.admin },
      { path: "/students/attendance", element: <Attendance />, auth: authRoles.admin },
      { path: "/students/performance", element: <Performance />, auth: authRoles.admin },
      
      // Calendar
      { path: "/calendar", element: <Calendar />, auth: authRoles.admin },
      
      // AI Tools
      { path: "/ai-tools/content-generator", element: <ContentGenerator />, auth: authRoles.admin },
      { path: "/ai-tools/quiz-creator", element: <QuizCreator />, auth: authRoles.admin },
      { path: "/ai-tools/feedback-assistant", element: <FeedbackAssistant />, auth: authRoles.admin },
      
      // Analytics
      { path: "/analytics/class-performance", element: <ClassPerformance />, auth: authRoles.admin },
      { path: "/analytics/engagement", element: <EngagementMetrics />, auth: authRoles.admin },
      { path: "/analytics/insights", element: <LearningInsights />, auth: authRoles.admin },
      
      // Assignments
      { path: "/assignments/create", element: <CreateAssignment />, auth: authRoles.admin },
      { path: "/assignments/grade", element: <GradeAssignments />, auth: authRoles.admin },
      { path: "/assignments/library", element: <AssignmentLibrary />, auth: authRoles.admin }
    ]
  },

  // Session pages route
  ...sessionRoutes
];

export default routes;