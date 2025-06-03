
import Navbar from './Components/Navbar'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <Navbar />
    <Outlet/>
    </>
  )
}

export default App
