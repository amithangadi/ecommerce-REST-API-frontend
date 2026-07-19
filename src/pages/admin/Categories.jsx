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

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const categoriesPerPage = 5;

    const [category, setCategory] = useState({
        name: "",
        description: ""
    });

    const {
        data: categories = [],
        isLoading,
        error
    } = useQuery({
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

    // Search

    const filteredCategories = categories.filter((cat) =>
        cat.name.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination

    const lastIndex = currentPage * categoriesPerPage;
    const firstIndex = lastIndex - categoriesPerPage;

    const currentCategories = filteredCategories.slice(
        firstIndex,
        lastIndex
    );

    const totalPages = Math.ceil(
        filteredCategories.length / categoriesPerPage
    );

    return (

        <AdminLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Categories
                </h1>

            </div>

            {/* Add Category */}

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

            {/* Search */}

            <div className="mb-6">

                <input
                    type="text"
                    placeholder="Search Category..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="border rounded-lg px-4 py-2 w-80"
                />

            </div>

            {/* Table */}

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

                    {currentCategories.length === 0 ? (

                        <tr>

                            <td
                                colSpan="4"
                                className="text-center py-6"
                            >
                                No Categories Found
                            </td>

                        </tr>

                    ) : (

                        currentCategories.map((cat) => (

                            <tr
                                key={cat.id}
                                className="border-t text-center"
                            >

                                <td className="p-3">
                                    {cat.id}
                                </td>

                                <td>
                                    {cat.name}
                                </td>

                                <td>
                                    {cat.description}
                                </td>

                                <td>

                                    <button

                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"

                                        onClick={() => {

                                            if (
                                                window.confirm(
                                                    "Delete this category?"
                                                )
                                            ) {

                                                deleteMutation.mutate(cat.id);

                                            }

                                        }}

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

            {/* Pagination */}

            <div className="flex justify-center items-center gap-4 mt-8">

                <button

                    disabled={currentPage === 1}

                    onClick={() =>
                        setCurrentPage((prev) => prev - 1)
                    }

                    className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"

                >

                    Previous

                </button>

                <span>

                    Page {currentPage} of {totalPages || 1}

                </span>

                <button

                    disabled={currentPage === totalPages || totalPages === 0}

                    onClick={() =>
                        setCurrentPage((prev) => prev + 1)
                    }

                    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"

                >

                    Next

                </button>

            </div>

        </AdminLayout>

    );

}

export default Categories;

