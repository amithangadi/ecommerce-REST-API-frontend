import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FaBox, FaShoppingBag } from "react-icons/fa";

import { getOrders } from "../../services/orderService";

function Orders() {

    const navigate = useNavigate();

    // Temporary user ID
    const userId = 1;

    const {
        data: orders = [],
        isLoading,
        error
    } = useQuery({
        queryKey: ["user-orders", userId],
        queryFn: () => getOrders(userId)
    });

    // Loading
    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">

                <h2 className="text-xl font-semibold">
                    Loading your orders...
                </h2>

            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">

                <div className="text-center">

                    <h2 className="text-2xl font-bold text-red-600">
                        Failed to load orders
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Please try again later.
                    </p>

                </div>

            </div>
        );
    }

    return (

        <div className="max-w-6xl mx-auto px-6 py-10">

            {/* Header */}

            <div className="flex items-center gap-3 mb-8">

                <FaBox className="text-blue-600 text-3xl" />

                <h1 className="text-4xl font-bold">
                    My Orders
                </h1>

            </div>


            {/* No Orders */}

            {orders.length === 0 ? (

                <div className="bg-white shadow-lg rounded-2xl p-12 text-center">

                    <FaShoppingBag
                        className="text-gray-300 text-6xl mx-auto mb-5"
                    />

                    <h2 className="text-2xl font-bold">
                        No Orders Yet
                    </h2>

                    <p className="text-gray-500 mt-2">
                        You haven't placed any orders yet.
                    </p>

                    <button
                        onClick={() => navigate("/products")}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                    >
                        Start Shopping
                    </button>

                </div>

            ) : (

                /* Orders */

                <div className="space-y-6">

                    {orders.map((order) => (

                        <div
                            key={order.id}
                            className="bg-white shadow-lg rounded-2xl p-6"
                        >

                            {/* Order Header */}

                            <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Order ID
                                    </p>

                                    <h3 className="text-lg font-bold">
                                        #{order.id}
                                    </h3>

                                </div>


                                {/* Status */}

                                <span
                                    className={`mt-3 md:mt-0 px-4 py-2 rounded-full text-sm font-semibold ${
                                        order.status === "DELIVERED"
                                            ? "bg-green-100 text-green-700"
                                            : order.status === "SHIPPED"
                                            ? "bg-blue-100 text-blue-700"
                                            : order.status === "CANCELLED"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {order.status || "PENDING"}
                                </span>

                            </div>


                            {/* Product Details */}

                            <div className="flex flex-col sm:flex-row gap-5 mt-5">

                                {/* Product Image */}

                                <img
                                    src={order.product?.imgUrl}
                                    alt={order.product?.name || "Product"}
                                    className="w-28 h-28 object-cover rounded-xl border"
                                />


                                {/* Product Information */}

                                <div className="flex-1">

                                    <h2 className="text-xl font-bold">
                                        {order.product?.name}
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        {order.product?.description}
                                    </p>

                                    <p className="mt-3">

                                        Quantity:

                                        <span className="font-semibold ml-2">
                                            {order.quantity}
                                        </span>

                                    </p>

                                </div>


                                {/* Price */}

                                <div className="sm:text-right">

                                    <p className="text-gray-500">
                                        Total
                                    </p>

                                    <p className="text-2xl font-bold">
                                        ₹{Number(order.totalPrice || 0).toFixed(2)}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}

export default Orders;