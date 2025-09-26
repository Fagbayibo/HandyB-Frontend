import LoginImage from "../assets/images/LogRight.png";
import MainLogo from "../assets/images/HandyLogo.png";
import GoogleIcon from "../assets/images/google.png";
import AppleIcon from "../assets/images/apple.png";
import FacebookIcon from "../assets/images/facebook.png";

export default function Login() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   const form = new FormData(e.target);

  //   try {
  //     await Login(form);
  //             //redirect
  //     Navigate("/dashboard");
  //   } catch (err) {
  //     setError(err.message || "Login failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-poppins">
      {/* Left Section (Form) */}
      <div className="w-1/2 overflow-y-auto p-8 flex flex-col mt-14 space-y-3">
        <div className="flex items-center flex-col">
          <img src={MainLogo} alt="logo" className="w-36" />
          {/* LoginHeader Textt */}
          <div className="space-y-2 text-center">
            <h2 className="text-[28px] font-medium tracking-tighter">Create Your Account</h2>
            <p className="tracking-tight px-[120px] text-[16px] ">Book trusted home services, track rewards, and manage everything in one place.</p>
          </div>
          {/* Oauth Login Credentials */}
          <div className="flex items-center space-x-4 mt-5 px-6 bg-lightgray py-2 rounded-full">
            <p className="text-[16px] font-medium tracking-tight text-gray-600">Continue with</p>
            <div className="flex items-center justify-center space-x-4">
              {/* Google */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={GoogleIcon} alt="google icon" className="w-10" />
              </div>
              {/* Google */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={AppleIcon} alt="google icon" className="w-8" />
              </div>
              {/* Google */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src={FacebookIcon} alt="google icon" className="w-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Form Fieldd */}
        <div className="px-20 mt-4">
          <form action="" className="flex flex-col space-y-8 ">
            {/* Full Name */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="h-12 w-full rounded-full border border-inputborder bg-white pl-6 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
            </div>
            {/* Email address */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Email Address</label>
              <input type="email" placeholder="Enter your email" className="h-12 w-full rounded-full border border-inputborder bg-white pl-6 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
            </div>
            {/* Email address */}
            <div className="flex flex-col space-y-2 w-[480px]">
              <label className="font-medium tracking-tight text-md">Email Address</label>
              <input type="email" placeholder="Enter your email" className="h-12 w-full rounded-full border border-inputborder bg-white pl-6 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
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
