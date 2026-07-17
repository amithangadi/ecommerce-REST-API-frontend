import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    getCart,
    removeFromCart,
    clearCart
} from "../../services/cartService";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

function Cart() {

    // Temporary user ID (until login is implemented)
    const userId = 1;

    const queryClient = useQueryClient();

    // Fetch cart items
    const {
        data: cartItems = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["cart", userId],
        queryFn: () => getCart(userId),
    });

    // Remove item from cart
    const removeMutation = useMutation({
        mutationFn: removeFromCart,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId],
            });
        },

        onError: () => {
            alert("Failed to remove item.");
        },
    });

    const clearMutation = useMutation({
    mutationFn: () => clearCart(userId),

    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["cart", userId],
        });
    },

    onError: () => {
        alert("Failed to clear cart.");
    },
});

    if (isLoading) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold">
                    Loading Cart...
                </h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl text-red-600">
                    Failed to load cart.
                </h2>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex justify-between items-center mb-8">

    <h1 className="text-4xl font-bold">
        Shopping Cart
    </h1>

    {cartItems.length > 0 && (
        <button
            onClick={() => clearMutation.mutate()}
            className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition"
        >
            Clear Cart
        </button>
    )}

</div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Side */}
                <div className="lg:col-span-2 space-y-5">

                    {cartItems.length === 0 ? (

                        <div className="bg-white rounded-xl shadow-md p-10 text-center">

                            <h2 className="text-2xl font-semibold">
                                Your cart is empty
                            </h2>

                        </div>

                    ) : (

                        cartItems.map((item) => (

                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={() => {
                                    // We'll implement later
                                }}
                                onDecrease={() => {
                                    // We'll implement later
                                }}
                                onRemove={() =>
                                    removeMutation.mutate(item.id)
                                }
                            />

                        ))

                    )}

                </div>

                {/* Right Side */}

                <CartSummary items={cartItems} />

            </div>

        </div>
    );
}

export default Cart;