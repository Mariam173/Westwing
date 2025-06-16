// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#005d9f] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/Images/logo.png" alt="Logo" className="h-8" />
            <span className="text-xl font-bold">StackJunior</span>
          </div>
          <p className="text-sm">
            is an ed-tech platform that trains kids and teenagers in programming and other tech skills.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About StackJunior</li>
            <li>Courses</li>
            <li>Career</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <Link to='/feedback'>Send Feedback</Link>
            <li>Partnerships</li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold text-lg mb-4">Socials</h3>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>

          <Link to='/contact-us' className="font-semibold text-lg mb-2">Contact Us</Link>
          <p className="text-sm">+234 xxx xxx xxxx</p>
          <p className="text-sm">+234 xxx xxx xxxx</p>
        </div>
      </div>

    
      <div className="text-center text-sm text-white mt-10 border-t border-white/30 pt-4">
        ©2022 – StackJunior. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
