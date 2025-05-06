import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollAnimatedStackSections = () => {
  const sections = [
    { 
      id: 1, 
      image: "/saftey.png", 
      title: "Safety",
      description: "Safety is of utmost importance to us. You can rest assured that your pet's well-being and security are always our focus. We go above and beyond to ensure a safe service at every phase of treatment."
    },
    { 
      id: 2, 
      image: "/Group 35.png", 
      title: "Quality",
      description: "Quality in everything we do is our commitment. We use only the best products and techniques to ensure your pet receives top-tier care they truly deserve."
    },
    { 
      id: 3, 
      image: "/Group 34.png", 
      title: "Care",
      description: "Care is at the heart of our service. We treat every animal with the same attention and affection we would give to our own pets, ensuring they feel comfortable and loved."
    },
    { 
      id: 4, 
      image: "/Group 38.png", 
      title: "Trust",
      description: "Trust is built through consistent, reliable service. Our transparent approach and open communication help establish a lasting relationship with you and your pet."
    },
  ];

  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !cardsContainerRef.current) return;

    const sectionHeight = window.innerHeight * (sections.length + 0.5);
    sectionRef.current.style.height = `${sectionHeight}px`;

    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Make the entire section fixed when in viewport
      if (sectionTop <= 0 && sectionBottom >= window.innerHeight) {
        // The entire container is now fixed
        containerRef.current.style.position = "fixed";
        containerRef.current.style.top = "0";
        containerRef.current.style.left = "0";
        containerRef.current.style.width = "100%";
        containerRef.current.style.height = "100vh";

        const scrollProgress = Math.abs(sectionTop) / (sectionHeight - window.innerHeight);
        const cardToRemoveIndex = Math.floor(scrollProgress * sections.length);

        if (cardsContainerRef.current) {
          const cards = cardsContainerRef.current.children;
          for (let i = 0; i < cards.length; i++) {
            const stackOffset = (cards.length - 1 - i) * (window.innerWidth < 640 ? 15 : 20);

            // Don't animate up the fourth card (index 3)
            if (i < cardToRemoveIndex && i !== sections.length - 1 && i !== 3) {
              cards[i].style.transform = "translateY(-120vh)";
              cards[i].style.opacity = "0";
            } else {
              // Keep the fourth card (index 3) fixed at its position
              if (i === 3) {
                cards[i].style.transform = `translateY(${stackOffset}px) scale(${1 - (i - cardToRemoveIndex) * 0.02})`;
                cards[i].style.opacity = "1";
              } else {
                cards[i].style.transform = `translateY(${stackOffset}px) scale(${1 - (i - cardToRemoveIndex) * 0.02})`;
                cards[i].style.opacity = "1";
              }
            }
          }
        }
      } else {
        containerRef.current.style.position = "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections.length]);

  return (
    <div ref={sectionRef} className="w-full bg-[#f6f6eb] pt-[80px]">
      {/* This container now stays fixed in view */}
      <div ref={containerRef} className="w-full h-screen flex flex-col items-center justify-start py-6 px-2 sm:px-3 lg:px-4">
        {/* Header section at the top */}
        <div className="w-full max-w-6xl text-left mb-6">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Your Family, Our Friend
          </motion.h1>
          <motion.p className="text-gray-600 max-w-2xl text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Id sem amet metus feugiat dolor turpis ut
            et viverra, et semperque et odio. Ultricis felis arcu.
          </motion.p>
        </div>

        {/* Stacked cards section - with increased width and slightly decreased height */}
        <div className="w-full max-w-6xl flex-grow flex items-start justify-center">
          <div 
            ref={cardsContainerRef}
            className="relative h-[380px] sm:h-[420px] md:h-[480px] w-full"
          >
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="absolute w-full transition-all duration-700 ease-in-out overflow-hidden"
                style={{
                  zIndex: sections.length - index,
                  transform: `translateY(${(sections.length - 1 - index) * 20}px) scale(${1 - index * 0.02})`,
                  transformOrigin: "center top",
                }}
              >
                <div className="relative w-full overflow-hidden rounded-3xl">
                  {/* Main content area */}
                  <div className="relative w-full rounded-t-3xl overflow-hidden">
                    <div className="flex flex-row items-center h-full">
                      {/* Left side - image with increased width and slightly decreased height */}
                      <div className="w-full h-[340px] sm:h-[380px] md:h-[420px] relative">
  <img
    src={section.image}
    alt={section.title}
    className="w-full h-full object-fill"
  />
</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedStackSections;