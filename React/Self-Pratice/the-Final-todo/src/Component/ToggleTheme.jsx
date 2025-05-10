import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Slice/ThemeSlice";

export const ToggleTheme = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispacher = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispacher(toggleTheme());
        }}
      >
        {isDark ? "Switch to ☀️" : "Switch to 🌑"}
      </button>
      ;
      <div>
        <input type="text" />
        <button>Click Me</button>
      </div>
      <div className="text-red-800 dark:text-green-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In expedita
        magnam inventore delectus. Aut suscipit quisquam voluptatibus quasi
        laboriosam qui tenetur possimus deleniti porro illo iusto voluptatum
        vero, mollitia ipsum?
      </div>
      
      <p className="text-gray-800 dark:text-gray-200">
        This text will change with theme
      </p>
      
      <h1 className="text-gray-900 dark:text-red-400">
        This heading will change with theme
      </h1>
      
      <a className="text-blue-600 dark:text-blue-400">
        This link will change with theme
      </a>
    </>
  );
};
