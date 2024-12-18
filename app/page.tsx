import AboutSection from "@/components/shared/about";
import BlogSection from "@/components/pages/home/sections/blog";
import Hero from "@/components/pages/home/sections/hero";
import WorksSection from "@/components/pages/home/sections/work";
import CTA from "@/components/shared/cta";
import TestimonialsCarousel from "@/components/shared/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorksSection />
      <TestimonialsCarousel />
      <CTA />
      <BlogSection />
    </>
  );
};

export default Home;
