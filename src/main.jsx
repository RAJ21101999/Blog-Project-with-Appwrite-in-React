import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import {Protected,Login}from'./Components/index.js'
import AddPost from './Pages/AddPost.jsx'
import Signup from './Pages/Signup.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import AllPosts from './Pages/AllPosts.jsx'
const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: (

                <Login />
        ),
    },
    {
        path: "/signup",
        element: (
            <Signup />
        ),
    },
    {
        path: "/all-posts",
        element: ( 
          <AllPosts />
        ),
    },
    {
        path: "/add-post",
        element: (
                <AddPost />
           
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
           
                <EditPost />
         
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
   
  </React.StrictMode>,
)
