import {legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux'

import { counterReducer } from './Counter/reducer';

import { todosReducer } from './Todos/reducer';

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todosReducer
})

// function middleware(store){
//     return function (action) {
//         return function (next) {
//             //your code                 //curried function
//         }
//     }
// }

//OR

// const middleware1 =(store) =>(next)=>(action)=>{
//     console.log('entering in mw1')
//     next(action);
//     console.log("exiting in md1")
// }
// const middleware2 =(store) =>(next)=>(action)=>{
//     console.log('entering in mw2')
//     next(action);
//     console.log("exiting in md2")
// }


const middleware =(store) =>(next)=>(action)=>{
   if(typeof action === 'function'){
    return  action(store.dispatch)
   }   
   next (action)
}
// OR we can use thunk as a middleware look in line 49 and comment line 48.


export const store  = createStore(
    rootReducer, 
    // applyMiddleware(middleware1 , middleware2)
    // applyMiddleware(middleware)
    applyMiddleware(thunk)

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


// store.subscribe(()=>{
//     console.log(store.getState())
// })


