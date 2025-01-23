import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedInUser }) => {
  if (!loggedInUser) {
    alert("Access denied. Please log in to continue.");
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
