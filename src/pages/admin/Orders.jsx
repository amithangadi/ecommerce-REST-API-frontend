import { useState } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";

import {
    getOrders,
    updateOrderStatus
} from "../../services/adminOrderService";

function Orders() {

    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");

    const { data: orders = [], isLoading, error } = useQuery({
        queryKey: ["orders"],
        queryFn: getOrders
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, status }) =>
            updateOrderStatus(id, status),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"]
            });
        }
    });

    if (isLoading) {
        return (
            <AdminLayout>
                <h2>Loading...</h2>
            </AdminLayout>
        );
    }

    if (error) {
        return (
            <AdminLayout>
                <h2>Failed to load orders.</h2>
            </AdminLayout>
        );
    }

    const filteredOrders = orders.filter(order =>
        order.product?.name
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <AdminLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">

                    Orders

                </h1>

                <input
                    type="text"
                    placeholder="Search Product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-3 rounded w-72"
                />

            </div>

            <table className="w-full bg-white shadow rounded-lg">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-3">Order ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredOrders.map(order => (

                        <tr
                            key={order.id}
                            className="border-t text-center"
                        >

                            <td>{order.id}</td>

                            <td>{order.user?.name}</td>

                            <td>{order.product?.name}</td>

                            <td>{order.quantity}</td>

                            <td>₹{order.totalPrice}</td>

                            <td>{order.status}</td>

                            <td>

                                <select
                                    value={order.status}
                                    onChange={(e) =>
                                        updateMutation.mutate({
                                            id: order.id,
                                            status: e.target.value
                                        })
                                    }
                                    className="border rounded p-2"
                                >
                                    <option>PENDING</option>
                                    <option>SHIPPED</option>
                                    <option>DELIVERED</option>
                                    <option>CANCELLED</option>
                                </select>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </AdminLayout>

    );

}

export default Orders;