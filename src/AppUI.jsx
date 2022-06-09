import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButton } from "./TodoButton";

const AppUI = () => {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
          <>
            {error && <p>Error!</p>}
            {loading && <p>Cargando...</p>}
            {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

            <TodoList
              todos={searchedTodos}
              onComplete={completeTodo}
              onDelete={deleteTodo}
            />
          </>
        )}
      </TodoContext.Consumer>

      <TodoButton />
    </>
  );
};

export default AppUI;
