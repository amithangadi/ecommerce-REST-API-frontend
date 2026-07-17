import api from "../api/apiClient";

export const getWishlist = (userId) =>
    api.get(`/wishlists/${userId}`).then(res => res.data);

export const addWishlist = (wishlist) =>
    api.post("/wishlists", wishlist).then(res => res.data);

export const removeWishlist = (id) =>
    api.delete(`/wishlists/${id}`);