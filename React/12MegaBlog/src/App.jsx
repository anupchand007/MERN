import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "../src/appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Header , Footer } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
  let isMounted = true;

  authService
    .getCurrentUser()
    .then((userData) => {
      if (isMounted) {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      }
    })
    .finally(() => {
      if (isMounted) setLoading(false);
    });

  return () => {
    isMounted = false;
  };
}, []);


  console.log("Data Loaded");
  

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block border text-white">
          <Header />
          <main>
          Todo:  <Outlet/>
          </main>
          <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
