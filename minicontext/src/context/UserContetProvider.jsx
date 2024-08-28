import { useState } from "react"
import UserContext from "./UserContext"
export default function UserContetProvider({children}) {
    const [data, setData] =useState(null)
  return (
    <UserContext.Provider value={{data,setData}}>
      {children}
    </UserContext.Provider>
  )
}
