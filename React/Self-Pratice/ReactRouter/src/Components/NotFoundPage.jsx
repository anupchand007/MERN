import React from "react";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return <div>
    404 Not Found Please Check the URL
    <br />
    <Link to='/'>Home Form Link</Link>
    </div>;
};

export default NotFoundPage;
