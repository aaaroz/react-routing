import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "../utils/auth";

export function ProtectedRoute() {
  if (!auth.isAuthorized()) return <Outlet />;
  return <Navigate to="/" />;
}
