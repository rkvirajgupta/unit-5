import { useState } from 'react';
import './App.css';
import { Category } from "./components/Category"
function App() {
 const [counter, setCounter] = useState(0);


 const handleChange = (value) =>{
 
  setCounter(counter+value);
}

if(counter>=10){
  // alert("counter reached to maximum value");
  return <h4>counter reached max value</h4>
}
  return (
    <div className="App">
     <h3>Counter:{counter}</h3>
    <button onClick={()=>handleChange(1)}>Add 1</button>
    <button onClick={()=>handleChange(-1)}>Sub 1</button>
    <p>Number is {counter%2===0 ? "even":"odd"}</p>
    </div>
  );
}

export default App;



