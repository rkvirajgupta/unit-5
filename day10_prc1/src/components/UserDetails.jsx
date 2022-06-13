import { useParams } from "react-router-dom";

export const UserDetails =()=>{

    const {id} = useParams();

    return <div>User id:{id}</div>
}