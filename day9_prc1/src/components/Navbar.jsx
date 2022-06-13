import { CartContext } from "./contexts/CartContext"

import { useContext, useState } from "react"
import { LangContext } from "./contexts/LangContext"

export const Navbar =()=>{
     
    // useContext return everything
    const {cart} = useContext(CartContext)

    const {lang }  = useContext(LangContext)
    return <nav style ={{
        display: "flex",
        justifyContent:'end',
        padding:'15px',
        fontSize:'28px',
        border:"1px solid red",
        margin:'10px'
    }}>
        {lang==="en"?"Cart":"zhola"}
        :{cart}
    
    
    </nav>
}