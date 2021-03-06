import React from "react";
import { TodoItem } from "../TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onComplete, onDelete }) => (
  <section className="TodoList">
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </section>
);

export { TodoList };
