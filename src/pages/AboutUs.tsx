import React from 'react';
import AboutSection from '../components/section/about/AboutSection';
import WhyChooseUs from '../components/section/why-choose-us/WhyChooseUs';
import Testimonials from '../components/section/testimonials/Testimonials';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* 
        Adding padding-top (pt-24) assuming there is a fixed header 
        which is common in this project's layout structure. 
      */}
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default AboutUs;
