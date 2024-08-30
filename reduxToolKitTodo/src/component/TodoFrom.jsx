import { useState } from "react";
import { addTodo, updateTodo } from "../feature/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";

const TodoFrom = () => {
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null); // State to keep track of the todo being edited
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const add = (e) => {
        e.preventDefault();
        if (editId) {
           
            dispatch(updateTodo({ id: editId, text: input }));
            setEditId(null); 
        } else {
           
            dispatch(addTodo(input));
        }
        setInput(""); 
    };

    const editItem = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setInput(todoToEdit.text); 
        setEditId(id); 
    };

    return (
        <>
            <form onSubmit={add} className="flex">
                <input 
                    type="text"
                    placeholder="Write your todo..."
                    className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    {editId ? 'Update' : 'Add'}
                </button>
            </form>
            <TodoList editItem={editItem} />
        </>
    );
};

export default TodoFrom;
