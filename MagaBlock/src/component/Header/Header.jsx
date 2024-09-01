import{Container,Logo,LogoutBtn} from "../index"
import{Link} from "react-router-dom"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const authService=useSelector((state)=>state.auth.status)
  const navigate=useNavigate();
  const navItem=[
    {
      name:"Home",
      url:"/",
      active:true
    },
    {
      name:"Login",
      url:"/login",
      active:!authStatus
    },
    {
      name:"Signup",
      url:"/signup",
      active:!authStatus
    },
    {
      name:"All Post",
      url:"/all-post",
      active:!authStatus
    },
    {
      name:"Add Post",
      url:"/add-post",
      active:!authStatus
    }
  ]
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
            <Logo/>
            </Link>
          </div>

        <ul className="flex ml-auto">
          {
            navItem.map((items)=>
            items.active ? (
              <li key={items.name}>
                <button onClick={()=>navigate(items.url)}
                className="inline-block px-6 py-2 duration-100 hover:bg-blue-100 rounded-full"
                >{items.name}</button>
              </li>
            ):null
            )
          }
          {authService && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
