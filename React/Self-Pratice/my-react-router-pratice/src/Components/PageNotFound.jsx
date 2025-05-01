import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-4xl text-fuchsia-400 h-200 mt-10 w-screen
      flex justify-center items-center'>The Page you are trying to access is Unavailable</h1>
      <br />
    </div>
  )
}

export default PageNotFound
