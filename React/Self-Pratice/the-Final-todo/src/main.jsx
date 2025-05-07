import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx"
import Todos from "./Components/Todos.jsx"
import Add from "./Components/Add.jsx"
import Edit from "./Components/Edit.jsx"
import About from "./Components/About.jsx"
import PageNotFound from './Components/PageNotFound.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/todos',
          element: <Todos />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/edit",
          element: <Edit />
        },
        {
          path: "/about",
          element: <About />
        },
      ]
    },
    
  ])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
