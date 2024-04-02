import { Navigate, RouteObject } from "react-router-dom";

import { AuthScene, DashboardScene, LandingScene } from "./constants/lazy-load.constant";
import { AuthLayout, AppLayout } from "@layouts";

export const authRoute: RouteObject[] = [
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { element: <Navigate to="/auth" replace />, index: true },
      {
        path: "auth",
        element: <AuthScene />,
      },
    ],
  },
];

export const appRoute: RouteObject[] = [
  {
    path: "app",
    element: <AppLayout />,
    children: [
      { element: <Navigate to="landing" replace />, index: true },
      {
        path: "landing",
        element: <LandingScene />,
      },
      {
        path: "dashboard",
        element: <DashboardScene />,
      },
    ],
  },
];
