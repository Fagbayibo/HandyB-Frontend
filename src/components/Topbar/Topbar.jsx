import React from 'react'
import SearchBar from '../ui/SearchBar'

const Topbar = () => {
  return (
    <div className='h-full bg-white border-b-2 border-lightgray px-10 flex items-center'>
      {/* Search Bar */}
      <SearchBar/>
    </div>
  )
}

export default Topbar