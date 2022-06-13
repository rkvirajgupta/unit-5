// import './App.css';
// import { Todo } from "./components/Todo"
// function App() {


//   return (
//     <div className="App">
//       <Todo />   
//     </div>
//   );
// }


// export default App;


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   const [message,setMessage] = useState("");

 const getData = (data) =>{
   console.log("getting data from child:" ,data)
   setMessage(data)
 }
  return (
    <div className="App">
    <First dataFn={getData} />
    <Second message = {message} />
    </div>
  );
}

function First({ dataFn }){
const data = "hello child1"
dataFn(data);
 return <div>First Child</div>
}


function Second({ message }){

  console.log("got data from sibling:",message)
  return <div>Second Child</div>
}
export default App;