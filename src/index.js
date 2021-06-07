import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1 contentEditable="true" spellCheck="false">
      Hello World
    </h1>
    <ul>
      <li>My Age is 23</li>
      <li>I Love Being Creative</li>
      <li>I Want to develop to a whole new level</li>
    </ul>
    <img
      src="https://i.ytimg.com/vi/xWZeQBLV6q4/maxresdefault.jpg"
      alt="hello noodles"
    />
    <img
      src="https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg"
      alt="CHineese Noodles"
    />
  </div>,
  document.getElementById("root")
);
