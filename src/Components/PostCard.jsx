import React from 'react';
import uploadService from "../appwriteServices/uploadService"
import { Link } from 'react-router-dom';
const PostCard = ({$id,title,feturedImage}) => {
  debugger
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
          <div classNmae='w-full justify-center mb-4'>
            <img src={uploadService.getPreviewFile(feturedImage)} className='rounded-xl'>
            </img>
      <h2 className='text-xl font-bold'>
      {title}
      </h2>
          </div>
      </div>
    </Link>
  )
}

export default PostCard