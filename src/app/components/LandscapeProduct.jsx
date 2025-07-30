"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const LandscapeProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const products = [
    {
      id: 1,
      name: "Antiqo Fence",
      price: 10024.0,
      price2: 14984.82,
      image: "/images/Landscape/image-1.png",
    },
    {
      id: 2,
      name: "JF Australian Trellis",
      price: 6962.0,
      image: "/images/Landscape/image-2.png",
    },
    {
      id: 3,
      name: "JF Polyhex Mesh",
      price: 4050.0,
      price2: 10770.0,
      image: "/images/Landscape/image-3.png",
    },
    {
      id: 4,
      name: "JF Privezy Grass Wall",
      price: 1646.10,
      price2: 18284.10,
      image: "/images/Landscape/image-4.png",
    },
    {
      id: 5,
      name: "JF Barbed Wire- 270 GSM",
      price: 500.0,
      price2: 800.0,
      image: "/images/product/image-1.png",
    },
  ];

  // Improved responsive logic with useEffect
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setProductsPerPage(2);
      } else {
        setProductsPerPage(1);
      }
    };

    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);
    
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  const maxIndex = Math.max(0, products.length - productsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <section className="lg:pt-[110px] md:pt-[80px] pt-[60px] px-5 sm:px-0 md:px-0 lg:px-0">
      <div className="container mx-auto relative">
        <h2 className="text-left mb-[30px]">Landscape Products</h2>

        {/* Product Slider Arrows - Responsive positioning */}
        <button
          onClick={prevSlide}
          className="absolute left-[-15px] sm:left-[-20px] lg:left-[-25px] top-[53%] z-10 w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[47px] lg:h-[47px] bg-white border-[0.84px] border-[#1A1A1A] opacity-[0.7] rounded-[84px] p-[10px] sm:p-[12px] lg:p-[13px] cursor-pointer"
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
                  fillOpacity="0"
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
              fillOpacity="0"
            />
            <g clipPath="url(#clip259_138)">
              <path
                id="Vector"
                d="M3.33 9.99L16.66 9.99"
                stroke="#002B55"
                strokeOpacity="1.000000"
                strokeWidth="1.265625"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Vector"
                d="M7.5 14.16C7.5 14.16 3.33 11.09 3.33 10C3.33 8.9 7.5 5.83 7.5 5.83"
                stroke="#002B55"
                strokeOpacity="1.000000"
                strokeWidth="1.265625"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-15px] sm:right-[-20px] lg:right-[-25px] top-[53%] z-10 w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[47px] lg:h-[47px] bg-white border-[0.84px] border-[#1A1A1A] opacity-[0.7] rounded-[84px] p-[10px] sm:p-[12px] lg:p-[13px] cursor-pointer"
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
                  fillOpacity="0"
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
              fillOpacity="0"
            />
            <g clipPath="url(#clip259_129)">
              <path
                id="Vector"
                d="M16.66 9.99L3.33 9.99"
                stroke="#002B55"
                strokeOpacity="1.000000"
                strokeWidth="1.265625"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Vector"
                d="M12.5 14.16C12.5 14.16 16.66 11.09 16.66 10C16.66 8.9 12.5 5.83 12.5 5.83"
                stroke="#002B55"
                strokeOpacity="1.000000"
                strokeWidth="1.265625"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </button>

        {/* Products Grid - Enhanced responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandscapeProduct;
