import {useState,useEffect} from 'react';

export const Todos=()=>{

const [todos,setTodos]=useState([]);

const [text,setText] = useState('');

const [page,setPage]=useState(1)

useEffect(()=>{
    getData()
},[page])

const getData =async ()=>{
 
    const data= await fetch(`http://localhost:8080/todos?_page=${page}&_limit=2`)
    .then((ele)=>ele.json())
   
    console.log(data)
    setTodos(data);


}
console.log(page)
const postData=(value)=>{
    console.log(value)
    const data = {
        title:value,
    status:false
    }
    fetch(`http://localhost:8080/todos`,{
        method:'POST',
        headers:{
            'content-type':'applicaton/json',
        },
        body:JSON.stringify(data)
    }).then(()=>{
        getData()
    })
}
return (
    <div>
     
     <input type="text"
     onChange={(e)=>setText(e.target.value)} />
     
     <button
     onClick={()=>{postData(text)}}>add</button>
      <div>
        {todos.map((e)=>{
            return (
                <div key={e.id}>
                    {e.title}
                    {e.status}
                    {e.id}
                </div>
            )
        })}
      </div>
  <button onClick={()=>{
    setPage(page-1)
  }}>-</button>
<button onClick={()=>{
    setPage(page+1)
  }}>+</button>

    </div>
)

}