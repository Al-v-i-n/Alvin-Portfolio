"use client";

import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload, FiX } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useState } from "react";

const Home = () => {
  // State to control visibility of resume image
  const [showResume, setShowResume] = useState(false);
  
  // Function to handle button click
  const handleResumeView = () => {
    setShowResume(true);
  };
  
  // Function to close the resume view
  const handleCloseResume = () => {
    setShowResume(false);
  };

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/assets/resume/Alvin Resume.jpg';
    link.download = 'Alvin_Siby_Resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full flex flex-col">
      {/* Resume view overlay - only shown when showResume is true */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4">
          <div className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center">
            <div className="absolute -top-12 right-0 flex gap-4">
              <button 
                onClick={handleDownloadResume}
                className="flex items-center gap-1 text-white hover:text-accent text-xl font-bold"
              >
                <FiDownload /> Download
              </button>
              <button 
                onClick={handleCloseResume}
                className="flex items-center gap-1 text-white hover:text-accent text-xl font-bold"
              >
                <FiX /> Close
              </button>
            </div>
            <img 
              src="/assets/resume/Alvin Resume.jpg" 
              alt="Alvin Siby Resume" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
      
      <div className="container mx-auto flex-1">
        {/* Mobile-first layout with photo at top on mobile and positioned correctly on desktop */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 items-center gap-8 h-full py-6">
          {/* Photo - first on mobile, second on desktop */}
          <div className="order-first xl:order-last flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Photo/>
          </div>
          
          {/* Text - second on mobile, first on desktop */}
          <div className="order-last xl:order-first text-center xl:text-left">
            <span className="text-xl">Engineering Graduate</span>
            <h1 className="h1 mb-4">Hey I&apos;m<br/><span className="text-accent">Alvin Siby</span></h1>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                onClick={handleResumeView}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-6 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats positioned to be visible without scrolling */}
        <div className="w-full mt-auto mb-8">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;