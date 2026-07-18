import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Wishlist from "../pages/Wishlist/Wishlist";
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Orders/Orders";
import Checkout from "../pages/Checkout/Checkout";
import NotFound from "../pages/NotFound/NotFound";

import Dashboard from "../pages/admin/Dashboard";
import AdminProducts from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";
import AdminOrders from "../pages/admin/Orders";
import Users from "../pages/admin/Users";
import Payments from "../pages/admin/Payments";

function AppRoutes() {
    return (
        <Routes>

    {/* Public Routes */}

    <Route path="/" element={<Home />} />

    <Route path="/products" element={<Products />} />

    <Route path="/product/:id" element={<ProductDetails />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route path="/admin" element={<Dashboard />} />
<Route path="/admin/products" element={<AdminProducts />} />
<Route path="/admin/categories" element={<Categories />} />
<Route path="/admin/orders" element={<Orders />} />
<Route path="/admin/users" element={<Users />} />
<Route path="/admin/payments" element={<Payments />} />

<Route path="*" element={<NotFound />} />

    {/* Protected Routes */}

    <Route
        path="/cart"
        element={
            <ProtectedRoute>
                <Cart />
            </ProtectedRoute>
        }
    />

    <Route
        path="/profile"
        element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        }
    />

    <Route
        path="/orders"
        element={
            <ProtectedRoute>
                <Orders />
            </ProtectedRoute>
        }
    />

    <Route
        path="/checkout"
        element={
            <ProtectedRoute>
                <Checkout />
            </ProtectedRoute>
        }
    />

    <Route
        path="/wishlist"
        element={
            <ProtectedRoute>
                <Wishlist />
            </ProtectedRoute>
        }
    />

    <Route path="*" element={<NotFound />} />

</Routes>
    );
}

export default AppRoutes;