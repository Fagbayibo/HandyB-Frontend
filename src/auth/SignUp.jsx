import LoginImage from "../assets/images/LogRight.png";
import MainLogo from "../assets/images/HandyLogo.png";
import GoogleIcon from "../assets/images/google.png";
import AppleIcon from "../assets/images/apple.png";
import FacebookIcon from "../assets/images/facebook.png";
import { useState } from "react";
import { signupSchema } from "../utils/validation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [termsCondition, setTermCondition] = useState(false);

  const isFormValid = fullName && email && phone && password && termsCondition;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { fullName, email, phone, password, termsCondition };

    try {
      await signupSchema.validate(formData, { abortEarly: false });
      setError({});
      console.log("Submitted Data: ", formData);
    } catch (err) {
      if (err.inner) {
        const errors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setError(errors);
      }
    }
  };

  const validateField = async (field, value) => {
    try {
      await signupSchema.validateAt(field, {
        fullName,
        email,
        phone,
        password,
        termsCondition,
        [field]: value,
      });
      setError((prev) => ({ ...prev, [field]: "" }));
    } catch (err) {
      setError((prev) => ({ ...prev, [field]: err.message }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-poppins">
      {/* Left Section (Form) */}
      <div className="w-full lg:w-1/2 overflow-y-auto p-6 sm:p-10 lg:p-16 flex flex-col items-center mt-6 sm:mt-12 space-y-6">
        <div className="flex items-center flex-col">
          <img src={MainLogo} alt="logo" className="w-28 sm:w-36" />

          {/* Header */}
          <div className="space-y-2 mt-6 text-center">
            <h2 className="text-2xl sm:text-[28px] font-medium tracking-tighter">
              Create Your Account
            </h2>
            <p className="tracking-tight text-sm sm:text-[16px] px-4 sm:px-12 lg:px-[120px]">
              Book trusted home services, track rewards, and manage everything
              in one place.
            </p>
          </div>

          {/* Oauth */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-10 mt-5 px-4 sm:px-6 bg-lightgray py-2 rounded-full">
            <p className="text-sm sm:text-[16px] font-medium tracking-tight text-gray-800">
              Continue with
            </p>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img
                  src={GoogleIcon}
                  alt="google icon"
                  className="w-6 sm:w-8"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={AppleIcon} alt="apple icon" className="w-5 sm:w-6" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img
                  src={FacebookIcon}
                  alt="facebook icon"
                  className="w-6 sm:w-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full max-w-[480px] mt-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 sm:space-y-8"
          >
            {/* Full Name */}
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex justify-between">
                <label className="font-medium tracking-tight text-md">
                  Full Name
                </label>
                {error.fullName && (
                  <p className="tracking-tight text-red-500 flex items-center gap-2 text-sm">
                    <TiWarning size={18} /> {error.fullName}
                  </p>
                )}
              </div>
              <input
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  validateField("fullName", e.target.value);
                }}
                type="text"
                placeholder="Enter your full name"
                className={`h-12 w-full rounded-xl border pl-6 pr-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none transition
                  ${
                    error.fullName
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-inputborder focus:border-blue-500 focus:ring-blue-200"
                  }
                `}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex justify-between">
                <label className="font-medium tracking-tight text-md">
                  Email Address
                </label>
                {error.email && (
                  <p className="tracking-tight text-red-500 flex items-center gap-2 text-sm">
                    <TiWarning size={18} /> {error.email}
                  </p>
                )}
              </div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateField("email", e.target.value);
                }}
                type="email"
                placeholder="Enter your email address"
                className={`h-12 w-full rounded-xl border pl-6 pr-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none transition
                  ${
                    error.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-inputborder focus:border-blue-500 focus:ring-blue-200"
                  }
                `}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex justify-between">
                <label className="font-medium tracking-tight text-md">
                  Phone number
                </label>
                {error.phone && (
                  <p className="tracking-tight text-red-500 flex items-center gap-2 text-sm">
                    <TiWarning size={18} /> {error.phone}
                  </p>
                )}
              </div>
              <PhoneInput
                placeholder="Enter your phone number"
                defaultCountry="US"
                value={phone}
                onChange={(val) => {
                  setPhone(val);
                  validateField("phone", val);
                }}
                className={`h-12 w-full rounded-xl border pl-4 pr-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none
                  ${error.phone ? "border-red-500" : "border-inputborder"}
                `}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-2 w-full relative">
              <div className="flex justify-between">
                <label className="font-medium tracking-tight text-md">
                  Password
                </label>
                {error.password && (
                  <p className="tracking-tight text-red-500 flex items-center gap-2 text-sm">
                    <TiWarning size={18} /> {error.password}
                  </p>
                )}
              </div>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validateField("password", e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`h-12 w-full rounded-xl border text-sm sm:text-base pl-6 pr-10 text-gray-700 placeholder-gray-400 outline-none transition
                  ${
                    error.password
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-inputborder focus:border-blue-500 focus:ring-blue-200"
                  }
                `}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 bottom-5 cursor-pointer"
              >
                {showPassword ? (
                  <IoEye size={20} className="text-gray-600" />
                ) : (
                  <IoMdEyeOff size={20} className="text-gray-600" />
                )}
              </button>
            </div>

            {/* Terms */}
            <div className="flex flex-col w-full -mt-2 space-y-1">
              <div className="flex items-center space-x-3">
                <div
                  className={`relative flex items-center justify-center h-5 w-5 rounded 
                    ${
                      error.termsCondition
                        ? "border-2 border-red-500"
                        : "border border-inputborder"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    checked={termsCondition}
                    onChange={() => {
                      setTermCondition(!termsCondition);
                      validateField("termsCondition", !termsCondition);
                    }}
                    className="absolute inset-0 h-full w-full opacity-0 cursor-pointer peer"
                  />
                  <div className="peer-checked:bg-blue-500 peer-checked:border-blue-500 h-3 w-3 rounded-sm"></div>
                </div>
                <p className="text-sm sm:text-md tracking-tight">
                  I agree to the{" "}
                  <a href="#" className="underline font-semibold text-brand">
                    Terms & Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-3 text-white text-[16px] tracking-tight rounded-md font-semibold cursor-pointer transition
                  ${
                    isFormValid
                      ? "bg-black hover:bg-gray-900"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </form>

          <div className="w-full text-center">
            <button className="text-sm sm:text-md tracking-tight text-center my-6 sm:my-8">
              Already have an account?
              <a href="#" className="underline font-semibold text-brand">
                {" "}
                Log In
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-1/2 hidden lg:block md:hidden">
        <div className="sticky top-0 h-screen">
          <img
            src={LoginImage}
            className="w-full h-full object-cover"
            alt="Login background"
          />
        </div>
      </div>
    </div>
  );
}
