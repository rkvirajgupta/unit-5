import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Todo } from './components/Todo';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Private } from './components/Private';
import { Login } from './components/Login';
import {Home} from './components/Home';



function App() {
  return (
    <div className="App">
        Hi,viraj
        <Navbar></Navbar>
        
        <Routes>
        <Route path='/' element={<Home/>}> </Route>

       <Route path='/count' element={<Private><Counter></Counter></Private>}></Route>
       <Route path='/todos' element={<Private><Todo/></Private>}></Route>
       <Route path = '/login' element={<Login/>}></Route>


        </Routes>
        
    </div>
  );
}

export default App;
