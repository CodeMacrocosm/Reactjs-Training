//jshint esversion:6

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://th.bing.com/th/id/OIP.BtYR1TQcYPO9624QxQqyzAHaFj?w=220&h=180&c=7&o=5&pid=1.7"
      />
      <img
        className="food-img"
        src="https://www.bing.com/th?id=AMMS_0ce9e56dbe3080081ce56169674ed1f6&w=197&h=118&c=7&rs=2&qlt=80&cdv=1&pid=16.1"
      />
      <img
        className="food-img"
        src="https://th.bing.com/th/id/OIP.lqxufrEv4pEeLioZrwCMqQHaEW?w=252&h=180&c=7&o=5&pid=1.7"
      />
    </div>
  </div>,
  document.getElementById("root")
);
