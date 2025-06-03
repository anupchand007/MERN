import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div
        className="text-4xl text-fuchsia-400 h-200 mt-10 w-screen
      flex justify-center items-center "
      >
        This is a Simple HomePage or Landing Page
      </div>
    </>
  );
};

export default Home;
