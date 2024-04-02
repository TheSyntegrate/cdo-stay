import { lazy } from "react";

export const AuthScene = lazy(() => import("@/scenes/Auth/auth.scene"));

export const DashboardScene = lazy(
  () => import("@/scenes/Dashboard/dashboard.scene")
);
