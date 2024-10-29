import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { AuthService, User } from "./services/AuthService";
import { routes } from "./router/routes";
import AuthProvider from "./common/AuthProvider";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = React.useState<User | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    const response = AuthService.loadUser();
    if (response) {
      setUser(response);
    }

    setLoad(true);

    const currentUserObserver = AuthService.currentUser.subscribe((user) => {
      setUser(user);
    });

    return () => {
      currentUserObserver.unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider user={user}>
        {load ? <RouterProvider router={routes()} /> : <></>}
      </AuthProvider>
    </ThemeProvider>
  );
}
