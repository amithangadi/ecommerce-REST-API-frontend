import api from "../api/apiClient";

export const getCart = async () => {
    const response = await api.get("/cart");
    return response.data;
};

export const addToCart = async (id) => {
    const response = await api.post(`/cart/${id}`);
    return response.data;
};

export const removeFromCart = async (id) => {
    const response = await api.delete(`/cart/${id}`);
    return response.data;
};

export const updateQuantity = async (id, quantity) => {
    const response = await api.put(`/cart/${id}`, {
        quantity,
    });

    return response.data;
};