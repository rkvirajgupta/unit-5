import React, { useEffect, useState } from "react";

const Timer = ({ start, end }) => {
   const [count, setCount] = useState(start);

   useEffect(() => {
   
      let id = setInterval(() => {
         setCount((preValue) => {
            if (preValue >= end) {
               clearInterval(id);
               return end;
            }
            return preValue + 1;
         });
      }, 1000);

      return () => {
         clearInterval(id);
      };
   });

   return (
      <div className="timer">
         <h1>Timer</h1>
         <div className="time">
            <h2>{count}</h2>
         </div>
      </div>
   );
};

export default Timer;
