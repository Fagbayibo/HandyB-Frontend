import { useEffect, useState } from "react";
import SentIcon from "../assets/icons/Verified.png";
import Verified from "../assets/images/PasswordBG.png";
import { useNavigate } from "react-router";
import { Commet } from "react-loading-indicators";

const VerificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const showLoading = setTimeout(() => {
      setLoading(true);

      const redirect = setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

      return () => clearTimeout(redirect);
    }, 2000);

    return () => clearTimeout(showLoading);
  }, [navigate]);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500); // change every half second

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center px-4 md:px-0">
      {/* Background */}
      <div
        style={{ backgroundImage: `url(${Verified})` }}
        className="absolute -z-10 inset-0 bg-cover bg-center"
      ></div>

      {/* Main Content */}
      <div className="container flex flex-col items-center py-10 space-y-3 bg-white w-full max-w-[1200px]">
        {/* Icon */}
        <img src={SentIcon} className="w-20 md:w-20" alt="Sent Icon" />

        {/* Text */}
        <div className="text-center space-y-2 px-4  md:px-[220px]">
          <p className="font-semibold text-2xl tracking-tight md:text-2xl">
            Account is Verified!
          </p>
          <p className="md:max-lg:text-black-500 font-medium tracking-tight text-[14px] md:text-[18px] text-gray-700">
            You account has been verified. You're all set to book services.
          </p>
        </div>

        {/* Loading State */}

        {/* Loading State */}
        <div className="mt-6 flex flex-col items-center gap-2">
          {loading ? (
            <>
              <Commet size="small" color="#253CFE" />
              <p className="text-md italic text-black tracking-tight font-medium">
                Redirecting you to your dashboard{dots}
              </p>
            </>
          ) : (
            <p className="text-md italic text-black tracking-tight font-medium">
              Preparing your account...
            </p>
          )}
        </div>

        {/* Experience Problem
        <div className="text-center mt-12 mb-4 text-sm text-gray-400">
          Experiencing any problems?{" "}
          <span className="underline font-semibold text-black cursor-pointer">
            Contact Us
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default VerificationPage;
