// import api from "./api.js";

export async function loginRequest({phone, password}) {
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

export async function signupRequest({name, email, phoneNumber, password}) {
  // const { data } = await api.post("/auth/signup", { name, email, password });
  // return data;

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        id: Date.now(),
        name,
        email,
        phoneNumber,
        password,
        token: "demo.jwt.token",
      };
      localStorage.setItem("authToken", user.token);
      resolve(user);
    }, 800);
  });
}
