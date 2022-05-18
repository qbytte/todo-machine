import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h2 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h2>
  );
}

export { TodoCounter };
