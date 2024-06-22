import React, { useState,useEffect } from 'react'
import configService from '../appwriteServices/configService';
import { Container, PostCard } from '../Components';


const AllPosts = () => {
    const[post,setPosts]=useState([]);

    configService.getPosts([]).then((posts)=>{
        if(post){
            setPosts(posts.documents)
        }
    })
    
  return (
    <div className="w-full py-8">
        <Container>
        <div className="flex flex-wrap">
                {
                    post?.map((item)=>(
                       <div key={item.$id} className='p-2 w-1/4'>
                        <PostCard {...item}/>
                       </div> 
                    ))
                }
        </div>
        </Container></div>
  )
}

export default AllPosts