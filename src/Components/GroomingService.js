import React from 'react'
import { ArrowRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function GroomingServices() {
  return (
    <div className="bg-[#f6f6eb] px-4 sm:px-6 md:px-12 lg:px-[80px] rounded-lg mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 w-full">
        <h2 className="text-4xl lg:text-5xl mb-6">
          Grooming <br/>
          Services<br/> 
          We Provide
        </h2>
        <div className="bg-white p-4 rounded-xl shadow-md">
          {[
            "Pet Medical Administration",
            "Overnight Pet Care",
            "Puppy Day Care",
            "Training Through Goodpup",
            "Pets House Sitting",
          ].map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b-2 border-black"
            >
              <span className="text-lg font-medium">{service}</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center text-center py-6 md:py-0">
        <div className="bg-[#FF9B57] p-0 rounded-2xl">
          <img
            src="/envato-labs-image-edit (9) 1.png"
            alt="Dog and owner"
            className="rounded-lg h-auto sm:h-[450px] md:h-[500px] lg:h-[590px] object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1 pl-0 ml-0 pt-0 mt-0">
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Mauris vitae faucibus ultricies turpis aliquam viverra fermentum purus at. Facilisis malesuada elit egestas duis amet feugiat. Ipsum mattis blandit morbi lacus.
        </p>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Mauris vitae faucibus ultricies turpis aliquam viverra fermentum purus at. Facilisis malesuada elit egestas duis amet feugiat. Ipsum mattis blandit morbi lacus.
          Lorem ipsum dolor sit amet consectetur. Mauris vitae faucibus ultricies turpis aliquam viverra fermentum purus at. Facilisis malesuada elit egestas duis amet feugiat. Ipsum mattis blandit morbi lacus.
        </p>
        
        {/* Booking Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm h-[227px] w-full sm:w-[327px]">
          <h3 className="text-xl font-semibold">Book Grooming<br/>Section</h3>
          <div className='flex justify-between items-center mb-auto mt-20'>
            <p className="text-sm text-gray-500 mt-1">From Our Specialist</p>
            <div className="flex justify-end mt-4">
              <div className="bg-orange-200 p-2 rounded-full">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
