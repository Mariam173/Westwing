// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-[#e50069] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center h-111">
        <h2 className="text-3xl font-bold mb-10">What People Are Saying?</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <img
            src="/Images/image9.png"
            alt="People holding stars"
            className="w-full md:w-1/2 max-w-md mx-auto"
          />

    
          <div className="md:w-1/2 text-left space-y-4">
            <p className="text-lg italic">
              I took the Python course using the StackJunior app and found the
              videos encouraging and helpful.
            </p>
            <p className="font-semibold text-white mt-2">– John Doe</p>

        
            <div className="flex items-center gap-2 mt-4">
              <span className="h-2 w-2 rounded-full bg-white opacity-60"></span>
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <span className="h-2 w-2 rounded-full bg-white opacity-60"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
