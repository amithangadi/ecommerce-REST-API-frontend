import { Link, useNavigate } from "react-router-dom";
import {
    FaShoppingCart,
    FaHeart,
    FaUser,
    FaSearch,
} from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cartService";
import { getWishlist } from "../../services/wishlistService";

import { useAuth } from "../../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const userId = 1;

    // Cart Query
    const { data: cart = [] } = useQuery({
        queryKey: ["cart", userId],
        queryFn: () => getCart(userId),
    });

    // Wishlist Query
    const { data: wishlist = [] } = useQuery({
        queryKey: ["wishlist", userId],
        queryFn: () => getWishlist(userId),
    });

    return (

        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="text-3xl font-bold text-blue-600"
                    >
                        ShopEase
                    </Link>

                    {/* Search */}

                    <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">

                        <FaSearch className="text-gray-500" />

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent outline-none ml-2 w-full"
                        />

                    </div>

                    {/* Navigation */}

                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            to="/"
                            className="hover:text-blue-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/products"
                            className="hover:text-blue-600"
                        >
                            Products
                        </Link>

                        <Link
                            to="/admin"
                            className="hover:text-blue-600"
                        >
                            Admin
                        </Link>

                        {/* Wishlist */}

                        <div className="relative">

                            <Link to="/wishlist">

                                <FaHeart
                                    size={22}
                                    className="hover:text-red-500 transition"
                                />

                            </Link>

                            {wishlist.length > 0 && (

                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs min-w-[18px] h-[18px] flex items-center justify-center">

                                    {wishlist.length}

                                </span>

                            )}

                        </div>

                        {/* Cart */}

                        <div className="relative">

                            <Link to="/cart">

                                <FaShoppingCart
                                    size={22}
                                    className="hover:text-blue-600 transition"
                                />

                            </Link>

                            {cart.length > 0 && (

                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs min-w-[18px] h-[18px] flex items-center justify-center">

                                    {cart.length}

                                </span>

                            )}

                        </div>

                        {/* Login / Logout */}

                        {user ? (

                            <>

                                <Link to="/profile">

                                    <FaUser
                                        size={20}
                                        className="hover:text-blue-600"
                                    />

                                </Link>

                                <button
                                    onClick={() => {

                                        logout();

                                        navigate("/login");

                                    }}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Logout
                                </button>

                            </>

                        ) : (

                            <>

                                <Link
                                    to="/login"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    Register
                                </Link>

                            </>

                        )}

                    </div>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;