import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1">

                <Topbar />

                <div className="p-6">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default AdminLayout;