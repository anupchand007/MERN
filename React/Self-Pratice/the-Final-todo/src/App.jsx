// import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container min-h-screen pt-8 px-6">
        <Outlet />
      </div>
    </>
  );
}

export default App;
