import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"

import { useParams, Navigate } from "react-router-dom";
import './userdata.css'



export const UserData = ()=>{
    const {login} = useContext(AuthContext)
    const [data,setData]  = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{

        let data = await fetch("http://localhost:8080/users")
        let newdata = await data.json()

        console.log(newdata)
        setData(newdata)

    }
    if(!login){
        return <Navigate to={'/login'}/>
    }

    return <div id="user">
   <table className='striped-table'><thead className='headoftable'>
         <tr>
                        <th>empId</th>
                        <th>empName</th>
                        <th>empAdd</th>
                       
                    </tr></thead>

                    <tbody>
                        {data.map((e)=>(
                            <tr><td>{e.empId}</td>
                     <Link to={`/userdetail`}>      
                         <td onClick={()=>{
            localStorage.setItem('name',JSON.stringify(e))
          }}>{e.empName}</td> </Link>
                            <td>{e.empAdd}</td> </tr>
                        )
                            

                        )}
                
                
                </tbody>
                </table>
        
    </div>
}