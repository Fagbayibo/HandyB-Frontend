import { GoArrowLeft } from "react-icons/go";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const BookService = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const serviceFromState = location.state?.service ?? null;
  const [service, setService] = useState(serviceFromState);

  // form state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [notes, setNotes] = useState("");

  // sample existing addresses (replace with actual user addresses later)
  const [addresses, setAddresses] = useState([
    { id: "addr_1", label: "Home — 12 Rose St, Apt 2", value: "12 Rose St, Apt 2" },
    { id: "addr_2", label: "Work — 45 Park Ave", value: "45 Park Ave" },
  ]);

  useEffect(() => {
    if (!serviceFromState) {
      // placeholder for future fetch
    }
  }, [id, serviceFromState]);

  // when user picks an existing address populate the address input
  useEffect(() => {
    if (selectedAddress) {
      const found = addresses.find((a) => a.id === selectedAddress);
      if (found) setAddress(found.value);
    }
  }, [selectedAddress, addresses]);

  const handleAddAddress = () => {
    const newAddr = window.prompt("Enter new address (street, city, ...):");
    if (newAddr && newAddr.trim()) {
      const newItem = {
        id: `addr_${Date.now()}`,
        label: `Saved — ${newAddr}`,
        value: newAddr.trim(),
      };
      setAddresses((s) => [newItem, ...s]);
      setSelectedAddress(newItem.id);
    }
  };

  // safe guard: show friendly fallback when no service object is provided
  if (!service) {
    return (
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <GoArrowLeft className="text-gray-700" />
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 text-sm font-medium"
          >
            Back
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Service details unavailable</h2>
        <p className="text-gray-600 mb-4">
          Open this page by clicking a service card from the Services list.
        </p>
        <Link to="/dashboard/services" className="text-blue-600 underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-full min-h-screen p-4 sm:p-6">
      {/* back to service */}
      <div className="mb-4">
        <Link
          to="/dashboard/services"
          aria-label="Back to services"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <GoArrowLeft className="text-gray-600" />
          <span className="leading-none">Back to services</span>
        </Link>
      </div>

      {/* Book service title and details */}
      <div className="flex flex-col lg:flex-row mt-8 gap-6">
        {/* left */}
        <div className="space-y-2 w-full lg:w-2/5">
          <h2 className="text-xl font-poppins tracking-tight font-semibold text-gray-800">
            Book Service
          </h2>
          <p className="font-poppins text-base tracking-tight text-gray-600">
            Complete the form below to book your service
          </p>
        </div>

        {/* Right */}
        <div className="bg-brand/6 py-4 sm:py-6 flex w-full lg:w-3/5 px-4 sm:px-8 rounded-lg gap-3 items-start">
          {/* icon */}
          <div className="bg-brand p-2 rounded-xl flex items-center justify-center flex-shrink-0">
            <MdMiscellaneousServices size={36} className="text-white" />
          </div>
          {/* text */}
          <div className="space-y-2 w-full">
            {/* title and price */}
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-semibold tracking-tight font-poppins text-gray-700 text-lg sm:text-xl break-words">
                {service.name}
              </h2>
              <p className="text-sm sm:text-base">💰 ${service.price}</p>
            </div>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Booking details form - reduced width container */}
      <div className="mt-8 w-full mx-auto px-2 sm:px-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left column: contact + address */}
          <div className="space-y-4">
            <div>
              <label className="font-medium text-sm block mb-2">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-12 w-full rounded-xl border pl-6 pr-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none transition border-inputborder focus:border-blue-500 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="font-medium text-sm block mb-2">Phone number</label>
              {/* wrapper matches signup input styling (border, height, rounded) */}
              <div className="h-12 w-full rounded-xl border pl-3 pr-3 flex items-center">
                <PhoneInput
                  placeholder="Enter your phone number"
                  defaultCountry="US"
                  value={phone}
                  onChange={setPhone}
                  className="w-full"
                  inputClassName="h-full w-full pl-3 pr-2 text-sm sm:text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-medium text-sm block mb-2">Address</label>
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setSelectedAddress(""); // clear selection when editing
                }}
                placeholder="Enter Address"
                className="h-12 w-full rounded-xl border pl-6 pr-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none transition border-inputborder focus:border-blue-500 focus:ring-blue-200"
              />

              {/* existing addresses dropdown + add new button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-3">
                <select
                  value={selectedAddress}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                  className="h-10 rounded-xl border pl-3 pr-3 bg-white text-sm text-gray-700 outline-none w-full sm:w-3/4"
                >
                  <option value="">Select existing address</option>
                  {addresses.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.label}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={handleAddAddress}
                  className="h-10 w-full sm:w-auto px-4 rounded-xl bg-white text-sm font-medium border"
                >
                  Add address
                </button>
              </div>
            </div>
          </div>

          {/* Right column: date/time, notes, submit */}
          <div className="space-y-4">
            <div>
              <label className="font-medium text-sm block mb-2">Date & Time</label>
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="h-12 w-full rounded-xl border pl-6 pr-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none transition border-inputborder focus:border-blue-500 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="font-medium text-sm block mb-2">Additional Notes</label>
              <textarea
                placeholder="Any specific requests or questions"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-xl border p-4 text-sm text-gray-700 placeholder-gray-400 outline-none transition border-inputborder focus:border-blue-500 focus:ring-blue-200"
                rows={6}
              />
            </div>

            <div className="flex flex-col items-stretch">
              <p className="text-sm text-gray-500 mb-3">
                <span className="mr-2">i</span> Optional: Add any specific requirements or questions
              </p>
              <button
                type="button"
                onClick={() => {
                  // create booking payload
                  const payload = {
                    serviceId: service.id,
                    serviceName: service.name,
                    price: service.price,
                    email,
                    phone,
                    address,
                    dateTime,
                    notes,
                  };
                  navigate(`/booking/${id}/payment`, { state: { booking: payload } });
                }}
                className="w-full py-3 bg-black text-white rounded-md font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Booking details */}
      <div className="flex"></div>
    </div>
  );
};

export default BookService;
