import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const PageNotFound = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <Outlet />
      <div className='h-4/5 border-2 flex justify-center justify-items-center items-center'>
      <h1>The page is not available that you are looking for</h1>
      <h1>The page is not available that you are looking for</h1>

      </div>
    </div>
  )
}

export default PageNotFound
