import { useEffect } from "react"
import { useState } from "react"






export const Todo = ()=>{

const [text,setText ] =useState("")
const [todos,setTodos] =useState([])

useEffect(()=>{
    getData()
},[])

const getData = async()=>{
   
    const q = await fetch('http://localhost:8080/todos')

    const z = await q.json()

    setTodos(z)

}
const handleTodo = (value) =>{

  const payload = {
    title:text,
    status:false
  }
  fetch('http://localhost:8080/todos',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(payload)
  }).then(getData())
  .then(setText(""))
  

}


return <div>
      
      <input type="text" value={text} onInput={(e)=>setText(e.target.value)} />

      <button onClick={()=>{
        handleTodo(text)
      }}>add todo</button>
          <div>
            {todos.map((e)=>{
                return <p>{e.title}</p>
            })}
          </div>

</div>

}