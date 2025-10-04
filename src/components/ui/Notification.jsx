import React from 'react';
import Bell from "../../assets/icons/Notification.png";

const Notification = () => {
  return (
    <div 
      className='relative bg-[#F3F3F3] cursor-pointer
                 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                 rounded-full flex items-center justify-center
                 flex-shrink-0 '>
      <img 
        src={Bell} 
        alt="Notification" 
        className='w-5 sm:w-6 md:w-8' 
      />
      <div 
        className='absolute bg-red-500 rounded-full 
                   p-1 sm:p-1.5 
                   top-2 right-2 sm:top-2.5 sm:right-2.5 md:top-3 md:right-3'>
      </div>
    </div>
  );
};

export default Notification;
