import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./context/Auth"




export const Login = ()=>{

    const nav = useNavigate()

const {login,handleLogin} = useContext(AuthContext)

return <div>
    <input type="text" name="" id="" />
    <input type="text" />
    <button onClick={()=>{
         handleLogin(!login)
         nav('/')
    }
       
    }>{login==true ?"Logout":"Login" }</button>
</div>


}