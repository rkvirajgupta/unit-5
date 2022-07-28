import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UserList';
import {UserDetails} from './components/UserDetails';
import { Login } from './components/Login';
import { PrivateComponent } from './components/PrivateComponent';


function App() {

  return (
    <div className="App">
     Hello,Viraj
     <Navbar/>
     <Routes>
     
     <Route path='/' element={<Home></Home>}></Route>
   
     <Route path='/about' element={<About/>}></Route>

    <Route path='/users' element={<UsersList></UsersList>}></Route>
    
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/users/:id' element={
    <PrivateComponent><UserDetails/></PrivateComponent>}></Route>

     </Routes>
     
     
    </div>
  );
}

export default App;
