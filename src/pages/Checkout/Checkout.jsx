import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cartService";
import { createOrder } from "../../services/paymentService";

function Checkout() {

    // Temporary user ID
    const userId = 1;

    // Fetch Cart
    const { data: cart = [], isLoading, error } = useQuery({
        queryKey: ["checkout", userId],
        queryFn: () => getCart(userId),
    });

    // Shipping Address
    const [address, setAddress] = useState({
        fullName: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    //Payment
    const handlePayment = async () => {

    try {

        const order = await createOrder(Math.round(grandTotal));

        const options = {

            key: "rzp_test_SbiNGFYKbP2SVk",

            amount: order.amount,

            currency: order.currency,

            name: "ShopEase",

            description: "Order Payment",

            order_id: order.id,

            handler: function (response) {

                alert("Payment Successful!");

                console.log(response);

                // Next we'll place orders and clear the cart

            },

            prefill: {

                name: address.fullName,

                contact: address.mobile

            },

            theme: {

                color: "#2563EB"

            }

        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

    } catch (error) {

        console.error(error);

        alert("Payment Failed");

    }

};

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    // Price Calculation
    const subtotal = cart.reduce(
        (sum, item) => sum + (item.product.price * item.quantity),
        0
    );

    const gst = subtotal * 0.18;

    const shipping = subtotal > 1000 ? 0 : 100;

    const grandTotal = subtotal + gst + shipping;

    if (isLoading) {
        return (
            <div className="text-center py-20 text-2xl">
                Loading Checkout...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-600 text-2xl">
                Failed to load checkout.
            </div>
        );
    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-8">
                Checkout
            </h1>

            <div className="grid lg:grid-cols-2 gap-10">

                {/* Left Side */}

                <div className="bg-white shadow-lg rounded-xl p-6">

                    <h2 className="text-2xl font-semibold mb-6">
                        Shipping Address
                    </h2>

                    <div className="grid gap-4">

                        <input
                            name="fullName"
                            value={address.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            name="mobile"
                            value={address.mobile}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            className="border p-3 rounded-lg"
                        />

                        <textarea
                            name="address"
                            value={address.address}
                            onChange={handleChange}
                            placeholder="Address"
                            rows="4"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            name="city"
                            value={address.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            name="state"
                            value={address.state}
                            onChange={handleChange}
                            placeholder="State"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            name="pincode"
                            value={address.pincode}
                            onChange={handleChange}
                            placeholder="Pincode"
                            className="border p-3 rounded-lg"
                        />

                    </div>

                </div>

                {/* Right Side */}

                <div>

                    <div className="bg-white shadow-lg rounded-xl p-6">

                        <h2 className="text-2xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        {cart.map((item) => (

                            <div
                                key={item.id}
                                className="flex justify-between py-2 border-b"
                            >

                                <div>

                                    <p className="font-medium">
                                        {item.product.name}
                                    </p>

                                    <p className="text-gray-500">
                                        Qty : {item.quantity}
                                    </p>

                                </div>

                                <div>

                                    ₹
                                    {(item.product.price * item.quantity).toFixed(2)}

                                </div>

                            </div>

                        ))}

                        <div className="mt-6 space-y-3">

                            <div className="flex justify-between">

                                <span>Subtotal</span>

                                <span>
                                    ₹{subtotal.toFixed(2)}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>GST (18%)</span>

                                <span>
                                    ₹{gst.toFixed(2)}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Shipping</span>

                                <span>

                                    {shipping === 0
                                        ? "FREE"
                                        : `₹${shipping}`}

                                </span>

                            </div>

                            <hr />

                            <div className="flex justify-between text-xl font-bold">

                                <span>Total</span>

                                <span>
                                    ₹{grandTotal.toFixed(2)}
                                </span>

                            </div>

                        </div>

                        <button
                            onClick={handlePayment}
                            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                        >
                            Proceed To Payment
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Checkout;