import { useRef,useState,useEffect } from "react";

export const Timer=()=>{

   const [counter,setCounter]  =useState(0);

   const counterRef=useRef(null);//{current:null}
    var startInterval;
   useEffect(()=>{
     startInterval =()=>{
  
        let id  = setInterval(()=>{
             setCounter((p)=>
             {
                 return p+1;
             })
            
         },1000)
         return ()=>{
             clearInterval(id)
         }
     
        }
   },[])
   


return (
    <div>

    <p>{counter}</p>
    <button onClick={()=>{
        clearInterval(counterRef.current)
    }}>pause</button>
     <button onClick={()=>{
        startInterval();
     }} >start</button>
     <button onClick={()=>{
        clearInterval(counterRef.current)
        setCounter(0)
     }}>reset</button>
    </div>
)

}