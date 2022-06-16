import { useEffect, useState } from 'react';
import { StyleButton,Cack } from './components/StyleButton';
import './App.css'
function App() {
 
   function handlechange(){
      console.log(11)
   }
   const handle = ()=>{
      console.log("see the difference in all function calling you will understing where we need callback and where we don't need callback");
   console.log('see the difference b/t all of the some are working and some not this is how it works')
   }

   return (
      <div className="App">
         hello
     
      <StyleButton onClick={handlechange}>hello</StyleButton> 
     <StyleButton onClick={handle}>hello</StyleButton>
     <StyleButton onClick={handle()}>hello</StyleButton>
     <StyleButton onClick={()=>{handle()}}>hello</StyleButton>
     <StyleButton onClick={()=>handle()}>hello</StyleButton>
     <StyleButton onClick={()=>(handle())}>hello</StyleButton>
      
     {/* last to are never worked because they written worng in syntax */}
     
     <StyleButton onClick={()=> (handle)}>hello</StyleButton>
     <StyleButton onClick={()=>handle}>hello</StyleButton> 
      
   <Cack>hello</Cack>
    <Cack>jai ho</Cack>
    <Cack>
      <div>RAM</div>
    </Cack>
      
       </div>
   )
}


export default App;
