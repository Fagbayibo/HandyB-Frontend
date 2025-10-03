import PasswordBG from "../assets/images/PasswordBG.png";
import SentIcon from "../assets/icons/Sent.png";
import { useRef, useState } from "react";
import { TbRefresh } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";


const EmailOtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [isValid, setIsValid] = useState(null);

  const correctOtp = ["1", "2", "3", "4", "5"];

  const handleChange = (element, index) => {
    if (index > 0 && otp[index - 1] === "") return;
    if (!/^\d*$/.test(element.value.trim())) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    if (newOtp.every((val) => val !== "")) {
      const correct = newOtp.join("") === correctOtp.join("");
      setIsValid(correct);
      if (correct) console.log("OTP Verified ✅");
    } else {
      setIsValid(null);
    }
  };

  const handleKeyDown = (e, index) => {
    const newOtp = [...otp];
    if (e.key === "Backspace") {
      e.preventDefault();
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputsRef.current[index - 1].focus();
      }
      setIsValid(null);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center px-4 md:px-0">
      {/* Background */}
      <div
        style={{ backgroundImage: `url(${PasswordBG})` }}
        className="absolute -z-10 inset-0 bg-cover bg-center"
      ></div>

      {/* Main Content */}
      <div className="container flex flex-col items-center py-10 space-y-3 bg-white w-full max-w-[1200px]">
        {/* Icon */}
        <img src={SentIcon} className="w-20 md:w-20" alt="Sent Icon" />

        {/* Text */}
        <div className="text-center space-y-2 px-4  md:px-[220px]">
          <p className="font-semibold text-2xl tracking-tight md:text-2xl">
            Confirmation OTP Sent!
          </p>
          <p className="md:max-lg:text-blue-500 tracking-tight text-[14px] md:text-[18px] text-gray-700">
            We’ve sent a <span className="font-semibold">Verification OTP</span> to{" "}
            <span className="font-semibold">Fagbayibooluwasegun@gmail.com</span>. Please check your inbox and fill the boxes to confirm your account.
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              autoComplete="off"
              inputMode="numeric"
              className={`w-12 h-12 md:w-14 md:h-14 text-center text-xl md:text-2xl font-semibold rounded-xl outline-none
                border-3 transition-all ${
                  isValid === false
                    ? "border-red-500 text-red-500 shake"
                    : otp.every((val) => val !== "") && isValid === true
                    ? "border-green-500 text-green-500"
                    : value
                    ? "border-gradient-brand text-brand"
                    : "border-gray-400"
                }`}
              style={{ borderImageSlice: 1 }}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 mt-8">
          <button className="flex items-center gap-2 text-[16px] font-medium underline hover:text-brand transition">
            <TbRefresh size={25} /> Resend OTP
          </button>
          <button className="flex items-center gap-2 text-[16px] font-medium underline hover:text-brand transition">
            <FaPhoneAlt size={20}/> Send via Phone
          </button>
        </div>

        {/* Experience Problem */}
        <div className="text-center mt-12 mb-4 text-sm text-gray-400">
          Experiencing email problems?{" "}
          <span className="underline font-semibold text-black cursor-pointer">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default EmailOtpPage;
