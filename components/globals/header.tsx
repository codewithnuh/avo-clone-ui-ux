"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
const Header = () => {
  // State to track whether the page has been scrolled
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Track scroll position and update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 py-4 left-0 w-full transition-colors duration-300 z-50 ${
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
          <ul className="hidden sm:flex items-center space-x-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  className={`${
                    pathName === item.href ? "text-primary" : ""
                  } hover:text-primary uppercase`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-primary sm:hidden">Menu</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
