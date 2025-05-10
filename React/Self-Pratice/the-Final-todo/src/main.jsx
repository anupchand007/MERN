import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Todo from './Component/Todo.jsx'
import Addtodo from './Component/Addtodo.jsx'
import About from './Component/About.jsx'
import { Provider } from 'react-redux'
import { store } from './App/Store.js'
import { ToggleTheme } from './Component/ToggleTheme.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/todos',
        element: <Todo/>
      },
      {
        path: '/addtodos',
        element: <Addtodo/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/toggle',
        element: <ToggleTheme/>
      },
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
