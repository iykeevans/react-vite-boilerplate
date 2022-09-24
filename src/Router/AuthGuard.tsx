import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import { getToken } from "../utils/manageToken";

const PrivateRoute = () => {
  const { state: authData } = useAuth();

  return authData.isLoggedIn && getToken("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
