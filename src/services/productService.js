import api from "../api/apiClient";

export const getProducts = () =>
    api.get("/products").then(res => res.data);

export const getProduct = (id) =>
    api.get(`/products/${id}`).then(res => res.data);

export const searchProducts = (name) =>
    api.get(`/products/search/${name}`).then(res => res.data);

export const getCategoryProducts = (categoryId) =>
    api.get(`/products/category/${categoryId}`).then(res => res.data);

