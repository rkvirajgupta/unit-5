import { useState } from "react";
 
export const TodoInput = ({getData}) => {

const [text, setText] = useState("");
    return (
        <div>
           
           <input onChange={(e)=>{
            //    console.log(e.target.value);
            setText(e.target.value);
           }}
             type="text" placeholder="Enter Todo" />
           <button onClick={()=>{
               getData(text)
           }} >Add todo</button>
           {/* <div>{text}</div> */}
        </div>
    );
}