import { useState } from "react";

function App() {
    const [inv, setInv] = useState({
        Score: 76,
        Wicket: 2,
        Ball: 50
    })
    const updating=(key,value)=>{
        if(inv.Wicket>=12 || inv.Score>=100){
            return
        }
        if(key==="Wicket"){
            inv.Wicket = inv.Wicket+1
        }
        if(key==="Score"){
            inv.Score = inv.Score+value
        }
        if(key==="Ball"){
            inv.Ball=inv.Ball+1
        }
        setInv({
            Score: inv.Score,
            Wicket: inv.Wicket,
            Ball: inv.Ball
        })
    }
    return (
      <div className="App">
        <h3>India:</h3>
        <div className="banner">
          <div>
            Score:{" "}
            <h1 className="scoreCount">
              {
                inv.Score
              }
            </h1>
          </div>
          <div>
            Wicket:{" "}
            <h1 className="wicketCount">
              {
                inv.Wicket
              }
            </h1>
          </div>
  
          <div>
            Over:{" "}
            <h1 className="overCount">
              {
                Math.floor(inv.Ball/6) + "." + (inv.Ball%6)
              }
            </h1>
          </div>
        </div>
  
        <div className="addScore">
          Add Score
          {/* these buttons should add the respective amount in the score */}
          <button className="addScore1" onClick={()=>updating("Score",1)}>Add 1</button>
          <button className="addScore4" onClick={()=>updating("Score",4)}>Add 4</button>
          <button className="addScore6" onClick={()=>updating("Score",6)}>Add 6</button>
        </div>
  
        <div className="addWicket">
          Add Wicket
          {/* Increase the count of wicket */}
          <button onClick={()=>updating("Wicket",1)}>Add 1 wicket</button>
        </div>
  
        <div className="addBall">
          Add ball
          {/* Increase the total number of balls thrown here. */}
          <button onClick={()=>updating("Ball",1)}>Add 1</button>
        </div>
  
        {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
        
    <h1 className="status">{inv.Score>=100 ? 'INDIA WON':''}</h1>
      </div>
      
    );
  }
  
  export default App;