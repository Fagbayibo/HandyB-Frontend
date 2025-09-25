import React from "react";
import { EvaArrowDownFill } from "../../components/EvaArrowDownFill";
import { LetsIconsOrder } from "../../components/LetsIconsOrder";

export const Div = () => {
  return (
    <div className="absolute top-1.5 left-[242px] w-[1201px] h-[108px] flex bg-white border-b-[1.5px] [border-bottom-style:solid] border-[#f9f9f9]">
      <div className="inline-flex mt-[29px] w-[1056.5px] h-[51px] ml-[59px] relative items-center gap-[7px]">
        <div className="inline-flex items-center gap-[225px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[50px] relative flex-[0_0_auto]">
            <div className="relative w-[397px] h-[51px] bg-[#f3f3f3] rounded-[51px] overflow-hidden">
              <div className="absolute top-[7px] left-[9px] w-[37px] h-[37px] bg-black rounded-[18.5px]" />

              <img
                className="absolute top-4 left-4 w-5 h-5"
                alt="Gg search"
                src="https://c.animaapp.com/mfphyobjPEFu2V/img/gg-search.svg"
              />

              <div className="absolute top-3.5 left-[calc(50.00%_-_140px)] [font-family:'Mona_Sans',Helvetica] font-medium text-[#666666] text-[15px] text-center tracking-[-0.60px] leading-[22px] whitespace-nowrap">
                Search for any service...
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 px-[13px] py-[7px] relative flex-[0_0_auto] bg-black rounded-[5px]">
              <LetsIconsOrder className="!relative !left-[unset] !top-[unset]" />
              <div className="[font-family:'Mona_Sans',Helvetica] text-white leading-[22px] whitespace-nowrap relative w-fit font-medium text-sm text-center tracking-[-0.56px]">
                Place Booking
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-[13px] relative flex-[0_0_auto]">
            <div className="relative w-[50px] h-[50px] bg-[#f3f3f3] rounded-[25px]">
              <img
                className="absolute top-[11px] left-3 w-7 h-7"
                alt="Mingcute"
                src="https://c.animaapp.com/mfphyobjPEFu2V/img/mingcute-notification-fill.svg"
              />
            </div>

            <img
              className="relative w-[50px] h-[50px] object-cover"
              alt="Ellipse"
              src="https://c.animaapp.com/mfphyobjPEFu2V/img/ellipse-7.png"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-[87.5px] items-start relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-semibold text-[#2f2f2f] text-base tracking-[-0.16px] leading-[22px]">
              Billie Allen
            </div>

            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-[-3px]">
              <div className="relative w-[65px] mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-medium text-[#2f2f2f] text-xs tracking-[-0.12px] leading-[22px]">
                Active
              </div>
            </div>
          </div>

          <EvaArrowDownFill className="!relative !left-[unset] !top-[unset]" />
        </div>
      </div>
    </div>
  );
};
