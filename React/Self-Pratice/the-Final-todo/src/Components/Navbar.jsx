import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import checkIcon from "../assets/check.png";


const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", JSON.stringify(!isDark));
  };

  useEffect(() => {
    const themeData = JSON.parse(localStorage.getItem("theme"));
    setIsDark(themeData);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div>
      <ul className="flex gap-5 items-center justify-between px-4 md:px-8 m-4 font-bold text-2xl mb-7">
        <li>
        <NavLink
          to="/home"
          className="hover:scale-110
          transition duration-200 ease-in-out"
          
        >
          <img src={checkIcon} alt="Todo Logo" />
        </NavLink>
        </li>
        <li>
          <NavLink
          to="/todos"
          className="hover:scale-110 transition duration-200 ease-in-out"
        >
          Todo List
        </NavLink>
        </li>
        <li> <NavLink to="/add"
        className="hover:scale-110 transition duration-200 ease-in-out">
          Add ToDo
        </NavLink> </li>
        <li> <NavLink to="/edit"
        className="hover:scale-110 transition duration-200 ease-in-out">
          Edit
        </NavLink> </li>
        <li> <NavLink to="/about"
        className="hover:scale-110 transition duration-200 ease-in-out">
          About
        </NavLink> </li>
        <button onClick={toggleTheme}
        className="hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
          {isDark ? (
            <img width="40" height="40"
              src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png"
              alt="Light Mode"
            />
          ) : (
            <img width="40" height="40"
              src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png"
              alt="Dark Mode"
            />
          )}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
