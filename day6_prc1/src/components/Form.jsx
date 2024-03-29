import {useState} from "react";


export const Form = () => {

const [formData,setFormData] = useState({
    username : "",
    age:""
    
})

const handleChange =(e) =>{
    console.log(e.target.id)
    // if(e.target.id === "username"){
    //     setFormData({
    //         ...formData,
    //         username:e.target.value
    //     })
    // }
    // if(e.target.id === "age"){
    //     setFormData({
    //         ...formData,
    //         username:e.target.value
    //     })
    // }
    //OR
    // setFormData({
    //             ...formData,
    //             [e.target.id]:e.target.value
    //         })
   //OR
const  { id,value }  = e.target;
   setFormData({
    ...formData,
    [id] :value
})


}
const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:8080/forms",{
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formData),
          })
}

  return (
    <form  onSubmit={handleSubmit}>
      <input 
      required //it will not take empty box you need to feel it.
      onChange={handleChange}
      // value = {formData.username} //not needable 
      type="text" 
      placeholder="Enter Username" 
      id = "username"
      />

      <input 
      required
      onChange={handleChange}
      // value = {formData.age} serch on google
      type="number" 
      placeholder="Enter Age" 
      id="age"  //use name ="age" instead of id
      />
      
      <input type="submit" value="submit" />

    </form>
  );
};
