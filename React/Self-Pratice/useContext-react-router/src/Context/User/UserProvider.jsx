import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        username: "Anup Chand",
        isLoggedIn: true,
        age: 2,
        password: "A@gmail.com"
    })
  return (
    <UserContext.Provider value={{user, setUser}}>

    {children}

    </UserContext.Provider>
  )
}

export default UserProvider
