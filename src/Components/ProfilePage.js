import React, { useState } from 'react';
import { Edit, ChevronRight } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("General");

  const menuItems = [
    "General",
    "My Orders",
    "My Coupons",
    "All Notification",
    "My Wishlist",
  ];

  return (
    <div className="bg-[#f7f7ee] min-h-screen p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl">
        <div className="flex flex-col md:flex-row">
          
          {/* Sidebar - ONLY visible on desktop */}
          <div className="hidden md:block md:w-1/4 bg-[#f7f7ee] p-8 m-2 rounded-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                AH
              </div>
              <span className="font-semibold">Abid Hussain</span>
            </div>
            
            {/* Navigation Menu */}
            <nav>
              <ul className="space-y-6">
                <li>
                  <a href="#" className="text-orange-500 border-b border-orange-500 pb-1 block">
                    General
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 border-b border-gray-300 hover:text-orange-500 block">
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 border-b border-gray-300 hover:text-orange-500 block">
                    My Coupons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 border-b border-gray-300 hover:text-orange-500 block">
                    All Notification
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 border-b border-gray-300 hover:text-orange-500 block">
                    My Wishlist
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Logout Button */}
            <div className="mt-auto p-1">
            <button className="w-full py-2 bg-white border border-gray-200 rounded-xl text-gray-800 hover:bg-gray-50 mt-12 items-end">
              Logout
            </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4 p-4 lg:p-20">
            {/* Mobile Header - Only visible on small screens */}
            <div className="md:hidden flex items-center justify-between mb-4 pb-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                  AH
                </div>
                <span className="font-semibold">Abid Hussain</span>
              </div>
              <button className="text-gray-600 bg-[#f7f7ee] p-1 rounded-md">Logout</button>
            </div>
            
            {/* Mobile Navigation - Only visible on small screens */}
            <div className="md:hidden flex items-center space-x-5 text-sm mb-6 overflow-x-auto pb-2 border-b">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setActiveTab(item)}
                    className={`whitespace-nowrap pb-2 ${
                      activeTab === item
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600"
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            
            {/* Profile Info Section */}
            <div className='bg-white'>
              <div className="flex items-center justify-between mb-6 border-b border-gray-300">
                <h2 className="text-2xl font-semibold mb-3">Personal Information</h2>
                <button className="text-gray-500">
                  <Edit className="w-5 h-5" />
                </button>
              </div>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-600 mb-2 text-sm">First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-[#f7f7ee] border-none rounded focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2 text-sm">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-[#f7f7ee] border-none rounded focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-[#f7f7ee] border-none rounded focus:outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2 text-sm">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 bg-[#f7f7ee] border-none rounded focus:outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2 text-sm">Address</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-[#f7f7ee] border-none rounded focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-3 text-sm">Gender</label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        className="w-4 h-4 text-orange-500"
                      />
                      <label htmlFor="male" className="ml-2 text-gray-600">Male</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        className="w-4 h-4 text-orange-500"
                      />
                      <label htmlFor="female" className="ml-2 text-gray-600">Female</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;