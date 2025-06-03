import React, { useContext } from "react";
import UserContext from "../Context/User/UserContext";

const Display = () => {
  const { user } = useContext(UserContext);

  if (!user.isLoggedIn === false) {
    return <div>Please Login First</div>;
  } else {
    return <div>Welcome User {user.username} with password {user.password}, age {user.age}</div>;
  }
};

export default Display;
