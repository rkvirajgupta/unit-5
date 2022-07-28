import { ADD_TODO } from "./action";

// Store: {counter:0}

 const init = { todos:[] }

export const todosReducer = (store=init,{type,payload}) =>{

switch(type){

    case ADD_TODO:
        return {...store,todos: payload}

    default:
        return {...store};
}


}