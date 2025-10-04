import { NavLink } from "react-router-dom";
import Dashboard from "../../assets/icons/Dashboard.png";
import ServicesIcon from "../../assets/icons/Services.png";
import Bookings from "../../assets/icons/Bookings.png";
import Chat from "../../assets/icons/Chat.png";
import Payment from "../../assets/icons/Payment.png";
import Logo from "../../assets/images/White.png";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  const sidebarLinks = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: Dashboard },
    { id: 2, name: "Services", path: "/dashboard/services", icon: ServicesIcon },
    { id: 3, name: "Bookings", path: "/dashboard/bookings", icon: Bookings },
    { id: 4, name: "Chat", path: "/dashboard/chat", icon: Chat },
    { id: 5, name: "Payment", path: "/dashboard/payment", icon: Payment },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-72 
        bg-gradient-to-b from-[#253CFE] to-[#0A2977]
        z-50 transform 
        transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:w-72
        shadow-xl
      `}
    >
      <div className="px-10 py-10 flex flex-col justify-between h-full">
        {/* Top Section */}
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="Logo" className="w-36" />
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="md:hidden text-white text-3xl font-bold hover:scale-110 transition-transform duration-200"
            >
              ×
            </button>
          </div>

          {/* NavLinks */}
          <div className="space-y-5">
            <p className="uppercase text-[14px] tracking-tight text-white opacity-80">
              MAIN MENU
            </p>

            <div className="flex flex-col gap-2">
              {sidebarLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded font-mona text-[16px] 
                     transition-all duration-300 ease-in-out ${
                       isActive
                         ? "bg-white text-[#253CFE] font-semibold"
                         : "text-white hover:bg-white/10 hover:translate-x-2"
                     }`
                  }
                  onClick={onClose}
                >
                  <img src={link.icon} className="w-6" /> {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="cursor-pointer flex items-center gap-3 px-3 py-3 text-white font-mona hover:bg-white/10 hover:translate-x-2 transition-all duration-300 ease-in-out rounded"
        >
          <IoMdLogOut size={26} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
