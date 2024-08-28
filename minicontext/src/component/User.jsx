import {useContext,useState} from 'react'
import UserContext from '../context/UserContext';

export default function User() {
    const[userName,setUserName] =useState("")
    const[password,setPassword] =useState("")
    const {setData} = useContext(UserContext);

    const handleData=(e)=>{
        e.preventDefault()
        setData({userName,password})
    }
  return (
    <div>
      <h2>login</h2>
      <input type="text"
       value={userName}
       onChange={(e)=>{
        setUserName(e.target.value)
       }}
       placeholder='User' />


        <input type="text"
       value={password}
       onChange={(e)=>{
        setPassword(e.target.value)
       }}
       placeholder='password' />
       <button type='submit' onClick={handleData}>login</button>
    </div>
    
  )
}
