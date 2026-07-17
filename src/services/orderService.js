import api from "../api/apiClient";

export const placeOrder = (order) =>
    api.post("/orders", order).then(res => res.data);

export const getOrders = (userId) =>
    api.get(`/orders/user/${userId}`).then(res => res.data);

export const getAllOrders = () =>
    api.get("/orders").then(res => res.data);

export const updateOrderStatus = (id, status) =>
    api.put(`/orders/${id}?status=${status}`).then(res => res.data);