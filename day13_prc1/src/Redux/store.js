import {legacy_createStore as createStore} from 'redux'

import { storeReducer } from './reducer';

export const store  = createStore(storeReducer, 
    { counter : 0,  todos:[] })


// store.subscribe(()=>{
//     console.log(store.getState())
// })