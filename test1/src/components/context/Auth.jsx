import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

const [login,setLogin] =useState(false)

const handleLogin = (value)=>{
    setLogin(value)
}

return <AuthContext.Provider value={{login,handleLogin}}>
    {children}
</AuthContext.Provider>

}