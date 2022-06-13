import {useState} from 'react';


export const Todoinput = ({getData})=>{

    const [text,setText] = useState('text');

    return (

        <div>
            <input type="text"
             
             onChange={(e)=>{
                setText(e.target.value);
             }}
            />
            <button onClick={()=>{getData(text)}}>click</button>
        </div>
    )


}