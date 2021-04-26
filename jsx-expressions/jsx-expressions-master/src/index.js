//jshint esversion:6

import React from "react";
import ReactDOM from "react-dom";

const name = "Shreya";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
