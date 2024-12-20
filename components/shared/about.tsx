"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCode, FaDesktop, FaMobile, FaSearch, FaUikit } from "react-icons/fa";
import { ScrollAnimation } from "./scroll-animation";

const AboutSection = () => {
  const SERVICES = [
    {
      title: "UI/UX design",
      icon: <FaUikit className="w-10 h-10" />,
    },
    {
      title: "Web development",
      icon: <FaCode className="w-10 h-10" />,
    },
    {
      title: "Product Design",
      icon: <FaDesktop className="w-10 h-10" />,
    },
    {
      title: "Mobile Apps",
      icon: <FaMobile className="w-10 h-10" />,
    },
    {
      title: "SEO",
      icon: <FaSearch className="w-10 h-10" />,
    },
  ];

  return (
    <section className=" relative py-32 mb-20">
      <div className="custom-shape-divider-top-1734607782 z-10 !top-[-103px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="container space-y-20">
        <ScrollAnimation>
          <h2 className="h2">About Us</h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="my-6 grid grid-cols-1 md:grid-cols-5 gap-2">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 items-center justify-center"
              >
                {service.icon}
                <p className="font-semibold">{service.title}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <div className="my-6 grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 md:gap-x-6">
          <ScrollAnimation delay={0.3} className="md:order-2">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src="/images/about.webp"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="About"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} className="md:!text-right md:order-1">
            <h3 className="h3">
              Welcome to AVO A Personal Portfolio Web Agency
            </h3>
            <p className="p-text mt-3">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5} className="md:order-3">
            <p className="p-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <Button className="mt-3">View All Projects</Button>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.6}>
          <ul className="flex sm:flex-row items-center justify-center space-x-2 mt-20 flex-col">
            <li className="flex space-x-8 items-center">
              <div className="flex flex-col space-y-4">
                <span className="text-5xl font-semibold text-primary">01</span>
                <div className="border-b border-primary" />
              </div>
              <div>
                <p className="text-zinc-800 font-semibold text-lg">
                  Search Engine Optimization
                </p>
                <p className="p-text">
                  Far far away, behind the word mountains
                </p>
              </div>
            </li>
            <li className="flex space-x-8 items-center">
              <div className="flex flex-col space-y-4">
                <span className="text-5xl font-semibold text-primary">02</span>
                <div className="border-b border-primary" />
              </div>
              <div>
                <p className="text-zinc-800 font-semibold text-lg">
                  Search Engine Optimization
                </p>
                <p className="p-text">
                  Far far away, behind the word mountains
                </p>
              </div>
            </li>
            <li className="flex space-x-8 items-center">
              <div className="flex flex-col space-y-4">
                <span className="text-5xl font-semibold text-primary">03</span>
                <div className="border-b border-primary" />
              </div>
              <div>
                <p className="text-zinc-800 font-semibold text-lg">
                  Search Engine Optimization
                </p>
                <p className="p-text">
                  Far far away, behind the word mountains
                </p>
              </div>
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
