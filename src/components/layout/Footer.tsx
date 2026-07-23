import React from 'react';
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaXTwitter, 
  FaInstagram
} from 'react-icons/fa6';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiPhoneCall, FiSend, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-400 font-sans relative overflow-hidden">
      {/* Background decorations - simple gradients to mimic the image's faint shapes */}
    
      
      {/* Subtle grid pattern overlay if needed, but keeping it simple for now */}
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 pt-10 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Logo area */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-400 text-black font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm transform -rotate-12">
                <span className="transform rotate-12">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-3xl font-bold leading-none tracking-tight">Servic</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wider">One Demand Service Sale</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed mb-8 pr-4">
              Welcome to Qleviq, where innovation meets our passion in a journey that started with a simple idea and a shared dream.
            </p>
            
            {/* Reviews */}
            <div className="flex flex-wrap gap-6 mb-10">
              {/* Clutch Review */}
              <div>
                <div className="flex items-center gap-1 text-xs mb-1">
                  <span className="text-white font-medium">Review On</span>
                  <div className="flex text-red-500 text-[10px]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-white font-bold text-lg leading-none">Clutch</span>
                  <span className="text-xs text-gray-500">(50 reviews)</span>
                </div>
              </div>
              
              {/* Google Review */}
              <div>
                <div className="flex items-center gap-1 text-xs mb-1">
                  <span className="text-white font-medium">Review On</span>
                  <div className="flex text-yellow-400 text-[10px]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  {/* Google Logo text style approximation */}
                  <div className="flex font-bold text-lg leading-none tracking-tighter">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-400">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </div>
                  <span className="text-xs text-gray-500">(50 reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 underline decoration-gray-600 underline-offset-4">
                View On Social Media
              </h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                  <FaXTwitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Solutions */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xl font-semibold mb-8">Solutions</h3>
            <ul className="space-y-4">
              {['AC Repair Services', 'Cleaning Solution', 'Beauty & Wellness', 'Home Shifting', 'Electric & Plumbing', 'Car Mechanic'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm hover:text-white transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-8">Company</h3>
            <ul className="space-y-4">
              {['Who we are', 'Careers', 'Blogs', 'Pricing', 'How it works'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm hover:text-white transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Support */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xl font-semibold mb-8">Support</h3>
            <div className="flex flex-col">
              
              {/* Phone */}
              <div className="flex items-center gap-4 py-4 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 text-white">
                  <FiPhoneCall size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm text-gray-300 font-medium">+8801790224045</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-4 py-4 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 text-white">
                  <FiSend size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Say Hello</p>
                  <p className="text-sm text-gray-300 font-medium">info@example.com</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-center gap-4 py-4 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 text-white">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Address</p>
                  <p className="text-sm text-gray-300 font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 mt-4 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500">
            Copyright 2026 <span className="text-white font-medium">Servic</span> | Design By <span className="text-white font-medium">MD Wasim</span>
          </p>
          <div className="flex gap-6 font-medium">
            <Link to="#" className="text-white hover:text-yellow-400 transition-colors">Support Policy</Link>
            <Link to="#" className="text-white hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
            <Link to="#" className="text-white hover:text-yellow-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
