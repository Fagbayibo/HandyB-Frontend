import React from 'react'
import Bell from "../../assets/icons/Notification.png"

const Notification = () => {
  return (
    <div className='relative bg-[#F3F3F3] w-14 h-14 rounded-full flex items-center justify-center'>
      <img src={Bell} alt="Notification" className='w-8' />
      <div className='p-1.5 rounded-full bg-red-500 absolute top-3 right-3'></div>
    </div>
  )
}

export default Notification