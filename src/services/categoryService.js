import api from "../api/apiClient";

export const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
};