import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Profile = ({
  userName = "Mariam Elena",
  userImage,
  profilePath = "/profile",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(profilePath);
  };

  const firstName = userName.split(" ")[0];

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center 
        gap-2 sm:gap-3 md:gap-5 
        bg-white hover:bg-gray-100 
        px-2 sm:px-3 md:px-4 
        py-1.5 sm:py-2 
        rounded-lg 
        w-full sm:w-auto 
        transition-all duration-200
        active:scale-[0.98]
      "
    >
      {/* User Image */}
      <img
        src={
          userImage ||
          "https://images.unsplash.com/photo-1615453262312-022a72d3842a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGxhZHl8ZW58MHx8MHx8fDA%3D"
        }
        alt={userName}
        className="
          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
          rounded-full object-cover
        "
      />

      {/* User Name */}
      <div className="flex flex-col items-start text-left">
        <span className="font-medium text-gray-800 text-sm sm:text-base">
          {firstName}
        </span>
        <span className="
          bg-green-300 px-1.5 sm:px-2 py-[1px] sm:py-[2px]
          text-[11px] sm:text-[13px] 
          tracking-tight rounded-full
        ">
          Active
        </span>
      </div>

      {/* Arrow Down */}
      <IoIosArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    </button>
  );
};

export default Profile;
