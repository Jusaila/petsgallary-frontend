import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Side - Image (Hidden on Small Screens) */}
      <div className="hidden md:flex md:w-1/2 lg:w-2/3 h-screen items-center justify-center p-4">
        <img
          src="/login.png"
          alt="Person holding puppies"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center px-6 sm:px-10 py-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo png 1.png" alt="Company Logo" className="w-16 h-16 object-contain" />
          </div>

          {/* Welcome Text */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Please enter your credentials to access your account</p>
          </div>

          {/* Login Form */}
          <form>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 mt-1 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center mb-3 sm:mb-0">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-800">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline text-center sm:text-left">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center mb-4">
              <div className="flex-grow h-[1px] bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-[1px] bg-gray-300"></div>
            </div>

            {/* Google Login */}
            <button className="w-full flex items-center justify-center border border-gray-800 rounded-full py-2 hover:bg-gray-100 transition">
              <img src="/Google.png" alt="Google Icon" className="w-5 h-5 mr-2" />
              <span className="text-gray-800 font-medium">Login with Google</span>
            </button>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-800">
                Don't have an account? 
                <Link to="/register" className="ml-1 text-blue-600 hover:underline">
                  Create an Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
