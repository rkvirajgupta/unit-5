import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import {Button} from "./components/Button"
import {Flex} from "./components/Flex"
import { Good } from './components/Uibutton';


function App() {
  
const [theme,setTheme] = useState('dark');
  return (
    <div className="App">
      
      <h3>theme is {theme}</h3>
      <Button 
      theme = {theme}
      onClick={()=>{
      
        setTheme(theme==='light' ? 'dark':"light")
      }}>Change Theme</Button>
      <Button
      onClick={()=>{
        alert("clicked")
      }}
      children={"click me"}/>
      <Button children={"Sign in"}/>

      {/* //or you can write it like this */}

      <Button>log out</Button>

     <Flex>
       <div>One</div>
       <div>Two</div>
       <div>three</div>
     </Flex>

<Good/>

    </div>
  );
}

export default App;
