import logo from './logo.svg';
import './App.css';
import { Counter } from './component/Counter';
import { Todos } from './component/Todos';
function App() {

  return (
    <div className="App">
     Hello
     <Counter/>
     <Todos/>
    </div>
  );
}

export default App;
