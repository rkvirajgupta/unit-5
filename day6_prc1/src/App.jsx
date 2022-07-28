
import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Form } from "./components/Form"
function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null); //{current:null}
 
 useEffect(()=>{
  startInterval();

  return ()=>{
    clearInterval(counterRef.current)
  }
},[])

const startInterval = ()=>{
  counterRef.current  = setInterval(()=>{
    setCounter((p)=>p+1);   
  },100)
}



  return (
    <div className="App">
      {/* <Form /> */}
    <h3>counter:{counter}</h3>

    <button onClick={()=>{
      clearInterval(counterRef.current)
    }}>pause</button>
    
    <button onClick={()=>{
      startInterval();
    }}>start</button>

<button onClick={()=>{
            clearInterval(counterRef.current)

      setCounter(0)
    }}>reset</button>
 <button onClick={()=>{
    clearInterval(counterRef.current)
      setCounter(0)
      startInterval();
    }}>resetandrestart</button>

    </div>
  );
}

export default App;


//1. store the value, and do not lose it, when component is re-rendering.
//2. change in this value, should not cause re-render.
