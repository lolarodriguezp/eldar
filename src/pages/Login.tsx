import React from "react";
import { LoginForm } from "../components/LoginForm";
import { AuthService, LoginUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export const Login = () => {
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignIn = (userData: LoginUser) => {
    const response = AuthService.login(userData);
    setOpenAlert(!response);
    const user = AuthService.loadUser();
    if (user) {
      navigate("/");
    }
  };

  return <LoginForm onSubmit={handleSignIn} openAlert={openAlert} />;
};
