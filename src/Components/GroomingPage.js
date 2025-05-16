import React, { useState } from 'react';


// Service Data
const services = [
  {
    image: "/cat paws.png",
    title: "Nail Trimming & Paw Care",
    description: "Avoid irritation and keep your pet's paw in top condition.",
  },
  {
    image: "/cat bath.png",
    title: "Bath & Blow Dry",
    description: " Using safe, specially formulated shampoos helps remove dirt and enhance your pet's natural shine.",
  },
  {
    image: "Pet Spray.png",
    title: "Haircut & Styling",
    description: "Tailored grooming styles to suit your pet's breed and your personal preferences.",
  },
  {
    image: "/dog.png",
    title: "Ear Cleaning",
    description: "Mild cleaning methods that support ear health and hygiene.",
  },
  {
    image: "/brush teeth.png",
    title: "Teeth Brushing",
    description: "Prevent plaque build up, gum disease, and other dental issues keeping those tails wagging with every smile.",
  },
  {
    image: "/bird.png",
    title: "Beak Sharpening & Shiny Coating",
    description: "Regular beak care supports natural trimming and keeps it in perfect shape.",
  },
];

// Features Data
const features = [
  {
    title: "Trained Groomers",
    description: "Certified & Experienced Groomers who truly love animals",
    image: "/Rectangle 61.png",
  },
  {
    title: "Gentle & Stress-Free",
    description: "Tailored grooming plans for every breed and temperature",
    image: "/Rectangle 62.png",
  },
  {
    title: "Top-Quality Products",
    description: "Premium Pet Products used in every session",
    image: "/Rectangle 63.png",
  },
  {
    title: "Safe & Hygienic Environment",
    description: "Clean, Modern Grooming Facilities designed for comfort and safety.",
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
  const [activeTab, setActiveTab] = useState('whyGrooming');
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-5 bg-white">
        {/* Left Content */}
        <div className="text-left md:w-3/5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
          Pet Grooming in <span className="text-orange-400">Dubai</span> Make Your Pet <br />
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
        Our Specialized Grooming Solutions
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
     

 {/* why Section */}
    <section className="container mx-auto px-4 md:px-8 max-w-6xl mt-5">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="bg-orange-100 absolute -top-4 -left-4 w-full h-full rounded-lg"></div>
              <img 
                src="/petsGallary.png" 
                alt="Happy pets at Pets Gallery Dubai" 
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
              <div className="bg-orange-500 text-white px-6 py-3 absolute -bottom-5 right-10 z-20 rounded-lg shadow-md">
                <p className="font-semibold text-lg">5+ Years of Excellence</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Pet Owners in Dubai
              <span className="text-orange-500"> Choose Pets Gallery</span>
            </h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Pets Gallery, we've earned the trust of countless pet owners across Dubai through our dedication to exceptional care, professional expertise, and genuine love for animals. Here's why pet owners continue to choose us for their grooming needs:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Certified Professional Groomers</h3>
                  <p className="text-gray-600">
                    Our team consists of internationally certified pet stylists with specialized training in handling various breeds and temperaments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Premium Products & Equipment</h3>
                  <p className="text-gray-600">
                    We use only the highest quality, pet-safe products and state-of-the-art equipment specifically chosen for Dubai's unique climate conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Health-Focused Approach</h3>
                  <p className="text-gray-600">
                    Our grooming sessions include health checks to detect early signs of skin issues, parasites, or other concerns that may require veterinary attention.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Stress-Free Environment</h3>
                  <p className="text-gray-600">
                    Our salon is designed to create a calm, comfortable experience with minimal wait times and a soothing atmosphere for nervous pets.
                  </p>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
        
        {/* Trust Elements */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-orange-500 font-bold text-4xl mb-1">5000+</div>
            <p className="text-gray-600">Happy Pets Groomed</p>
          </div>
          <div className="p-4">
            <div className="text-orange-500 font-bold text-4xl mb-1">98%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="p-4">
            <div className="text-orange-500 font-bold text-4xl mb-1">12+</div>
            <p className="text-gray-600">Award-Winning Groomers</p>
          </div>
          <div className="p-4">
            <div className="text-orange-500 font-bold text-4xl mb-1">30+</div>
            <p className="text-gray-600">Specialized Services</p>
          </div>
        </div>
      </section>

  {/* why choose Section */}
  <section className="bg-[#f5f5eb] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-900 text-left mb-8">
        Why We're the Most Trusted Pet Shop in Jaddaf, Dubai
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

      {/* Tab section */}
      <section className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-3">Pet Grooming Knowledge Center</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover everything you need to know about professional pet grooming services and how they benefit your furry family members
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          <button 
            onClick={() => setActiveTab('whyGrooming')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'whyGrooming' 
                ? 'border-b-2 border-orange-500 text-orange-500' 
                : 'text-gray-600 hover:text-orange-400'
            }`}
          >
            Why Professional Grooming
          </button>
          <button 
            onClick={() => setActiveTab('breedSpecific')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'breedSpecific' 
                ? 'border-b-2 border-orange-500 text-orange-500' 
                : 'text-gray-600 hover:text-orange-400'
            }`}
          >
            Breed-Specific Care
          </button>
          <button 
            onClick={() => setActiveTab('groomingTips')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'groomingTips' 
                ? 'border-b-2 border-orange-500 text-orange-500' 
                : 'text-gray-600 hover:text-orange-400'
            }`}
          >
            At-Home Grooming Tips
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'faq' 
                ? 'border-b-2 border-orange-500 text-orange-500' 
                : 'text-gray-600 hover:text-orange-400'
            }`}
          >
            FAQs
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          {activeTab === 'whyGrooming' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Benefits of Professional Pet Grooming in Dubai</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Professional pet grooming goes beyond mere aesthetics. At our Dubai pet grooming salon, we understand that proper grooming is essential for your pet's overall health and well-being. Regular grooming sessions help prevent matting, skin issues, and can even detect early signs of health problems before they become serious concerns.
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Dubai's climate presents unique challenges for pet owners. The hot and sometimes humid weather can lead to excessive shedding, skin irritations, and discomfort for your furry companions. Our professional groomers are trained to address these specific concerns with techniques and products specially formulated for pets living in this region.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our gentle grooming approach ensures your pet feels comfortable and stress-free throughout their grooming session. We take the time to establish trust and create a positive experience that your pet will look forward to rather than dread.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Key Benefits Include:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Improved hygiene and reduced shedding around your home</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Early detection of skin conditions, lumps, or parasites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Proper nail trimming to prevent discomfort and mobility issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Thorough ear cleaning to prevent infections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Specialized treatments for Dubai's climate conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Reduced stress compared to DIY grooming attempts</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-orange-50 rounded-md border border-orange-100">
                    <p className="text-gray-700 italic">
                      "Regular professional grooming has made a tremendous difference for my French Bulldog. His coat looks amazing, and he's much more comfortable in Dubai's heat." – Satisfied Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'breedSpecific' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Breed-Specific Grooming in Dubai</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Different breeds have unique grooming requirements, and our expert groomers understand these nuances. From the particular needs of double-coated breeds to the specialized care required for brachycephalic dogs, we tailor our approach to ensure optimal results for every pet.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-gray-800">For Double-Coated Breeds</h4>
                  <p className="text-gray-700">
                    Breeds like Huskies, German Shepherds, and Golden Retrievers require special attention in Dubai's climate. Rather than shaving, which can damage their natural heat regulation, we offer specialized de-shedding treatments that remove loose undercoat while protecting the guard hairs that help insulate against both heat and cold.
                  </p>
                  
                  <h4 className="text-xl font-medium text-gray-800 mt-6">For Brachycephalic Breeds</h4>
                  <p className="text-gray-700">
                    Flat-faced breeds like French Bulldogs, Pugs, and Persian cats need extra care during grooming. We prioritize their comfort with specialized techniques that account for their unique facial structure and potential breathing challenges. Our calm, patient approach ensures their grooming experience is stress-free.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-gray-800">For Curly-Coated Breeds</h4>
                  <p className="text-gray-700">
                    Poodles, Bichon Frises, and similar breeds require regular grooming to prevent painful matting. Our professional groomers are skilled in maintaining these elaborate coats with styles that suit your preference while keeping your pet comfortable in Dubai's climate.
                  </p>
                  
                  <h4 className="text-xl font-medium text-gray-800 mt-6">For Short-Haired Breeds</h4>
                  <p className="text-gray-700">
                    Even short-haired breeds benefit from professional grooming. Our services for these pets focus on skin health, shedding control, and specialized treatments that help them stay comfortable year-round in Dubai's unique climate conditions.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'groomingTips' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">At-Home Grooming Tips for Dubai Pet Owners</h3>
              
              <p className="text-gray-700 leading-relaxed">
                While professional grooming is essential, there are many things you can do at home between visits to keep your pet looking and feeling their best. These tips are specially curated for pet owners in Dubai's unique climate.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Daily Maintenance</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">1.</span>
                      <span><strong>Regular Brushing:</strong> Brush your pet several times a week to remove loose hair and prevent matting. This is especially important during shedding seasons.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">2.</span>
                      <span><strong>Hydration:</strong> Keep your pet well-hydrated to promote healthy skin and coat, particularly important in Dubai's hot climate.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">3.</span>
                      <span><strong>Paw Care:</strong> Check and clean your pet's paws regularly, especially after walks on hot pavement or sandy areas.</span>
                    </li>
                  </ul>
                  
                  <h4 className="text-xl font-medium text-gray-800 mt-6 mb-3">Climate Considerations</h4>
                  <p className="text-gray-700">
                    Dubai's heat requires special attention to your pet's grooming needs. Consider these climate-specific tips:
                  </p>
                  <ul className="space-y-3 text-gray-700 mt-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Use pet-safe sunscreen on areas with thin fur during peak summer months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Schedule outdoor activities and walks during cooler morning or evening hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Consider cooling mats or vests for breeds that struggle with heat</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">When to Seek Professional Help</h4>
                  <p className="text-gray-700 mb-4">
                    While at-home grooming is important, know when to book a professional appointment. Some signs include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Matted fur that cannot be gently brushed out</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Excessive shedding beyond normal seasonal changes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Signs of skin irritation, hot spots, or unusual odors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Overgrown nails that click loudly on hard surfaces</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-orange-50 rounded-md border border-orange-100">
                    <p className="text-gray-700">
                      <strong>Pro Tip:</strong> In Dubai's climate, we recommend professional grooming every 4-6 weeks for most breeds. This schedule helps manage shedding, prevents matting, and keeps your pet comfortable year-round.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions About Pet Grooming in Dubai</h3>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-xl font-medium text-gray-800">How often should I have my pet professionally groomed in Dubai?</h4>
                  <p className="text-gray-700 mt-2">
                    The ideal frequency depends on your pet's breed, coat type, and lifestyle. Generally, we recommend professional grooming every 4-6 weeks for most breeds in Dubai's climate. Long-haired breeds may need appointments every 4 weeks, while short-haired breeds might go 8-12 weeks between sessions. During summer months, more frequent grooming can help your pet stay comfortable.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800">Is it safe to shave my double-coated dog during Dubai's summer?</h4>
                  <p className="text-gray-700 mt-2">
                    Contrary to popular belief, shaving double-coated breeds like Huskies, German Shepherds, or Golden Retrievers is not recommended, even in Dubai's heat. These breeds' coats are designed to insulate against both heat and cold. Shaving can disrupt this natural temperature regulation and lead to sunburn, heat stress, and improper coat regrowth. Instead, we offer specialized de-shedding treatments that remove the loose undercoat while preserving the protective topcoat.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800">What grooming services are essential for cats in Dubai?</h4>
                  <p className="text-gray-700 mt-2">
                    While cats are known for self-grooming, professional care is still beneficial in Dubai's climate. Essential services include de-shedding treatments, nail trimming, ear cleaning, and occasional bathing with cat-specific products. Long-haired cats like Persians and Maine Coons particularly benefit from regular professional grooming to prevent painful matting and hairballs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800">How do you handle anxious pets during grooming?</h4>
                  <p className="text-gray-700 mt-2">
                    Our groomers are trained in gentle, fear-free techniques. For anxious pets, we take extra time to build trust, use calming pheromones, and work at a pace that keeps stress to a minimum. We may recommend scheduling multiple shorter sessions initially to help your pet become comfortable with the grooming process. For extremely anxious pets, we can coordinate with your veterinarian for mild sedation options when necessary.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800">What special considerations are there for grooming brachycephalic (flat-faced) breeds in Dubai?</h4>
                  <p className="text-gray-700 mt-2">
                    Brachycephalic breeds like French Bulldogs, Pugs, and Persian cats require extra care during grooming. We use techniques that minimize stress and respiratory strain, including proper positioning, shorter sessions with adequate breaks, and careful monitoring of temperature. Our facility is well-ventilated and climate-controlled to ensure these sensitive breeds remain comfortable throughout their grooming experience.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Book Your Pet's Grooming Session?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Give your furry friend the care they deserve with our professional grooming services in Dubai
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 mb-5 rounded-full font-medium transition-colors duration-200">
            Book Appointment Now
          </button>
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
                {/* <p className="mt-4 text-lg font-semibold">{item.text}</p> */}
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
      Get Your Pet Pampered with a Stylish Makeover!  
      </h1>
      <p className="text-gray-700 text-sm sm:text-base mb-4 md:mb-6">
      We provide expert grooming services with a touch of love and care. Give your pet the pampering they deserve.
        <br className="hidden md:block"/>  Click below to book a session today!.
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
