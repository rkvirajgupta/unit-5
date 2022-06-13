import './App.css'
import {Home} from './components/Home';
import {About} from './components/About';

import   {Routes,Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {UsersList} from './components/UsersList';
import {UserDetails} from './components/UserDetails';
import {PrivateComponent} from './components/PrivateComponent';
import { Login } from './components/Login';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     {/* you can write it like this also <Home/> */}
<Route path='/' element={<Home/>}> </Route>

<Route path='/about' element={<About/>}> </Route>

<Route path="/users" element={
  <PrivateComponent><UsersList/></PrivateComponent>
}></Route>
<Route path= '/login' element={<Login/>}></Route>
<Route path="/users/:id" element={

<PrivateComponent><UserDetails/></PrivateComponent>


}></Route>
</Routes>
    </div>
  )
}

export default App