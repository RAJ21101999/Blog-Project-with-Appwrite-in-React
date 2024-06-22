import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import configService from '../appwriteServices/configService';
import { Container, PostForm } from '../Components';


const EditPost = () => {
    const[post,setPost] =useState(null);
    const navigate =useNavigate();
    const {slug} =useParams();

    useEffect(()=>{
        debugger
        if(slug){
                configService.getPost(slug).then((post)=>{
                    if(post){
                        setPost(post);
                    }
                })
        }
        else{
navigate('/')
        }
    },[slug,navigate])

  return post?(
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ):null;
}

export default EditPost