import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import ListPage from "../pages/List";
import { Login } from "../pages/Login";
import { EditPage } from "../pages/Edit";
import { DetailPage } from "../pages/Detail";
import AdminRoutes from "./AdminRoutes";
import DefaultLayout from "../layouts/defaultLayout";

export const routes = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              Component: ListPage,
            },
            {
              path: "/detail/:id",
              Component: DetailPage,
            },
            {
              path: "/",
              Component: AdminRoutes,
              children: [
                {
                  path: "/edit/:id",
                  Component: EditPage,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
