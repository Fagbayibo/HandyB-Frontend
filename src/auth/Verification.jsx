import React from "react";
import { CheckBadgeIcon, ArrowPathIcon } from "@heroicons/react/24/solid"; // Icons

const VerificationPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-white font-poppins flex items-center justify-center px-4 overflow-hidden">
      {/* Pattern background */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Main Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-xl flex flex-col items-center text-center px-6 py-10 md:px-12">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#F9F9FF] flex items-center justify-center">
          <CheckBadgeIcon className="w-10 h-10 text-[#253CFE]" />
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-xl md:text-2xl font-semibold text-black">
          Account Verified!
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-lg text-gray-800 leading-relaxed max-w-xl">
          Your account has been successfully verified. You're all set to{" "}
          <span className="font-semibold">explore and book services</span>.
        </p>

        {/* Loading Spinner + Text */}
        <div className="flex items-center justify-center mt-8 space-x-2">
          <ArrowPathIcon
            className="w-5 h-5 text-[#253CFE] animate-spin"
            style={{ animationDuration: "1s" }}
          />
          <span className="text-xs md:text-sm text-gray-700 italic">
            Loading your dashboard, just a moment...
          </span>
        </div>

        {/* Footer Help Text */}
        <p className="mt-10 text-xs md:text-sm text-gray-500">
          Having trouble?{" "}
          <a
            href="mailto:support@example.com"
            className="font-bold underline text-gray-700 hover:opacity-80"
          >
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
