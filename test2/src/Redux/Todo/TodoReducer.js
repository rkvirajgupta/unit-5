import { ADD_TODO } from "./TodoAction"


const init ={
    todos:[]
}

export const TodoReducer = (store=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return{...store,todos:[...store.todos,payload]}
         
            default :
            return {...store}

    }
    
}