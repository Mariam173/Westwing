import React from "react";
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/home/Hero";
import FeaturedCourses from "../components/home/FeaturedCourses";
import LearningExperience from "../components/home/LearningExperience";
import FeaturedHighlight from "../components/home/FeaturedHighlight";
import Testimonials from "../components/home/Testimonials";
import DownloadApp from "../components/home/DownloadApp";
import Footer from "../components/navigation/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <LearningExperience />
      <FeaturedHighlight />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  );
}
