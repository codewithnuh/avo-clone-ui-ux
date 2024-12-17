"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/globals/header";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-[160vh] bg-black">
      <Header isScrolled={isScrolled} />
    </section>
  );
};

export default Hero;
