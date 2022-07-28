import { useContext } from "react";

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import './Login.css';

export const Login =()=>{
const navigate = useNavigate()
const [form,setForm] = useState({
    userName:"",
    password:""
})

const { handleLogin } =useContext(AuthContext);
const { login } =useContext(AuthContext);


const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({
        ...form,
     [name]:value
    })
}
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    handleLogin(!login)
    alert('login success')
    navigate('/users')

}


    return <div id='former'>
        <p id='login'>Login</p>
        <form  action="" onSubmit={handleSubmit}>
       <label>UserName : </label>

        <input  required type="text" name="userName" placeholder="Enter your UserName" onInput={handleChange}/>
        <br />
        <label id='inp1'> Password {"   "}:{" "}</label>
        <input required type="password" placeholder="Enter your password" name="password" onInput={handleChange}/>
        <br />
        <input type="submit" id="btn" value="Sign in" />
        </form>
    </div>
}