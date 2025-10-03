import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-72">
        <Sidebar isOpen={true} />
      </div>

      {/* Mobile Sidebar + Overlay */}
      {isSidebarOpen && (
        <>
          <div className="fixed top-0 left-0 z-50">
            <Sidebar isOpen={true} onClose={closeSidebar} />
          </div>
        </>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col relative z-0">
        {/* Topbar */}
        <div className="h-24">
          <Topbar onToggleSidebar={toggleSidebar} />
        </div>

        {/* Page content */}
        <div className="flex-1 bg-white">
          <div className="h-full flex items-center justify-center text-gray-700 text-2xl font-semibold">
            Page Content (Outlet)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
