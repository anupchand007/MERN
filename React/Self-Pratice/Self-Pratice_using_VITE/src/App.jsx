import React, { useState } from "react";
import "./App.css";

// function Counter() {
//   let [counter, setCounter] = useState(5);

//   const addValue = () => {
//     if (counter === 5) {
//       console.log(`You can go above count ${counter}`);
//     } else {
//       setCounter(counter + 1);
//     }
//   };
//   const removeValue = () => {
//     if (counter === 0) {
//       console.log(`You can go below count ${counter}`);
//     } else {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h2>Current Value: {counter}</h2>
//         <button onClick={addValue}>Add Value</button>
//         <button onClick={removeValue}>Remove Value</button>
//       </div>

//       <footer>
//         <span>Current Value: {counter}</span>
//       </footer>
//     </>
//   );
// }

// export default Counter;

function SwitchColor() {
  let [color, setColor] = useState("skyblue");

  return (
    <div
      id="background"
      className="flex justify-center items-center bg-gray-800 w-screen h-screen px-5 py-5"
      style={{backgroundColor: color}}
    >
      <div
        id="buttonBar"
        className="border-none h-20 w-7xl rounded-4xl px-10 py-5 flex flex-wrap gap-2.5 justify-evenly"
      >

        <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600 hover:bg-amber-400"
          style={{backgroundColor: "White"}}
          onClick={() => setColor("White")}
        >White
        </button>

        <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
          style={{backgroundColor: "Gray"}}
          onClick={() => setColor("Gray")}
        >Gray
        </button>

        <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
          style={{backgroundColor: "Purple"}}
          onClick={() => setColor("Purple")}
        >Purple
        </button>
        
        <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
          style={{backgroundColor: "Lavender"}}
          onClick={() => setColor("Lavender")}
        >Lavender
        </button>

        <button className="text-black px-4 py-2 rounded-full border-none flex justify-center items-center hover:text-amber-600"
          style={{backgroundColor: "Indigo"}}
          onClick={() => setColor("Indigo")}
        >Indigo
        </button>

      </div>
    </div>
  );
}

export default SwitchColor;
