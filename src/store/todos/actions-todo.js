import { ADD_TODO, CHECKED_TODO, REMOVE_TODO } from "./const-todo";

export const addTodo = (title) => ({
  type: ADD_TODO,
  title: title
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

export const checkedTodo = (id) => ({
  type: CHECKED_TODO,
  id: id
});
