const ADD_TODO="ADD_TODO";
export const SORT="SORT";
export const DELETE='DELETE';
export const TOGGLE='TOGGLE';

const addTodo = (payload)=>{
    return {
        type:ADD_TODO,
        payload
    }
} 

export const deleteTodo = (payload)=>{
    return {
        type:DELETE,
        payload
    }
}
export const toggleTodo = (payload)=>{
    return {
        type:TOGGLE,
        payload
    }
}
export const sortTodo = (payload)=>{
    return {
        type:SORT,
        payload
    }
}

export const getTodos=()=> (dispatch)=>{
    
    fetch('http://localhost:8080/todos')
   .then((data)=>data.json())
   .then((data)=>dispatch(addTodo(data)))
    
    
}
export const adder = (text) =>(dispatch)=>{
    const payload = {
        title:text,
        status:false
    }
    fetch('http://localhost:8080/todos',{
        method:"POST",
        headers:{
            "content-type":'application/json'
        },
       body:JSON.stringify(payload)
    }).then(()=>{
            dispatch(getTodos())})
 }

export  {ADD_TODO,addTodo}