import React, { useState } from "react";

const Addtodo = () => {
  const [addTodo] = useState()
  return (
    <div className="flex flex-col justify-evenly gap-4 items-center h-1/2   p-15 m-0 box-border">
      <input
        className=" h-16 p-5 border-2 rounded-2xl w-2xs dark:text-amber-300"
        type="text"
        name="todos"
        placeholder="Enter your todos"
      />
      <button
      onClick={addTodo}
        className="rounded-2xl "
        style={{ backgroundColor: "green", padding: "10px" }}
      >
        Add the Todo
      </button>
    </div>
  );
};

export default Addtodo;
