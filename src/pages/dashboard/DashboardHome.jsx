import { useState } from "react";
import BackgroundPattern from "../../assets/images/bgpattern.png";
import NoBooking from "../../assets/icons/null.png";
import Button from "../../components/ui/Button";
import ActiveBooking from "../../assets/icons/ActiveBooking.png";
import Progress from "../../assets/icons/progress.png";
import { IoCalendarClear } from "react-icons/io5";
import { RiProgress3Fill } from "react-icons/ri";

const DashboardHome = () => {
  const activeServices = [
    {
      id: 1,
      name: "Underground Tank (1,500 Gallons)",
      status: "In Progress",
      startDate: "2/10/2025",
    },
    {
      id: 2,
      name: "Water Treatment System Installation",
      status: "Pending",
      startDate: "5/10/2025",
    },
    {
      id: 3,
      name: "Borehole Maintenance",
      status: "In Progress",
      startDate: "7/10/2025",
    },
    {
      id: 4,
      name: "Water Filter Replacement",
      status: "Scheduled",
      startDate: "10/10/2025",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Hourly Plumbing Service",
      price: 120,
      available: true,
      rating: 4.6,
      description:
        "From minor leaks to major overhauls, our expert plumbers are ready to tackle any issue.",
      category: "Plumbing",
      image: "/images/plumbing.png",
    },
    {
      id: 2,
      name: "Electrical Repair Service",
      price: 150,
      available: false,
      rating: 4.8,
      description:
        "Certified electricians handling installations, repairs, and troubleshooting safely.",
      category: "Electrical",
      image: "/images/electrical.png",
    },
    {
      id: 3,
      name: "Home Cleaning Service",
      price: 100,
      available: true,
      rating: 4.7,
      description:
        "Professional cleaning for every corner of your home, available same-day.",
      category: "Cleaning",
      image: "/images/cleaning.png",
    },
    {
      id: 4,
      name: "Carpentry & Furniture Repair",
      price: 130,
      available: true,
      rating: 4.5,
      description:
        "From assembling furniture to repairing cabinets, our carpenters deliver quality work.",
      category: "Carpentry",
      image: "/images/carpentry.png",
    },
    {
      id: 5,
      name: "Appliance Installation",
      price: 110,
      available: true,
      rating: 4.9,
      description:
        "Quick and safe installation of home appliances — washing machines, ovens, and more.",
      category: "Appliances",
      image: "/images/appliances.png",
    },
  ];

  const hasActive = activeServices.length > 0;

  // ✅ Filtering Logic
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Welcome message */}
      <div className="space-y-1 mb-6">
        <h2 className="font-bold tracking-tight text-xl font-poppins">
          Welcome back, James!
        </h2>
        <p className="font-normal tracking-tight text-[16px] font-poppins">
          All your bookings, rewards, and payments in one place.
        </p>
      </div>

      {hasActive ? (
        <>
          {/* Active bookings row */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 overflow-hidden">
            {activeServices.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="relative bg-[#f2f2f2] flex-1 min-w-0 rounded-xl p-4 flex flex-col justify-between overflow-hidden transition-all duration-200"
              >
                {/* background pattern */}
                <img
                  src={BackgroundPattern}
                  alt="booking-pattern"
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />

                {/* Booking header */}
                <div className="flex justify-between items-center  mb-3">
                  <div className="flex items-center gap-2">
                    <img src={ActiveBooking} className="w-8 h-8" />
                    <p className="uppercase text-gray-700 text-[15px] font-medium font-poppins tracking-tight">
                      Active
                    </p>
                  </div>

                  <div className="flex py-1.5 px-3 bg-white rounded-full gap-2 items-center">
                    <RiProgress3Fill
                      size={20}
                      className={`${
                        service.status === "In Progress"
                          ? "text-green-600"
                          : service.status === "Pending"
                          ? "text-yellow-600"
                          : null
                      }`}
                    />
                    <p
                      className={`font-poppins text-[13px] font-semibold ${
                        service.status === "In Progress"
                          ? "text-green-600"
                          : service.status === "Pending"
                          ? "text-yellow-600"
                          : null
                      }`}
                    >
                      {service.status}
                    </p>
                  </div>
                </div>

                {/* Booking details */}
                <div className="space-y-2 mt-6">
                  <p className="font-semibold text-gray-800 text-[16px] leading-tight">
                    {service.name}
                  </p>
                  <p className="text-gray-800 text-[14px] flex items-center gap-2">
                    <IoCalendarClear size={14} />
                    Start date: {service.startDate}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          {activeServices.length > 3 && (
            <div className="mt-5 text-right flex justify-center">
              <Button
                text="View all bookings"
                color="black"
                size="sm"
                onClick={() => console.log("Navigate to bookings page")}
              />
            </div>
          )}
        </>
      ) : (
        <>
          {/* No active booking */}
          <div className="bg-gray-100 w-[344px] h-[220px] rounded-xl py-8 mt-6 flex flex-col gap-3 justify-center items-center relative px-6">
            <img
              src={BackgroundPattern}
              alt="booking-pattern"
              className="absolute top-0 left-0 opacity-10"
            />
            <img src={NoBooking} className="w-10 h-10" />
            <p className="uppercase text-sm text-gray-700 font-bold">
              NO ACTIVE BOOKING
            </p>
            <p className="text-sm text-center font-normal text-gray-700">
              No active bookings yet. Find trusted help in minutes.
            </p>
            <Button
              text="Book a service"
              fontSize="text-sm"
              size="sm"
              color="black"
            />
          </div>
        </>
      )}

      {/* Trending / Available Services Section */}
      <div className="mt-10">
        <h2 className="font-poppins text-xl font-semibold tracking-tight text-gray-800 mb-5">
          Trending Services
        </h2>

        {/* Dynamic Categories */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">

          {/* All button */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
              ${
                selectedCategory === "All"
                  ? "bg-blue-100 border-blue-500 text-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
          >
            All
          </button>

          {[...new Set(services.map((s) => s.category))].map(
            (category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-all duration-200
                  ${
                    selectedCategory === category
                      ? "bg-blue-100 border-blue-500 text-blue-600"
                      : "border-gray-300 text-gray-700 hover:border-blue-400"
                  }`}
              >
                {category} Services
              </button>
            )
          )}
          <a href="#" className="text-blue-600 text-sm font-medium underline ">
            &amp; View More
          </a>
        </div>

        {/* Services Grid (show max 4 filtered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredServices.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-5    bg-white hover:shadow-md hover:border-blue-400 transition-all duration-200"
            >
              {/* Price + Availability */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-600 font-semibold text-[16px]">
                  💰 ${item.price}
                </span>
                {item.available ? (
                  <p className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                    Available Today
                  </p>
                ) : (
                  <p className="text-red-600 text-sm font-medium bg-red-50 px-3 py-1 rounded-full">
                    Unavailable
                  </p>
                )}
              </div>

              {/* Title + Description */}
              <h3 className="font-semibold text-gray-800 text-[15px] mb-1 font-poppins">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm leading-snug mb-3">
                {item.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-auto">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-gray-700 text-sm font-medium">
                  {item.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
