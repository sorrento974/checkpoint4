import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import ToysPage from "./pages/ToysPage";
import ContactPage from "./pages/ContactPage";

// function toys() {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
//   )
//     .then((response) => response.json())
//     .then((data) => data.drinks);
// }

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/toys/:cartoonId",
        element: <ToysPage />,
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
