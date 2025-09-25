import React from "react";

export const ImgWrapper = ({ className }) => {
  return (
    <img
      className={`absolute top-0 left-0 w-[17px] h-[17px] ${className}`}
      alt="Material symbols"
    />
  );
};
