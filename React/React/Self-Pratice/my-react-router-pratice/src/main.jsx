import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Navbar from "./Components/Navbar.jsx";
import Products from "./Components/Products.jsx";
import About_us from "./Components/About_us.jsx";
import Contact_us from "./Components/Contact_us.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import Product1 from "./Components/product1.jsx";
import Product2 from "./Components/product2.jsx";
import Product3 from "./Components/Product3.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound/>,
    children: [
      {
        index: true,              // To make the home page as landing page
        element: <Home />
      },
      {
        path: '/products',
        element: <Products/>,
        children: [
          {
            path: '/products/:productId',
            element: <Product1/>
          },
          {
            path: '/products/:productId',
            element: <Product2/>
          },
          {
            path: '/products/:productId',
            element: <Product3/>
          },
        ]
      },
      {
        path: '/aboutus',
        element: <About_us/>
      },
      {
        path: '/contactus',
        element: <Contact_us/>
      },
    
  ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
