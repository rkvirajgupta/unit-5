import logo from './logo.svg';
import './App.css';

function App() {
const food = "pizza";
const age = 12; //try 19
const skills = ['mern','node','dsa','design','animatin'];

  return (
    <div className="App">
     <p>{food}and{age}</p>
     <p>{1+2}</p>
    <p>you are {age >18 ? "eligible":"not eligible"}</p>
     
     <div>your skills:
       <ul>
         {skills.map((e)=>{

           return <li className="redtext">skills : {e}</li>
         })}
       </ul>
     </div>
     <div>
       {skills.map((e)=>{
        
        return <Tango value={e}/>

       })}
     </div>
     <div>
       {skills.map((e)=>{
        
        return <Mango props={e} age="1"/>

       })}
     </div>
     <div>
       {skills.map((e)=>{
        
        return <Zango props={e}/>

       })}
     </div>
   
   
   
    </div>
  );
}

function Zango( props ){
  return <p className = "text">Skill:{props.props}</p>
}

function Tango({ value }){
  return <p className = "text">Skill:{value}</p>
}

function Mango(props){
  console.log(props)
  return <p className = "text">Skill:{props.props} age:{props.age}</p>

}
export default App;
