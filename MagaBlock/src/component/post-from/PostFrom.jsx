import React,{useCallback,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {Button ,Input ,Select ,RTE} from "../index"
import { AppwriteService } from '../../appwrite/databaseConfig'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PostFrom = ({post}) => {
    const {register,handleSubmit,getValues,setValue,watch,control}=useForm()
    const navigate=useNavigate();
    const userData=useSelector(state=>state.user.userData)

    const submit=async(data)=>{
        if(post){
            const file= data.image[0] ? AppwriteService.uploadFile(data.image[0]) :null
        
        if (file) {
            AppwriteService.deletePost(file.featureImage)
        }
        const dbPost=await AppwriteService.updatePost(post.$id,{
            ...data,
            featureImage: file ? file.$id :undefined
        })
        if (dbPost) {
           navigate(`post/${dbPost.$id}`)
        }

    }else{
        const  file=await AppwriteService.uploadFile(data.image[0])
            if (file) {
                const fileId=file.$id
                data.featureImage=fileId
                const dbPost=await AppwriteService.createPost({
                    ...data,
                    userId:userData.$id,
                })
                if (dbPost) {
                    navigate(`post/${dbPost.$id}`)
                }
            }
        
    }
}

        const slugTransfrom=useCallback((value)=>{
            if (value && typeof value==="string") {
                return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z/d/s]+/g,'-')
                .replace(/\s/g,'-')
            }
            return ""

        },[])

        useEffect(() => {
         const subscription=watch((value,{name})=>{
            if (name ==="title") {
                setValue('slug' , slugTransfrom(value.title,{
                    shouldValidate:true
                }))
            }
         })

         return ()=>{
            subscription.unsubscribe()
         }
        }, [watch,slugTransfrom,setValue])
        
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'> 
        <div className='w-2/3 px-2'>
        <Input
        label="Title :"
        placeholder="Title"
        className="mb-4"
        {...register("title" ,{
            required:true
        })}
        
        />
        <Input
        label="Slug :"
        placeholder="Slug"
        className="mb-4"
        {...register("slug" ,{
            required:!post
        })}
        onInput={(e)=>{
            setValue("slug",slugTransfrom(e.currentTarget.value),{shouldValidate:true})
        }}
        
        />
    <RTE label="Content: " control={control} defaultValue={getValues("content")}/>
    </div>
    <div className="w-1/3 px-2">
    <Input
    label="Features Image" 
    type="file"
    className="mb-4"
    accept="image/jpg,image/png,image/jpeg,image/gif "
    {...register("image",{
        required:!post
    })}
    />
    {post &&(
        <div className="w-full mb-4">
            <img src={AppwriteService.getFilePreview(post.featureImage)} alt={post.title} className='rounded-xl' />
        </div>
    )}

    <Select 
    option={[Active,Inactive]}
    label="Status"
    className="mb-4"
    {...register("status",{
        required:true
    })}
    />
    <Button type='submit' bgcolor={post? "bg-green-500":undefined} className='w-full'>
        {post? "Update":"Submit"}
    </Button>
    </div>
    </form>
  )
}

export default PostFrom
