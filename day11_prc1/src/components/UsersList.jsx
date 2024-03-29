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

console.log("page",params.get("page"));
console.log("age",params.get("age"));
console.log(useQuery("page"));
// use this link to http://localhost:3000/users?page=2&age=7  get line 19,20,21 answer in console

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