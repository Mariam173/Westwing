// src/components/LearningExperience.jsx
import React from 'react';

const LearningExperience = () => {
  return (
    <section className="bg-[#00a17f] pt-16 pb-36 relative">
      <div className="max-w-7xl mx-auto px-4 text-center text-white space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Quick Tutorial</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          At StackJunior, acquire industry-relevant tech skills such as programming,
          software development, data science, cloud computing and more to become a
          world-class IT professional.
        </p>

        
        <div className="bg-white pt-6 px-6 rounded-lg shadow-lg w-[90%] md:w-[85%] mx-auto relative overflow-visible">
          <img
            src="/Images/image4.png"
            alt="Learning Experience"
            className="-mb-90 mx-auto w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
