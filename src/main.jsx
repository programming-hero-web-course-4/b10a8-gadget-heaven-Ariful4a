import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashbord from './Components/Dashbord/Dashbord.jsx';
import ProductDetail from './Components/ProductDetails/ProductDetail.jsx';
import { ToastContainer } from 'react-toastify';
import Statistics from './Components/Statistics/Statistics.jsx';
import { HelmetProvider } from 'react-helmet-async';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/Dashbord",
        element: <Dashbord></Dashbord>,
        loader: () => fetch('/productData.json'),
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path : '/detail/:product_id',
        element : <ProductDetail></ProductDetail>,
        loader : ()=> fetch('/productData.json')
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </HelmetProvider>
)
