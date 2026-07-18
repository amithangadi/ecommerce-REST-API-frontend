import { useState } from "react";

function AddProductModal({ onClose, onSave }) {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        imgUrl: "",
        category: {
            id: ""
        }
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "categoryId") {

            setProduct({
                ...product,
                category: {
                    id: Number(value)
                }
            });

        } else {

            setProduct({
                ...product,
                [name]: value
            });

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(product);

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white w-[500px] rounded-xl p-6">

                <h2 className="text-2xl font-bold mb-6">

                    Add Product

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        name="name"
                        placeholder="Product Name"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="price"
                        type="number"
                        placeholder="Price"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="stock"
                        type="number"
                        placeholder="Stock"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="imgUrl"
                        placeholder="Image URL"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="categoryId"
                        type="number"
                        placeholder="Category Id"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <div className="flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 border rounded"
                        >
                            Cancel
                        </button>

                        <button
                            className="bg-blue-600 text-white px-5 py-2 rounded"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddProductModal;