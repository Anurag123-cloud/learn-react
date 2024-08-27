import { useParams } from "react-router-dom"

export default function User() {
    const{userId}=useParams();

  return (
    <div className="bg-gray-300 text-3xl text-white p-4">
      User:{userId}
    </div>
  )
}
