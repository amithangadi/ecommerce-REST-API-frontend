import { useNavigate } from "react-router-dom";
import {
    FaUser,
    FaBox,
    FaHeart,
    FaShoppingCart,
    FaChevronRight,
    FaSignOutAlt
} from "react-icons/fa";

function Profile() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">

                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-blue-600 text-3xl" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold">
                        My Account
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage your shopping activity
                    </p>
                </div>

            </div>


            {/* Account Options */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Orders */}
                <button
                    type="button"
                    onClick={() => navigate("/orders")}
                    className="w-full flex items-center justify-between p-6 border-b hover:bg-gray-50 transition"
                >

                    <div className="flex items-center gap-5">

                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <FaBox className="text-blue-600 text-xl" />
                        </div>

                        <div className="text-left">

                            <h2 className="text-lg font-semibold">
                                My Orders
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                View your order history and status
                            </p>

                        </div>

                    </div>

                    <FaChevronRight className="text-gray-400" />

                </button>


                {/* Wishlist */}
                <button
                    type="button"
                    onClick={() => navigate("/wishlist")}
                    className="w-full flex items-center justify-between p-6 border-b hover:bg-gray-50 transition"
                >

                    <div className="flex items-center gap-5">

                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <FaHeart className="text-red-500 text-xl" />
                        </div>

                        <div className="text-left">

                            <h2 className="text-lg font-semibold">
                                My Wishlist
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                View your saved products
                            </p>

                        </div>

                    </div>

                    <FaChevronRight className="text-gray-400" />

                </button>


                {/* Cart */}
                <button
                    type="button"
                    onClick={() => navigate("/cart")}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
                >

                    <div className="flex items-center gap-5">

                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <FaShoppingCart className="text-green-600 text-xl" />
                        </div>

                        <div className="text-left">

                            <h2 className="text-lg font-semibold">
                                My Cart
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                View products in your shopping cart
                            </p>

                        </div>

                    </div>

                    <FaChevronRight className="text-gray-400" />

                </button>

            </div>


            {/* Logout */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

                <h2 className="text-xl font-semibold">
                    Account
                </h2>

                <p className="text-gray-500 mt-1 mb-5">
                    Sign out from your account
                </p>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    <FaSignOutAlt />

                    Logout
                </button>

            </div>

        </div>
    );
}

export default Profile;