import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "div",
  { id: "title", className: "app-title" },
  "this is first app"
);

ReactDOM.render(element, document.getElementById("root"));
