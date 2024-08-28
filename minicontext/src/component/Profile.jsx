
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Profile() {
    const {data} =useContext(UserContext);
    if(!data) return(<div>please login</div>)
  return (
    <div>
      <p>welecome {data.userName}</p>
    </div>
  )
}
