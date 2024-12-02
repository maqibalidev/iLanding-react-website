import React, { useEffect, useState } from "react";


import Header from "../includes/header/Header";
import HeroSection from "./heroSection/HeroSection";
import About from "./aboutUsSection/About";
import Features from "./features/Features";
import Testimonial from "./testimonial/Testimonial";
import Service from "./services/Service";
import Pricing from "./pricing/Pricing";
import FaqSection from "./faqSection/FaqSection";
import Footer from "../includes/footer/Footer";
import Contract from "./contact/Contact";
import "./home.css";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.screen.height * 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="  scroll-top-btn position-fixed bottom-0 right-0 d-flex align-items-center justify-content-center z-2 rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="#FFF"
            viewBox="0 -960 960 960"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      )}
      <Header />
      <HeroSection />
      <About />
      <Features />
      <Testimonial />
      <Service />
      <Pricing />
      <FaqSection />
      <Contract />
      <Footer />
    </div>
  );
};

export default Home;
