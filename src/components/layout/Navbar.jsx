import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
            <FaSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/">Home</Link>

            <Link to="/products">Products</Link>

            {/* Wishlist */}
            <div className="relative">
              <Link to="/wishlist">
                <FaHeart size={22} />
              </Link>

              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                2
              </span>
            </div>

            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <FaShoppingCart size={22} />
              </Link>

              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs px-1">
                5
              </span>
            </div>

            {/* Login / Logout */}
            {user ? (
              <>
                <Link to="/profile">
                  <FaUser size={20} />
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