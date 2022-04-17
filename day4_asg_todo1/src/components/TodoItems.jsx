import "./TodoItems.css"


export const Todoitem=({todo,handleStatus})=>{
    return <div className="todoitems">
      {todo.title} 
        <button className={todo.status===true ? "tgb" : "tgb1"} onClick={()=>
        handleStatus(todo.id)
        }>{todo.status===true ? "Done" : "Not-Done"}</button>
         </div>
    }