import AdminLayout from "../../components/admin/AdminLayout";
import { useQuery } from "@tanstack/react-query";

import {
    getProducts,
    getCategories,
    getOrders
} from "../../services/dashboardService";

function Dashboard() {

    const { data: products = [] } = useQuery({
        queryKey: ["dashboard-products"],
        queryFn: getProducts
    });

    const { data: categories = [] } = useQuery({
        queryKey: ["dashboard-categories"],
        queryFn: getCategories
    });

    const { data: orders = [] } = useQuery({
        queryKey: ["dashboard-orders"],
        queryFn: getOrders
    });

    const revenue = orders.reduce(
        (sum, order) => sum + order.totalPrice,
        0
    );

    return (

        <AdminLayout>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-blue-600 text-white rounded-xl p-6 shadow">

                    <h3>Total Products</h3>

                    <p className="text-4xl font-bold mt-4">
                        {products.length}
                    </p>

                </div>

                <div className="bg-green-600 text-white rounded-xl p-6 shadow">

                    <h3>Categories</h3>

                    <p className="text-4xl font-bold mt-4">
                        {categories.length}
                    </p>

                </div>

                <div className="bg-orange-500 text-white rounded-xl p-6 shadow">

                    <h3>Orders</h3>

                    <p className="text-4xl font-bold mt-4">
                        {orders.length}
                    </p>

                </div>

                <div className="bg-purple-600 text-white rounded-xl p-6 shadow">

                    <h3>Revenue</h3>

                    <p className="text-3xl font-bold mt-4">
                        ₹{revenue.toLocaleString()}
                    </p>

                </div>

            </div>

            <div className="bg-white rounded-xl shadow mt-10">

                <div className="p-5 border-b">

                    <h2 className="text-2xl font-bold">

                        Recent Orders

                    </h2>

                </div>

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-3">Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Total</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {orders.slice(0, 5).map(order => (

                            <tr
                                key={order.id}
                                className="text-center border-t"
                            >

                                <td>{order.id}</td>

                                <td>{order.user?.name}</td>

                                <td>{order.product?.name}</td>

                                <td>₹{order.totalPrice}</td>

                                <td>{order.status}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;