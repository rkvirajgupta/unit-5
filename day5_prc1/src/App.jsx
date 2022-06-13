import { useState } from "react";
import "./App.css";

import {Todos} from "./components/Todos"
import {Counter} from "./components/Counter"

function App() {
 
const [show,setShow] = useState(true);


  return (
    <div className="App">
    
    {show ? <Todos/>:null}
    
    <button onClick={()=>{
      setShow(!show);
    }}>{show?"Hide":"Show"}todos</button>

   
    {show ?  <Counter/>:null} 
    {/* dont remove anything everything is importnat */}
    </div>
  );
}

export default App;
