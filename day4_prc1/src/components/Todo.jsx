import { useState } from "react";
import { TodoInput } from "./TodoInput";

import {TodoItem} from "./TodoItem"; 
import {nanoid} from "nanoid";

function Todo(){
const [todosList, setTodosList] = useState([])


const getData = (todo) =>{
    
    const payload = {
        title:todo,
        status:false,
        id:nanoid(5)
    }
    
    // console.log("recevied",todo);
    setTodosList([...todosList, payload]);
};
      const handleStatus=(id)=>{
          console.log("id",id)

    //  setTodosList([...todosList.map((e)=>(e.id===id ?{...e,status:!e.status}:e))])  OR
    // setTodosList(todosList.map((e)=>(e.id===id ?{...e,status:!e.status}:e))) //we can use with spread operator because map will return  an new arr
            //OR
            const newarr = todosList.map((e)=>{
             if(e.id===id){
                 return {
                     ...e,
                     status:!e.status,
                 };
             }
             return e;


            })
            setTodosList(newarr)
      }    

    return (
        <div>
        
     <TodoInput getData={getData} />
        {todosList.map((e)=>(
            // <div>{e}</div>
            <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
        ))}
    </div>
    );
}

export { Todo };