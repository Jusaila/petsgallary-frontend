import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: 'Go to All Category',
      bg: 'bg-white',
      isMain: true,
      image: null
    },
    {
      id: 2,
      title: 'Dogs',
      bg: 'bg-[#FFE2CE]',
      image: 'Mask group.png'
    },
    {
      id: 3,
      title: 'Fish',
      bg: 'bg-[#FFE2CE]',
      image: 'envato-labs-image-edit (6) 1.png'
    },
    {
      id: 4,
      title: 'Cats',
      bg: 'bg-[#FFE2CE]',
      image: 'gold-bengal-cat-white-space 2.png'
    },
    {
      id: 5,
      title: 'Birds',
      bg: 'bg-[#FFE2CE]',
      image: 'envato-labs-image-edit (7) 1.png'
    }
  ];

  return (
    <div className="my-8 sm:my-12 md:my-16 lg:my-[80px]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[80px]">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Category</h1>
        
        {/* First row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {/* Main category box */}
          <div className="h-[160px] sm:h-[180px] md:h-[200px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex justify-between items-center">
            <span className="text-xl sm:text-2xl font-medium">Go to All Category</span>
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
          </div>
          
          {/* Dog category */}
          <div className="relative h-[200px] sm:h-[180px] md:h-[200px] bg-[#FFE2CE] rounded-xl sm:rounded-2xl p-4 flex justify-between items-center">
            <h2 className="text-2xl sm:text-3xl font-medium pl-4 sm:pl-8 md:pl-[100px] z-10">Dogs</h2>
            <img
              src="Mask group.png"
              alt="Dog"
              className="absolute bottom-0 right-0 h-[180px] sm:h-[220px] md:h-[260px] object-contain"
            />
          </div>
          
          {/* Fish category */}
          <div className="relative h-[160px] sm:h-[180px] md:h-[200px] bg-[#FFE2CE] rounded-xl sm:rounded-2xl p-4 flex justify-between items-center overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-medium pl-4 sm:pl-8 md:pl-[100px] z-10">Fish</h2>
            <img
              src="envato-labs-image-edit (6) 1.png"
              alt="Fish"
              className="absolute bottom-2 right-4 h-[120px] sm:h-[140px] md:h-[160px] object-contain"
            />
          </div>
        </div>
        
        {/* Second row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Cat category */}
          <div className="relative h-[160px] sm:h-[180px] md:h-[200px] bg-[#FFE2CE] rounded-xl sm:rounded-2xl p-4 flex justify-between items-center overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-medium pl-4 sm:pl-8 md:pl-[100px] z-10">Cats</h2>
            <img 
              src="gold-bengal-cat-white-space 2.png" 
              alt="Cat" 
              className="absolute bottom-3 right-4 h-[140px] sm:h-[160px] md:h-[180px] object-contain" 
            />
          </div>
          
          {/* Bird category */}
          <div className="relative h-[200px] sm:h-[180px] md:h-[200px] bg-[#FFE2CE] rounded-xl sm:rounded-2xl p-4 flex justify-between items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium pl-4 sm:pl-8 md:pl-[100px] z-10">Birds</h2>
            <img 
              src="envato-labs-image-edit (7) 1.png" 
              alt="Bird" 
              className="absolute bottom-0 right-4 h-[160px] sm:h-[180px] md:h-[220px] object-contain" 
            />
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default CategorySection;