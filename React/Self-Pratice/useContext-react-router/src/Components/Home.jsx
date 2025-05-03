import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const Home = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
      This is Home Page {user.name}
    </div>
  )
}

export default Home
