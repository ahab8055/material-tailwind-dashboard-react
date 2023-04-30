import React from "react";
import {
  HomeIcon,
  ChartBarSquareIcon,
  PresentationChartLineIcon,
  TableCellsIcon,
  UserGroupIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import { 
  Home,
  Scoreboard, 
} from "@/pages/dashboard";
import { 
  SignIn, 
  SignUp 
} from "@/pages/auth";
import Player from "./pages/dashboard/player";
import Record from "./pages/dashboard/record";
import Draws from "./pages/dashboard/draws";
import Tournament from "./pages/dashboard/tournament";

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
        element: <Record />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "draws",
        path: "/draws",
        element: <Draws />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "tournament",
        path: "/tournament",
        element: <Tournament />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "player",
        path: "/player",
        element: <Player />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
