import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import CustomButton from "../components/ui/CustomButton";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-start relative">
            <span className="inline-block border border-emerald-300 text-emerald-400 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Get In Touch
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#323621] leading-[1.1] mb-6">
              We're Here To Help <br /> Reach Out Anytime
            </h1>

            {/* Decorative wavy line */}
            <div className="hidden lg:block relative w-full h-32 mb-4 ml-16">
              <svg 
                className="absolute top-0 left-0 w-64 h-full text-emerald-100" 
                viewBox="0 0 200 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 10 20 C 80 -10 120 110 200 20" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                />
                <circle cx="10" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col gap-10 mt-8">
              {/* Phone Info */}
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <FiPhoneCall className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">
                    To More Inquiry
                  </span>
                  <span className="text-xl font-bold text-black">
                    +990737621432
                  </span>
                </div>
              </div>

              {/* Mail Info */}
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  <FiMail className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">
                    To Send Mail
                  </span>
                  <span className="text-xl font-bold text-black">
                    info@example.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#F7FAF6] p-8 md:p-12 rounded-[2rem] w-full">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2d3322]">Your Name *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 bg-white rounded-md px-4 py-3.5 text-gray-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#2d3322]">Email *</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-200 bg-white rounded-md px-4 py-3.5 text-gray-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#2d3322]">Phone *</label>
                  <input 
                    type="tel" 
                    className="w-full border border-gray-200 bg-white rounded-md px-4 py-3.5 text-gray-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2d3322]">Select Service *</label>
                <div className="relative">
                  <select className="w-full border border-gray-200 bg-white rounded-md px-4 py-3.5 text-gray-800 appearance-none focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors shadow-sm">
                    <option value="" disabled selected className="text-gray-400">Home Shifting Service</option>
                    <option value="cleaning">Cleaning Service</option>
                    <option value="repair">AC Repair Service</option>
                    <option value="plumbing">Electric & Plumbing</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2d3322]">Message *</label>
                <textarea 
                  className="w-full border border-gray-200 bg-white rounded-md px-4 py-3.5 text-gray-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors shadow-sm h-32 resize-none"
                />
              </div>

              <div className="flex items-center gap-3 mt-2">
                <input 
                  type="checkbox" 
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-[#2d3322] cursor-pointer">
                  I have read & accepted Terms & Conditions.
                </label>
              </div>

              <CustomButton 
                type="submit" 
                variant="primary"
              >
                Submit Now
              </CustomButton>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
