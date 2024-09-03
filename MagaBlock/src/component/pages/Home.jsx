import React, { useEffect, useState } from 'react'
import {Container,PostCard} from '../index'
import service from "../../appwrite/databaseConfig"


const Home = () => {
    
    const [posts, setposts] = useState([])
    useEffect(() => {
      service.getPosts([]).then((posts) => {
        if (posts) {
            setposts(posts.documents)
        }
      } )
    }, [])
 
    if (posts.length===0) {
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                login to read post
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className=" w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {posts.map((post)=>(
                            <div className="p-2 w-1/2" key={post.$id}>
                                <PostCard {...post}/>
                            </div>
                        ))} 
                    </div>
                </Container>
    </div>
        )
    }

}

export default Home
