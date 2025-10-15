import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, signupRequest } from "../services/authApi.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [initializing, setInitializing] = useState(true); 
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setUser({ token });
    }
    setInitializing(false); 
  }, []);

  // Login function
  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await loginRequest(credentials); 
      localStorage.setItem("authToken", data.token); 
      setUser(data); 
      return data;
    } finally {
      setLoading(false);
    }
  };

  // Signup function
  const signup = async (payload) => {
    setLoading(true);
    try {
      const data = await signupRequest(payload);
      localStorage.setItem("authToken", data.token);
      setUser(data);
      return data;
    } finally {
      setLoading(false);
    }
  };


  
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, initializing, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
