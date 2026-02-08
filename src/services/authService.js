import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (userData) => {
  const res = await axios.post(`${API_URL}/signup`, userData);
  return res.data;
};

export const verifyEmail = async (token) => {
  const res = await axios.get(`${API_URL}/verify-email/${token}`);
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data.token) localStorage.setItem("token", res.data.token);
  return res.data;
};

export const forgotPassword = async (email) => {
  const res = await axios.post(`${API_URL}/forgot-password`, { email });
  return res.data;
};

export const resetPassword = async (token, password) => {
  const res = await axios.put(`${API_URL}/reset-password/${token}`, { password });
  return res.data;
};
