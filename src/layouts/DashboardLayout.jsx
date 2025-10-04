import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-72">
        <Sidebar isOpen={true} />
      </div>

      {/* Mobile Sidebar + Animated Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 ease-in-out 
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={closeSidebar}
      ></div>

     {/* Mobile Sidebar only (hidden on md and up) */}
<div className="md:hidden">
  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
</div>


      {/* Main content */}
      <div className="flex-1 flex flex-col relative z-0 bg-white">
        <div className="h-24">
          <Topbar onToggleSidebar={toggleSidebar} />
        </div>

        <div className="flex-1">
          <div className="h-full flex items-center justify-center text-gray-700 text-2xl font-semibold">
            Page Content (Outlet)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
