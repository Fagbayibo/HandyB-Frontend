import axios from "axios";

// ✅ Base URL comes directly from environment
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// ✅ Attach token if available
api.interceptors.request.use((config) => {

  return config;
});

export default api;
