import React from "react";

const Button = ({
  text = "Button",
  size = "md",
  color = "blue",
  icon, // can be a React component or image URL
  iconPosition = "left", // left or right
  fullWidth = false,
  disabled = false,
  onClick,
  iconSize = "w-5 h-5", // Tailwind classes for icon size
  fontSize, // optional Tailwind font size override
}) => {
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    black: "bg-black hover:bg-gray-900 text-white",
    gray: "bg-gray-400 hover:bg-gray-500 text-white",
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <img src={icon} alt="icon" className={`${iconSize}`} />;
    }
    const IconComponent = icon;
    return <IconComponent className={`${iconSize}`} />;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2 rounded font-semibold transition 
        ${sizeClasses[size]} 
        ${fontSize ? fontSize : ""} 
        ${colorClasses[color]} 
        ${fullWidth ? "w-full" : "w-auto"} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {text}
      {icon && iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button;
