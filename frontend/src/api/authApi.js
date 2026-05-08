// src/api/authApi.js
import axiosInstance from "./axiosInstance";

// Login with email + password → returns token + admin data
export const loginAdmin = async (email, password) => {
  const response = await axiosInstance.post("/auth/login", { email, password });
  return response.data;
};

// Get current admin info (verify token is still valid)
export const getMe = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};
