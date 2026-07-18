import AdminLayout from "../../components/admin/AdminLayout";

function Dashboard() {

    return (

        <AdminLayout>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-gray-500">
                        Products
                    </h3>

                    <p className="text-3xl font-bold mt-3">
                        0
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-gray-500">
                        Orders
                    </h3>

                    <p className="text-3xl font-bold mt-3">
                        0
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-gray-500">
                        Users
                    </h3>

                    <p className="text-3xl font-bold mt-3">
                        0
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-gray-500">
                        Revenue
                    </h3>

                    <p className="text-3xl font-bold mt-3">
                        ₹0
                    </p>

                </div>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;