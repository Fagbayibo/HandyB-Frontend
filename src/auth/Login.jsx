import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // for password toggle icons
import loginImage from "../assets/images/aauth.png"; // make sure path is correct
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.target);

    try {
      // Call Login function
      await login(form); 
              //redirect   
      navigate("/dashboard");    
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-poppins">
      {/* Left Section (Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-12 sm:py-16 animate-fadeIn">
        <div className="max-w-md w-full mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">
            Welcome Back to <span className="italic font-bold">HandyHyve</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Book trusted home services, track rewards, and manage everything in one place.
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="flex items-center mt-2 border rounded-lg px-3 py-2">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  className="w-6 h-4 rounded mr-2"
                />
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91-9876543210"
                  className="flex-1 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password with toggle */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="mt-2 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-black"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 focus:ring-green-500"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="/reset-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 text-sm">{error}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white font-medium py-2 rounded-lg hover:bg-black-700 transition"
            >
              {loading ? "Signing in..." : "Login"}
            </button>

            {/* Social Login */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                type="button"
                className="flex-1 border rounded-lg py-2 flex items-center justify-center hover:bg-gray-100 transition"
              >
                <img src="/src/assets/images/google.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex-1 border rounded-lg py-2 flex items-center justify-center hover:bg-gray-100 transition"
              >
                <img src="/src/assets/images/facebook.png" alt="Facebook" className="w-5 h-5 mr-2" />
                Facebook
              </button>
            </div>

            {/* Sign Up link */}
            <p className="text-sm text-gray-600 mt-4 text-center">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section (Background + Text) */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden px-6 py-10 lg:py-0">
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[85%] rounded-l-full bg-cover bg-center backdrop-blur-md animate-fadeIn delay-200"
          style={{ backgroundImage: `url(${loginImage})` }}
        ></div>

        <div className="relative text-center z-10 px-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-fadeIn delay-300">
            Fast Login. <br/> Instant Booking
          </h1>
          <p className="text-white text-base sm:text-lg text-gray-800 mt-4 animate-fadeIn delay-500">
            Book, pay and track everything online.
          </p>
        </div>
      </div>
    </div>
  );
}
