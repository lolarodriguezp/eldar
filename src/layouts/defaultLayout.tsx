import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <Box justifyContent={"center"} sx={{ margin: "32px " }}>
        <Outlet />
      </Box>
    </>
  );
}
