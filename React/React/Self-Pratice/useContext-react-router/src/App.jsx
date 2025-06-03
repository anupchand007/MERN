import React from "react";
import UserProvider from "./Context/User/UserProvider";
import Login from "./Components/Login";
import Display from "./Components/Display";
// import AuthProvider from "./Context/AuthProvider";
// import Home from "./Components/Home";

function App() {
    return (
        // <AuthProvider>
        //     <Home />
        // </AuthProvider>

        <UserProvider>
            <Login/>
            <Display/>
        </UserProvider>



    );
}

export default App;
