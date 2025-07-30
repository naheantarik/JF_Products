"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white lg:pt-[10px] md:pt-[10px] pt-[0px] relative">
      <div className="lg:h-[150px] md:h-[100px] h-[80px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[768px] mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-[50px] pt-[35px] pb-[97px]">
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins hover:text-gray-600 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins hover:text-gray-600 transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Logo */}
        <div className={`w-auto lg:h-[150px] h-[80px] z-[60] flex-shrink-0 ${isMobileMenuOpen ? "hidden" : "block"}`}>
          <Link href="/">
            <Image
              src="/images/logo/logo.png"
              alt="Brand Logo"
              width={132}
              height={150}
              priority
              className="h-full w-auto"
            />
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex pt-[35px] pb-[97px] items-center justify-center gap-[50px]">
          {/* Login Button */}
          <div className="flex items-center justify-center gap-[10px]">
            <h6 className="text-[18px] font-normal leading-[100%]">Login</h6>
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip243_86">
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="23.000000"
                    height="23.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Frame"
                rx="0.000000"
                width="23.000000"
                height="23.000000"
                transform="translate(0.500000 0.500000)"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip243_86)">
                <path
                  d="M19 9C19 5.13 15.86 2 12 2C8.13 2 5 5.13 5 9C5 12.86 8.13 16 12 16C15.86 16 19 12.86 19 9Z"
                  stroke="#1A1A1A"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 9C19 5.13 15.86 2 12 2C8.13 2 5 5.13 5 9C5 12.86 8.13 16 12 16C15.86 16 19 12.86 19 9Z"
                  stroke="#000000"
                  strokeOpacity="0.200000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 22C2.11 20.17 3.71 18.66 5.64 17.6C7.58 16.55 9.77 16 12 16C14.22 16 16.41 16.55 18.35 17.6C20.28 18.66 21.88 20.17 23 22"
                  stroke="#1A1A1A"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M1 22C2.11 20.17 3.71 18.66 5.64 17.6C7.58 16.55 9.77 16 12 16C14.22 16 16.41 16.55 18.35 17.6C20.28 18.66 21.88 20.17 23 22"
                  stroke="#000000"
                  strokeOpacity="0.200000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
          {/* Search Icon */}
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip243_74">
                <rect
                  id="Frame"
                  rx="0.000000"
                  width="23.000000"
                  height="23.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Frame"
              rx="0.000000"
              width="23.000000"
              height="23.000000"
              transform="translate(0.500000 0.500000)"
              fill="#FFFFFF"
              fillOpacity="0"
            />
            <g clipPath="url(#clip243_74)">
              <path
                d="M17.5 17.5L22 22"
                stroke="#1A1A1A"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M17.5 17.5L22 22"
                stroke="#000000"
                strokeOpacity="0.200000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M11 2C6.02 2 2 6.02 2 11C2 15.97 6.02 20 11 20C15.97 20 20 15.97 20 11C20 6.02 15.97 2 11 2Z"
                stroke="#1A1A1A"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
              <path
                d="M11 2C6.02 2 2 6.02 2 11C2 15.97 6.02 20 11 20C15.97 20 20 15.97 20 11C20 6.02 15.97 2 11 2Z"
                stroke="#000000"
                strokeOpacity="0.200000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          {/* Cart Icon */}
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.66 9.83C2.48 8.75 2.39 8.21 2.68 7.85C2.97 7.5 3.51 7.5 4.58 7.5L19.41 7.5C20.48 7.5 21.02 7.5 21.31 7.85C21.6 8.21 21.51 8.75 21.33 9.83L20.12 17.01C19.72 19.39 19.52 20.58 18.71 21.29C17.89 22 16.72 22 14.37 22L9.62 22C7.27 22 6.1 22 5.28 21.29C4.47 20.58 4.27 19.39 3.87 17.01L2.66 9.83Z"
                stroke="#1A1A1A"
                strokeOpacity="1"
                strokeWidth="1.5"
              />
              <path
                d="M2.66 9.83C2.48 8.75 2.39 8.21 2.68 7.85C2.97 7.5 3.51 7.5 4.58 7.5L19.41 7.5C20.48 7.5 21.02 7.5 21.31 7.85C21.6 8.21 21.51 8.75 21.33 9.83L20.12 17.01C19.72 19.39 19.52 20.58 18.71 21.29C17.89 22 16.72 22 14.37 22L9.62 22C7.27 22 6.1 22 5.28 21.29C4.47 20.58 4.27 19.39 3.87 17.01L2.66 9.83Z"
                stroke="#000000"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 7.5C17.5 4.46 15.03 2 12 2C8.96 2 6.5 4.46 6.5 7.5"
                stroke="#1A1A1A"
                strokeOpacity="1"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 7.5C17.5 4.46 15.03 2 12 2C8.96 2 6.5 4.46 6.5 7.5"
                stroke="#000000"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
            </svg>

            <div className="bg-black w-[18px] h-[18px] rounded-full absolute top-[-5px] right-[-8px]">
              <p className="text-white text-center text-[12px] font-poppins font-medium leading-[100%] px-[5px] py-[3px]">
                0
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Cart Icon for Mobile */}
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.66 9.83C2.48 8.75 2.39 8.21 2.68 7.85C2.97 7.5 3.51 7.5 4.58 7.5L19.41 7.5C20.48 7.5 21.02 7.5 21.31 7.85C21.6 8.21 21.51 8.75 21.33 9.83L20.12 17.01C19.72 19.39 19.52 20.58 18.71 21.29C17.89 22 16.72 22 14.37 22L9.62 22C7.27 22 6.1 22 5.28 21.29C4.47 20.58 4.27 19.39 3.87 17.01L2.66 9.83Z"
                stroke="#1A1A1A"
                strokeOpacity="1"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 7.5C17.5 4.46 15.03 2 12 2C8.96 2 6.5 4.46 6.5 7.5"
                stroke="#1A1A1A"
                strokeOpacity="1"
                strokeWidth="1.5"
              />
            </svg>

            <div className="bg-black w-[18px] h-[18px] rounded-full absolute top-[-5px] right-[-8px]">
              <p className="text-white text-center text-[12px] font-poppins font-medium leading-[100%] px-[5px] py-[3px]">
                0
              </p>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-poppins font-semibold">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              <Link
                href="#"
                className="block text-[18px] text-[#1A1A1A] leading-[100%] font-poppins py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-[18px] text-[#1A1A1A] leading-[100%] font-poppins py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Shop
              </Link>
              <Link
                href="#"
                className="block text-[18px] text-[#1A1A1A] leading-[100%] font-poppins py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Blogs
              </Link>
              <Link
                href="#"
                className="block text-[18px] text-[#1A1A1A] leading-[100%] font-poppins py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Login */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-[16px] font-poppins">Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
