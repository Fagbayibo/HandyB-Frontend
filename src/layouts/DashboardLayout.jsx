import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar with specified width */}
      <div className="w-72"> {/* change this to whatever width you want */}
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-16 bg-blue-600 text-white flex items-center px-6 font-bold">
          Topbar
        </div>

        {/* Page content */}
        <div className="flex-1 bg-gray-100 p-6">
          <div className="h-full bg-white border-dashed border-4 border-gray-400 flex items-center justify-center text-gray-700 text-2xl font-semibold">
            Page Content (Outlet)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
