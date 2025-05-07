"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-0">
      <div className="flex w-full h-auto min-h-screen md:h-screen flex-col md:flex-row overflow-hidden rounded-none bg-white p-4">
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
          {/* Logo - Centered on all screens */}
          <div className="flex justify-center ">
          <div className="h-30 w-30 rounded-md flex items-center justify-center">
              <img src="//logopng1.png" alt="Login Icon" className="h-25 w-25 text-white" />
            </div>
          </div>
          
          <h2 className="text-center text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Please enter your credentials to access your account
          </p>
          
          <div className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  id="remember" 
                  type="checkbox" 
                  className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-xs text-gray-700 font-semibold">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-xs text-orange-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="w-full rounded-full bg-orange-500 py-2 text-white font-medium hover:bg-orange-600">
              Login
            </button>
            
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-300 py-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              Login with Google
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Don't have an account?{' '}
              <Link to="/user/register" className="text-orange-500 hover:underline">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}