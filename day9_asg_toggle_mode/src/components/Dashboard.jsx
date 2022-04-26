import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Cards from "./Cards";
import "./dashboard.css";

const Dashboard = ({ isDarkMode }) => {
   const { toggleTheme } = useContext(ThemeContext);

   return (
      <div className={isDarkMode === false ? "dash" : "darkDash"}>
         <div className="heading">
            <h1>My Dashboard</h1>
            <div className="headingToggle">
               <span className="sub">Dark Mode</span>
               <label className="switch">
                  <input type="checkbox" onChange={() => toggleTheme()} />
                  <span className="slider round"></span>
               </label>
            </div>
         </div>
         <div  className={isDarkMode === false ? "cardDiv" : "darkCardDiv"}>
            <div className="upperDiv">
               <h3>Active Users</h3>
               <p>for March 2021</p>
            </div>
            <div>
               <Cards
                  isDarkMode={isDarkMode}
                  image={
                     "https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE="
                  }
                  name={"Viraj Gupta"}
                  level={10}
                  points={7580}
               />
               <Cards
                  isDarkMode={isDarkMode}
                  image={
                     "https://media.istockphoto.com/photos/portrait-of-creative-trendy-black-african-male-designer-laughing-picture-id1296158947?b=1&k=20&m=1296158947&s=170667a&w=0&h=pOf6oJhzvXIQQ0cUboaP14VkiOLMtSryYALafrQpva4="
                  }
                  name={"Arun Wagh"}
                  level={14}
                  points={3500}
               />
               <Cards
                  isDarkMode={isDarkMode}
                  image={
                     "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="
                  }
                  name={"Anand Parmar"}
                  level={16}
                  points={4520}
               />
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
