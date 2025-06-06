import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "../src/appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Header, Footer } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const initializeAuth = useCallback(async () => {
    // Add a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (loading) {
        setError('Authentication timed out. Please refresh the page.');
        setLoading(false);
      }
    }, 10000); // 10 seconds timeout

    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (err) {
      console.error('Auth initialization failed:', err);
      setError(err.message || 'Authentication failed. Please check your configuration.');
      dispatch(logout());
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [dispatch, loading]);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="text-xl font-bold mb-2">Loading...</div>
          <div className="text-sm text-gray-500">Initializing application</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="text-red-500 font-bold mb-2">Error</div>
          <div className="text-red-500">{error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block border text-white">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
