import React from "react";
import "./TodoButton.css";

function TodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <div className="TodoButton">
      <button onClick={() => onClickButton('test')}>+</button>
    </div>
  );
}

export { TodoButton };
