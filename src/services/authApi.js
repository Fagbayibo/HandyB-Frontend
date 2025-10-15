// import api from "./api.js";

import api from "./api";

// Health
export async function checkHealth() {
  try {
    const { data } = await api.get("health");
    return data;
  } catch (err) {
    const message = err.response?.data || err.message || "Health check failed";
    throw new Error(
      typeof message === "string" ? message : JSON.stringify(message)
    );
  }
}

export async function signupRequest(payload) {
  try {
    const { data } = await api.post("auth/register-user", payload);
    return data;
  } catch (err) {
    const message =
      err.response?.data?.message || err.message || "Signup Failed";
    throw new Error(
      typeof message === "string" ? message : JSON.stringify(message)
    );
  }
}

export async function emailOtpRequest(otpPayload) {
  try {
    const { data } = await api.post("auth/verify-otp", otpPayload);
    return data;
  } catch (err) {
    const message =
      err.response?.data || err.message || "Email OTP Verification Failed";
    throw new Error(
      typeof message === "string" ? message : JSON.stringify(message)
    );
  }
}
export async function loginRequest({ phone, password }) {
  // When using real backend:
  // const { data } = await api.post("/auth/login", { email, password });
  // return data;

  // Fake Response
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        id: Date.now(),
        name: "DemoUser",
        phone,
        password,
        token: "demo.jwt.token",
      };
      localStorage.setItem("authToken", user.token);
      resolve(user);
    }, 800);
  });
}
