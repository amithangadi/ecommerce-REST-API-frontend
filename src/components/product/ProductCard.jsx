import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/cartService";
import {
    addToWishlist,
    getWishlist,
} from "../../services/wishlistService";
import toast from "react-hot-toast";

function ProductCard({ product }) {

    const queryClient = useQueryClient();

    const userId = 1;

    // Fetch Wishlist
    const { data: wishlist = [] } = useQuery({
        queryKey: ["wishlist", userId],
        queryFn: () => getWishlist(userId),
    });

    // Check whether product already exists in wishlist
    const isWishlisted = wishlist.some(
        (item) => item.product.id === product.id
    );

    // Cart Mutation
    const cartMutation = useMutation({

        mutationFn: addToCart,

        onSuccess: () => {

            toast.success("Added to Cart 🛒");

            queryClient.invalidateQueries({
                queryKey: ["cart", userId],
            });

        },

        onError: () => {

            toast.error("Failed to add item");

        },

    });

    // Wishlist Mutation
    const wishlistMutation = useMutation({

        mutationFn: addToWishlist,

        onSuccess: () => {

            toast.success("Added to Wishlist ❤️");

            queryClient.invalidateQueries({
                queryKey: ["wishlist", userId],
            });

        },

        onError: () => {

            toast.error("Failed to add to Wishlist");

        },

    });

    // Add To Cart
    const handleAddToCart = () => {

        cartMutation.mutate({

            quantity: 1,

            user: {
                id: userId,
            },

            product: {
                id: product.id,
            },

        });

    };

    // Add To Wishlist
    const handleAddToWishlist = () => {

        if (isWishlisted) {

            toast("Already in Wishlist ❤️");

            return;

        }

        wishlistMutation.mutate({

            user: {
                id: userId,
            },

            product: {
                id: product.id,
            },

        });

    };

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

                {/* Add To Cart */}

                <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={cartMutation.isPending}
                    className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
                >
                    {cartMutation.isPending
                        ? "Adding..."
                        : "🛒 Add To Cart"}
                </button>

                {/* Wishlist */}

                <button
                    type="button"
                    onClick={handleAddToWishlist}
                    disabled={wishlistMutation.isPending || isWishlisted}
                    className={`mt-3 w-full py-3 rounded-xl transition ${
                        isWishlisted
                            ? "bg-pink-600 text-white"
                            : "border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                    }`}
                >
                    {wishlistMutation.isPending
                        ? "Adding..."
                        : isWishlisted
                        ? "❤️ Added to Wishlist"
                        : "🤍 Add To Wishlist"}
                </button>

            </div>

        </div>

    );

}

export default ProductCard;