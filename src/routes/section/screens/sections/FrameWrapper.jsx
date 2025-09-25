import React from "react";
import { RaphaelNo } from "../../components/RaphaelNo";

export const FrameWrapper = () => {
  return (
    <div className="absolute top-[234px] left-[303px] w-[405px] h-[170px] bg-[#253cfe] rounded-[10px] overflow-hidden">
      <img
        className="absolute -top-10 left-[-21px] w-[520px] h-[216px]"
        alt="Vector"
        src="https://c.animaapp.com/mfphyobjPEFu2V/img/vector-1.svg"
      />

      <div className="flex w-10 h-10 items-center gap-2.5 p-1 absolute top-4 left-[calc(50.00%_-_20px)] bg-white rounded-[20px]">
        <RaphaelNo className="!relative !left-[unset] !top-[unset]" />
      </div>

      <div className="absolute top-[66px] left-[calc(50.00%_-_66px)] [font-family:'Poppins',Helvetica] font-medium text-white text-sm text-center tracking-[-0.70px] leading-[normal]">
        NO ACTIVE BOOKING
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 absolute top-[116px] left-[147px] bg-white rounded border border-solid">
        <div className="relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-xs text-center tracking-[-0.60px] leading-[normal]">
          Book a service
        </div>
      </div>

      <p className="absolute top-[86px] left-[calc(50.00%_-_146px)] [font-family:'Poppins',Helvetica] font-normal text-white text-xs text-center tracking-[-0.48px] leading-[normal]">
        No active bookings yet. Find trusted help in minutes.
      </p>
    </div>
  );
};
