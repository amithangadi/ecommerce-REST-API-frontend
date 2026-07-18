import { NavLink } from "react-router-dom";

function Sidebar() {

    const menu = [
        { name: "Dashboard", path: "/admin" },
        { name: "Products", path: "/admin/products" },
        { name: "Categories", path: "/admin/categories" },
        { name: "Orders", path: "/admin/orders" },
        { name: "Users", path: "/admin/users" },
        { name: "Payments", path: "/admin/payments" },
    ];

    return (

        <div className="w-64 bg-slate-900 text-white">

            <div className="text-center py-6 text-2xl font-bold">

                ShopEase Admin

            </div>

            <nav>

                {menu.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block px-6 py-4 hover:bg-slate-700 ${
                                isActive ? "bg-blue-600" : ""
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>

                ))}

            </nav>

        </div>

    );
}

export default Sidebar;