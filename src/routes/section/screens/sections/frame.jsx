import React from "react";
import { FluentChat } from "../../components/FluentChat";
import { FluentPayment } from "../../components/FluentPayment";
import { GrommetIcons } from "../../components/GrommetIcons";

export const Frame = () => {
  return (
    <div className="absolute top-0 left-0 w-[243px] h-[819px] bg-[linear-gradient(180deg,rgba(37,60,254,1)_0%,rgba(10,41,119,1)_100%)]">
      <div className="absolute top-[152px] left-[calc(50.00%_-_88px)] [font-family:'Mona_Sans',Helvetica] font-semibold text-[#ffffffc7] text-sm text-center tracking-[-0.14px] leading-[22px] whitespace-nowrap">
        MAIN MENU
      </div>

      <div className="absolute top-[195px] left-4 w-[196px] h-[232px] flex flex-col gap-3.5">
        <div className="w-[196px] h-[45px] flex bg-white rounded-[9px] overflow-hidden">
          <div className="flex mt-2 w-[129.5px] h-7 ml-[13px] relative items-center gap-3.5">
            <img
              className="relative w-7 h-7"
              alt="Material symbols"
              src="https://c.animaapp.com/mfphyobjPEFu2V/img/material-symbols-dashboard-rounded.svg"
            />

            <div className="relative w-[87.5px] [font-family:'Mona_Sans',Helvetica] font-bold text-[#253cfe] text-base text-center tracking-[-0.64px] leading-[22px]">
              Dashboard
            </div>
          </div>
        </div>

        <div className="flex ml-[13px] w-[129.5px] h-[173px] relative flex-col items-start gap-[21px]">
          <div className="flex items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <GrommetIcons className="!relative !left-[unset] !top-[unset]" />
            <div className="relative w-[87.5px] [font-family:'Mona_Sans',Helvetica] font-medium text-white text-base tracking-[-0.64px] leading-[22px]">
              Services
            </div>
          </div>

          <div className="flex items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-7 h-7"
              alt="Mingcute task fill"
              src="https://c.animaapp.com/mfphyobjPEFu2V/img/mingcute-task-fill.svg"
            />

            <div className="relative w-[87.5px] [font-family:'Mona_Sans',Helvetica] font-medium text-white text-base tracking-[-0.64px] leading-[22px]">
              Bookings
            </div>
          </div>

          <div className="flex items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <FluentChat className="!relative !left-[unset] !top-[unset]" />
            <div className="relative w-[87.5px] [font-family:'Mona_Sans',Helvetica] font-medium text-white text-base tracking-[-0.64px] leading-[22px]">
              Chat
            </div>
          </div>

          <div className="flex items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <FluentPayment className="!relative !left-[unset] !top-[unset]" />
            <div className="relative w-[87.5px] [font-family:'Mona_Sans',Helvetica] font-medium text-white text-base tracking-[-0.64px] leading-[22px]">
              Payments
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-[5px] absolute top-[758px] left-[calc(50.00%_-_42px)]">
        <img
          className="relative w-6 h-6"
          alt="Basil logout solid"
          src="https://c.animaapp.com/mfphyobjPEFu2V/img/basil-logout-solid.svg"
        />

        <div className="relative w-fit [font-family:'Mona_Sans',Helvetica] font-semibold text-white text-sm tracking-[-0.28px] leading-[normal]">
          Log out
        </div>
      </div>

      <img
        className="absolute top-[51px] left-[35px] w-[146px] h-[38px] object-cover"
        alt="Jackal white"
        src="https://c.animaapp.com/mfphyobjPEFu2V/img/jackal-white-1.png"
      />

      <div className="inline-flex items-center gap-10 absolute top-0 left-[37px]">
        <img
          className="relative w-px h-[819px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mfphyobjPEFu2V/img/line-7.svg"
        />

        <img
          className="relative w-px h-[819px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mfphyobjPEFu2V/img/line-7.svg"
        />

        <img
          className="relative w-px h-[819px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mfphyobjPEFu2V/img/line-10.svg"
        />

        <img
          className="relative w-px h-[819px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mfphyobjPEFu2V/img/line-10.svg"
        />

        <img
          className="mr-[-1.00px] relative w-px h-[819px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mfphyobjPEFu2V/img/line-10.svg"
        />
      </div>
    </div>
  );
};
