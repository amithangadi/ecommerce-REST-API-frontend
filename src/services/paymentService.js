import api from "../api/apiClient";

export const createOrder = async (amount) => {

    const response = await api.post(
        `/payments/create-order?amount=${amount}`
    );

    return response.data;
};