
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-reveal");
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("revealed");
        }
      });
    };
    
    // Initial check on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
