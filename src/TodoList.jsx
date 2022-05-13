import React from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  </section>
);

export { TodoList };
