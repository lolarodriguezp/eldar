import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#12416F",
      light: "#597A9A",
      dark: "#0D2E4E",
    },
    secondary: {
      main: "#1DBDCD",
      light: "#4ACAD7",
      dark: "#14848F",
    },
    warning: {
      main: "#FFB74D",
      light: "rgba(255, 183, 77, 0.5)",
      dark: "#FF9800",
    },
    error: {
      main: "#F44336",
      light: "#E57373",
      dark: "#D32F2F",
    },
    info: {
      main: "#2196F3",
      light: "#64B5F6",
      dark: "#1976D2",
    },
    success: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
    },
  },
});

export default theme;
