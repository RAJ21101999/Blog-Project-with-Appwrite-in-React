import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice';
import authService from '../../appwriteServices/authservice';



const LogoutBtn = () => {
    const dispatch=useDispatch();
    const logOutHandler =()=>{
       authService.logout().then(()=>{
        dispatch(logOut())
       })
        
    }
  return (
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logOutHandler}>
Logout
   </button>
  )
}

export default LogoutBtn