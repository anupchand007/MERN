// import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
    <div className=" h-24 ">
      <Navbar />
    </div>
     <div className="mt-3">
     <Outlet />
     </div>
    </>
  );
}

export default App;
