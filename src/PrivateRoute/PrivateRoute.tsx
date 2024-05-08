import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }: { Component: React.ComponentType<any> }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isToken = localStorage.getItem('token') !== null;
  setIsAuthenticated(isToken);

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
