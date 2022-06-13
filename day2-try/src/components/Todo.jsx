import {useState} from "react";

import { nanoid } from 'nanoid'
import { Todoinput } from "./Todoinput";
import { Todoitem } from "./TodoItems";

function Todo(){

const [todolist,setTodolist]=useState([])



const getData = (todo)=>{

   const payload ={
        title:todo,
        status:false,
        id:nanoid(5)
    }
    setTodolist([...todolist,payload]);
    console.log(todolist)
}

const deletion =(id)=>{
    todolist.splice(id,1)
    setTodolist([...todolist])
}
const handleStatus =(id)=>{
  
    const arr= todolist.map((e)=>{
        if(e.id==id){
          return  {
                ...e,
                status:!e.status
            }
        }
        return e;
    })
    console.log(arr)
    setTodolist(arr)
}

return (
    <div>
       <Todoinput getData={getData}/>

    {todolist.filter((item)=>{
        return item.status===false
    }).map((e,i)=>{
        return <Todoitem deletion = {deletion} handleStatus={handleStatus} todo={e} idx={i}/>
    })}

       <div style={{color :"blue"}}>
       {todolist.filter((item)=>{
        return item.status===true
    }).map((e,i)=>{
        return <Todoitem deletion = {deletion} handleStatus={handleStatus} todo={e} idx={i}/>
    })}</div>   
    </div>
)






}

export { Todo }

