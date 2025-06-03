import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import ProfilePage from "./Components/ProfilePage.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";
import ProfilesPage from "./Components/ProfilesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [{                         //creating a childern node
      path: ':profileId',                // profileId is used to display the id
      element: <ProfilePage />,
    }],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
