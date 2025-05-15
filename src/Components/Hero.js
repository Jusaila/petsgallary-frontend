import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const Hero = () => {
    const floatingCards = [
        {
            id: 1,
            imgSrc: "/pet-grooming.png",
            title: "Pet Grooming That Feels Like a Spa Day",
            // description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            id: 2,
            imgSrc: "/pet-food.png",
            title: "Nourishing Pet Food for Every Breed and Need",
            // description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            id: 3,
            imgSrc: "/accessories.png",
            title: "Stylish & Practical Accessories",
            // description: "Lorem ipsum dolor sit amet consectetur.",
        },
    ];

    const images = ["8.png", "66.png", "55.png", "7.png"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-full overflow-hidden px-6 md:px-[80px] py-[80px] bg-[#F5F5EB]">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Left Section */}
                <div className="lg:col-span-5 flex flex-col space-y-6 h-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow flex flex-col justify-between">
                <h1 className="md:text-7xl font-bold leading-tight">
                    The Best Pet Shop <span className="inline-block align-middle">
                    <img src="/Group 9.png" alt="Cat" className="inline-block mx-4 w-18 h-16" />
                    </span> in Dubai
                </h1>
                <p className="text-gray-600 text-base mt-7">
                Where Happy Pets Come First                </p>
                </div>

                    {/* Action Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        {/* Go To Our Store */}
                        <div className="bg-[#FF9B57] rounded-xl px-6 py-6 flex flex-col justify-between h-full">
                            <h3 className="text-xl font-semibold">Go To Our Store</h3>
                            <div className="flex justify-end mt-3">
                           <Link to="/store">
  <div className="bg-white p-3 rounded-full cursor-pointer">
    <ArrowUpRight className="w-6 h-6" />
  </div>
</Link>
                            </div>
                        </div>
                        {/* Book Grooming Section */}
                        <div className="bg-white rounded-xl px-6 py-6 flex flex-col justify-between h-full">
                            <h3 className="text-xl font-semibold">Book Grooming Section</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-medium text-gray-500 text-sm sm:text-base">From Our Specialist</p>
                                <Link to="/grooming">

                                <div className="bg-orange-200 p-3 rounded-full flex-shrink-0">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Center Section - Dog Image */}
                <div className="lg:col-span-4 flex justify-center items-center h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                    <div className="bg-[#FF9B57] rounded-2xl w-full max-w-[414px] h-full flex items-end overflow-hidden relative">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt="Pet"
                            className="w-full h-full object-contain absolute"
                            initial={{ x: currentIndex % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            exit={{ x: currentIndex % 2 === 0 ? "100%" : "-100%", opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </div>
                </div>
                {/* Right Section - Floating Cards */}
                <div className="lg:col-span-3 flex flex-col gap-6 h-full">
                    {floatingCards.map((card) => (
                        <div key={card.id} className="bg-white p-5 rounded-xl shadow-lg flex flex-col justify-between h-full min-h-[160px]">
                            <div className="w-10 h-10 flex justify-center items-center mb-2">
                                <img src={card.imgSrc} alt="Icon" className="w-8 h-8 object-contain" />
                            </div>
                            <h3 className="font-semibold text-lg">{card.title}</h3>
                            <p className="text-gray-500 text-sm mt-1">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
