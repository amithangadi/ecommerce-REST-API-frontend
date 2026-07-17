import { useQuery } from "@tanstack/react-query";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import { getCart } from "../../services/cartService";

function Cart() {

    const { data: items = [], isLoading, error } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
    });

    if (isLoading) {
        return <h2>Loading Cart...</h2>;
    }

    if (error) {
        return <h2>Failed to load cart.</h2>;
    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-8">
                Shopping Cart
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-5">

                    {items.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={() => {}}
                                onDecrease={() => {}}
                                onRemove={() => {}}
                            />
                        ))
                    )}

                </div>

                <CartSummary items={items} />

            </div>

        </div>

    );
}

export default Cart;