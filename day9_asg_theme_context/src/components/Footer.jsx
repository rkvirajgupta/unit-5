import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"
export const Footer =() =>{
    var {theme}=useContext(ThemeContext)
    const Button_style = styled.section`
    background: ${theme==="light" ? "white" : "black"};
     margin:"10px";
     height:"100px";
     padding:"3%";
     color:"red";
     `
     return (
     <Button_style>
         <div style={{"color":"red"}}>footer</div>
     </Button_style>)
     
}