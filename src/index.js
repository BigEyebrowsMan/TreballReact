import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './about';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navegacio from './nav'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacio/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

