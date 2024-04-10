import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PublicOnlyRouteProps {
  children: JSX.Element;
}

const PublicOnlyRoute: React.FC<PublicOnlyRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();

  if (isLoggedIn) {
    // Redirect to products page or other page if logged in
    return <Navigate to="/products" state={{ from: location }} />;
  }

  return children; // Render children components if not logged in
};

export default PublicOnlyRoute;
