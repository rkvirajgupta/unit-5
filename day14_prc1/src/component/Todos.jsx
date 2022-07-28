
import { useEffect } from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addTodo } from "../Redux/Todos/action"


export const Todos = ()=>{

    const [text, setText] = useState("")

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
   .then(getData) //to get data on every fill up auto refresh
   }

   console.log('rendering todos')

   useEffect(()=>{
    getData()
   },[])

   const getData = ()=>{
    fetch('http://localhost:8080/todos')
    .then(x =>x.json())
    .then(data=>{
        dispatch(addTodo(data))
    })
   }
    return (

        <div>
            <input
            value={text}  //to get blank on every fill up remove it you will see the difference
            type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
            {todos.map((ele)=>(
                <div>{ele.title}</div>
           ) )}
        </div>
    )
}