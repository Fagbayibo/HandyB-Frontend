import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

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
        <div className="h-24 ">
          <Topbar/>
        </div>

        {/* Page content */}
        <div className="flex-1 bg-white">
          <div className="h-full bg-white  flex items-center justify-center text-gray-700 text-2xl font-semibold">
            Page Content (Outlet)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
