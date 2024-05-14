import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = () => {
  const { user, isAuthenticated, logoutUser, refreshToken } = useAuth();

  useEffect(() => {
    const refresh = async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.error(error);
        logoutUser();
      }
    };

    const accessToken = user?.accessToken;
    let tokenExp: Date | null = null;

    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken && typeof decodedToken.exp === 'number') {
        tokenExp = new Date(decodedToken.exp * 1000);
      }
    }
    
  }, [user, refreshToken, logoutUser]);

  if (!isAuthenticated){
    return <Navigate to="/login" />
  }
  return <Outlet />;
};

export default PrivateRoute; 