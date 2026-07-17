import api from "../api/apiClient";

export const getCart = async (userId) => {
    const response = await api.get(`/carts/${userId}`);
    return response.data;
};

export const addToCart = async (cartData) => {
    const response = await api.post("/carts", cartData);
    return response.data;
};

export const removeFromCart = async (cartId) => {
    const response = await api.delete(`/carts/item/${cartId}`);
    return response.data;
};

export const clearCart = async (userId) => {
    const response = await api.delete(`/carts/clear/${userId}`);
    return response.data;
};