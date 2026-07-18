import { useState } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";

import {
    getCategories,
    addCategory,
    deleteCategory
} from "../../services/adminCategoryService";

function Categories() {

    const queryClient = useQueryClient();

    const [category, setCategory] = useState({
        name: "",
        description: ""
    });

    const { data: categories = [], isLoading, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    });

    const addMutation = useMutation({
        mutationFn: addCategory,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            });

            setCategory({
                name: "",
                description: ""
            });

            alert("Category Added Successfully");

        }
    });

    const deleteMutation = useMutation({
        mutationFn: deleteCategory,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            });

            alert("Category Deleted");

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
                <h2>Failed to load categories.</h2>
            </AdminLayout>
        );
    }

    return (

        <AdminLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Categories
                </h1>

            </div>

            {/* Add Category Form */}

            <div className="bg-white shadow rounded-xl p-6 mb-8">

                <div className="space-y-4">

                    <input
                        name="name"
                        value={category.name}
                        onChange={(e) =>
                            setCategory({
                                ...category,
                                [e.target.name]: e.target.value
                            })
                        }
                        placeholder="Category Name"
                        className="w-full border p-3 rounded"
                    />

                    <textarea
                        name="description"
                        value={category.description}
                        onChange={(e) =>
                            setCategory({
                                ...category,
                                [e.target.name]: e.target.value
                            })
                        }
                        placeholder="Category Description"
                        rows="4"
                        className="w-full border p-3 rounded"
                    />

                    <button
                        onClick={() => addMutation.mutate(category)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Add Category
                    </button>

                </div>

            </div>

            {/* Category Table */}

            <table className="w-full bg-white shadow rounded-lg overflow-hidden">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-3">ID</th>

                        <th>Name</th>

                        <th>Description</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {categories.map((category) => (

                        <tr
                            key={category.id}
                            className="border-t text-center"
                        >

                            <td className="p-3">
                                {category.id}
                            </td>

                            <td>
                                {category.name}
                            </td>

                            <td>
                                {category.description}
                            </td>

                            <td>

                                <button

                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"

                                    onClick={() => {

                                        if (window.confirm("Delete this category?")) {

                                            deleteMutation.mutate(category.id);

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

        </AdminLayout>

    );

}

export default Categories;