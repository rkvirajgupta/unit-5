import { useSyncExternalStore } from "react";
import { useEffect } from "react";
import { useState } from "react"
import {useSelector,useDispatch} from 'react-redux'
import {adder,  addTodo, DELETE, deleteTodo, getTodos, sortTodo, toggleTodo } from "./Redux/Todo/TodoAction";

export const Todo = ()=>{

 const [text,setText] = useState("");
 const dispatch = useDispatch();
 const todos = useSelector((store)=>store.todos.todo)
useEffect(()=>{
    dispatch(getTodos())
},[])



    return <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>{
         dispatch(adder(text))
         setText("")
       }}>add todo</button>
       <select 
            onChange={(e)=>{
                dispatch(sortTodo(e.target.value))
            }} >
    <option value="id">sort by id</option>
    <option value="status">sort by status</option>
    <option value="title">sort by title</option>


            </select>
        <div>
            {todos.map((e)=>{
                return <p key={e.id}>{e.title}{e.id}
                      <button onClick={()=>{
                        dispatch(deleteTodo(e.id))
                      }}>delete</button>
                      <button 
                      onClick={()=>{
                        dispatch(toggleTodo(e.id))
                      }}
                      >{e.status==true?'toggle':'nottoggle'}</button>
                </p>
            })}
        </div>
    </div>
}