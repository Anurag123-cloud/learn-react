import React,{useState} from 'react'
import {Link ,useNavigate} from "react-router-dom"
import { login as authstore } from '../store/authSlice'
import {Button ,Input ,Logo} from "./index"
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import{useForm} from "react-hook-form"

const LoginFrom = () => {

    const dispatch=useDispatch()
    const navigate = useNavigate(); 
    const [error, seterror] = useState("")
    const { register, handleSubmit } = useForm()

    const login=async(data)=>{
        seterror("")
         try {
            const session=await authService.login(data)
            const userData=await authService.getCurrentUser()
            if (userData) {
                dispatch(authstore(userData))
                navigate("/")
            }
        } catch (error) {
            seterror(error.message)
        }
      
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className="mx-auto w-full max-w-lg
         bg-gray-200 rounded-xl p-10 border border-black/20">
            <div className="mb-2 flex justify-center">
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>
                Sign in to Your Account
            </h2>
            <p className='mt-2 tex-center text-base text-black/60'>
            Don&apos;t have any account?&nbsp;
            <Link to="/signup" className='font-medium text-primary transition-all duration-150
            hover:underline'>Signup
            </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
         </div>
         <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className="space-y-5">
                <Input
                label="Email"
                placeholder="Enter your email"
                autoComplete="email"
                type="email"
                {...register("email",{
                    required:true,
                    validate:{matchPattern:(value)=>
                        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value)
                        || "Email must be valid address",
                        
                }
                })}
                />

                <Input
                label="Password"
                placeholder="Enter your Password"
                type="password"
                  autoComplete="current-password"
                {...register("password",{
                    required:true,
                })}
                />

                <Button 
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
         </form>
      
    </div>
  )
}

export default LoginFrom
