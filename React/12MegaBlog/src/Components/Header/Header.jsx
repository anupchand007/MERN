import React from 'react'
import {Container, Logo, LogoutBtn}  from "../index"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const authStatus  = useSelector((state) => state.auth.status)

  const navItems = useNavigate([
    {
      name: "Home",
      url: "/home",
      active: authStatus
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatus
    },
    {
      name: "All Post",
      url: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      url: "/add-posts",
      active: authStatus
    },
  ])

  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container>
      <nav className='flex'>
        <div className='mr-4 '>
          <Link to="/">
          <Logo width='70px'/ >
          </Link>
        </div>
          <ul className='flex ml-auto'>
        {navItems.map((item) => (
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => Navigate(item.url)}
                className='"inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
        ))}
        {authStatus && (
          <li>
            <LogoutBtn/>
          </li>
        )}
          </ul>
      </nav>
    </Container>

    </header>
  )
}

export default Header
