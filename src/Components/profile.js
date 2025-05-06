import React, { useState } from 'react';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: 'male'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigationItems = [
    { title: 'General', active: true },
    { title: 'My Orders', active: false },
    { title: 'My Coupons', active: false },
    { title: 'All Notification', active: false },
    { title: 'My Wishlist', active: false }
  ];

  return (
    <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm max-w-5xl mx-auto">
      {/* Left sidebar */}
      <div className="w-48 bg-white rounded-lg p-4 mr-4 flex flex-col justify-between">
        {/* User info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-white font-medium mr-2">
              AH
            </div>
            <div>
              <p className="text-sm font-medium">Abid Hussain</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <div 
                key={index} 
                className={`py-2 px-1 text-sm border-b border-gray-100 ${item.active ? 'text-orange-400' : 'text-gray-500'}`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        
        {/* Logout */}
        <div className="mt-4">
          <button className="text-sm text-gray-700">Logout</button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Personal Information</h2>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </div>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-1"
                />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-1"
                />
                <span className="text-sm">Female</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;