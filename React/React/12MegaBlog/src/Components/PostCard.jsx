import React from 'react'
import appwriteService from  "../appwrite/config"
import {Link} from "react-router-dom"


//$id is a appwrite syntax, so its not js code its of appwrite syntax
const PostCard = ({$id, title, featurteImage}) => {
  return (
    <div>
        <Link to={` /post/${$id}`}>
        <div className='w-ful' bg-gray-100 rounded-xl p-4>
          <div className='w-full justify-center mb-4'>
            <img src={appwriteService.getFilePreview(featurteImage)} alt={title}
            className='rounded-xl '
            />

          </div>
          <h2 className='text-xl font-bold'>{title}</h2>
        </div>
        </Link>
    </div>
  )
}

export default PostCard
