import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import myAxios from "./services/myAxios";

import App from "./App";
import Home from "./pages/Home";
import ToysPage from "./pages/ToysPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await myAxios.get("/api/cartoons");

          return response.data;
        },
      },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/toys",

        element: <ToysPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
        loader: async () => {
          const response = await myAxios.get("/api/cartoons");
          return response.data;
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          const name = formData.get("name");
          await myAxios.post("/api/cartoons", { name });
          return redirect("/");
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
