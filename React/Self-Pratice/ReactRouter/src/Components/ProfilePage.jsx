import {useParams} from 'react-router-dom'

import React from 'react'

const ProfilePage = () => {
   let param =  useParams();
  //  console.log(param);
   
  return (
    <div>
      <h1>This is a Profile Page {param.profileId}</h1>
    </div>
  )
}

export default ProfilePage
