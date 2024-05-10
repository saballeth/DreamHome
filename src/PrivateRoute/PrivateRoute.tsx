import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.isAuthenticated){
    return <Navigate to="/login" />
  }
  return <Outlet />;
};

export default PrivateRoute; 