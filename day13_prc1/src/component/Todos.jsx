
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addTodo } from "../Redux/action"


export const Todos = ()=>{

    const [text, setText] = useState("")

   const todos = useSelector((store)=>store.todos)
   const dispatch = useDispatch();

   const handleAdd  = ()=>{
    dispatch(addTodo({
        title:text,
        status:false
    }))
   }
    return (

        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
            {todos.map((ele)=>(
                <div>{ele.title}</div>
           ) )}
        </div>
    )
}