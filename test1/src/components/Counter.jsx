import { useContext } from "react"
import { CounterContext } from "./context/CounterContext"


export const Counter = ()=>{

const {count,handleCount} = useContext(CounterContext)


return <>
       <p>{count}</p>
       <button onClick={()=>{handleCount(1)}}>add 1</button>
  
</>
}