import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Fab } from "@mui/material";

export default function Layout() {
  const { user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
      {location.pathname !== "/" && (
        <Fab onClick={() => navigate(-1)} color="primary" aria-label="edit">
          <ArrowBackIosNewOutlinedIcon />
        </Fab>
      )}
    </>
  );
}
