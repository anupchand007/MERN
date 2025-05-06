import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState(""); //input area

  function handleInputChange(t) {
    setInputTodo(t.target.value);
  }

  function addInputTodo() {
    if (inputTodo.trim() !== "") {
      setTodos((prev) => [...prev, inputTodo]);
      setInputTodo(""); //to reset the value
    }
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    
    /**
    todos.filter() → it loops through all items in the todos list.
     
    (_, i) → here _ means we don’t care about the value, and i is the position (index) of each item.
    
    i !== index → it keeps only those items whose position is not equal to the one we clicked (the one we want to delete). 
    
    **/
    
    setTodos(updatedTodos);

  }

  return (
    <>
      <div className="w-screen h-screen  flex justify-center flex-col items-center ">
        <h1 className=" border-none rounded-full bg-cyan-800 border-2 w-6xl h-24 flex justify-center flex-col items-center">
          Welcome to Your Personal Todo List
        </h1>
        <br />
        <br />
        <div className="p-10 w-6xl flex gap-2">
          <input
            type="text"
            placeholder="Enter your todo activity"
            className="bg-gray-500 w-4xl p-5 rounded-4xl"
            onChange={handleInputChange}
          />
          <button
            style={{
              backgroundColor: "green",
              color: "White",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={addInputTodo}
          >
            Add to Todo
          </button>
        </div>
        <div className="flex w-6xl h-2/3 justify-center">
          <ol className="text-amber-50" type="1">
            {todos.map((todo, index) => (
              <li
                key={index}
                className=" w-lvh m-1 flex overflow-hidden flex-wrap wrap-normal justify-around items-center gap-2 "
              >
                <span className="w-lg ">{todo}</span>
                <button onClick={() => deleteTodo(index)}>❌</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
