import { ADD_COUNT,ADD_TODO } from "./action";

// Store: {counter:0}

export const storeReducer = (store,{type,payload}) =>{

switch(type){

    case ADD_COUNT:
        return {...store, counter:store.counter+payload};
    case ADD_TODO:
        return {...store,todos: [...store.todos,payload]}

    default:
        return {...store};
}


}

//OR



// import { ADD_COUNT,ADD_TODO } from "./action";


// export const storeReducer =(store,action)=>{

//     switch(action.type){

//     case ADD_COUNT:
//         return {...store,counter:store.counter+action.payload}
      
//     case ADD_TODO:
//         return {...store,todos:[...store.todos,action.payload]}
    
//     default:
//         return {...store}

//     }
// }