import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Static Sidebar for desktop (lg and up) */}
      <div className="hidden lg:block w-72">
        <Sidebar isOpen={true} />
      </div>

      {/* Overlay for mobile + tablet */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm 
          transition-opacity duration-300 ease-in-out
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar for mobile + tablet */}
      <div className="block md:max-lg:block lg:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>

{/* Main scrollable content area */}
<div className="flex-1 flex flex-col overflow-hidden bg-white">
  {/* Sticky Topbar */}
  <div className="h-24 flex-shrink-0 sticky top-0 z-30 bg-white shadow-sm">
    <Topbar onToggleSidebar={toggleSidebar} />
  </div>

  {/* Scrollable content */}
  <div className="flex-1 overflow-y-auto px-4 py-8 md:max-lg:px-3 md:px-10">
    <Outlet />
  </div>
</div>

    </div>
  );
};

export default DashboardLayout;
