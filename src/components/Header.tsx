import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useAuth } from "../common/AuthProvider";
import { AuthService } from "../services/AuthService";
import { Navigate } from "react-router-dom";

const Header = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    AuthService.logout();
    <Navigate to="/login" />;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GESTIÓN ELDAR
          </Typography>
          {user && (
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              startIcon={<LogoutOutlinedIcon />}
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
