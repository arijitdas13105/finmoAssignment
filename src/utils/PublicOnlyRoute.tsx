import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PublicOnlyRouteProps {
  children: JSX.Element;
}

const PublicOnlyRoute: React.FC<PublicOnlyRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/products" state={{ from: location }} />;
  }

  return children; 
};

export default PublicOnlyRoute;
