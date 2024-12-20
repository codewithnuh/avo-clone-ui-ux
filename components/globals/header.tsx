"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAVIGATION_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathName]);

  return (
    <>
      <header
        className={`fixed top-0 py-4 left-0 w-full transition-colors duration-300 z-50 ${
          isScrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link
              href="/"
              className={`font-bold ${
                isScrolled ? "text-black" : "text-white"
              } text-2xl z-50 relative`}
            >
              <p>
                a<span className="text-red-600">v</span>o
              </p>
            </Link>
            <ul className="hidden sm:flex items-center space-x-8">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`${
                      pathName === item.href ? "text-red-600" : ""
                    } hover:text-red-600 uppercase text-sm tracking-wider transition-colors`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`sm:hidden z-50 uppercase font-medium ${
                isMenuOpen
                  ? "text-white"
                  : isScrolled
                  ? "text-black"
                  : "text-white"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <span className="text-red-600">Close</span>
              ) : (
                <span className="text-red-600">Menu</span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="fixed top-0 left-0 w-full  bg-black z-40 overflow-hidden sm:hidden"
          >
            <div className="container mx-auto px-4 py-28">
              <ul className="space-y-6">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`block text-2xl font-medium ${
                        pathName === item.href ? "text-red-600" : "text-white"
                      } hover:text-red-600 uppercase tracking-wider transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
