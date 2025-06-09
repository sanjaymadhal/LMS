const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { name: "Live Classroom", path: "/live-classroom", icon: "videocam" },
  { name: "Virtual Classroom", path: "/virtual-classroom", icon: "computer" },
  { label: "TEACHING", type: "label" },
  {
    name: "Courses",
    icon: "book",
    children: [
      { name: "My Courses", iconText: "MC", path: "/courses/my-courses" },
      { name: "Create Course", iconText: "CC", path: "/courses/create" },
      { name: "Course Archive", iconText: "CA", path: "/courses/archive" }
    ]
  },
  {
    name: "Students",
    icon: "people",
    children: [
      { name: "Student List", iconText: "SL", path: "/students/list" },
      { name: "Attendance", iconText: "AT", path: "/students/attendance" },
      { name: "Performance", iconText: "SP", path: "/students/performance" }
    ]
  },
  { name: "Calendar", path: "/calendar", icon: "calendar_today" },
  { label: "CONTENT", type: "label" },
  {
    name: "Learning Materials",
    icon: "library_books",
    children: [
      { name: "Upload Materials", iconText: "UM", path: "/materials/upload" },
      { name: "My Resources", iconText: "MR", path: "/materials/resources" },
      { name: "Media Library", iconText: "ML", path: "/materials/media" }
    ]
  },
  {
    name: "Assessments",
    icon: "assessment",
    children: [
      { name: "Create Quiz", iconText: "CQ", path: "/assessments/Createquiz" },
      { name: "Question Bank", iconText: "QB", path: "/assessments/Questionbank" },
      { name: "Exam Settings", iconText: "ES", path: "/assessments/Examsettings" }
    ]
  },
  {
    name: "AI Tools",
    icon: "psychology",
    children: [
      { name: "Content Generator", iconText: "CG", path: "/ai-tools/content-generator" },
      { name: "Quiz Creator", iconText: "QC", path: "/ai-tools/quiz-creator" },
      { name: "Feedback Assistant", iconText: "FA", path: "/ai-tools/feedback-assistant" }
    ]
  },
  {
    name: "Analytics",
    icon: "bar_chart",
    children: [
      { name: "Class Performance", iconText: "CP", path: "/analytics/class-performance" },
      { name: "Engagement Metrics", iconText: "EM", path: "/analytics/engagement" },
      { name: "Learning Insights", iconText: "LI", path: "/analytics/insights" }
    ]
  },
  {
    name: "Assignments",
    icon: "assignment",
    children: [
      { name: "Create Assignment", iconText: "CA", path: "/assignments/create" },
      { name: "Grade Assignments", iconText: "GA", path: "/assignments/grade" },
      { name: "Assignment Library", iconText: "AL", path: "/assignments/library" }
    ]
  },
  { label: "COMMUNICATION", type: "label" },
  {
    name: "Messages",
    icon: "email",
    path: "/communication/messages"
  },
  {
    name: "Announcements",
    icon: "announcement",
    path: "/communication/announcements"
  },
  {
    name: "Discussion Forums",
    icon: "forum",
    path: "/communication/forums"
  },
  { label: "ADMINISTRATION", type: "label" },
  {
    name: "Reports",
    icon: "bar_chart",
    path: "/admin/reports"
  },
  {
    name: "Settings",
    icon: "settings",
    path: "/admin/settings"
  },
  {
    name: "Help & Support",
    icon: "help",
    path: "/admin/help"
  }
];

export default navigations;