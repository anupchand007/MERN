import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  const checkAuth = useCallback(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loader) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Loading...</h1>
      </div>
    );
  }

  return children;
}

export default React.memo(Protected);
