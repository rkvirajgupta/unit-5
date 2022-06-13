
import { sum, mult } from "./calc";

import "./index.css";

console.log(sum(1,3));

console.log(mult(2,2));


const root = document.getElementById("root");

const h1 = document.createElement("h1");

h1.innerText = "Hello World";

h1.classList.add("redtext");

// h1.setAttribute("class","redtext")  //line 15 work same as line 17

// root.append(h1);
root.appendChild(h1);

//npm i css-loader style-loader
//npm i webpack webpack-cli