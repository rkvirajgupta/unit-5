import { useEffect, useState } from "react";

export const Counter = () =>{
    const [count,setCount] = useState(10);

// useEffect(()=>{
//     setInterval(()=>{
//         setCount(count -1);
//     },1000)
// },[])  it will render many setIntervals try it 

useEffect(()=>{
 let id=   setInterval(()=>{
        setCount((prevValue) =>{
            console.log("memory leak")
            if(prevValue<=0){
                clearInterval(id)
                return 0;
            }
            return prevValue - 1;
        });
    },1000)

    return ()=>{
        clearInterval(id);   //why line no 23 to 25 because of memory leak commmet all and console after mounting
    }
},[])


return (
    <div>
        <h3>Count:{count}</h3>
        <button
        onClick={()=>{
            setCount((count)=>{
                if(count>15) return 15;
                // return "hello"
                return count+1
            })
        }}>add</button>
    </div>
)


}