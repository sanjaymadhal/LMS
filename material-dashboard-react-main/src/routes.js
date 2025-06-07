/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here.
  You can add a new route, customize the routes, and delete the routes here.

  Once you add a new route in this file, it will be visible automatically on
  the Sidenav.

  Route Structure:
  - type: 'collapse' (for links), 'title' (for headings), 'divider' (for dividers)
  - name: Label for the route
  - key: Unique identifier
  - icon: Icon displayed in the sidenav
  - route: React Router path
  - component: JSX component to render at the route
  - collapse: Array of nested routes (if applicable)
  - href: External link (if applicable)
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/Assignments";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Live CLassroom",
    key: "live-classroom",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Virtual Classroom",
    key: "virtual-classroom",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/virtual-classroom",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Students",
    key: "students",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Assignments",
    key: "assignments",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/Assignments",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Analytics",
    key: "analytics",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "AI Tools",
    key: "ai-tools",
    icon: <Icon fontSize="small">smart_toy</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Workspace",
    key: "workspace",
    icon: <Icon fontSize="small">workspaces</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
