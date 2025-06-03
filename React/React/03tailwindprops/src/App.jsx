// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  // let myObj = {
  //   username : "Anup Chand",
  //   age : 22
  // }

  // let newArray = [1,2,3,4,5]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username= "Chai aur code" btnText="Click ME"/>
      <Card username = 'anupchand'  /> 
    </>
  );
}

export default App;
