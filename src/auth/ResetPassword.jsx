import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate success
    setMessage(`✅ A password reset link has been sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-[68vh] flex flex-col items-center bg-white font-poppins px-4 mt-[20vh]">
      {/* Padlock Icon with circle background */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-6">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <LockClosedIcon className="w-6 h-6 text-blue-600" /> {/* 🔵 Changed to blue */}
        </div>
      </div>

      <div className="w-full max-w-md p-6 sm:p-8 rounded-lg text-center mt-[-7vh] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
          Reset Your Password
        </h2>
        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          Enter your email address below to receive a password reset link.
        </p>

        <form className="space-y-6" onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-3 px-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:bg-gray-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition"
          >
            Send Reset Link
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-600 font-medium text-sm sm:text-base">
            {error}
          </p>
        )}
        {message && (
          <p className="mt-4 text-green-600 font-medium text-sm sm:text-base">
            {message}
          </p>
        )}
      </div>

      <p className="mt-12 text-gray-600 text-sm text-center px-4">
        Experiencing any problem?{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-600 hover:underline cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </p>
    </div>
  );
};

export default ResetPasswordPage;
