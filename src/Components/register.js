"use client";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-0">
      <div className="flex w-full h-auto min-h-screen md:h-screen flex-col md:flex-row overflow-auto rounded-none bg-white p-4">
        {/* Left Image Section - Hidden on mobile, 60% width on larger screens */}
        <div className="hidden md:block md:w-3/5">
          <img
            src="/login.png"
            alt="Girl with puppies"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Right Form Section - Full width on mobile, 40% width on larger screens */}
        <div className="w-full md:w-2/5 p-4 md:p-14 flex flex-col justify-center">
          <div className="flex justify-center ">
          <div className="h-30 w-30 rounded-md flex items-center justify-center">
              <img src="/logo png 1.png" alt="Register Icon" className="h-25 w-25 text-white" />
            </div>
          </div>

          <h2 className="text-center text-xl font-bold text-gray-900">Create an Account</h2>
          <p className="mt-1 text-center text-xs text-gray-500">
            Please fill in the details to create your account
          </p>

          <div className="mt-4 space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Phone Number Input with Country Code */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700">
                Phone Number
              </label>
              <div className="flex mt-1">
                <select
                  id="countryCode"
                  className="rounded-l-md border border-gray-300 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 border-r-0"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+61">+61</option>
                  <option value="+86">+86</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33</option>
                  <option value="+81">+81</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="flex-1 rounded-r-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs text-gray-700 font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs text-gray-700 font-semibold">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button className="w-full rounded-full bg-orange-500 py-1.5 text-white font-medium hover:bg-orange-600">
              Register
            </button>

            <p className="mt-2 text-center text-xs text-gray-500">
              Already have an account?{" "}

<Link to="/user" className="text-orange-500 hover:underline">
  Login Here
</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}