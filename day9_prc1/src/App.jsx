import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';

import {LangContext} from "./components/contexts/LangContext"
import { useContext } from 'react';
function App() {

  const {handleLang} =  useContext(LangContext);

return <>
  
  <button 
  onClick={()=>{
    handleLang()
  }}> Change Language</button>
  <Navbar />
  <Card />
  </>
}

export default App;
