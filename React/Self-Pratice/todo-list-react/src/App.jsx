import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState(""); //input area
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  // Load todos from localStorage on mount
  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (storeTodos && storeTodos.length > 0) {
      setTodos(storeTodos);
    } else {
      console.log("Error Occured");
    }
  }, []);

  useEffect(() => {
    console.log("Saving to localStorage:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function clearTodos() {
    if (todos && todos.length > 0) {
      localStorage.clear();
      setTodos([]);
    }
  }

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode))
  }

  useEffect(()=>{
    if(isDarkMode){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    }else{
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])


  useEffect (()=> {
    const themeMode = localStorage.getItem('darkMode')
    if(themeMode){
      setIsDarkMode(JSON.parse(themeMode))
    }
  }, [])

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
                className=" w-lvh m-1 flex overflow-hidden flex-wrap wrap-normal justify-between items-center gap-2 border-2 bg-blue-700 p-5 "
              >
                <span className="w-lg ">{todo}</span>
                <button onClick={() => deleteTodo(index)}>❌</button>
              </li>
            ))}
          </ol>
        </div>
        <button onClick={clearTodos}>Clear All the Todos</button>

        <button className={isDarkMode ? "dark" : "light"}
        onClick={toggleMode}> {isDarkMode ? "☀️" : "🌑"}</button>
      </div>
    </>
  );
}

export default App;
