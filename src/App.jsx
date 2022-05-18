import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButton } from "./TodoButton";
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList todos={todos} />

      <TodoButton />
    </>
  );
}

export default App;
