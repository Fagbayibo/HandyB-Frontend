import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const VerificationGuard = ({ children }) => {
  const { user, initializing } = useAuth();

  if (initializing) return null; 
  if (!user?.isVerified) return <Navigate to="/login" replace />;
  return children;
};

export default VerificationGuard;
