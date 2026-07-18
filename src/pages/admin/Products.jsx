import { useState } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";
import AddProductModal from "../../components/admin/AddProductModal";

import { deleteProduct } from "../../services/adminProductService";

import {
    getAllProducts,
    addProduct,
    updateProduct
} from "../../services/adminProductService";

function Products() {

    //STATE
    const [open, setOpen] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);

    //QUERY CLIENT
    const queryClient = useQueryClient();

const addMutation = useMutation({

    mutationFn: addProduct,

    onSuccess: () => {

        queryClient.invalidateQueries({
            queryKey: ["admin-products"]
        });

        setOpen(false);

        alert("Product Added Successfully");

    }

});

    const updateMutation = useMutation({

    mutationFn: ({ id, product }) =>
        updateProduct(id, product),

    onSuccess: () => {

        queryClient.invalidateQueries({
            queryKey:["admin-products"]
        });

        setOpen(false);

        setSelectedProduct(null);

        alert("Product Updated");

    }

});

        const deleteMutation = useMutation({
            mutationFn: deleteProduct,
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey:["admin-products"]
                });
                alert("Product Deleted");
            }
        });

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

                <h1 className="text-3xl font-bold text-red-600">
                PRODUCTS PAGE UPDATED
                </h1>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
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

                                <button
                                onClick={() => {
                                    setSelectedProduct(product);
                                    setOpen(true);
                                }}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>

                                <button
                                className="bg-red-600 text-white px-3 py-1 rounded"
                                onClick={() => {
                                    if(window.confirm("Delete this product?")){
                                        deleteMutation.mutate(product.id);
                                    }
                                }}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            {
            open && (
            <AddProductModal
                product={selectedProduct}
                onClose={() => {
                    setOpen(false);
                    setSelectedProduct(null);
                }}

                onSave={(data) => {
                    if (selectedProduct) {
                        updateMutation.mutate({
                            id:selectedProduct.id,
                            product:data
                        });
                } else {

            addMutation.mutate(data);

                }
            }}
        />
            )}

        </AdminLayout>
    );
}

export default Products;