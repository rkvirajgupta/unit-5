
export const ADD_COUNT= "ADD_COUNT";


export const addCounter = (value)=>{

    return {
        type:ADD_COUNT,
        payload:value
    }
}