import React from "react";
import { NavLink, Link } from "react-router-dom";

const navLinkActive =  (({isActive}) => isActive ? "text-lavender-600" : "text-red-400")

const Navbar = () => {
    return (
    <div
      className="flex justify-evenly gap-5 h-16 w-screen list-none text-4xl
      text-cyan-400 p-5 font-poppins"
    >
      <NavLink to="/" className={navLinkActive} >
        <span>Home</span>
      </NavLink>
      <NavLink to="/products" className={navLinkActive}>
        <span>Our Products</span>
      </NavLink>
      <NavLink to="/aboutus" className={navLinkActive}>
        <span>About Us</span>
      </NavLink>
      <NavLink to="/contactus" className={navLinkActive}>
        <span>Contact Us</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
