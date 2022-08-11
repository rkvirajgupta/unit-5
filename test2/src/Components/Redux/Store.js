



import {combineReducers, legacy_createStore as createStore}  from 'redux';
import { TodoReducer } from './Todo/TodoReducer';



const rootReducer = combineReducers({
    todos:TodoReducer
})


export const store = createStore(
    rootReducer,

)