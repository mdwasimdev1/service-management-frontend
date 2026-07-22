import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  'AC Repair Services',
  'Cleaning Solution',
  'Beauty & Wellness',
  'Home Shifting',
  'Electric & Plumbing'
];

const services = [
  {
    id: 1,
    title: 'Geyser Installation',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', // Plumber/pipe placeholder
    category: 'Electric & Plumbing'
  },
  {
    id: 2,
    title: 'House Cleaning Services',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop', // Cleaning placeholder
    category: 'Cleaning Solution'
  },
  {
    id: 3,
    title: 'Smart Device Installation',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop', // House/boxes placeholder
    category: 'Home Shifting'
  },
  {
    id: 4,
    title: 'Home Renovation',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop', // AC Repair placeholder
    category: 'AC Repair Services'
  },
  {
    id: 5,
    title: 'Car Mechanic',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop', // Car mechanic placeholder
    category: 'AC Repair Services' // Using random category for mockup
  },
  {
    id: 6,
    title: 'AC Repair Services',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1585241936939-f9c47087850e?q=80&w=600&auto=format&fit=crop', // Pipe/plumber placeholder
    category: 'AC Repair Services'
  },
  {
    id: 7,
    title: 'Home Shifting Services',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop', // Van/driving placeholder
    category: 'Home Shifting'
  },
  {
    id: 8,
    title: 'Beauty & Wellness',
    rating: 4.5,
    reviews: 154,
    price: 100,
    image: 'https://images.unsplash.com/photo-1512496015851-a1cbf5c5601d?q=80&w=600&auto=format&fit=crop', // Beauty placeholder
    category: 'Beauty & Wellness'
  }
];

const PopularPicks = () => {
  const [activeCategory, setActiveCategory] = useState('AC Repair Services');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wider uppercase mb-8">
            TODAY'S POPULAR PICKS
          </h2>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-[#ffc107] text-gray-900' // Yellow background for active
                    : 'bg-[#f4f2fb] text-gray-800 hover:bg-gray-200' // Light purple/gray background for inactive
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Note: In a real app you'd filter based on activeCategory: services.filter(s => s.category === activeCategory).map(...) 
              But based on the design mockup which shows mixed services under one active tab, we'll display all for visual match. */}
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[20px] border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <h3 className="font-bold text-gray-900 text-[17px] mb-4">
                  {service.title}
                </h3>
                
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-1.5">
                    <FaStar className="text-[#ffc107] w-4 h-4" />
                    <span className="font-bold text-gray-900 text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-xs font-medium">({service.reviews} Review)</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    From <span className="text-gray-900 font-bold text-sm">${service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#ffc107] transition-colors"
          >
            View All Service <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularPicks;
