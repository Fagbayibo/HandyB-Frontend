import React from "react";

export const MaterialSymbolsWrapper = ({ className }) => {
  return (
    <img
      className={`absolute top-0 left-0 w-[18px] h-[18px] ${className}`}
      alt="Material symbols"
    />
  );
};
