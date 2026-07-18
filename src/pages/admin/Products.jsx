import AdminLayout from "../../components/admin/AdminLayout";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/adminProductService";

function Products() {

    const {
        data: products = [],
        isLoading,
        error
    } = useQuery({
        queryKey: ["admin-products"],
        queryFn: getAllProducts
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
                <h2>Error loading products.</h2>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Products
                </h1>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                    + Add Product
                </button>

            </div>

            <table className="w-full bg-white shadow rounded-lg">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-3">Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id} className="text-center border-t">

                            <td className="p-3">
                                <img
                                    src={product.imgUrl}
                                    alt={product.name}
                                    className="w-16 h-16 object-cover rounded"
                                />
                            </td>

                            <td>{product.name}</td>

                            <td>₹{product.price}</td>

                            <td>{product.stock}</td>

                            <td>{product.category?.name}</td>

                            <td className="space-x-2">

                                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                                    Edit
                                </button>

                                <button className="bg-red-600 text-white px-3 py-1 rounded">
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </AdminLayout>
    );
}

export default Products;