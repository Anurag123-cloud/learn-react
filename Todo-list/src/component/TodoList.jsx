/* eslint-disable react/prop-types */

import { useState } from "react"
import { useTodo } from "../contexts"
import { FaFile } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TodoList({todo}) {
    const [isEditable, setisEditable] = useState(false)
    const [todoMsg, settodoMsg] = useState(todo.todo)
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()

    
    const toggleCompleted=()=>{
        toggleComplete(todo.id)

    }

    const editTodo=()=>{
        updateTodo(todo,{...todo,todo:todoMsg})
        setisEditable(false)
    }

   

  return (
    <div className={`flex border-black/10 rounded-lg px-3 
    py-1.5 gap-x-3 shadow-sm shadow-yellow-50 duration-300
     text-black ${todo.completed ? "bg-green-400":"bg-red-400" }`}>
        <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
        />
        <input
        type="text"
        className={`outline-none w-full 
            bg-transparent rounded-lg ${isEditable? 
                "border-black/10 px-2":"bg-transparent"}
                ${todo.completed ? "line-through":"" }`}
                value={todoMsg}
                onChange={(e)=>{settodoMsg(e.target.value)}}
                readOnly={!isEditable}
        />
        <button className="inline-flex w-8 h-8 rounded-lg
         text-sm border-black/10 justify-center items-center
          bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-50"
          onClick={()=>{
            if (todo.completed) return
            if(isEditable){
                editTodo();
            }else setisEditable((prev)=>!prev);
          }}
          disabled={todo.completed}
          >
            {isEditable? <FaFile/>:<MdModeEditOutline/>}
          </button>
          <button className="inline-flex w-8 h-8 rounded-lg
         text-sm border-black/10 justify-center items-center
          bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-50" 
          onClick={()=>deleteTodo(todo.id)}
          >
            <MdDelete/>
          </button>
      
    </div>
  )
}
