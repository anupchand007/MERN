import React from "react";
import { addTodo, removeTodo } from "../Slice/AddTodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatcher = useDispatch();

  const handelAdd = () => {
    if(input.trim()){
      dispatcher(addTodo(input));
      setInput("")
    }
  }

  return (
    <div>
      <h1>Add your tasks</h1>
      <h2>You Current Todos are</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatcher(removeTodo(todo.id))}>X</button>
        </li>
        ))}
      </ul>
        
      <input type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter your Todos" />
      <button onClick={handelAdd}>Add Todo</button>
    </div>
  );
};

export default Todo;
 