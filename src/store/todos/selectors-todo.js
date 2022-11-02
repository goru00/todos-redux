export const selectTodos = (state) => state.todos;

export const selectActiveTodos = (state) =>
  state.todos.filter((todo) => todo.completed === false);

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "completed": {
      return state.todos.filter((todo) => todo.completed);
    }
    case "active": {
      return state.todos.filter((todo) => !todo.completed);
    }
    case "all": {
      return state.todos;
    }
    default: {
      return state.todos;
    }
  }
};
