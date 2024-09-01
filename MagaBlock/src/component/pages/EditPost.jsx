import { AppwriteException } from "appwrite"
import { useNavigate } from "react-router-dom"


const EditPost = () => {
    const [posts, setposts] = useState([])
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(() => {
     await AppwriteService
    }, [navigate,slug,setposts])
    

  return (
    <div>
      
    </div>
  )
}

export default EditPost
