import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Headers } from './Components'
import { useDispatch } from 'react-redux'
import authService from './appwriteServices/authservice'
import authSlice, { logIn, logOut } from './store/authSlice'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch =useDispatch();
  useEffect(()=>{

    debugger
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(logIn({userData}))
      }
      else{
        dispatch(logOut())
      }
    })
    .catch((err)=>{
      console.log("User does not exist",err)
    }).finally(()=>setLoading(false))
  },[])
 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
    <Headers/>
    <main>
    TODO: <Outlet/>
    </main>
    <Footer/>
    </div>
  
  </div>
 ) :(null)
}

export default App
