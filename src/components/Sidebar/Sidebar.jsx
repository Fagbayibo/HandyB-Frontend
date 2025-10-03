import { NavLink } from "react-router-dom";
import Dashboard from "../../assets/icons/Dashboard.png";
import ServicesIcon from "../../assets/icons/Services.png";
import Bookings from "../../assets/icons/Bookings.png";
import Chat from "../../assets/icons/Chat.png";
import Payment from "../../assets/icons/Payment.png";
import Logo from "../../assets/images/White.png";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const {logout} = useAuth()
  const sidebarLinks = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: Dashboard },
    { id: 2, name: "Services", path: "/dashboard/services", icon: ServicesIcon },
    { id: 3, name: "Bookings", path: "/dashboard/bookings", icon: Bookings },
    { id: 4, name: "Chat", path: "/dashboard/chat", icon: Chat },
    { id: 5, name: "Payment", path: "/dashboard/payment", icon: Payment },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#253CFE] to-[#0A2977]">
      <div className="px-10 py-10 flex flex-col justify-between h-full">
        {/* Top Section */}
        <div className="space-y-10">
          <img src={Logo} alt="HandyHyve Logo" className="w-36" />

          {/* NavLink */}
          <div className="space-y-5">
            <p className="uppercase text-[14px] tracking-tight text-white opacity-80">
              MAIN MENU
            </p>

            {/* Links */}
            <div className="flex flex-col gap-2">
              {sidebarLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 font-mona gap-3 text-[16px] transition-transform duration-400 ease-in-out ${
                      isActive
                        ? "px-3 py-3 bg-white text-[#253CFE] rounded font-mona font-semibold"
                        : "text-white hover:text-white hover:translate-x-2 hover:font-semibold hover:bg-white/10 py-3 px-3 rounded"
                    }`
                  }
                >
                  <img src={link.icon} className="w-6" /> {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Logout Button at the Bottom */}
        <button onClick={() => logout()} className="cursor-pointer flex items-center gap-3 px-3 py-3 text-white font-mona hover:bg-white/10 hover:translate-x-2 transition-transform duration-400 ease-in-out rounded">
         <IoMdLogOut size={30}/> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
