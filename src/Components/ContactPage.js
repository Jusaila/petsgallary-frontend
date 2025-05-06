import React from 'react';

export const ContactPage = () => {
    return (
        <div className="bg-[#f7f7ee] flex flex-col justify-center items-center py-10 px-4 sm:px-20">
            {/* On laptop and larger screens, maintain original layout */}
            {/* On smaller screens, stack vertically */}
            <div className="max-w-8xl w-full flex flex-col lg:flex-row gap-6">
                {/* Left Section - Text */}
                <div className="lg:w-2/5 bg-white p-8 rounded-xl shadow-lg flex flex-col h-auto lg:h-[500px] mb-6 lg:mb-0">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-[1.4]">
                            <div className="relative inline-block">
                                <img
                                    src="dogs.png"
                                    alt="icon"
                                    className="absolute -top-6 left-3/4 transform -translate-x-3/4 w-10 h-10"
                                />
                                We're Just A
                            </div>
                           <div>
    <span className="text-orange-400 mr-2">Bark</span> 
    <span className="relative inline-block ">
        O
        <img
            src="paw.png"
            alt="Inside O"
            className="absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
        />
    </span>
    r
    <img src="Rectangle 13.png" alt="Cat" className="inline-block mx-4 w-36 h-14" />
    <span className="text-orange-400"> Meow</span> Away!<br />
    Contact Us Today!
</div>

                        </h1>
                    </div>
                    <p className="text-gray-600 mt-4 lg:mt-auto">
                        Lorem ipsum dolor sit amet consectetur. Urna luctus amet habitant sit ac.
                        Risus consectetur sit etiam pellentesque turpis ornare.
                    </p>
                </div>

                {/* Middle Section - Contact Form */}
                <div className="lg:w-2/5 bg-white p-8 rounded-xl shadow-lg h-auto lg:h-[500px] mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold">Contact Form</h2>
                    <form className="mt-4 space-y-4 flex flex-col h-auto lg:h-[90%]">
                        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-500 rounded-2xl placeholder-gray-500" />
                        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-500 rounded-2xl placeholder-gray-500" />
                        <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-500 rounded-2xl placeholder-gray-500" />
                        <select className="w-full p-3 border border-gray-500 rounded-2xl placeholder-gray-500">
                            <option>Grooming</option>
                            <option>Adoption</option>
                            <option>Pets Passport</option>
                            <option>Foods</option>

                        </select>
                        <textarea 
                            placeholder="Message" 
                            className="w-full p-3 border border-gray-500 rounded-2xl placeholder-gray-500 min-h-32 lg:flex-grow"
                        ></textarea>
                        <button className="w-full bg-orange-500 text-black py-3 rounded-full">
                            Book Now
                        </button>
                    </form>
                </div>

                {/* Right Section - Contact Cards */}
                <div className="lg:w-1/5 flex flex-col gap-4 h-auto lg:h-[500px]">
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-auto lg:h-1/3 mb-4 lg:mb-0">
                        <span className="text-2xl">📞</span>
                        <h3 className="font-semibold mt-2">Phone</h3>
                        <p className="text-gray-600">16524 465163</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-auto lg:h-1/3 mb-4 lg:mb-0">
                        <span className="text-2xl">✉️</span>
                        <h3 className="font-semibold mt-2">Email</h3>
                        <p className="text-gray-600">petgallery@gmail.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-auto lg:h-1/3">
                        <span className="text-2xl">📍</span>
                        <h3 className="font-semibold mt-2">Address</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>

            {/* Footer Positioned Below */}
            {/* <footer className="w-full p-4 md:p-8 mt-10"> 
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:gap-6">
                    <img
                        src="logo png 2.png"
                        alt="Logo"
                        className="h-16 w-16 md:h-[120px] md:w-[120px]"
                    />

                    <div className="w-full max-w-[90vw] md:max-w-[1324px] h-px bg-black" />
                </div>
            </footer> */}
        </div>
    );
};

export default ContactPage;