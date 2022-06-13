import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Form } from "./components/Form"
function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null); //{current:null}

  const divRef= useRef(null);
 
 useEffect(()=>{

},[])




  return (
    <div ref = {divRef} className="App">
      {/* <Form /> */}
    <h3 >counter:{counter}</h3>
    <div className='longred'>1st</div>
    <div className='longblue'>2nd</div>
    <div className='longred'>3rd</div>
    <div className='longblue'>4th</div>
    <div className='longred'>5th</div>
    <button
    onClick={()=>{
      divRef.current.scrollIntoView({
        behavior:"smooth"
      });
      //oR
      // divRef.current.innerHTML = "test";
    }}
    >Scroll to top</button>
   
   <button onClick={()=>{
     console.log(divRef.current)
   }}
    >button</button>


    </div>
  );
}

export default App;


//1. store the value, and do not lose it, when component is re-rendering.
//2. change in this value, should not cause re-render.