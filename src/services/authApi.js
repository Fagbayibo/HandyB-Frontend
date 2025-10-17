// import api from "./api.js";

import api from "./api";

// Health
export async function checkHealth() {
  try {
    const { data } = await api.get("/health");
    return data;
  } catch (err) {
    const message = err.response?.data || err.message || "Health check failed";
    throw new Error(typeof message === "string" ? message : JSON.stringify(message));
  }
}

// User Session
export async function getMe() {
  try {
    const { data } = await api.get("/auth/getMe"); // cookies sent via withCredentials:true
    return data;
  } catch (error) {
    console.error("Error fetching current User", error);
    return null;
  }
}

export async function signupRequest(payload) {
  try {
    const { data } = await api.post("/auth/register-user", payload);
    return data; // server should set HttpOnly cookie
  } catch (err) {
    console.error("Signup Request error:", err);
    if (err.code === "ECONNABORTED" || /timeout/i.test(err.message || "")) {
      throw new Error("Network error. Please check your internet connection and try again.");
    }
    if (!err.response) {
      throw new Error("Network Error. Please check your internet connection and try again");
    }
    const body = err.response.data;
    const message =
      (body && (body.message || body.error)) ||
      `Request failed (${err.response.status}). Please try again.`;
    throw new Error(message);
  }
}

export async function emailOtpRequest(otpPayload) {
  try {
    const { data } = await api.post("/auth/verify-otp", otpPayload);
    return data;
  } catch (err) {
    const message = err.response?.data || err.message || "Email OTP Verification Failed";
    throw new Error(typeof message === "string" ? message : JSON.stringify(message));
  }
}

export async function loginRequest(credentials) {
  try {
    const { data } = await api.post("/auth/login-user", credentials); // cookie set by server
    return data;
  } catch (err) {
    console.error("Login Request error:", err);

    // Timeouts / network
    if (err.code === "ECONNABORTED" || /timeout/i.test(err.message || "")) {
      throw new Error("Network error. Please check your internet connection and try again.");
    }
    if (!err.response) {
      throw new Error("Network Error. Please check your internet connection and try again");
    }

    const { status, data: body } = err.response || {};
    const rawMessage = (body && (body.message || body.error)) || "";
    const msgLc = String(rawMessage).toLowerCase();

    // Map "invalid credentials" / 401 to custom copy
    if (
      status === 401 ||
      (/invalid/.test(msgLc) && /credential|password|email/.test(msgLc)) ||
      /unauthori[sz]ed/.test(msgLc)
    ) {
      throw new Error("Account not found. Please sign up.");
    }

    const message = rawMessage || `Request failed (${status}). Please try again.`;
    throw new Error(message);
  }
}

export async function logoutRequest() {
  try {
    const { data } = await api.post("/auth/logout"); // clears cookie server-side
    return data;
  } catch (err) {
    console.error("Logout error:", err);
    return null;
  }
}
