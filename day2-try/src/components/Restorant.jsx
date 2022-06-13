import {useState, useEffect} from 'react';

export const Restorant = ()=>{

const [data,setData] = useState([]);

const Form = ()=>{

cosnt [form,setForm]= useState({
    name:"",
    price:'',
    rate:""
})

}
 

const getData=async()=>{
 
    const value=await fetch("http://localhost:8080/rest")
    .then((e)=>e.json())
    setData(value)
}
useEffect(()=>{
    getData()
},[])

const postData = (e)=>{
const payload={
    name:e.text,
    price:e.price,
    rate:e.rate
}

fetch('http://localhost:8080/rest',{
    method:'POST',
   headers: {
        "content-type":'application/json'
    }
    ,
    body:JSON.stringify(payload)
  

}).then(()=>{
    getData()
})

}

const filt =()=>{
   
    data.sort((a,b)=>(a.price-b.price));
    setData([...data])
}
return (
    <div>
        <input type="text"
        onChange={(e)=>{setText(e.target.value)}} />
        <input type="text"
        onChange={(e)=>{setPrice(e.target.value)}} />
        <input type="text"
        onChange={(e)=>{setRate(e.target.value)}} />

        <button onClick={()=>{
            postData({text,price,rate})
        }}>submit</button>


<button 
                       onClick={()=>{
                        filt()
                       }}>filt</button>
        <div>
            {data.map((e)=>{
                return (
                    <div key={e.id}>
                      <p> {e.price}</p>
                       <p> {e.name}</p>
                       <p> {e.rate}</p>
                      
                    </div>
                )
            })}
        </div>
    </div>
)
        }