import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white pt-[20px]">
      <div className="h-[150px] px-[320px] flex items-center justify-between">
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

        <div className="pt-[35px] pb-[97px]">
          <div>
            <h6 className="font-normal leading-[100%]">Login</h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
