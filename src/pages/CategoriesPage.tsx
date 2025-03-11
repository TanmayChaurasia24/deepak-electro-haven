
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RefrigeratorIcon, WashingMachine, Tv, AirVent, Speaker, Smartphone, Coffee, AirVentIcon, Printer, Laptop, Monitor, HeadphonesIcon } from "lucide-react";

const CategoriesPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/products?category=${categoryName}`);
  };

  const categories = [
    {
      name: "Refrigerators",
      icon: RefrigeratorIcon,
      color: "bg-blue-50 text-blue-500",
      hover: "hover:bg-blue-500 hover:text-white",
      description: "Keep your food fresh with our energy-efficient refrigerators"
    },
    {
      name: "Washing Machines",
      icon: WashingMachine,
      color: "bg-purple-50 text-purple-500",
      hover: "hover:bg-purple-500 hover:text-white",
      description: "Automatic and semi-automatic washing machines for efficient cleaning"
    },
    {
      name: "Air Conditioners",
      icon: AirVent,
      color: "bg-cyan-50 text-cyan-500",
      hover: "hover:bg-cyan-500 hover:text-white",
      description: "Stay cool with our inverter and non-inverter air conditioners"
    },
    {
      name: "Televisions",
      icon: Tv,
      color: "bg-indigo-50 text-indigo-500",
      hover: "hover:bg-indigo-500 hover:text-white",
      description: "Smart TVs with crystal clear display and immersive sound"
    },
    {
      name: "Audio Systems",
      icon: Speaker,
      color: "bg-pink-50 text-pink-500",
      hover: "hover:bg-pink-500 hover:text-white",
      description: "Enhance your audio experience with our sound systems"
    },
    {
      name: "Air Coolers",
      icon: AirVentIcon,
      color: "bg-amber-50 text-amber-500",
      hover: "hover:bg-amber-500 hover:text-white",
      description: "Effective cooling solutions for hot summer days"
    },
    {
      name: "Kitchen Appliances",
      icon: Coffee,
      color: "bg-emerald-50 text-emerald-500",
      hover: "hover:bg-emerald-500 hover:text-white",
      description: "Modern appliances to make cooking easier and enjoyable"
    },
    {
      name: "Smartphones",
      icon: Smartphone,
      color: "bg-red-50 text-red-500",
      hover: "hover:bg-red-500 hover:text-white",
      description: "Latest smartphones with cutting-edge features"
    },
    {
      name: "Laptops",
      icon: Laptop,
      color: "bg-violet-50 text-violet-500",
      hover: "hover:bg-violet-500 hover:text-white",
      description: "Powerful laptops for work, gaming, and entertainment"
    },
    {
      name: "Printers",
      icon: Printer,
      color: "bg-teal-50 text-teal-500",
      hover: "hover:bg-teal-500 hover:text-white",
      description: "Reliable printers for home and office use"
    },
    {
      name: "Monitors",
      icon: Monitor,
      color: "bg-orange-50 text-orange-500",
      hover: "hover:bg-orange-500 hover:text-white",
      description: "High-resolution monitors for immersive viewing experience"
    },
    {
      name: "Headphones",
      icon: HeadphonesIcon,
      color: "bg-lime-50 text-lime-500",
      hover: "hover:bg-lime-500 hover:text-white",
      description: "Premium headphones and earbuds for crystal clear sound"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Our Categories
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 scroll-reveal">
              Discover Our Product Categories
            </h1>
            <p className="text-muted-foreground scroll-reveal">
              Browse through our extensive range of electronics categories to find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.name} 
                className="scroll-reveal" 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`h-full flex flex-col p-6 rounded-xl border-2 transition-all duration-300 ${category.color} group ${category.hover}`}>
                  <category.icon className="h-12 w-12 mb-4 transition-transform group-hover:scale-110 duration-300" />
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90 mb-4 flex-grow">{category.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-auto border border-current bg-white/50 hover:bg-white group-hover:border-white group-hover:text-current"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    View Products
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
