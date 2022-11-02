import { ADD_TODO, CHECKED_TODO, REMOVE_TODO } from "./const-todo";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false
        }
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case CHECKED_TODO: {
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};
