import React from "react";
import { FluentSwimmingPool } from "../../components/FluentSwimmingPool";
import { GameIconsFuelTank } from "../../components/GameIconsFuelTank";
import { MaterialSymbols } from "../../components/MaterialSymbols";
import { MdiPipe } from "../../components/MdiPipe";

export const DivWrapper = () => {
  return (
    <div className="inline-flex items-center gap-[139px] absolute top-[488px] left-[303px]">
      <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-px relative flex-[0_0_auto]">
          <div className="relative w-[188px] h-[42px] bg-black rounded-[81px] overflow-hidden">
            <div className="absolute top-[11px] left-[calc(50.00%_-_44px)] [font-family:'Poppins',Helvetica] font-medium text-white text-sm text-center tracking-[-0.56px] leading-[normal]">
              Plumbing Services
            </div>

            <div className="absolute top-0 left-0 w-[45px] flex items-center justify-center bg-[#253cfe] h-[42px] rounded-[81px] overflow-hidden">
              <MdiPipe className="!ml-px ![position:unset] !left-[unset] !top-[unset]" />
            </div>
          </div>

          <div className="relative w-[188px] bg-[#f9f9f9] h-[42px] rounded-[81px] overflow-hidden">
            <div className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_42px)] [font-family:'Poppins',Helvetica] font-medium text-black text-sm text-center tracking-[-0.56px] leading-[normal]">
              Electrical Services
            </div>

            <div className="absolute top-0 left-0 w-[45px] flex bg-white h-[42px] rounded-[81px] overflow-hidden">
              <MaterialSymbols className="!mt-[9px] !ml-[11px] ![position:unset] !left-[unset] !top-[unset]" />
            </div>
          </div>

          <div className="relative w-[161px] h-[42px] bg-[#f9f9f9] rounded-[81px] overflow-hidden">
            <div className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_26px)] [font-family:'Poppins',Helvetica] font-medium text-black text-sm text-center tracking-[-0.56px] leading-[normal]">
              Pool Services
            </div>

            <div className="absolute top-0 left-0 w-[45px] h-[42px] flex items-center justify-center bg-white rounded-[81px] overflow-hidden">
              <FluentSwimmingPool className="!ml-px ![position:unset] !left-[unset] !top-[unset]" />
            </div>
          </div>

          <div className="relative w-[203px] h-[42px] bg-[#f9f9f9] rounded-[81px] overflow-hidden">
            <div className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_52px)] [font-family:'Poppins',Helvetica] font-medium text-black text-sm text-center tracking-[-0.56px] leading-[normal]">
              Water Tank Cleaning
            </div>

            <div className="absolute top-0 left-0 w-[45px] h-[42px] flex items-center justify-center bg-white rounded-[81px] overflow-hidden">
              <GameIconsFuelTank className="!ml-px ![position:unset] !left-[unset] !top-[unset]" />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-sm text-center tracking-[-0.56px] leading-[normal]">
            &amp;
          </div>

          <div className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-black leading-[normal] underline relative w-fit font-medium text-sm text-center tracking-[-0.56px]">
            More
          </div>
        </div>
      </div>
    </div>
  );
};
