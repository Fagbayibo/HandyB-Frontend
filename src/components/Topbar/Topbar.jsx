import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";
import Booking from "../../assets/icons/book.png";
import Notification from "../ui/Notification";
import Profile from "../Profile/Profile";
import { IoSearch, IoClose } from "react-icons/io5";

const Topbar = ({ onToggleSidebar }) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="h-full w-full bg-white border-b-2 border-lightgray px-4 sm:px-8 flex items-center justify-between">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
        {/* Mobile Sidebar Toggle */}
        <button
  onClick={onToggleSidebar}
  className="block lg:hidden p-2 text-gray-600 flex-shrink-0"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>


        {/* Desktop Search */}
        <div className="hidden md:max-lg:hidden md:block w-[320px] lg:w-[400px] flex-shrink-0">
          <SearchBar />
        </div>

        {/* Mobile Search */}
        <div className="md:hidden md:max-lg:block flex-1 min-w-0">
          {mobileSearchOpen ? (
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 min-w-0">
                <SearchBar className="w-full" />
              </div>
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="p-2 text-gray-600 flex-shrink-0"
              >
                <IoClose size={22} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setMobileSearchOpen(true)}
              className="p-2 text-gray-600 flex-shrink-0"
            >
              <IoSearch size={22} />
            </button>
          )}
        </div>
      </div>

      {/* RIGHT SECTION */}
      {!mobileSearchOpen && (
        <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
          {/* Booking button (desktop only) */}
          <div className="hidden md:max-lg:hidden md:block">
            <Button
              text="Place booking"
              fontSize="text-sm"
              size="md"
              color="black"
              icon={Booking}
            />
          </div>

          {/* Notifications & Profile */}
          <Notification />
          <Profile />
        </div>
      )}
    </div>
  );
};

export default Topbar;
