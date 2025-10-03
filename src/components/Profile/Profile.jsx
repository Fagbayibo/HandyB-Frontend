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

  // Extract first name
  const firstName = userName.split(" ")[0];

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-5 bg-white hover:bg-gray-100 px-3 py-2 rounded-lg"
    >
      {/* User Image */}
      <img
        src={
          userImage ||
          "https://images.unsplash.com/photo-1615453262312-022a72d3842a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGxhZHl8ZW58MHx8MHx8fDA%3D"
        } // fallback image
        alt={userName}
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* User Name */}
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{firstName}</span>
        <span className="bg-green-300 px-2 my-1 text-[13px] tracking-tight rounded-full">
          Active
        </span>
      </div>

      {/* Arrow Down */}
      <IoIosArrowDown className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default Profile;
