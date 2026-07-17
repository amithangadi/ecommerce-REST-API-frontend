import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../services/cartService";
import toast from "react-hot-toast";

function ProductCard({ product }) {

    // Add this here 👇
    const mutation = useMutation({
        mutationFn: addToCart,

        onSuccess: () => {
            toast.success("Added to cart");
        },

        onError: () => {
            toast.error("Failed to add item");
        }
    });
    
     return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">

            <img
                src={product.imgUrl}
                alt={product.name}
                className="h-60 w-full object-cover"
            />

            <div className="p-5">

                <p className="text-gray-500">
                    {product.category?.name}
                </p>

                <h2 className="text-xl font-bold mt-2">
                    {product.name}
                </h2>

                <p className="text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex justify-between mt-4">
                    <span className="text-blue-600 font-bold text-xl">
                        ₹{product.price}
                    </span>

                    <span className="text-sm text-gray-500">
                        Stock: {product.stock}
                    </span>
                </div>

                <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                    Add To Cart
                </button>

            </div>
        </div>
    );
    
}

export default ProductCard;