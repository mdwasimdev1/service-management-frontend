import React from 'react';
import { FaPlay, FaUsers, FaSmile, FaHome, FaBuilding } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Text Content */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2A332F] mb-8 leading-tight">
              About Our Company <br className="hidden md:block" />
              Mission & Vision
            </h2>

            <div className="pl-6 border-l-4 border-emerald-400 mb-10">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                We understand you have an online target market, though unique online innovation. 
                Our team of experts is dedicated about making our B2B company software as 
                solid as possible. It is different starting for something different first, 
                whatever the time you with innovation platform same elements make market 
                demands, on what you find out our features unique market options for on 
                your own request.
              </p>
            </div>

            <div className="space-y-8">
              {/* Who We Are */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2b49] mb-3">Who We Are</h3>
                <p className="text-gray-500 leading-relaxed">
                  Our service, construction can breath real before one open have knowledge of the industries who all real.
                </p>
              </div>

              {/* Our Mission */}
              <div className="ml-0 md:ml-12 pl-6 border-l-2 border-emerald-200">
                <h3 className="text-xl font-bold text-[#1a2b49] mb-3">Our Mission</h3>
                <p className="text-gray-500 leading-relaxed">
                  Real the you... construction can breath one of the pure next future. Knowledge of the industries who in real.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 max-w-150 ml-auto">
              {/* Since we don't have the exact image, we use a realistic placeholder from unsplash that fits the context (movers/construction/workers) */}
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Our team working" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:left-4 xl:-left-12 bg-white rounded-full p-2 shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 group">
              <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full border border-gray-100">
                {/* Circular Text SVG */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-600">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[10px] uppercase tracking-[0.2em] font-semibold" fill="currentColor">
                      <textPath href="#circlePath" startOffset="0%">
                        Play Video • Play Video • 
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Play Icon */}
                <div className="w-12 h-12 bg-[#333] text-white rounded-full flex items-center justify-center relative z-10 group-hover:bg-emerald-500 transition-colors">
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pl-0 md:pl-4 justify-center md:justify-start">
              <div className="w-12 h-12 bg-[#FFC527] rounded-xl flex items-center justify-center text-white text-xl shrink-0 shadow-sm">
                <FaUsers />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">0.1k</div>
                <div className="text-sm text-gray-500 font-medium">Employed Creator</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pl-4 md:pl-8 justify-center md:justify-start">
              <div className="w-12 h-12 bg-[#FFC527] rounded-xl flex items-center justify-center text-white text-xl shrink-0 shadow-sm">
                <FaSmile />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5.3k</div>
                <div className="text-sm text-gray-500 font-medium">Happy Products</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pl-4 md:pl-8 justify-center md:justify-start">
              <div className="w-12 h-12 bg-[#FFC527] rounded-xl flex items-center justify-center text-white text-xl shrink-0 shadow-sm">
                <FaHome />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-500 font-medium">New Relocated</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pl-4 md:pl-8 justify-center md:justify-start">
              <div className="w-12 h-12 bg-[#FFC527] rounded-xl flex items-center justify-center text-white text-xl shrink-0 shadow-sm">
                <FaBuilding />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">17</div>
                <div className="text-sm text-gray-500 font-medium">Institutes New</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
