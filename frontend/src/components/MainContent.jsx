import React from "react";
import HeroSection from "./mainContent/HeroSection";
import Info from "./mainContent/Info";
import About from "./mainContent/About";
import Clients from "./mainContent/Clients";
import Testimonial from "./mainContent/Testimonial";
import Contact from "./mainContent/Contact";

const MainContent = () => {
  return (
    <>
      <HeroSection />
      <Info />
      <About />
      <Clients />
      <Testimonial />
      <Contact />
    </>
  );
};

export default MainContent;
