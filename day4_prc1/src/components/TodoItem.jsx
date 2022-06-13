export const TodoItem = ({todo,handleStatus}) =>{

    return <div>
          <div>todo id:{ todo.id}</div>
        todo title: {todo.title}-{todo.status ?"done":"Notdone"}
    <button onClick={()=>handleStatus(todo.id)  } >Toggle</button></div>;
};