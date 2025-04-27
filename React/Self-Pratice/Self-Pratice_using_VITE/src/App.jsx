import React, { useState } from "react";
import "./App.css";

function Counter() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter === 5) {
      console.log(`You can go above count ${counter}`);
    } else {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter === 0) {
      console.log(`You can go below count ${counter}`);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h2>Current Value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>

      <footer>
        <span>Current Value: {counter}</span>
      </footer>
    </>
  );
}

export default Counter;
