import React,{useState} from 'react'
import {Link ,useNavigate} from "react-router-dom"
import { login} from '../store/authSlice'
import {Button ,Input ,Logo} from "./index"
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import{useForm} from "react-hook-form"

const Signup = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const [error, seterror] = useState()

    const create=async (data)=>{
        seterror("")
        try {
            const userData=await authService.createAccount(data)
            if (userData) {
                const userData=await authService.getCurrentUser()
               if(userData) dispatch(login(userData))
                navigate("/")
            } 
        } catch (error) {
            seterror(error.message)
        }
    }


  return (
    <div className='flex items-center justify-center'>
        <div className="mx-auto w-full max-w-lg
         bg-gray-100 rounded-xl p-10 border
          border-black/10">
            <div className="mb-2 flex justify-center">
                <span className='inline-block w-fll max-w-[100px]'>
                    <Logo/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>
                Sign up to Your Account
            </h2>
            <p className='mt-2 tex-center text-base text-black/60'>
             Have a account?&nbsp;
            <Link to="/login" className='font-medium text-primary transition-all duration-150
            hover:underline'>Login
            </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form className='w-full' onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                   placeholder="Enter Your Full Name"
                    label="Full Name"
                    autoComplete="name"
                    {...register("name",{
                        required:true
                    })}
                    />
                    <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                autoComplete="email"
                {...register("email",{
                    required:true,
                    validate:{matchPattern:(value)=>
                        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value)
                        || "Email must be valid address",
                        
                }
                })}
                />
                <Input 
                type="password"
                placeholder="Enter your password"
                label="Password"
                 autoComplete="Password"
                {...register("password",{
                    required:true
                })}
                />
                <Button 
                type="submit" 
                className="w-full"
                >CreateAccount</Button>
                </div>
            </form>
          </div>
      
    </div>
  )
}

export default Signup
