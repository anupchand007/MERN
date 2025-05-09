import React from 'react'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import App from '../App';

const Todos = () => {
  return (
    <div className='todos-container flex justify-center items-center border-b-fuchsia-500 h-4/6 w-screen'>
      <h1>This is Todos List Page</h1>

    </div>
  )
}

export default Todos
