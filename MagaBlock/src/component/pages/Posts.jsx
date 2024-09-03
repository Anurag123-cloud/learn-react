import React,{useState,useEffect} from 'react'

import {Button ,Container} from "../index"
import { Service } from '../../appwrite/databaseConfig'
import { Link,useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import parse from "html-react-parser"

const Posts = () => {
    const navigate=useNavigate()
    const [post, setpost] = useState(null)
    const {slug}=useParams
    const userDate =useSelector((state)=>state.auth.userDate)
    const isAuther= post && userDate ? post.$id===userDate.$id:false

    useEffect(async ()=>{
        if(slug){
            await Service.getPost(slug).then((post)=>{
                if (post) {
                    setpost(post)
                }else{
                    navigate("/")
                }
            })
        }else{
            navigate("/") 
        }
    },[navigate,slug])

    const DeletePost=()=>{
        Service.deletePost(post.$id).then((status)=>{
                if(status){
                    Service.deletePost(post.featureImage)
                    navigate("/")
                }
        })
    }

  return post ? (
    <div className="py-8">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <img src={Service.getFilePreview(post.featureImage)} alt={post.title} />
                {isAuther &&(
                    <div className="absolute right-6 top-6">
                        <Link to={`/edit-post/${post.$id}`}>
                        <Button
                        bgcolor='bg-green-500'
                        className='mr-3'
                        >Edit</Button>
                        </Link>
                        <Button
                        bgcolor='bg-red-500'
                       onClick={DeletePost}
                        >Delete</Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className='text-2xl font-bold'>{post.title}</h1>
                <div className="browser-css">{parse(post.content)}</div>
            </div>
        </Container>
    </div>
  ):null
}

export default Posts
