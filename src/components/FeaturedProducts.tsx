
import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
    }
  ];

  return (
    <section id="products" className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-xl mb-6 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Featured Products
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 scroll-reveal">
              Our Best Selling Electronics
            </h2>
            <p className="text-muted-foreground scroll-reveal">
              Discover our most popular appliances chosen by our customers for quality, performance, and design excellence.
            </p>
          </div>
          
          <Button variant="link" className="scroll-reveal flex items-center text-primary">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className={`scroll-reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
