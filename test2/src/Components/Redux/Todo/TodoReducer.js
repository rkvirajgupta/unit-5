import { ADD_TODO, SORT } from "./TodoAction"



const init = {
    todos:[]
}

export const TodoReducer = (store=init,{type,payload})=>{

    switch(type) {
        case ADD_TODO:{
            return {
                ...store,todos:[...store.todos,payload]
            }
        }
        case SORT :{
            return {
                ...store,todos:[...store.todos].sort((a,b)=>a.title<b.title?1:
                a.title>b.title?-1:0)
            }
        }
        default:
            return {
            ...store
        }
    }
}