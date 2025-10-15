import React, { useEffect, useState } from "react";

export default function Notification({
  open,
  type = "success",
  message = "",
  onClose,
}) {
  // keep mounted during exit animation
  const [visible, setVisible] = useState(open);
  const [animState, setAnimState] = useState(open ? "entering" : "exited"); // entering | exiting | exited

  useEffect(() => {
    let timeout;
    if (open) {
      setVisible(true);
      // trigger enter in next frame so transitions apply
      requestAnimationFrame(() => setAnimState("entering"));
    } else if (visible) {
      setAnimState("exiting");
      // match duration below (ms)
      timeout = setTimeout(() => {
        setAnimState("exited");
        setVisible(false);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [open, visible]);

  if (!visible) return null;

  const bg = type === "success" ? "bg-green-500" : "bg-red-500";
  const text = "text-white";

  // animation classes
  const base =
    "fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-md w-full rounded-full shadow-md";
  const transition = "transform transition-all duration-300 ease-out";
  const enterFrom = "opacity-0 -translate-y-4 scale-95";
  const enterTo = "opacity-100 translate-y-0 scale-100";
  const exitTo = "opacity-0 translate-y-4 scale-95";

  let animClasses = "";
  if (animState === "entering") animClasses = `${transition} ${enterTo}`;
  else if (animState === "exiting") animClasses = `${transition} ${exitTo}`;
  else animClasses = `${transition} ${enterFrom}`; // initial

  return (
    <div
      className={`${base} ${bg} ${animClasses}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 p-4">
        <div className="flex-shrink-0 mt-0.5">
          {type === "success" ? (
            <svg
              className="w-7 h-7 text-green-500 p-1 rounded-2xl bg-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5 11.586a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 01-2 0V7zm1 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <p className={`text-md ${text} font-poppins font-medium`}>
            {type === "success" ? "Success" : "Error"}
          </p>
          <p className="text-sm text-white mt-1 break-words">{message}</p>
        </div>

        <button
          onClick={onClose}
          className="ml-3 text-xl text-white hover:text-gray-200"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
