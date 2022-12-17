import React, { useState } from "react";
import { useGlobalContext } from "../../Context";
import Blog from "./Components/Blog/Blog";
import ContactMe from "./Components/CoontactMe/ContactMe";
import Features from "./Components/Features/Features";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Pricing from "./Components/Pricing/Pricing";
import Team from "./Components/Team/Team";
import Testimonial from "./Components/Testimonial/Testimonial";
// import { useState } from "react";

import "./Styles/Home.scss";
const Home = () => {
  const { test, isDarkMode } = useGlobalContext();

  return (
    <div
      className=" home-wrapper"
      data-theme-color={isDarkMode ? "dark" : "light"}
    >
      <Header />
      <HeroSection />
      <Features />
      <Testimonial />
      <Gallery />
      <Pricing />
      <Blog />
      <ContactMe />
      <Team />
      <NewsLetter />
      {/* <div className=" proxy-div">a</div> */}
    </div>
  );
};

export default Home;
