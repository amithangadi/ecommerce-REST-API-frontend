import api from "../api/apiClient";

export const getWishlist = async (userId) => {
    const response = await api.get(`/wishlists/${userId}`);
    return response.data;
};

export const addToWishlist = async (wishlist) => {
    const response = await api.post("/wishlists", wishlist);
    return response.data;
};

export const removeFromWishlist = async (id) => {
    const response = await api.delete(`/wishlists/${id}`);
    return response.data;
};