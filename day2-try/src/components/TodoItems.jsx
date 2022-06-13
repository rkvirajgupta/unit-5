export const Todoitem = ( {idx, todo, handleStatus , deletion})=>{


return (
    <div>
   
{todo.id}
{todo.title}
{todo.status?"done":"Not done"}
<button onClick={()=>{
    handleStatus(todo.id)}
}>changer</button>
<button onClick={()=>{deletion(idx)}}>deletor</button>
    </div>

)


}