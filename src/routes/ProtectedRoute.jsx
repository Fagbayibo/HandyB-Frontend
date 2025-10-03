import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, initializing } = useAuth();
  if (initializing) return null;
  return user ? children : <Navigate to="/login" replace />;
}
