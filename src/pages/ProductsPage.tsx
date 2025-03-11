
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";

const ProductsPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Sample products data for demonstration
  const products = [
    {
      id: "1",
      name: "Samsung Smart Refrigerator",
      category: "Refrigerators",
      price: 89999,
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      isNew: true
    },
    {
      id: "2",
      name: "LG Fully Automatic Washing Machine",
      category: "Washing Machines",
      price: 45999,
      image: "https://images.unsplash.com/photo-1626806787461-102c1a6f2c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      discount: 10
    },
    {
      id: "3",
      name: "Daikin Inverter Split Air Conditioner",
      category: "Air Conditioners",
      price: 56000,
      image: "https://images.unsplash.com/photo-1631744591853-998c4308bbb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: "4",
      name: "Bosch Microwave Oven",
      category: "Kitchen Appliances",
      price: 18999,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      discount: 15
    },
    {
      id: "5",
      name: "Sony 55-inch 4K Smart TV",
      category: "Televisions",
      price: 79999,
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      discount: 8
    },
    {
      id: "6",
      name: "Philips Air Purifier",
      category: "Air Purifiers",
      price: 24999,
      image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
    },
    {
      id: "7",
      name: "Crompton Ceiling Fan",
      category: "Fans",
      price: 3499,
      image: "https://images.unsplash.com/photo-1583676826570-3936e9c71cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      isNew: true
    },
    {
      id: "8",
      name: "Apple iPhone 14 Pro",
      category: "Smartphones",
      price: 129900,
      image: "https://images.unsplash.com/photo-1677683628812-2bbdbdc5c10a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  const categories = [
    "All Products",
    "Refrigerators",
    "Washing Machines",
    "Air Conditioners",
    "Televisions",
    "Kitchen Appliances",
    "Smartphones",
    "Audio Systems"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Our Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 scroll-reveal">
              Explore Our Products
            </h1>
            <p className="text-muted-foreground scroll-reveal">
              Browse through our wide range of high-quality electronics and home appliances from top brands
            </p>
          </div>
          
          {/* Filters and Categories */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 scroll-reveal" style={{ scrollbarWidth: 'none' }}>
              {categories.map((category, index) => (
                <Button 
                  key={category} 
                  variant={index === 0 ? "default" : "outline"}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-3 scroll-reveal">
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Sort</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="scroll-reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center mt-16 scroll-reveal">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
