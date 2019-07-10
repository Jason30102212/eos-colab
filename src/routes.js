// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import MyProfile from "views/MyProfile/MyProfile";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import MyProjects from "views/MyProjects/MyProjects.jsx";
import Store from "views/Store/Store.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/my-profile",
    name: "My Profile",
    icon: Person,
    component: MyProfile,
    layout: "/admin"
  },
  {
    path: "/my-projects",
    name: "My Projects",
    icon: LibraryBooks,
    component: MyProjects,
    layout: "/admin"
  },
  {
    path: "/exchange",
    name: "Exchange",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/store",
    name: "Store",
    icon: Dashboard,
    component: Store,
    layout: "/admin"
  }
];

export default dashboardRoutes;
