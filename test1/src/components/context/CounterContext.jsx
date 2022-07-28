import { useState } from "react";
import { createContext } from "react";



export const CounterContext = createContext()

export const CounterContextProvider = ({children})=>{

    const [count , setCount] = useState(0)

    const handleCount = (value)=>{
        setCount(count+value)
    }


    return <CounterContext.Provider value = {{count, handleCount}}>
        {children}
    </CounterContext.Provider>
}