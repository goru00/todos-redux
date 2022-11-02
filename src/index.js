import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { loadState, saveState } from "./store/localStorage";
import rootReducers from "./store/index";
const persistendState = loadState();

const store = createStore(rootReducers, persistendState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
