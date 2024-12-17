import AboutSection from "@/components/pages/home/sections/about";
import Hero from "@/components/pages/home/sections/hero";
import WorksSection from "@/components/pages/home/sections/work";
import TestimonialsCarousel from "@/components/shared/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorksSection />
      <TestimonialsCarousel />
    </>
  );
};

export default Home;
