import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./context/Auth"




export const Navbar = ()=>{

const {login ,handleLogin} = useContext(AuthContext)

const hello = ()=>{
    if(login==false){
        return 
    }
    handleLogin(!login)
}

return <div style={{display:"flex",justifyContent:"center"}}>
        <Link to ='/'>Home</Link>

    <Link to='/count' >counter</Link>
    <Link to='/todos'>todos</Link>
    <Link to ='/login' onClick={()=>hello()}>{login==true ?"Logout":"Login" }</Link>
</div>


}