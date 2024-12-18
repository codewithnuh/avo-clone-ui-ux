import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCode, FaDesktop, FaMobile, FaSearch, FaUikit } from "react-icons/fa";
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
    <section className="before:relative before:skew-y-3 after:relative after:skew-x-3 after:bottom-[128rem] after:w-[40%] after:left-[14rem] after:rotate-[163deg] after:h-10 after:bg-blue-500 before:top-[-135px] before:w-[80%] before:h-10 before:bg-white before:block   py-32 mb-20">
      <div className="container  space-y-20">
        <h2 className="h2">About Us</h2>
        <div className="my-6 grid grid-cols-1  md:grid-cols-5 gap-2 ">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 items-center justify-center"
            >
              {/* <FaUikit className="w-10 h-10" />
               */}
              {service.icon}
              <p className="font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
        <div className="my-6 grid grid-cols-1 space-y-4 md:space-y-0  md:grid-cols-3 md:gap-x-6">
          <div className="aspect-[4/3] md:aspect-auto md:order-2 relative">
            <Image
              src={"/images/about.webp"}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="About"
            />
          </div>
          <div className="md:!text-right md:order-1">
            <h3 className="h3">
              Welcome to AVO A Personal Porfolio Web Agency
            </h3>
            <p className="p-text mt-3">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
          </div>
          <div className="md:order-3">
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
          </div>
          {/* <div className="my-4 text-left space-y-4">
        </div> */}
        </div>
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
              <p className="p-text">Far far away, behind the word mountains</p>
            </div>
          </li>
          {/* 2 */}
          <li className="flex space-x-8 items-center">
            <div className="flex flex-col space-y-4">
              <span className="text-5xl font-semibold text-primary">02</span>
              <div className="border-b border-primary" />
            </div>
            <div>
              <p className="text-zinc-800 font-semibold text-lg">
                Search Engine Optimization
              </p>
              <p className="p-text">Far far away, behind the word mountains</p>
            </div>
          </li>
          {/* 3 */}
          <li className="flex space-x-8 items-center">
            <div className="flex flex-col space-y-4">
              <span className="text-5xl font-semibold text-primary">03</span>
              <div className="border-b border-primary" />
            </div>
            <div>
              <p className="text-zinc-800 font-semibold text-lg">
                Search Engine Optimization
              </p>
              <p className="p-text">Far far away, behind the word mountains</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
