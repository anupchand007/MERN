import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    console.log("Button Click");
    console.log({ isOn });

    setIsOn(!isOn);
  };
  return (
    <>
      {/* <div className="Navbar">
        <Navbar />
      </div>

      <div className="border-2 p-4">
        <Outlet />
      </div> */}

      <button
        className="isOn"
        style={{
          height: 50,
          width: 200,
          cursor: "pointer",
          padding: 50,
          display: "flex",
          justifyContent: isOn ? "flex-end" : "flex-start",
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: "green"
        }}
        onClick={toggle}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion .div
          className="toggle-handle"
          style={{
            width: 50,
            height: 50,
            backgroundColor: "rgb(66, 153, 225)",
            borderRadius: "50%",
          }}
          layout
          transition={
            {
              type: "spring",
              visualDuration:2,
              bounce: 1.2,
             }
          }
        />
      </button>
    </>
  );
}

export default App;
