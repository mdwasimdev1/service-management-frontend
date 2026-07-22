import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    subtitle: "GREAT SOFTWARE SERVICE COMPANY!",
    text: "“Feel Free Customize Key Feature Based On The Services & Strategy You Offer Each Plan. This Breakdown Help Des Magna Aliquant. Ut Enigma Ad Minim Veniam”.",
    user: {
      name: "Mr. Jeams Torbak",
      role: "Founder, Egenslab",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    companyLogo: "/images/companies/imperial.png" // Placeholder logo path
  },
  {
    id: 2,
    rating: 5,
    subtitle: "GREAT SOFTWARE SERVICE COMPANY!",
    text: "“Feel Free Customize Key Feature Based On The Services & Strategy You Offer Each Plan. This Breakdown Help Des Magna Aliquant. Ut Enigma Ad Minim Veniam”.",
    user: {
      name: "Mr. James Beann",
      role: "Founder, Egenslab",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
    },
    companyLogo: "/images/companies/imperial.png"
  },
  {
    id: 3,
    rating: 5,
    subtitle: "OUTSTANDING SUPPORT TEAM!",
    text: "“The level of service and dedication from the team is unmatched. We saw immediate results after implementing their solutions. Highly recommended for any growing business.”",
    user: {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    companyLogo: "/images/companies/imperial.png"
  },
  {
    id: 4,
    rating: 5,
    subtitle: "EXCEEDED OUR EXPECTATIONS!",
    text: "“From start to finish, the process was incredibly smooth. They understood our needs perfectly and delivered a product that went above and beyond what we asked for.”",
    user: {
      name: "David Chen",
      role: "Director, InnovateX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    companyLogo: "/images/companies/imperial.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of items to show at once (1 for mobile, 2 for desktop)
  // For a custom slider, we will handle the responsive layout via CSS Grid/Flex in the container, 
  // and manage the slide index by translating the container.
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#dff8f2] via-[#eff5f7] to-[#fcebe9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 border border-teal-200 rounded-full mb-4">
              <span className="text-teal-500 text-xs font-semibold tracking-wider uppercase">
                CLIENT TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2a3020] leading-tight">
              What Our Customers Say
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-400 transition-all focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-400 transition-all focus:outline-none"
              aria-label="Next Testimonial"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 md:gap-8"
            initial={false}
            animate={{ 
              x: `calc(-${currentIndex * 100}% - ${currentIndex * (typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1.5)}rem)`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: '100%' }}
          >
            {testimonialsData.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full md:w-[calc(50%-1rem)] flex-shrink-0 bg-white rounded-[32px] p-8 md:p-10 shadow-sm"
              >
                {/* Stars & Quote */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#ffc107]' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <div className="text-gray-100 -mt-2 -mr-2">
                    <RiDoubleQuotesR className="w-16 h-16" />
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-[#ff5e4d] font-bold text-sm tracking-wide mb-4 uppercase">
                  {testimonial.subtitle}
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed mb-8 text-[15px]">
                  {testimonial.text}
                </p>
                
                {/* Divider */}
                <hr className="border-gray-100 mb-6" />
                
                {/* User Info */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.user.avatar} 
                      alt={testimonial.user.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="text-gray-900 font-bold text-base">{testimonial.user.name}</h5>
                      <p className="text-gray-500 text-xs">{testimonial.user.role}</p>
                    </div>
                  </div>
                  
                  {/* Company Logo - using text if image not found to avoid broken images in this demo, 
                      but kept img tag for actual use */}
                  <div className="opacity-60 flex items-center h-8">
                     {/* Replace with actual image in real usage */}
                     <div className="flex items-center gap-2 font-bold text-gray-700">
                        <div className="w-4 h-5 bg-gray-700 rounded-sm" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}></div>
                        IMPERIAL
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
