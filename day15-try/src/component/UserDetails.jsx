import { useEffect } from "react"
import { useState } from "react"
import { useParams, Navigate } from "react-router-dom";

import './userdetails.css'


export const UserDetails = (e)=>{
  
    // const [data,setData]  = useState([])
    const {id} = useParams()
    
   let data = JSON.parse(localStorage.getItem("name"))||[]
   console.log(data)
    

    return <div className="user">
         <table className='striped-table'><thead className='headoftable'>
         <tr>
                        <th>empId</th>
                        <th>empName</th>
                        <th>empAdd</th>
                        <th>empbatch</th>
                        <th>empsection</th>
                    </tr></thead>
                    <tbody>
                <td>{data.empId}</td>
                <td>{data.empName}</td>
                <td>{data.empAdd}</td>
                <td>{data.empbatch}</td>
                <td>{data.empsection}</td>
                </tbody>
                </table>
   

    </div>
}