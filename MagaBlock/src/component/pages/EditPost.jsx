import { Service } from "../../appwrite/databaseConfig"
import { useNavigate,useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import {Container,PostFrom} from "../index"


const EditPost = () => {
    const [posts, setposts] = useState([])
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(async () => {
     if (slug) {
        await Service.getPost(slug)
     .then((post)=>{
        if (post) {
           setposts(post) 
        }
     })
     } else {
        navigate("/")
     }
    }, [navigate,slug,setposts])
    

  return posts ? (
    <div className=" w-full py-8">
      <Container>
       <PostFrom post={posts}/> 
      </Container>
    </div>
  ):null
}

export default EditPost
