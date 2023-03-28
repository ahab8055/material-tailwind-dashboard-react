import {
  HomeIcon,
  ChartBarSquareIcon,
  PresentationChartLineIcon,
  TableCellsIcon,
  UserGroupIcon,
  UserPlusIcon
} from "@heroicons/react/24/solid";
import { 
  Home,
  Scoreboard, 
  Profile, 
  Tables, 
  Notifications 
} from "@/pages/dashboard";
import { 
  SignIn, 
  SignUp 
} from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ChartBarSquareIcon {...icon} />,
        name: "scoreboard",
        path: "/scoreboard",
        element: <Scoreboard />,
      },
      {
        icon: <PresentationChartLineIcon {...icon} />,
        name: "record",
        path: "/record",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "draws",
        path: "/draws",
        element: <Tables />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "tournament",
        path: "/tournament",
        element: <Notifications />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "player",
        path: "/player",
        element: <Scoreboard />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "notifactions",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ArrowRightOnRectangleIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <UserPlusIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
