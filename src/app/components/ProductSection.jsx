"use client"

import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
      {
        id: 1,
        name: "JF Barbed Wire- 270 GSM",
        price: 4995.00,
        image: "/images/product/image-1.png",
      },
      {
        id: 2,
        name: "JF Barbed Wire- 270 GSM",
        price: 4995.00,
        image: "/images/product/image-1.png",
      },
      {
        id: 3,
        name: "JF Barbed Wire- 270 GSM",
        price: 4995.00,
        image: "/images/product/image-1.png",
      },
      {
        id: 4,
        name: "JF Barbed Wire- 270 GSM",
        price: 4995.00,
        image: "/images/product/image-1.png",
      },
      {
        id: 5,
        name: "JF Barbed Wire- 270 GSM",
        price: 500.00,
        image: "/images/product/image-1.png",
      },
    ];

    const getProductsPerPage = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 2;
        return 1;
      }
      return 4;
    };

    const maxIndex = Math.max(0, products.length - getProductsPerPage());

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex <= 0 ? maxIndex : prevIndex - 1
      );
    };

    const visibleProducts = products.slice(currentIndex, currentIndex + getProductsPerPage());

  return (
    <section className="pt-[100px] pb-[110px]">
      <div className="max-w-[1280px] mx-auto relative">
        <h2>Our Products</h2>

        {/* Product Slider Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-25px] top-[50%] z-10 w-[47px] h-[47px] bg-white border-[0.84px] border-[#1A1A1A] opacity-[0.7] rounded-[84px] p-[13px] cursor-pointer"
          aria-label="Previous product"
        >
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip259_138">
                <rect
                  id="Frame"
                  rx="0.000000"
                  width="19.156250"
                  height="19.156250"
                  transform="matrix(-1 0 0 1 20.4219 0.421875)"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Frame"
              rx="0.000000"
              width="19.156250"
              height="19.156250"
              transform="matrix(-1 0 0 1 20.4219 0.421875)"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <g clip-path="url(#clip259_138)">
              <path
                id="Vector"
                d="M3.33 9.99L16.66 9.99"
                stroke="#002B55"
                stroke-opacity="1.000000"
                stroke-width="1.265625"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M7.5 14.16C7.5 14.16 3.33 11.09 3.33 10C3.33 8.9 7.5 5.83 7.5 5.83"
                stroke="#002B55"
                stroke-opacity="1.000000"
                stroke-width="1.265625"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-25px] top-[50%] z-10 w-[47px] h-[47px] bg-white border-[0.84px] border-[#1A1A1A] opacity-[0.7] rounded-[84px] p-[13px] cursor-pointer"
          aria-label="Next product"
        >
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip259_129">
                <rect
                  id="Frame"
                  rx="0.000000"
                  width="19.156250"
                  height="19.156250"
                  transform="translate(0.421875 0.421875)"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Frame"
              rx="0.000000"
              width="19.156250"
              height="19.156250"
              transform="translate(0.421875 0.421875)"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <g clip-path="url(#clip259_129)">
              <path
                id="Vector"
                d="M16.66 9.99L3.33 9.99"
                stroke="#002B55"
                stroke-opacity="1.000000"
                stroke-width="1.265625"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M12.5 14.16C12.5 14.16 16.66 11.09 16.66 10C16.66 8.9 12.5 5.83 12.5 5.83"
                stroke="#002B55"
                stroke-opacity="1.000000"
                stroke-width="1.265625"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;