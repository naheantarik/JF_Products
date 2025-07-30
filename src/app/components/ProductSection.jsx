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
    <section className='pt-[100px] pb-[110px]'>
        <div className='max-w-[1280px] mx-auto relative'>
            <h2>Our Products</h2>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous product"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next product"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            {/* Products Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16'>
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProductSection;