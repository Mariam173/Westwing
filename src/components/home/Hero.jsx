import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <>
      
      <section className="bg-[#0063a4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Learn on your schedule
            </h1>

          
            <div className="flex w-full max-w-md mt-4">
          
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="flex-1 px-4 py-3 bg-white text-gray-800 placeholder-gray-500 rounded-l-md outline-none"
              />

            
              <button className="bg-pink-600 px-4 py-3 rounded-r-md flex items-center justify-center cursor-pointer">
                <FiSearch className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-pink-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center gap-6 md:gap-0">
          <div>
            <p className="text-5xl font-bold">5000+</p>
            <p className="text-sm">Courses</p>
          </div>
          <div>
            <p className="text-5xl font-bold">2000+</p>
            <p className="text-sm">Students</p>
          </div>
          <div>
            <p className="text-5xl font-bold">1000+</p>
            <p className="text-sm">Tutors</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
