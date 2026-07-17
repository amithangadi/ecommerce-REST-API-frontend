import api from "../api/apiClient";

export const register = async (user) => {
  const response = await api.post("/users/register", user);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/users/login", credentials);
  return response.data;
};