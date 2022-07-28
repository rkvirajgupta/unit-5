import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todo/TodoAction";



export const Todo = ()=> {
  
    const [text,setText] = useState('');
   
    const todos= useSelector((store)=>store.todos.todos)

    const dispatch = useDispatch();

   console.log(todos)

    return <div>
                  <input type="text" onChange={(e)=>setText(e.target.value)}/>
                  <button onClick={()=>{dispatch(addTodo({title:text,
                statue:false}))}}>add Todo</button>
                
                {todos.map((e)=>{
                    return <p>{e.title}</p>
                })}

     </div>


}