import React from "react";
import ReactDOM from "react-dom";

const fname = "Malogi";
const lname = "Shreya";
const num = "7";

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p> your lucky number is {Math.floor(Math.random() * 10)}</p>.
  </div>,

  document.getElementById("root")
);
