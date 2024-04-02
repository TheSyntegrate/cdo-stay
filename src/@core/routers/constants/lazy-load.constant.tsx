import { lazy } from "react";

export const AuthScene = lazy(() => import("@/pages/Auth/auth.scene"));

export const LandingScene = lazy(
  () => import("@/pages/Landing/landing.page")
);

export const DashboardScene = lazy(
  () => import("@/pages/Dashboard/dashboard.scene")
);
