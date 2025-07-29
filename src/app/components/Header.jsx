import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white pt-[20px]">
      <div className="h-[150px] container mx-auto flex items-center justify-between">
        <nav className="flex items-center justify-center gap-[50px] pt-[35px] pb-[97px]">
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins"
          >
            Blogs
          </Link>
          <Link
            href="#"
            className="text-[18px] text-[#1A1A1A] leading-[100%] font-poppins"
          >
            Contact
          </Link>
        </nav>

        <div className="w-auto h-[150px]">
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

        <div className="pt-[35px] pb-[97px] flex items-center justify-center gap-[50px]">
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
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip243_86">
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="23.000000"
                    height="23.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fill-opacity="0"
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
                fill-opacity="0"
              />
              <g clip-path="url(#clip243_86)">
                <path
                  id="Vector"
                  d="M19 9C19 5.13 15.86 2 12 2C8.13 2 5 5.13 5 9C5 12.86 8.13 16 12 16C15.86 16 19 12.86 19 9Z"
                  stroke="#1A1A1A"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M19 9C19 5.13 15.86 2 12 2C8.13 2 5 5.13 5 9C5 12.86 8.13 16 12 16C15.86 16 19 12.86 19 9Z"
                  stroke="#000000"
                  stroke-opacity="0.200000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M1 22C2.11 20.17 3.71 18.66 5.64 17.6C7.58 16.55 9.77 16 12 16C14.22 16 16.41 16.55 18.35 17.6C20.28 18.66 21.88 20.17 23 22"
                  stroke="#1A1A1A"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M1 22C2.11 20.17 3.71 18.66 5.64 17.6C7.58 16.55 9.77 16 12 16C14.22 16 16.41 16.55 18.35 17.6C20.28 18.66 21.88 20.17 23 22"
                  stroke="#000000"
                  stroke-opacity="0.200000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
          {/* 2nd Icon */}
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip243_74">
                <rect
                  id="Frame"
                  rx="0.000000"
                  width="23.000000"
                  height="23.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fill-opacity="0"
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
              fill-opacity="0"
            />
            <g clip-path="url(#clip243_74)">
              <path
                id="Vector"
                d="M17.5 17.5L22 22"
                stroke="#1A1A1A"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M17.5 17.5L22 22"
                stroke="#000000"
                stroke-opacity="0.200000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M11 2C6.02 2 2 6.02 2 11C2 15.97 6.02 20 11 20C15.97 20 20 15.97 20 11C20 6.02 15.97 2 11 2Z"
                stroke="#1A1A1A"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Vector"
                d="M11 2C6.02 2 2 6.02 2 11C2 15.97 6.02 20 11 20C15.97 20 20 15.97 20 11C20 6.02 15.97 2 11 2Z"
                stroke="#000000"
                stroke-opacity="0.200000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          {/* 3rd Icon */}
          <div className="relative">
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip243_79">
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="23.000000"
                    height="23.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fill-opacity="0"
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
                fill-opacity="0"
              />
              <g clip-path="url(#clip243_79)">
                <path
                  id="Vector"
                  d="M2.66 9.83C2.48 8.75 2.39 8.21 2.68 7.85C2.97 7.5 3.51 7.5 4.58 7.5L19.41 7.5C20.48 7.5 21.02 7.5 21.31 7.85C21.6 8.21 21.51 8.75 21.33 9.83L20.12 17.01C19.72 19.39 19.52 20.58 18.71 21.29C17.89 22 16.72 22 14.37 22L9.62 22C7.27 22 6.1 22 5.28 21.29C4.47 20.58 4.27 19.39 3.87 17.01L2.66 9.83Z"
                  stroke="#1A1A1A"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                />
                <path
                  id="Vector"
                  d="M2.66 9.83C2.48 8.75 2.39 8.21 2.68 7.85C2.97 7.5 3.51 7.5 4.58 7.5L19.41 7.5C20.48 7.5 21.02 7.5 21.31 7.85C21.6 8.21 21.51 8.75 21.33 9.83L20.12 17.01C19.72 19.39 19.52 20.58 18.71 21.29C17.89 22 16.72 22 14.37 22L9.62 22C7.27 22 6.1 22 5.28 21.29C4.47 20.58 4.27 19.39 3.87 17.01L2.66 9.83Z"
                  stroke="#000000"
                  stroke-opacity="0.200000"
                  stroke-width="1.500000"
                />
                <path
                  id="Vector"
                  d="M17.5 7.5C17.5 4.46 15.03 2 12 2C8.96 2 6.5 4.46 6.5 7.5"
                  stroke="#1A1A1A"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                />
                <path
                  id="Vector"
                  d="M17.5 7.5C17.5 4.46 15.03 2 12 2C8.96 2 6.5 4.46 6.5 7.5"
                  stroke="#000000"
                  stroke-opacity="0.200000"
                  stroke-width="1.500000"
                />
              </g>
            </svg>
            <div className="bg-black w-[18px] h-[18px] rounded-full absolute top-[-5px] right-[-8px]">
              <p className="text-white text-center text-[12px] font-poppins font-medium leading-[100%] px-[5px] py-[3px]">0</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
