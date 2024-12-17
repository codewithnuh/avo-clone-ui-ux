import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaUikit } from "react-icons/fa";
const AboutSection = () => {
  return (
    <section className="container mb-20">
      <h2 className="h2">About Us</h2>
      <div className="my-6 grid grid-cols-1  md:grid-cols-5 gap-2 ">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 items-center justify-center"
            >
              <FaUikit className="w-10 h-10" />
              <p className="font-semibold">UI/UX design</p>
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
          <h3 className="h3">Welcome to AVO A Personal Porfolio Web Agency</h3>
          <p className="p-text mt-3">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia. It is
            a paradisematic country, in which roasted parts of sentences fly
            into your mouth.
          </p>
        </div>
        <div className="md:order-3">
          <p className="p-text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
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
    </section>
  );
};

export default AboutSection;
