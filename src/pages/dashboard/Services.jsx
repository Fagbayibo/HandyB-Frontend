import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
    {
      id: 6,
      name: "AC Repair & Maintenance",
      price: 140,
      available: true,
      rating: 4.4,
      description: "Keep your home cool with our certified AC technicians.",
      category: "Appliances",
      image: "/images/ac.png",
    },
    {
      id: 7,
      name: "Garden & Lawn Care",
      price: 90,
      available: true,
      rating: 4.3,
      description: "Lawn mowing, trimming and seasonal garden care.",
      category: "Gardening",
      image: "/images/gardening.png",
    },
    {
      id: 8,
      name: "Pest Control Service",
      price: 160,
      available: false,
      rating: 4.6,
      description: "Safe and effective pest removal and prevention plans.",
      category: "Cleaning",
      image: "/images/pest.png",
    },
    {
      id: 9,
      name: "Painting & Wall Repair",
      price: 200,
      available: true,
      rating: 4.2,
      description: "Interior and exterior painting plus minor wall repairs.",
      category: "Carpentry",
      image: "/images/painting.png",
    },
    {
      id: 10,
      name: "TV & Home Theater Setup",
      price: 85,
      available: true,
      rating: 4.7,
      description: "Professional mounting and setup for TVs and sound systems.",
      category: "Electrical",
      image: "/images/tv.png",
    },
    {
      id: 11,
      name: "Window Cleaning Service",
      price: 75,
      available: true,
      rating: 4.1,
      description: "Streak-free window cleaning for homes and small offices.",
      category: "Cleaning",
      image: "/images/window.png",
    },
    {
      id: 12,
      name: "Tile & Flooring Repair",
      price: 180,
      available: false,
      rating: 4.5,
      description:
        "Repair and replacement for tiles, laminate, and hardwood floors.",
      category: "Carpentry",
      image: "/images/flooring.png",
    },
    {
      id: 13,
      name: "Locksmith On-Demand",
      price: 95,
      available: true,
      rating: 4.8,
      description: "Emergency lockout assistance and lock replacement.",
      category: "Security",
      image: "/images/locksmith.png",
    },
    {
      id: 14,
      name: "Smart Home Installation",
      price: 220,
      available: true,
      rating: 4.9,
      description:
        "Setup and integration of smart devices and home automation.",
      category: "Electrical",
      image: "/images/smarthome.png",
    },
    {
      id: 15,
      name: "Bathroom Renovation",
      price: 2500,
      available: false,
      rating: 4.0,
      description: "Full-service bathroom remodeling by qualified teams.",
      category: "Carpentry",
      image: "/images/bathroom.png",
    },
    {
      id: 16,
      name: "Roof Inspection",
      price: 300,
      available: true,
      rating: 4.3,
      description: "Comprehensive roof inspections and minor repairs.",
      category: "Construction",
      image: "/images/roof.png",
    },
    {
      id: 17,
      name: "Home Office Setup",
      price: 130,
      available: true,
      rating: 4.6,
      description:
        "Ergonomic furniture assembly and cable management for home offices.",
      category: "Carpentry",
      image: "/images/office.png",
    },
    {
      id: 18,
      name: "Exterior Power Washing",
      price: 120,
      available: true,
      rating: 4.4,
      description: "Driveway, patio and siding power washing services.",
      category: "Cleaning",
      image: "/images/powerwash.png",
    },
    {
      id: 19,
      name: "Pool Maintenance",
      price: 210,
      available: false,
      rating: 4.2,
      description: "Regular pool cleaning and chemical balancing.",
      category: "Gardening",
      image: "/images/pool.png",
    },
    {
      id: 20,
      name: "Handyman Small Jobs",
      price: 80,
      available: true,
      rating: 4.5,
      description:
        "General handyman tasks: shelves, picture hanging, small fixes.",
      category: "General",
      image: "/images/handyman.png",
    },
  ];

  // ✅ Filtering Logic
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  // ✅ Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // show 4 items per page

  // compute pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredServices.length / itemsPerPage)
  );
  useEffect(() => {
    // reset to first page when category changes
    setCurrentPage(1);
  }, [selectedCategory]);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedServices = filteredServices.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  return (
    <div className="max-w-full h-screen">
      {/* Trending / Available Services Section */}
      <div className="mt-2">
        <h2 className="font-poppins text-xl font-semibold tracking-tight text-gray-800 mb-5">
          Trending Services
        </h2>

        {/* Dynamic Categories */}
        <div className="flex py-3 items-center gap-3 mb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {/* All button */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
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
                className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-all duration-200
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

        {/* Services Grid (paginated) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {paginatedServices.map((item) => (
            <Link
              key={item.id}
              to={`/dashboard/booking/${item.id}`} // <- changed to match nested route
              aria-label={`Book ${item.name}`}
              state={{service: item}}
              className="border cursor-pointer border-gray-200 rounded-xl p-5 bg-white hover:shadow-md hover:border-blue-400 transition-all duration-200 block"
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

              <div className="mt-4 space-y-3">
                {/* Title + Description */}
                <h3 className="font-semibold text-gray-800 text-[15px] mb-1 font-poppins">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-snug mb-3">
                  {item.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-auto">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-gray-700 text-sm font-medium">
                  {item.rating}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md mr-2 border text-sm ${
                currentPage === 1
                  ? "text-gray-400 border-gray-200"
                  : "text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md border text-sm ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-200"
                  : "text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 my-7">
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md border text-sm ${
                    currentPage === page
                      ? "bg-blue-100 border-blue-500 text-blue-600"
                      : "border-gray-300 text-gray-700 hover:border-blue-400"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
