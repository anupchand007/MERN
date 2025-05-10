import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="border-2 p-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
