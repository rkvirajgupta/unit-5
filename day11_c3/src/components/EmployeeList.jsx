import axios from "axios"
import {useState,useEffect} from "react";




export const EmployeeList = () => {
  const [user,setUser]=useState([])
  const [data,setData] = useState([])
  console.log(data)

  useEffect(()=>{
    axios.get(`http://localhost:8080/employee`).then(({data})=>{
     setUser(data)
    //  console.log(data)
    })
},[])
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {
       user.map((e)=>{
         return (<div onClick={()=>setData(e.id)
         
         
         } className="employee_card">
        <img className="employee_image" src={e.image}/>
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
        </div>)
       })
      
     
}
    </div>
  );
};
