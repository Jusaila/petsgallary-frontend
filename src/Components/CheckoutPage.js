import React, { useState } from 'react';
import { Link } from "react-router-dom";


const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [sameAddress, setSameAddress] = useState(true);

  const orderItems = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur',
      packaging: '38g',
      quantity: 1,
      price: 550
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur',
      packaging: '38g',
      quantity: 1,
      price: 550
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur',
      packaging: '38g',
      quantity: 1,
      price: 550
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7]">

    <div className="max-w-8xl p-4 px-[98px]">
      <div className="mb-6">
        <Link to="/cart">
        <button className="text-gray-600 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        </Link>
      </div>
      
      <h1 className="text-5xl font-semibold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Delivery Address */}
            <section>
              <h2 className="text-2xl font-medium mb-4">Delivery address</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="City"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500 placeholder-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="Street"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="Country"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input 
                  type="text" 
                  placeholder="House/Flat/Floor No"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="Zip Code"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
              </div>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Contact Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
                <input 
                  type="tel" 
                  placeholder="Phone"
                  className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                />
              </div>
            </section>

            {/* Billing Address */}
            <section>
              <h2 className="text-xl font-medium mb-3">Billing Address</h2>
              <label className="flex items-center space-x-2">
              <input 
              type="checkbox" 
              className="w-4 h-4 accent-[#ea783f]"
            />
                <span>Same as delivery address</span>
              </label>
            </section>

            {/* Payment Details */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Payment Details</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="w-4 h-4 accent-[#FF9B6A] focus:ring-0 focus:outline-none"
                  
                  />
                  <span>Credit or Debit card</span>
                </label>

                {paymentMethod === 'card' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                      type="text" 
                      placeholder="Card Holder Name"
                      className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Card Number"
                      className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                      />
                      <input 
                        type="text" 
                        placeholder="CVV"
                        className="bg-[#F5F6ED] p-3 rounded-2xl placeholder-gray-500"
                      />
                    </div>
                  </div>
                )}

                <label className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-4 h-4 accent-[#FF9B6A]"
                  />
                  
                  <span>Cash on delivery</span>
                </label>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full md:w-115">
        <div className="bg-[#F5F6ED] p-6 rounded">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-500 pb-6">Order Summary</h2>
          
          {/* Product Items */}
          <div className="space-y-4 mb-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-gray-500 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded">
                  <img
                    src="/envato-labs-image-edit (8) 1.png"
                    alt="Product"
                    className="object-contain w-12 h-10"
                />
                  </div>
                  <div>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur</p>
                    <p className="text-sm text-gray-500">Packaging 38g</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span>1</span>
                  <span>₹550</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Details */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className='text-gray-500'>Order Price</span>
              <span>₹1650</span>
            </div>
            <div className="flex justify-between">
              <span className='text-gray-500'>Discount</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between">
              <span className='text-gray-500'>Promo Code</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between border-b border-gray-500 pb-3">
              <span className='text-gray-500'>GST</span>
              <span>₹15</span>
            </div>
            <div className="flex justify-between font-semibold pt-3">
              <span className='text-gray-500'>Total</span>
              <span>₹1665</span>
            </div>
          </div>

          <button className="w-full bg-[#FF9B57] text-white py-3 rounded-full mt-6">
            Pay
          </button>
        </div>
      </div>
    </div>
    </div>


    </div>
  );
};

export default CheckoutPage;