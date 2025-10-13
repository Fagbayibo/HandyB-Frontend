import { ArrowLeftCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ApplePay from "../../assets/icons/ApplePay.png";
import Gpay from "../../assets/icons/gpay.png";
import MasterCard from "../../assets/icons/mastercard.png";
import Logo from "../../assets/images/HandyLogo.png";
import Button from "../../components/ui/Button";

const BookingPayment = () => {
  const [selected, setSelected] = useState("mastercard");
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingState = location.state?.booking ?? null;

   const [bookingDetails, setBookingDetails] = useState(bookingState);

  useEffect(() => {
    if (!bookingState) {
      // placeholder for future fetch
    }
  }, [id, bookingState]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center min-h-screen max-w-full flex-col justify-center gap-10">
      {/* Logo */}
      <img src={Logo} alt="handyhyve logo" className="w-48 h-auto" />
      {/* Payment Container */}
      <div className="px-6 py-8 border-2 max-w-xl w-full border-gray-200 rounded-2xl flex flex-col justify-center gap-4">
        {/* title */}
        <h2 className="font-medium text-center font-poppins text-lg text-gray-700 tracking-tight">
          Select payment method
        </h2>

        {/* Payment methods boxes */}
        <div className="flex flex-row gap-3 items-center justify-center">
          <button
            type="button"
            aria-pressed={selected === "mastercard"}
            onClick={() => setSelected("mastercard")}
            className={`bg-[#F8F8F8] w-28 h-20 rounded-md cursor-pointer flex items-center justify-center transition-shadow ${
              selected === "mastercard"
                ? "border-2 border-[#4F46E5] shadow-sm"
                : "border border-transparent"
            }`}
          >
            <img src={MasterCard} alt="Mastercard Icon" className="w-16" />
          </button>

          <button
            type="button"
            aria-pressed={selected === "gpay"}
            onClick={() => setSelected("gpay")}
            className={`bg-[#F8F8F8] w-28 h-20 rounded-md cursor-pointer flex items-center justify-center transition-shadow ${
              selected === "gpay"
                ? "border-2 border-[#4F46E5] shadow-sm"
                : "border border-transparent"
            }`}
          >
            <img src={Gpay} alt="GPay Icon" className="w-16" />
          </button>

          <button
            type="button"
            aria-pressed={selected === "applepay"}
            onClick={() => setSelected("applepay")}
            className={`bg-[#F8F8F8] w-28 h-20 rounded-md cursor-pointer flex items-center justify-center transition-shadow ${
              selected === "applepay"
                ? "border-2 border-[#4F46E5] shadow-sm"
                : "border border-transparent"
            }`}
          >
            <img src={ApplePay} alt="Apple Pay Icon" className="w-16" />
          </button>
        </div>

        {/* Payment summary boxes */}
        <div className="bg-[#f8f8f8] py-10 px-6 w-full flex flex-col rounded-md gap-3">
          {/* Services */}
          <div className="flex justify-between gap-3 items-center">
            <p className="text-md font-semibold tracking-tight font-poppins text-gray-700">
              Service
            </p>
            <p className="text-md font-medium tracking-tight font-poppins text-gray-700">
            {bookingDetails.serviceName}
            </p>
          </div>
          {/* Services */}
          <div className="flex justify-between gap-3 items-center">
            <p className="text-md font-semibold tracking-tight font-poppins text-gray-700">
              Price
            </p>
            <p className="text-md font-semibold tracking-tight font-poppins  text-gray-700">
              💰 ${bookingDetails.price}
            </p>
          </div>
          {/* Services */}
          <div className="flex justify-between gap-3 items-center">
            <p className="text-md font-semibold  font-poppins text-gray-700">
              Status
            </p>
            <div className="bg-yellow-100 py-1 px-4 rounded-full">
              <p className="text-md tracking-tight font-poppins font-medium text-yellow-800">
                Pending
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div>
          <Button
            text="Pay Now"
            fontSize="text-sm"
            size="md"
            color="black"
            fullWidth={true}
          />
        </div>
        {/*  */}
      </div>

      {/* Optimized Back button: accessible, uses navigate to specific booking or history */}
      <button
        type="button"
        onClick={handleBack}
        aria-label="Back to service"
        className="mt-4 inline-flex items-center gap-2 text-md tracking-tight text-brand font-medium underline focus:outline-none focus:ring-2 focus:ring-brand rounded px-2 py-1"
      >
        <ArrowLeftCircle size={18} />
        Back to service
      </button>
    </div>
  );
};

export default BookingPayment;
