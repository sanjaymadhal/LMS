const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { 
    name: "Virtual Classroom", 
    path: "/virtual-classroom", 
    icon: "computer",
    exact: true,
    children: [
      {
        name: "Subjects",
        icon: "book",
        children: [
          { name: "BCS601", iconText: "MC", path: "/courses/my-courses" },
          { name: "BCS602", iconText: "CC", path: "/courses/create" },
          { name: "BCS603", iconText: "CA", path: "/courses/archive" }
        ]
      },
      {
        name: "Assessments",
        icon: "assessment",
        children: [
          { name: "Take Quiz", iconText: "CQ", path: "/assessments/Createquiz" },
          { name: "Question Bank", iconText: "QB", path: "/assessments/Questionbank" },
          { name: "Report Card", iconText: "ES", path: "/assessments/Examsettings" }
        ]
      },
      {
        name: "Assignments",
        icon: "assignment",
        children: [
          { name: "Upload Assignment", iconText: "CA", path: "/assignments/create" },
          { name: "Pending Assignments", iconText: "GA", path: "/assignments/grade" },
          { name: "Assignment Library", iconText: "AL", path: "/assignments/library" }
        ]
      }
    ]
   },
  { label: "TEACHING", type: "label" },
  {
    name: "Projects",
    icon: "forum",
    path: "/communication/forums"
  },
  { name: "Calendar", path: "/calendar", icon: "calendar_today" },
  { label: "CONTENT", type: "label" },
  {
    name: "Learning Materials",
    icon: "library_books",
    children: [
      { name: "Library", iconText: "UM", path: "/materials/upload" },
      { name: "My Resources", iconText: "MR", path: "/materials/resources" },
      { name: "Media Library", iconText: "ML", path: "/materials/media" }
    ]
  },
  {
    name: "AI Tools",
    icon: "psychology",
    path: "/ai-tools/content-generator",
  },
  {
    name: "Code Sandbox",
    icon: "bar_chart",
    path: "/admin/reports"
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
 
  { label: "ADMINISTRATION", type: "label" },
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