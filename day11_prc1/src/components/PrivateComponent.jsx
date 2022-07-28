import { useContext } from "react"
import {useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"


export const PrivateComponent = ({children}) =>{
   
    const nav = useNavigate()

    const {isAuth}  =  useContext(AuthContext);

    if(!isAuth){
        // return <Navigate to='/login'/>

        return <Navigate to='/login' replace={false}/>  //try true  it will replace that page with this page 
                                                 // it is usefull because it helps users to not mess in infinite loop.
     
            // nav('/login')   it is not working why?  
    }
    return children;
}