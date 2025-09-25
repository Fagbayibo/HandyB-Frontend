import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!password || !confirmPassword) {
      setError("Please fill out both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate API call success
    setMessage("✅ Your password has been reset successfully.");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-[68vh] flex flex-col items-center bg-white font-poppins px-4 mt-[20vh]">
      {/* Padlock Icon with circle background */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-6">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <LockClosedIcon className="w-6 h-6 text-black" />
        </div>
      </div>

      <div className="w-full max-w-md p-6 sm:p-8 rounded-lg text-center mt-[-7vh] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
          Set New Password
        </h2>
        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          Enter your new password and confirm it below.
        </p>

        <form className="space-y-6" onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            className="w-full py-3 px-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:bg-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full py-3 px-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:bg-gray-200"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition"
          >
            Reset Password
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

      <p className="mt-12 text-gray-600 text-sm text-center px-4 margin-down-20px">
        Experiencing email problem?{" "}
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
