import { useQuery } from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";

import { getUsers } from "../../services/adminUserService";

function Users() {

    const {
        data: users = [],
        isLoading,
        error
    } = useQuery({

        queryKey: ["users"],

        queryFn: getUsers

    });


    if (isLoading) {

        return (

            <AdminLayout>

                <div className="p-6">

                    <h1 className="text-3xl font-bold mb-6">
                        Users
                    </h1>

                    <p className="text-gray-500">
                        Loading users...
                    </p>

                </div>

            </AdminLayout>

        );

    }


    if (error) {

        return (

            <AdminLayout>

                <div className="p-6">

                    <h1 className="text-3xl font-bold mb-6">
                        Users
                    </h1>

                    <p className="text-red-500">
                        Failed to load users.
                    </p>

                </div>

            </AdminLayout>

        );

    }


    return (

        <AdminLayout>

            <div>

                {/* Header */}

                <div className="mb-6">

                    <h1 className="text-3xl font-bold">
                        Users
                    </h1>

                    <p className="text-gray-500 mt-1">
                        View all registered users
                    </p>

                </div>


                {/* User Count */}

                <div className="bg-white shadow rounded-xl p-5 mb-6">

                    <p className="text-gray-500">
                        Total Registered Users
                    </p>

                    <h2 className="text-3xl font-bold text-blue-600 mt-1">
                        {users.length}
                    </h2>

                </div>


                {/* Users Table */}

                <div className="bg-white shadow rounded-xl overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="text-left p-4">
                                    ID
                                </th>

                                <th className="text-left p-4">
                                    Name
                                </th>

                                <th className="text-left p-4">
                                    Email
                                </th>

                                <th className="text-left p-4">
                                    Mobile
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {users.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center p-10 text-gray-500"
                                    >
                                        No registered users found.
                                    </td>

                                </tr>

                            ) : (

                                users.map((user) => (

                                    <tr
                                        key={user.id}
                                        className="border-t hover:bg-gray-50"
                                    >

                                        <td className="p-4">
                                            {user.id}
                                        </td>

                                        <td className="p-4 font-medium">
                                            {user.name}
                                        </td>

                                        <td className="p-4">
                                            {user.email}
                                        </td>

                                        <td className="p-4">
                                            {user.mobile || "Not Provided"}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </AdminLayout>

    );

}

export default Users;