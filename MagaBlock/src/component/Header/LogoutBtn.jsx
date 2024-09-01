import React from 'react'
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch=useDispatch()
    const sumbithandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            console.log("somthing wrong in Logout btn",error)
            dispatch(logout())
        })
    }
  return (
    <button  className='inline-block px-6 py-2 hover:bg-blue-200 rounded-full' 
    onClick={sumbithandler}>Logout</button>
  )
}

export default LogoutBtn
