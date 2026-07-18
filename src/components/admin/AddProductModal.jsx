import { useState } from "react";

function AddProductModal({ onClose, onSave, product }) {

    const [formData, setFormData] = useState(
    product || {
        name: "",
        description: "",
        price: "",
        stock: "",
        imgUrl: "",
        category: {
            id: ""
        }
     }
  );

    const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "categoryId") {

        setFormData({
            ...formData,
            category: {
                id: Number(value)
            }
        });

    } else {

        setFormData({
            ...formData,
            [name]: value
        });

    }
};

   const handleSubmit = (e) => {

    e.preventDefault();

    onSave(formData);

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
                        value={formData.name}
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="price"
                        type="number"
                        placeholder="Price"
                        value={formData.price}
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="stock"
                        type="number"
                        placeholder="Stock"
                        value={formData.stock}
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="imgUrl"
                        placeholder="Image URL"
                        value={formData.imgUrl}
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                    />

                    <input
                        name="categoryId"
                        type="number"
                        placeholder="Category Id"
                        value={formData.category?.id || ""}
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