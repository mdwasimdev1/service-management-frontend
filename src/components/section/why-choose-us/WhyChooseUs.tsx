import React from 'react';
import { FiShield } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { IoPricetagOutline } from 'react-icons/io5';
import { LuShieldCheck } from 'react-icons/lu';

const features = [
  {
    id: 1,
    icon: <FiShield className="w-5 h-5 text-gray-800" />,
    title: 'Ensuring Masks',
    description: 'Sed non odio sed cursus eleifend. Vivamus ac diam in est efficitur quis eget ex. Donec pellentesque.',
  },
  {
    id: 2,
    icon: <BiSupport className="w-5 h-5 text-gray-800" />,
    title: '24/7 Support',
    description: 'Sed non odio sed cursus eleifend. Vivamus ac diam in est efficitur quis eget ex. Donec pellentesque.',
  },
  {
    id: 3,
    icon: <IoPricetagOutline className="w-5 h-5 text-gray-800" />,
    title: 'Competitive Price',
    description: 'Sed non odio sed cursus eleifend. Vivamus ac diam in est efficitur quis eget ex. Donec pellentesque.',
  },
  {
    id: 4,
    icon: <LuShieldCheck className="w-5 h-5 text-gray-800" />,
    title: 'Ensuring Covers',
    description: 'Sed non odio sed cursus eleifend. Vivamus ac diam in est efficitur quis eget ex. Donec pellentesque.',
  },
];

const stats = [
  {
    id: 1,
    value: '2,063+',
    label: 'MONTHLY PROVIDERS',
  },
  {
    id: 2,
    value: '3,457+',
    label: 'OTHER REGION',
  },
  {
    id: 3,
    value: '2,750+',
    label: '5 STAR REVIEWS',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-sm tracking-wider uppercase mb-4 w-max">
              WHY CHOOSE US
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900  mb-10">
              Your Trusted On-<br className="hidden md:block"/>Demand Service Partner
            </h2>
            
            <div className="relative">
              {/* Vertical Dashed Line */}
              <div className="absolute left-6 top-6 bottom-6 border-l-2 border-dashed border-gray-200 z-0 hidden sm:block"></div>
              
              <div className="space-y-8 relative z-10">
                {features.map((feature) => (
                  <div key={feature.id} className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 relative">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center relative z-10">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full h-125 lg:h-150 rounded-[40px] overflow-hidden rounded-tl-[100px] rounded-br-[40px]">
             {/* Custom shape using absolute div if needed, but for now border-radius gives a good approximation */}
            <img 
              src="/images/categories/car-mechanic.png" 
              alt="Cleaners working on window" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
        
        {/* Bottom Stats Section */}
        <div className="bg-[#f8fbff] rounded-xl py-10 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center shadow-sm">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="flex-col items-center justify-center w-full">
                <div className="text-3xl md:text-4xl font-bold text-gray-400 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-xs font-semibold tracking-wider uppercase">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-0.5 h-16 bg-amber-200 "></div>
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
