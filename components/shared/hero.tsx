import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
const Hero = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <section className="h-screen bg-[url('/images/bg_2.webp')] bg-fixed bg-black/50 bg-blend-overlay bg bg-center bg-cover">
      <div className="container">
        <div className="relative flex flex-col justify-center items-start space-y-4 text-white top-96">
          <div className="flex items-center space-x-2 uppercase">
            <Link href={"/"}>Home</Link>

            <FaGreaterThan className="fill-primary" size={20} />
            <p>{pageTitle}</p>
            <FaGreaterThan className="fill-primary" size={20} />
          </div>
          <h1 className="h1">{pageTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
