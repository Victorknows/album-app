// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />; // Redirect to sign-in page if not logged in
  }

  return children; // Render the children (HomePage) if logged in
};

export default ProtectedRoute;
