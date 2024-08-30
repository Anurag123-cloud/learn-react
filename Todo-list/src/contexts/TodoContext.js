import { useContext,createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"this your siring",
            completed:false,
        }
    ],

   addTodo:(todo)=>{},
   updateTodo:(todo,id)=>{},
   deleteTodo:(id)=>{},
   toggleTodoComplete:(id)=>{},

})

export const TodoProvider=TodoContext.Provider
export const useTodo=()=>{
    return useContext(TodoContext)
}