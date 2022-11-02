import React from "react";
import { useSelector } from "react-redux";
import Filters from "./components/Filters";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { selectTodos } from "./store/todos/selectors-todo";

const App = () => {
  const state = useSelector(selectTodos);
  console.log(state);
  return (
    <div className="App" align="center">
      <h1>Todos</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
};

export default App;
