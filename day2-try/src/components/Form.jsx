import { useState } from "react";

export const Form =  () =>{

  const [form,setForm]=useState({
    username:'',
    age:""
  })  
 
  const handleChange=(e)=>{
  const {name , value} = e.target;

  setForm({
    ...form,
    [name]:value
  })

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
    fetch('http://localhost:8080/forms',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(form)
    })
  }

return (
    <div>
           my name is khan
        <form onSubmit={handleSubmit} >

    <input type="text" name="username"
    onChange={handleChange}/>
    <input type="number"
    onChange={handleChange}
    name="age" />
    <input type="submit" />



        </form>
    </div>
)


}