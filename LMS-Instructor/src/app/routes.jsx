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

// Live / Virtual Classroom
const LiveClassroom = Loadable(lazy(() => import("./views/live-classroom/LiveClassroom")));
const VirtualClassroom = Loadable(lazy(() => import("./views/virtual-classroom/VirtualClassroom")));

// Students
const StudentList = Loadable(lazy(() => import("./views/students/StudentList")));
const Attendance = Loadable(lazy(() => import("./views/students/Attendance")));
const Performance = Loadable(lazy(() => import("./views/students/Performance")));

// Calendar
const Calendar = Loadable(lazy(() => import("./views/calendar/Calendar")));

// Courses
const MyCourses = Loadable(lazy(() => import("./views/courses/MyCourses")));
const CreateCourse = Loadable(lazy(() => import("./views/courses/Create")));
const CourseArchive = Loadable(lazy(() => import("./views/courses/Archive")));

// Learning Materials
const UploadMaterials = Loadable(lazy(() => import("./views/materials/Upload")));
const MyResources = Loadable(lazy(() => import("./views/materials/Resources")));
const MediaLibrary = Loadable(lazy(() => import("./views/materials/Media")));

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

// Assessments
const CreateQuiz = Loadable(lazy(() => import("./views/assessments/Createquiz")));
const QuestionBank = Loadable(lazy(() => import("./views/assessments/Questionbank")));
const ExamSettings = Loadable(lazy(() => import("./views/assessments/Examsettings")));

// Communication
const Messages = Loadable(lazy(() => import("./views/communication/Messages")));
const Announcements = Loadable(lazy(() => import("./views/communication/Announcements")));
const Forums = Loadable(lazy(() => import("./views/communication/Forums")));

// Administration
const Reports = Loadable(lazy(() => import("./views/admin/Reports")));
const Settings = Loadable(lazy(() => import("./views/admin/Settings")));
const Help = Loadable(lazy(() => import("./views/admin/Help")));

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

      // Classroom
      { path: "/live-classroom", element: <LiveClassroom />, auth: authRoles.admin },
      { path: "/virtual-classroom", element: <VirtualClassroom />, auth: authRoles.admin },

      // Students
      { path: "/students/list", element: <StudentList />, auth: authRoles.admin },
      { path: "/students/attendance", element: <Attendance />, auth: authRoles.admin },
      { path: "/students/performance", element: <Performance />, auth: authRoles.admin },

      // Calendar
      { path: "/calendar", element: <Calendar />, auth: authRoles.admin },

      // Courses
      { path: "/courses/my-courses", element: <MyCourses />, auth: authRoles.admin },
      { path: "/courses/create", element: <CreateCourse />, auth: authRoles.admin },
      { path: "/courses/archive", element: <CourseArchive />, auth: authRoles.admin },

      // Learning Materials
      { path: "/materials/upload", element: <UploadMaterials />, auth: authRoles.admin },
      { path: "/materials/resources", element: <MyResources />, auth: authRoles.admin },
      { path: "/materials/media", element: <MediaLibrary />, auth: authRoles.admin },

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
      { path: "/assignments/library", element: <AssignmentLibrary />, auth: authRoles.admin },

      // Assessments
      { path: "/assessments/createquiz", element: <CreateQuiz />, auth: authRoles.admin },
      { path: "/assessments/examsettings", element: <ExamSettings />, auth: authRoles.admin },
      { path: "/assessments/questionbank", element: <QuestionBank />, auth: authRoles.admin },

      // Communication
      { path: "/communication/messages", element: <Messages />, auth: authRoles.admin },
      { path: "/communication/announcements", element: <Announcements />, auth: authRoles.admin },
      { path: "/communication/forums", element: <Forums />, auth: authRoles.admin },

      // Administration
      { path: "/admin/reports", element: <Reports />, auth: authRoles.admin },
      { path: "/admin/settings", element: <Settings />, auth: authRoles.admin },
      { path: "/admin/help", element: <Help />, auth: authRoles.admin },

      
    ]
  },

  // Session pages
  ...sessionRoutes
];

export default routes;