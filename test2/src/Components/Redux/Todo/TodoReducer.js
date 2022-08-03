import { ADD_TODO, DELETE, SORT, TOGGLE } from "./TodoAction"



let init = {
    todo:[]
}

export const TodoReducer = (store=init,{type,payload})=>{
    
        switch(type){

            case ADD_TODO:
                return {...store,todo:payload}
            
            case SORT:
                return {...store,
                    todo:[...store.todo].sort((a,b)=>
                    a[payload]>b[payload]?
                    -1:a[payload]<b[payload]?1:0 )}

            case DELETE:
                return {
                    ...store,
                    todo:[...store.todo].filter((e)=>(e.id!==payload))
                }
            case TOGGLE:
                return{
                    ...store,
                    todo:store.todo.map((e)=>
                    (e.id===payload ? 
                    {...e,status:!e.status}:e))
                }

            default:
                return {...store}
        }
 


}