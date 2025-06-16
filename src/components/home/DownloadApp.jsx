// src/components/DownloadApp.jsx
import React from 'react';

const DownloadApp = () => {
  return (
    <section className="relative bg-[#ffc90b] py-24 px-4 text-gray-900 overflow-hidden">
    
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Download StackJunior App</h2>

        <p className="max-w-xl mx-auto text-base">
          Whether at home or on the go, <span className="font-semibold">StackJunior</span> wants you to keep learning.
          Hence, the <span className="font-semibold">StackJunior</span> app.
        </p>

    
        <img
          src="/Images/image12.png"
          alt="Phone display"
          className="h-40 mx-auto "
        />

       
      </div>

    
      <img
        src="/Images/image10.png"
        alt="Phone left corner"
        className="absolute bottom-0 left-0 h-40 md:h-48"
      />

    
      <img
        src="/Images/image11.png"
        alt="Phone right corner"
        className="absolute bottom-0 right-0 h-40 md:h-48"
      />
    </section>
  );
};

export default DownloadApp;



