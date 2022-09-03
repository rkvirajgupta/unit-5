import { useState } from "react"


export const Counter = ()=>{
const [ter,setter]=useState("")
const handleChange = (data)=>{

    setter(data)
}


  
    return <>
    {ter}
    <Child jj={handleChange} />
    </>
}

const Child = ({jj})=>{
    const data = "hi"
    jj(data)
}
