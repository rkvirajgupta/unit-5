import { ADD_COUNT } from "./CounterAction"


const init = {
    count:0
}

export const CounterReducer = (store=init,{type,payload})=>{

    switch(type){
        case ADD_COUNT:
            return {...store,count:store.count+payload}
    
    
        default:
        return { ...store } 


    }
    
}