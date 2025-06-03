import { NavLink } from "react-router-dom";
import list from "../assets/list.svg";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Slice/ThemeSlice";

const Navbar = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  const dispacher = useDispatch()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const getLinkClass = ({ isActive }) => {
  return `cursor-pointer transition-colors duration-300 ${
    isActive 
      ? "text-red-700 dark:text-blue-500" 
      : "text-gray-500 dark:text-amber-400"
  }`;
};

  return (
    <div className="h-30 w-screen">
      <div>
        <ul
          className=" flex justify-between items-center p-3 text-3xl font-bold transition duration-300 ease 
        "
        >
          <li>
            <NavLink
              to="/"
            >
              <img src={list} alt="" height="60" width="60" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todos"
              className={getLinkClass }
            >
              View Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addtodos"
              className={getLinkClass}
            >
              Add Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={getLinkClass}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toggle"
              className={getLinkClass}
            >
              Toggle
            </NavLink>
          </li>
          <li>
            <button to="/" onClick={() => dispacher(toggleTheme())} className="cursor-pointer">
              {isDark ? (
                <img src={light} alt="" height="60" width="60" />
              ) : (
                <img src={dark} alt="" height="60" width="60" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

