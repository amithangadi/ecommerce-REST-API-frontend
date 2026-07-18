import api from "../api/apiClient";

export const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
};

export const addCategory = async (category) => {
    const response = await api.post("/categories", category);
    return response.data;
};

export const deleteCategory = async (id) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
};