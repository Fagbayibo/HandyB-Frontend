import LoginImage from "../assets/images/LogRight.png";
import MainLogo from "../assets/images/HandyLogo.png";
import GoogleIcon from "../assets/images/google.png";
import AppleIcon from "../assets/images/apple.png";
import FacebookIcon from "../assets/images/facebook.png";
import {useState} from "react";
import {signupSchema} from "../utils/validation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const formData = {fullName, email, phone, password};

    try {
      await signupSchema.validate(formData, {abortEarly: false});
      setError({});

      console.log("Submitted Data: ", formData);
      // You can call your API here
      // await api.signup(formData);
    } catch (err) {
      const errors = err.innner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setError(errors);
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-poppins">
      {/* Left Section (Form) */}
      <div className="w-1/2 overflow-y-auto p-8 flex flex-col items-center mt-14 space-y-6">
        <div className="flex items-center flex-col">
          <img src={MainLogo} alt="logo" className="w-36" />
          {/* LoginHeader Textt */}
          <div className="space-y-2 mt-6 text-center">
            <h2 className="text-[28px] font-medium tracking-tighter">Create Your Account</h2>
            <p className="tracking-tight px-[120px] text-[16px] ">Book trusted home services, track rewards, and manage everything in one place.</p>
          </div>
          {/* Oauth Login Credentials */}
          <div className="flex items-center space-x-10 mt-5 px-6 bg-lightgray py-2 rounded-full">
            <p className="text-[16px] font-medium tracking-tight text-gray-800">Continue with</p>
            <div className="flex items-center justify-center space-x-4">
              {/* Google */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={GoogleIcon} alt="google icon" className="w-8" />
              </div>
              {/* Google */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={AppleIcon} alt="google icon" className="w-6" />
              </div>
              {/* Google */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={FacebookIcon} alt="google icon" className="w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Form Fieldd */}
        <div className="px-20 mt-4">
          <form action="" className="flex flex-col space-y-8  ">
            {/* Full Name */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="h-12 w-full rounded-xl border border-inputborder bg-white pl-6 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
            </div>
            {/* Email address */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Email Address</label>
              <input type="email" placeholder="Enter your email address" className="h-12 w-full rounded-xl border text-[14px] border-inputborder bg-white pl-6 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Phone number</label>
              <PhoneInput placeholder="Enter your phone number" defaultCountry="US" value={phone} onChange={setPhone} className="h-12 w-full rounded-xl border border-inputborder bg-white pl-4 pr-4 text-gray-700 placeholder-gray-400 outline-none" />
              {error.phone && <p>{error.phone}</p>}
            </div>
            {/* Phone Number */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Password</label>
                <input type="email" placeholder="Enter your email address" className="h-12 w-full rounded-xl border text-[14px] border-inputborder bg-white pl-6 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2  relative">
        <div className="sticky top-0 h-screen flex items-center justify-end ">
          <img src={LoginImage} className="max-h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
