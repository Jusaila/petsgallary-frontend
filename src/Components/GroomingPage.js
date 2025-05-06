import React from "react";

// Service Data
const services = [
  {
    image: "/cat paws.png",
    title: "Nail Trimming & Paw Care",
    description: "Prevent discomfort and ensure healthy paws.",
  },
  {
    image: "/cat bath.png",
    title: "Bath & Blow Dry",
    description: "Deep cleansing with pet-safe shampoos for a shiny coat.",
  },
  {
    image: "Pet Spray.png",
    title: "Haircut & Styling",
    description: "Custom cuts based on breed and preference.",
  },
  {
    image: "/dog.png",
    title: "Ear Cleaning",
    description: "Gentle cleansing to prevent infections.",
  },
  {
    image: "/brush teeth.png",
    title: "Teeth Brushing",
    description: "Custom cuts based on breed and preference.",
  },
  {
    image: "/Anti-flea Spray.png",
    title: "Fragrance & Finishing Touch",
    description: "Gentle cleansing to prevent infections.",
  },
];

// Features Data
const features = [
  {
    title: "Trained Groomers",
    description: "Certified professionals with years of experience.",
    image: "/Rectangle 61.png",
  },
  {
    title: "Gentle & Stress-Free",
    description: "We handle every pet with patience and care.",
    image: "/Rectangle 62.png",
  },
  {
    title: "Top-Quality Products",
    description: "Only the best shampoos, conditioners, and tools.",
    image: "/Rectangle 63.png",
  },
  {
    title: "Safe & Hygienic Environment",
    description: "Clean, pet-friendly facilities.",
    image: "/Rectangle 64.png",
  },
];

// Card Carousel Data
const items = [
  {
    id: 1,
    img: "/Rectangle 65.png",
    text: "Lorem ipsum dolor sit amet consectetur.",
    bgColor: "bg-amber-400",
    height: "h-[600px]",
  },
  {
    id: 2,
    img: "/Rectangle 66.png",
    text: "Lorem ipsum dolor sit amet consectetur.",
    bgColor: "bg-cyan-600",
    height: "h-[340px]",
  },
  {
    id: 3,
    img: "/Rectangle 67.png",
    text: "Lorem ipsum dolor sit amet consectetur.",
    bgColor: "bg-amber-300",
    height: "h-[500px]",
  },
  {
    id: 4,
    img: "/Rectangle 68.png",
    text: "Lorem ipsum dolor sit amet consectetur.",
    bgColor: "bg-cyan-500",
    height: "h-[400px]",
  },
];

const GroomingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-5 bg-white">
        {/* Left Content */}
        <div className="text-left md:w-3/5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            Make Your Pet <br />
            More <span className="text-orange-400">Beautiful</span> And <br />
            <span className="text-orange-400">Happy!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-6">
            Professional grooming from experienced <br />
            masters
          </p>
          <button className="mt-8 bg-orange-400 text-white text-lg font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-md hover:bg-orange-500 transition">
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:w-2/5 flex justify-center">
          <img
            src="/envato-labs-image-edit nn 1.png"
            alt="Pet Grooming"
            className="w-full max-w-[600px] object-contain"
          />
        </div>
      </section>

      {/* Service Section */}
      <section className="bg-[#f5f5eb] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-left mb-8">
          Pet Grooming Services
        </h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Image Section (Spanning Two Columns) */}
            <div className="md:col-span-2">
              <img
                src="/Rectangle 47.png"
                alt="Dog"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            {/* First row: Two service cards */}
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-start"
              >
                <div className="mb-4">
                  <img
                    src={service.image}
                    alt="Service Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {service.description}
                </p>
              </div>
            ))}

            {/* Second row: Four service cards */}
            {services.slice(2).map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-start"
              >
                <div className="mb-4">
                  <img
                    src={service.image}
                    alt="Service Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* why choose Section */}
    <section className="bg-[#f5f5eb] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-left mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-60 sm:h-72 md:h-80 lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-3 text-white gap-2">
                <h3 className="font-bold text-xl sm:text-2xl">{feature.title}</h3>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/*card section */}
      <section className="bg-[#f5f5eb] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-[1700px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Happy Pets, Stunning Makeovers!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className={`${item.bgColor} rounded-2xl overflow-hidden ${item.height}`}>
                  <img
                    src={item.img}
                    alt="Pet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* makeover */}

<section className="w-full bg-white h-auto md:h-[400px] relative px-4">
  <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-between h-full">
    
    {/* Left side pets (Bottom-aligned for laptops, Centered on smaller screens) */}
    <div className="flex md:block mb-4 md:mb-0">
      <img 
        src="/envato-labs-image-edit (10) 1.png" 
        alt="Large dog" 
        className="h-[200px] sm:h-[250px] md:h-[420px] max-h-full object-contain"
      />
    </div>

    {/* Center content (Centered for mobile, Absolute for laptop) */}
    <div className="text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Ready for a Pawsome Makeover?
      </h1>
      <p className="text-gray-700 text-sm sm:text-base mb-4 md:mb-6">
        Treat your pet to a spa day with expert grooming and love. Click below
        <br className="hidden md:block"/> to book a session today!
      </p>
      <button className="bg-[#FF9966] text-white px-6 sm:px-8 py-2 rounded-full hover:bg-[#FF8851] transition-colors">
        Book Now
      </button>
    </div>

    {/* Right side pets (Bottom-aligned for laptops, Centered on smaller screens) */}
    <div className="flex md:block mt-4 md:mt-0">
      <img 
        src="/envato-labs-image-edit (11) 1.png" 
        alt="Orange and white cat" 
        className="h-[250px] sm:h-[300px] md:h-[500px] max-h-full object-contain"
      />
    </div>

  </div>
</section>





     {/* Footer Positioned Below */}
     {/* <footer className="w-full p-4 md:p-8 mt-10"> 
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:gap-6">
                    <img
                        src="logo png 2.png"
                        alt="Logo"
                        className="h-16 w-16 md:h-[120px] md:w-[120px]"
                    />
                </div>
            </footer> */}

    </div>
  );
};

export default GroomingPage;
