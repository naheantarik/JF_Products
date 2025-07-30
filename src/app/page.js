import React from "react";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import AgriculturalProduct from "./components/AgriculturalProduct";
import LandscapeProduct from "./components/LandscapeProduct";
import CtaSection from "./components/CtaSection";
import WhyUsPage from "./components/WhyUs";
import ClientCarousel from "./components/ClientCarousel";

const page = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <AgriculturalProduct />
      <LandscapeProduct />
      <CtaSection />
      <WhyUsPage />
      <ClientCarousel />
    </div>
  );
};

export default page;
