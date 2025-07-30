import React from "react";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import AgriculturalProduct from "./components/AgriculturalProduct";
import LandscapeProduct from "./components/LandscapeProduct";
import CtaSection from "./components/CtaSection";
import WhyUsPage from "./components/WhyUs";

const page = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <AgriculturalProduct />
      <LandscapeProduct />
      <CtaSection />
      <WhyUsPage />
    </div>
  );
};

export default page;
