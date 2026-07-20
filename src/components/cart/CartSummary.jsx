import { useNavigate } from "react-router-dom";

function CartSummary({ items }) {

    const navigate = useNavigate();

    const subtotal = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    const gst = subtotal * 0.18;

    const shipping = subtotal > 2000 ? 0 : 100;

    const total = subtotal + gst + shipping;

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-5">
                Order Summary
            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span>GST (18%)</span>
                    <span>₹{gst.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">

                    <span>Total</span>

                    <span>₹{total.toFixed(2)}</span>

                </div>

            </div>

            <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
            >
                Proceed to Checkout
            </button>

        </div>

    );
}

export default CartSummary;