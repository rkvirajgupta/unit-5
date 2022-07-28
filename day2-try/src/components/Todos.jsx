import { useEffect } from "react";
import { useState } from "react"


export const Counter = ()=>{

  const [text,setText] = useState("");
  const [todos,setTodos]= useState([]);

  useEffect(()=>{

    getData()
  },[])
  const handleAdd = (text)=>{
  
    const payload ={
      name:text,
      status:false
    }

    fetch('http://localhost:8080/todos',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(()=>{
      getData();
    })

  }
  
  const getData= async ()=>{

     const data = await fetch("http://localhost:8080/todos")
     
     const datar = await data.json()

     setTodos(datar);
     return datar

  }

  const sorter = async (type)=>{
     
    let fetched = await getData();
  console.log(fetched)
    if(type==0){
      let sorted = fetched.sort((a,b)=>{

        return b.id-a.id;
          
       // try this for name sorten
   
        // if(a.firstname < b.firstname) { return -1; }
        // if(a.firstname > b.firstname) { return 1; }
        // return 0;
      })


    
      setTodos([...sorted])
    }
     


  }




  return <div>
    <input type="text"
    onInput={(e)=>setText(e.target.value)} />
    <button onClick={()=>handleAdd(text)}>submit</button>
      <button onClick={()=>{sorter(0)}}>sorter</button>
   <div>
    {todos.map((e,i)=>{
      return <div key={i} style={{display:"flex",justifyContent:"center"}}>
        <p>{i}</p>
        <p>{e.name}</p>
        <p>{e.status==true?"true":"false"}</p>
      </div>
    })}
   </div>
  </div>
}