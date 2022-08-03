

import { applyMiddleware, combineReducers, legacy_createStore as CreateStore } from "redux";
import { TodoReducer } from "./Todo/TodoReducer";

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todos:TodoReducer

})
export const store = CreateStore(
    rootReducer,
    applyMiddleware(thunk)

);

