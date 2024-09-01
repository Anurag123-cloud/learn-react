import AppwriteService from "../../appwrite/databaseConfig"
import {Container , PostCard} from "../index"
import { useState,useEffect } from "react"

const AllPost = () => {
    const [posts, setposts] = useState([])
    useEffect(async () => {
      await AppwriteService.getPosts([])
      .then((posts) => {
        if (posts) {
            setposts(posts.documents)
        }
      } )
    }, [AppwriteService,setposts])
    
  return (
    <div className=" w-full py-8">
      <Container>
        <div className="flex flex-wrap">
            {posts.map((post)=>(
                <div className="p-2 w-1/2" key={post.$id}>
                    <PostCard post={post}/>
                </div>
            ))} 
        </div>
      </Container>
    </div>
  )
}

export default AllPost
