import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Test from "/home/dani/Documents/ento-web/src/about/testing.js";
import App from "./App";
import About from "/home/dani/Documents/ento-web/src/about/newIndex.js";
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
