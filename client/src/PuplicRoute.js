import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PuplicRoute({ currentUser }) {
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PuplicRoute;
