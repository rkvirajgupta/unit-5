import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { PrivateComponent } from './component/PrivateComponent';
import { UserData } from './component/UserData';
import {UserDetails} from './component/UserDetails'
 


function App() {



  return (
    <div className="App">
      
       <Navbar/>
      <Routes>
      <Route path={'/login'} element={ <Login/>
}></Route>
      <Route path={'/users'} element={<PrivateComponent> <UserData/></PrivateComponent>
}></Route>

        <Route path={`/userdetail`} element={<PrivateComponent><UserDetails/></PrivateComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
