import api from "../api/apiClient";

export const createPayment = (amount) =>
    api.post(`/payments/create-order?amount=${amount}`)
       .then(res => res.data);