import React from "react";
import auth from "../utils/auth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const location = useLocation();
  const { pathname } = location;

  let path = "/login";

  if (pathname !== "/")
    path += `?return_to=${pathname.slice(1, pathname.length)}`;

  if (auth.isAuthorized()) {
    return <Outlet />;
  }

  return <Navigate to={path} />;
}
