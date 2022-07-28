
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';


import thunk from 'redux-thunk';
import { CounterReducer } from './Counter/CounterReducer';
import { TodoReducer } from './Todo/TodoReducer';


const rootReducer = combineReducers({
    counter:CounterReducer,
    todos:TodoReducer
})


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)