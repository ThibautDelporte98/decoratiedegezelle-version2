import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/index.scss";
import App from "./App";
import About from "./pages/overons";
import Services from "./pages/diensten";
import References from "./pages/realisaties";
import Contact from "./pages/contact";
import Service from "./pages/dienst";
import Realisation from "./pages/realisatie";
import ConditionsPage from "./pages/algemene-voorwaarden";
import PolicyPage from "./pages/privacybeleid";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/diensten",
    element: <Services />,
  },
  {
    path: "/diensten/:url",
    element: <Service />,
  },
  {
    path: "/realisaties",
    element: <References />,
  },
  {
    path: "/realisaties/:url",
    element: <Realisation />,
  },
  {
    path: "/overons",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacypolicy",
    element: <PolicyPage />,
  },
  {
    path: "/algemene-voorwaarden",
    element: <ConditionsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


reportWebVitals();
