



export const ADD_TODO= "ADD_TODO";
export const SORT = 'SORT'; 


export const addTodo = (payload)=>{

return {
    type:ADD_TODO,
    payload
}
}
export const sorter = ()=>{

    return {
        type:SORT
    }
} 



