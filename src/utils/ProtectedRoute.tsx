import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = Boolean(localStorage.getItem('email') && localStorage.getItem('password'));

  if (!isLoggedIn) {
    // Redirects to the login page and passes the current location in the state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
