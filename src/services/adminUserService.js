import api from "../api/apiClient";

export const getUsers = () =>
    api.get("/users").then((res) => res.data);