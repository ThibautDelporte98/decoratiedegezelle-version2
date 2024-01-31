import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';
import App from './App';
import About from './pages/overons';
import Services from './pages/diensten';
import References from './pages/realisaties';
import Contact from './pages/contact';
import Service from './pages/dienst';
import Realisation from './pages/realisatie';
import reportWebVitals from './reportWebVitals';


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
    path: "/dienst/:id",
    element: <Service />,
  },
  {
    path: "/realisaties",
    element: <References />,
  },
  {
    path: "/realisatie/:id",
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


  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
