import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { addTodo, sorter } from "./Redux/Todo/TodoAction";





export const Todo = ()=>{


    const todos = useSelector((store)=>store.todos.todos);
     
    const [text,setText] = useState()
    const dispatch = useDispatch()
    const handleTodos =(value)=>{
        dispatch(addTodo({title:value,
        status:false}))
    }
    return <div>
        <input type="text" onInput={(e)=>setText(e.target.value)} />
        <button onClick={()=>{
            handleTodos(text)
        }}>add todos</button>
        <button onClick={()=>{
            dispatch(sorter())
        }}>Sort</button>
        {todos.map((e)=>{
            return <div>                
                {e.title}
                {e.id}
            </div>
        })}
    </div>




}