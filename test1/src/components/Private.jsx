import { useContext } from "react"

import {AuthContext} from './context/Auth'

import {Navigate} from 'react-router-dom'

export const Private = ({children})=>{


const {login} = useContext(AuthContext)

if(!login){
    return <Navigate to="/login"></Navigate>
}
return children


}