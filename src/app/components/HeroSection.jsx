"use client";
import { useState } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide

  const slides = [
    {
      title: "Premium Quality",
      subtitle: "Durable Construction",
      image: "/placeholder.svg?height=400&width=500&text=Previous+Slide",
      bgColor: "bg-gray-100",
    },
    {
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      image: "/images/grass-roll.jpg",
      bgColor: "bg-white",
    },
    {
      title: "Mesh Solutions",
      subtitle: "High Quality Materials",
      image: "/placeholder.svg?height=400&width=500&text=Blue+Mesh",
      bgColor: "bg-cyan-50",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideIndex = (offset) => {
    return (currentSlide + offset + slides.length) % slides.length;
  };

  return (
    <section className="bg-gray-100 -mt-[52px] relative ">
      <div className="container mx-auto px-4">
        <div className="relative h-[662px] flex items-center justify-center">
          {/* Left Navigation Arrow */}
          {/* <button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-lime-400 hover:bg-lime-500 rounded-full w-12 h-12 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button> */}

          {/* Slides Container */}
          <div className="relative w-full max-w-7xl mx-auto h-full flex items-center">
            {/* Left Partial Slide */}
            <div className="absolute left-0 w-80 h-72 z-10 transform -translate-x-32">
              <div
                className={`${
                  slides[getSlideIndex(-1)].bgColor
                } h-full rounded-2xl shadow-lg overflow-hidden border`}
              >
                <div className="p-6 h-full flex items-center">
                  <div className="w-full">
                    <img
                      src={
                        slides[getSlideIndex(-1)].image || "/placeholder.svg"
                      }
                      alt=""
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Center Slide */}
            <div className="relative z-20 w-full max-w-4xl mx-auto px-[30px]">
              <div
                className={`${slides[currentSlide].bgColor} rounded-2xl shadow-2xl overflow-hidden border`}
              >
                <div className="grid md:grid-cols-2 gap-0 items-center h-80">
                  {/* Image Side */}
                  <div className="h-full p-6 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <img
                        src={slides[currentSlide].image || "/placeholder.svg"}
                        alt={slides[currentSlide].title}
                        className="w-full h-64 object-cover rounded-xl shadow-md"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {slides[currentSlide].subtitle}
                    </p>
                    {/* <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-full w-fit transition-all duration-200">
                      Shop Now
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Partial Slide */}
            <div className="absolute right-0 w-80 h-72 z-10 transform translate-x-32">
              <div
                className={`${
                  slides[getSlideIndex(1)].bgColor
                } h-full rounded-2xl shadow-lg overflow-hidden border`}
              >
                <div className="p-6 h-full flex items-center">
                  <div className="w-full">
                    <img
                      src="/placeholder.svg?height=200&width=300&text=Blue+Mesh+Pattern"
                      alt=""
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          {/* <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-lime-400 hover:bg-lime-500 rounded-full w-12 h-12 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </Button> */}
        </div>
      </div>
    </section>
  );
}
