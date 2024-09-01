import React from 'react'
import appwriteService from "../appwrite/databaseConfig"
import { Link } from 'react-router-dom'

const PostCard = ({$id,title,featureImage}) => {
  return (
    <Link to={`/post/${$id}`}>
    <div className=' w-full bg-green-100 rounded-xl p-4 '>
      <div className='w-full justify-center mb-4'>
        <img src={appwriteService.getFilePreview(featureImage)} alt={title} />
      </div>
      <h2 className='text-2xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard
