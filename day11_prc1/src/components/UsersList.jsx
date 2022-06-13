import { useEffect,useState } from "react";

import { Link, useLocation, useSearchParams } from "react-router-dom";

import axios from 'axios';

const useQuery =(q)=>{
    const param  = new URLSearchParams(window.location.search);
    return param.get(q);
}

export const UsersList =()=>{

const [users,setUsers] = useState([]);
const location = useLocation();
console.log("location",location);
const [params] = useSearchParams();

console.log(params.get("page"));
console.log(useQuery("page"));

useEffect(()=>{

    axios.get("https://reqres.in/api/users").then(({data})=>{
    
    // console.log(data)
    setUsers(data.data)

    })
},[]);

return <div>
    {
        users.map((user)=>(
            <p key={user.id}>

               <Link to={`/users/${user.id}`}>
               {user.id}.{user.first_name}</Link>
            </p>
        ))
    }
</div>

}