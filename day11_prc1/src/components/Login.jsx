import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export const Login= ()=>{
 
    const { handleAuth } =useContext(AuthContext);

    const navigate = useNavigate();
    return (
        <div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password"/>
          <button onClick={()=>{
        handleAuth(true);
          
        // navigate('/')
        navigate('/', {replace:false})  //try true
        // navigate(-2, {replace:false}) //try -1,-3 


          }}>Submit</button>
        </div>
    )
}