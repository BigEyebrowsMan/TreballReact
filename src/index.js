import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Test from "./testing.js";
import App from "./App";
import About from "./newIndex.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navegacio from "./nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navegacio />
    <RouterProvider router={router} />
  </React.StrictMode>
);
