import React, { useContext, useState } from "react";
import UserContext from "../Context/User/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password, age})
  };

  return (
    <>
    <h2>Login</h2>
      <div className="flex flex-col border-2 text-amber-200 p-5">
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
};

export default Login;
