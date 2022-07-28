
import { useEffect } from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addTodo,deleteTodo,filter,getTodos, sort, toggleTodo } from "../Redux/Todos/action"


export const Todos = ()=>{

    const [text, setText] = useState("")

    const [filter,setFilter] = useState('')

   const todos = useSelector((store)=>store.todos.todos,
//    (prev,cur)=>{
    // return true/false   try this concept google it //function euqality(pre,updated){ if(pre.x===updated.x){return true/false}}
//    }
   )
   const dispatch = useDispatch();

   const handleAdd  = ()=>{
   const payload = {
    title: text,
    status:false,
   };

   fetch('http://localhost:8080/todos',{
    method:'POST',

    headers:{
        'content-type':'application/json',
    },
    body:JSON.stringify(payload),

   })
   .then(()=>setText('')) // to get input box empty on every fill-up
   .then(()=>{
    dispatch(getTodos())
   }) //to get data on every fill up auto refresh
   }

   console.log('rendering todos')

   useEffect(()=>{
    dispatch(getTodos())
   },[])

   
    return (

        <div>

            <input type="text" 
            placeholder="filter todos"
            onChange={(e)=>{
                // dispatch(filter(e.target.value))
                setFilter(e.target.value);
            }}
            
            />
            <select 
            onChange={(e)=>{
                dispatch(sort(e.target.value))
            }} >
    <option value="id">sort by id</option>
    <option value="status">sort by status</option>
    <option value="title">sort by title</option>


            </select>
            <input
            value={text}  //to get blank on every fill up remove it you will see the difference
            type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
            {todos
            .filter(todo=>todo.title.includes(filter))
            .map((ele)=>(
                <div key={ele.title}>
                 {ele.id}-{ele.title}-{ele.status ? 'Done':'NotDone'}
                 
                 <button onClick={()=>{
                    dispatch(deleteTodo(ele.id))
                 }}>Delete</button>
                   <button onClick={()=>{
                    dispatch(toggleTodo(ele.id))
                 }}>Toggler</button>
                 
                 </div>
           ) )}
        </div>
    )
}