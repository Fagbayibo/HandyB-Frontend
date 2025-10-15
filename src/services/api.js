import axios from "axios";

// ✅ Automatically switch base URL based on environment
const isLocal = window.location.hostname === "localhost";

export const BASE_URL = isLocal
  ? "http://localhost:5001/api/v1/" // local backend
  : "https://handy-backend-ftsz.onrender.com/api/v1/"; // deployed backend

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// ✅ Interceptors (for tokens, logging)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
