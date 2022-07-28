import { useContext } from "react"
import {useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext"


export const PrivateComponent = ({children}) =>{
   


    const {login} =  useContext(AuthContext)

    if(!login){

        return <Navigate to='/login' replace={false}/>  //try true  it will replace that page with this page 
                                                
     
    }
    return children;
}