import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
const Hero = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <section className="h-screen  bg-[url('/images/bg_2.webp')] bg-fixed bg-black/50 bg-blend-overlay bg bg-center bg-cover">
      <div className="relative">
        <div className="custom-shape-divider-top-1734607782 z-10 !top-[32rem]  ">
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
        <div className="container relative">
          <div className="relative flex flex-col justify-center items-start space-y-4 text-white top-96">
            <div className="flex items-center space-x-2 uppercase">
              <Link href={"/"}>Home</Link>

              <FaGreaterThan className="fill-primary" size={15} />
              <p>{pageTitle}</p>
              <FaGreaterThan className="fill-primary" size={15} />
            </div>
            <h1 className="h1">{pageTitle}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
