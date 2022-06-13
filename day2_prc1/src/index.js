import { sum, mult } from "./calc";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

console.log(sum(1, 3));

console.log(mult(2, 2));

const root = document.getElementById("root");

// ReactDOM.render(
//     "Hello React",  //what

//     root //where
// );

//OR

// const h1 = React.createElement("h1",{"className":"redtext",id:"uniqId"},"Hello world")

// ReactDOM.render(
//     h1,  //what

//     root //where
// );

//OR

// const h1 = React.createElement("h1", {}, "Hello h1");

// const p = React.createElement("p",
//  { className: "redtext", id: "uniqId" }, 
// //  h1   ); OR

// [h1,h1]);

// ReactDOM.render(
//   p, //what

//   root //where
// );

//OR

const h1 = React.createElement("h1", {}, "Hello h1");

const div = React.createElement("div",{},"hello div");

const img = React.createElement("img",{src:"../../../day1/assignment/src/todo.jpg"});
const toShow = true;  //try false also
const p = React.createElement("p",
 { className: "redtext", id: "uniqId" }, 
 h1 ,
 div,
 img ,
 "hi viraj",
 toShow ? img : null ); //termary  operator


ReactDOM.render(
  p, //what

  root //where
);


