import ProfileCard from "@/components/pages/about/profile-card";
import Team from "@/components/pages/about/sections/team";
import AboutSection from "@/components/shared/about";
import CTA from "@/components/shared/cta";
import Hero from "@/components/shared/hero";
import TestimonialsCarousel from "@/components/shared/testimonials";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Hero pageTitle={"About Us"} />
      <AboutSection />
      <CTA />
      <Team />
      <TestimonialsCarousel />
    </div>
  );
};

export default AboutPage;
