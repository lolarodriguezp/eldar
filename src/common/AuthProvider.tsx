import React, { createContext, useContext } from "react";
import { User } from "../services/AuthService";

interface ProviderProps {
  user: User | null;
}

export const AuthContext = createContext<ProviderProps>({
  user: null,
});

const AuthProvider = ({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
