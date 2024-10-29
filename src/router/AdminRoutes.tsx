import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";

export default function AdminRoutes() {
  const { user } = useAuth();

  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
