import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMap,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pb-8 pt-24  relative">
      <div className="custom-shape-divider-top-1734593799 !rotate-180 !top-[-100px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="fill-black"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="grid text-white grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-5">
          {/* Column 1 */}
          <div className="space-y-3 h-full">
            <h3 className="font-bold my-3 text-lg">avo</h3>
            <p>Lorem ipsum it quia harum optio ipsum,ate magni!</p>
            <ul>
              <li>
                <div className="flex space-x-4 items-center">
                  <div className="bg-gray-700 rounded-full p-2">
                    <FaTwitter size={20} className="fill-gray-400" />
                  </div>
                  <div className="bg-gray-700 rounded-full p-2">
                    <FaFacebook size={20} className="fill-gray-400" />
                  </div>
                  <div className="bg-gray-700 rounded-full p-2">
                    <FaInstagram size={20} className="fill-gray-400" />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Dynamic Columns from FOOTER_LINKS */}
          {FOOTER_LINKS.map((category) => (
            <div className="space-y-3 h-full" key={category.category}>
              <h3 className="font-bold my-3">{category.category}</h3>
              <ul>
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 */}
          <div className="space-y-3 h-full">
            <h3 className="font-bold my-3">Have a question?</h3>
            <ul className="flex flex-col items-start space-y-4">
              <li className="flex space-x-4 items-center">
                <FaMap size={20} className="flex-shrink-0" />
                <p className="text-sm">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
              <li className="flex space-x-4 items-center">
                <FaPhone size={20} className="flex-shrink-0" />
                <p className="text-sm">+2 392 3929 210</p>
              </li>
              <li className="flex space-x-4 items-center">
                <FaMailBulk size={20} className="flex-shrink-0" />
                <p className="text-sm">info@yourdomain.com</p>
              </li>
            </ul>
          </div>
        </div>
        <p className=" text-center text-gray-400 py-20">
          Copyright ©2024 All rights reserved | This template is made with ❤️ by{" "}
          <Link
            className="text-primary"
            href={"https://codewithnuh.vercel.app"}
          >
            Noor ul hassan
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
