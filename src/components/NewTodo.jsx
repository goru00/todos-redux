import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/actions-todo";

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} name="title" placeholder={"new todo"} />
      <button type={"submit"}>add</button>
    </form>
  );
};

export default NewTodo;
