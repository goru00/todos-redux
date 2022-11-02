import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, checkedTodo } from "../store/todos/actions-todo";
import { selectVisibleTodos } from "../store/todos/selectors-todo";
import { selectActiveFilter } from "../store/filters/selectors-filter";

const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul className="todoList" align="left">
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type={"checkbox"}
            checked={todo.completed}
            onChange={() => dispatch(checkedTodo(todo.id))}
          />{" "}
          {todo.title}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
