import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButton } from "./TodoButton";

// const defTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  // Filtrado de todos, importante!
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {error && <p>Error!</p>}
      {loading && <p>Cargando...</p>}
      {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

      <TodoList
        todos={searchedTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
      />

      <TodoButton />
    </>
  );
}

export default App;
