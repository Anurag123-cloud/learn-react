import { useLoaderData } from "react-router-dom";



export default function Github() {
  const account=useLoaderData()
// const[account,setAccount]=useState("");
//     useEffect(()=>{
//         fetch("https://api.github.com/users/Anurag123")
//         .then((resp)=>resp.json())
//         .then((resp)=>setAccount(resp))
//     },[setAccount])
//     console.log(account)
   
  return (
    <div className="bg-gray-300 text-3xl text-white p-4">
   <h1> My followers: {account.name}</h1>
   <h1> My followers: {account.followers}</h1>
   <img src={account.avatar_url}/>
    </div>

  )
}

export const githubInfo=async () => {
  const response=await fetch("https://api.github.com/users/Anurag123");
  return response.json();
}
