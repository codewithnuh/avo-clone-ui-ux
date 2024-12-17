"use client";
import React from "react";
import Link from "next/link";

const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <header
      className={`fixed top-0 py-6 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white "
      }`}
    >
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link
            href={"/"}
            className={`font-bold ${
              isScrolled ? "text-black" : "text-white"
            } text-2xl`}
          >
            <p>
              a<span className="text-primary">v</span>o
            </p>
          </Link>
          <p className="text-primary">Menu</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
