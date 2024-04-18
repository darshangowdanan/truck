"use client"
import Link from "next/link";
import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isTruckDropdownOpen, setIsTruckDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className=" w-screen  flex justify-between items-center h-20 px-4 bg-gray-800 text-white sticky top-0 z-30">
        <Link href="/" className="text-xl font-bold">
          Truck Rental Service
        </Link>

        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/">Trucks</Link>
          </li>
          <li>
            <Link href="/">Rental Process</Link>
          </li>
          <li>
            <Link href="/">Locations</Link>
          </li>
          <li>
            <Link href="/">FAQs</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/components/authentication/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/components/authentication/login">Login In</Link>
          </li>
        </ul>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="md:hidden absolute top-20 left-0 w-full py-2 bg-gray-800 text-white space-y-2 px-5 divide-y z-40">
            <li className="pt-5 text-center">
            <Link href="/components/authentication/login">Login In</Link> / <Link href="/components/authentication/signup">Sign Up</Link>
            </li>

            <li className="pt-5">
              <Link href="/">Trucks</Link>
            </li>
            <li className="pt-5">
              <Link href="/">Rental Process</Link>
            </li>
            <li className="pt-5">
              <Link href="/">Locations</Link>
            </li>
            <li className="pt-5">
              <Link href="/">FAQs</Link>
            </li>
            <li className="pt-5">
              <Link href="/">About Us</Link>
            </li>
            <li className="pt-5">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
