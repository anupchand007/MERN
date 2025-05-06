import React, { createContext, useContext } from "react";

/*
This is like a walkie-talkie that lets TodoForm and TodoItem talk to App.jsx.
Instead of passing addTodo, deleteTodo, etc., directly to every component, you use a “context” to share these functions.
App.jsx puts the functions and the todos list into the context (using TodoProvide).
TodoForm and TodoItem can grab these functions using useTodo.
*/

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export default TodoContext;

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvide = TodoContext.Provider;
