import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector(store => store.cart.items);
  
  return (
    <header className="bg-white shadow-md w-full">
      {/* Main Navbar */}
      <div className="h-24 px-4 lg:px-20 mx-auto max-w-7xl flex items-center">
        {/* Mobile Layout */}
        <div className="w-full flex justify-between items-center lg:hidden">
          {/* Menu Button */}
          <button 
            className="flex items-center p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-black" />
            )}
          </button>

          {/* Centered Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img src="/logopng1.png" alt="Logo" className="h-20 w-auto" />
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button className="flex hover:text-gray-600 transition-colors">
              <Heart size={26} />
            </button>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={26} className="text-black hover:text-gray-600 transition-colors" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/profile" className="flex hover:text-gray-600 transition-colors">
  <User size={26} />
</Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logopng1.png" alt="Logo" className="h-30 w-30" />
          </Link>

          <nav className="flex items-center gap-8 ml-8">
            <Link to="/" className="text-black font-medium hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link to="/store" className="text-black font-medium hover:text-gray-600 transition-colors">
              Store
            </Link>
            <Link to="/grooming" className="text-black font-medium hover:text-gray-600 transition-colors">
              Grooming
            </Link>
            <Link to="/contact" className="text-black font-medium hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <button className="flex hover:text-gray-600 transition-colors">
              <Heart size={26} />
            </button>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={26} className="text-black hover:text-gray-600 transition-colors" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            {/* profile login register */}

            {/* <div className="flex flex-row space-x-4 items-center">
            <Link to="/profile" className="flex hover:text-gray-600 transition-colors">
              <User size={26} />
            </Link>
            <div className="flex space-x-2">
              <Link to="/login" className="hover:text-gray-600 transition-colors">Login</Link>
              <span>/</span>
              <Link to="/register" className="hover:text-gray-600 transition-colors">Register</Link>
            </div>
          </div> */}

            <Link to="/user" className="flex hover:text-gray-600 transition-colors">
  <User size={26} />
</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed top-24 left-0 w-64 h-[calc(100vh-6rem)] bg-white transform transition-transform duration-300 ease-in-out z-50 shadow-lg ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col py-4">
          <Link 
            to="/" 
            className="px-6 py-4 text-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/store" 
            className="px-6 py-4 text-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Store
          </Link>
          <Link 
            to="/grooming" 
            className="px-6 py-4 text-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Grooming
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-4 text-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;