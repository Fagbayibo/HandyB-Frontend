import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, signupRequest } from "../services/authApi.js";

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 3. On mount, check for saved token
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setUser({ token }); // Optional: fetch user profile here
    }
  }, []);

  // 4. Login function
  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await loginRequest(credentials);
      localStorage.setItem("authToken", data.token); // save token
      setUser(data);
      return data;
    } finally {
      setLoading(false);
    }
  };

  // 5. Signup function
  const signup = async (payload) => {
    setLoading(true);
    try {
      const data = await signupRequest(payload);
      localStorage.setItem("authToken", data.token); // save token
      setUser(data);
      return data;
    } finally {
      setLoading(false);
    }
  };

  // 6. Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  // 7. Provide everything to children
  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 8. Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
