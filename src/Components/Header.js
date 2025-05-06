import React from 'react'
import { Phone, MapPin } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-[#FF9B57] h-12 flex items-center px-[80px]">
      <div className="flex items-center text-black space-x-4 ml-auto">
        <div className="flex items-center space-x-1 mr-4">
          <MapPin size={16} className="sm:size-20 md:size-24" />  {/* Responsive icon size */}
          <span className="text-xs sm:text-sm md:text-base">UAE</span>  {/* Responsive font size */}
        </div>
        <div className="flex items-center space-x-1">
          <Phone size={16} className="sm:size-20 md:size-24" />  {/* Responsive icon size */}
          <span className="text-xs sm:text-sm md:text-base">+971 56 418 0500
          </span>  {/* Responsive font size */}
        </div>
        <div className="flex items-center space-x-1">
          {/* You can add any other content here */}
        </div>
      </div>
    </header>
  )
}

export default Header



