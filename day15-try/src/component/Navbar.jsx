import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import './navbar.css'

export const Navbar = () => {
  
  const {login,handleLogin} = useContext(AuthContext)

 const handleChange = ()=>{
  if(login==false){
    return 
  }
  handleLogin(!login)
 }
  return (
    <div id='diver'>
                 <Link to={`/users`}> users</Link>
                 <Link to={`/userdetail`}> userdetail</Link>
                 <Link to={`/login`} onClick={()=>{handleChange()}}> {login==true?"logout":"login"}</Link>



    </div>
  );
};
