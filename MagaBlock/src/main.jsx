
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/pages/Home.jsx'
import Login from './component/pages/Login.jsx'
import Signup from './component/pages/Signup.jsx'
import AllPost from './component/pages/AllPost.jsx'
import AddPost from './component/pages/AddPost.jsx'
import EditPost from './component/pages/EditPost.jsx'
import Posts from './component/pages/Posts.jsx'
import { AuthLayout } from './component/index.js'




const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },{
        path:"/login",
        element:(
        <AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>
        ),
      },{
        path:"/signup",
        element:(
        <AuthLayout authentication={false}>
          <Signup/>
        </AuthLayout>
        ),
      },{
        path:"/all-post",
        element:(
        <AuthLayout authentication>
          {" "}
          <AllPost/>
        </AuthLayout>
        ),
      },{
        path:"/add-post",
        element:(
        <AuthLayout authentication>
          {" "}
          <AddPost/>
        </AuthLayout>
        ),
      }
      ,{
        path:"/edit-post/:slug",
        element:(
        <AuthLayout authentication>
          {" "}
          <EditPost/>
        </AuthLayout>
        ),
      }
      ,{
        path:"/post/:slug",
        element:(
        <AuthLayout authentication>
          {" "}
          <Posts/>
        </AuthLayout>
        ),
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
