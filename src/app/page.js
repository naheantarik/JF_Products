import React from "react";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

const page = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <ProductSection />
    </div>
  );
};

export default page;
