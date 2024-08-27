import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import './index.css'
import { App,Header,Footer,Home} from "./component/index"


const router=createBrowserRouter(
  createRoutesFromElements(
 <Route path="/" element={<App/>}>
  <Route path="header" element={<Header/>}/>
  <Route path="footer" element={<Footer/>}/>
  <Route path="" element={<Home/>}/>
  </Route>
 )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
