
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RefrigeratorIcon, WashingMachine, Tv, AirVent, Speaker, Smartphone, Coffee } from "lucide-react";

const Categories = () => {
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

  const categories = [
    {
      name: "Refrigerators",
      icon: RefrigeratorIcon,
      color: "bg-blue-50 text-blue-500",
      hover: "hover:bg-blue-500 hover:text-white",
    },
    {
      name: "Washing Machines",
      icon: WashingMachine,
      color: "bg-purple-50 text-purple-500",
      hover: "hover:bg-purple-500 hover:text-white",
    },
    {
      name: "Air Conditioners",
      icon: AirVent,
      color: "bg-cyan-50 text-cyan-500",
      hover: "hover:bg-cyan-500 hover:text-white",
    },
    {
      name: "Televisions",
      icon: Tv,
      color: "bg-indigo-50 text-indigo-500",
      hover: "hover:bg-indigo-500 hover:text-white",
    },
    {
      name: "Audio Systems",
      icon: Speaker,
      color: "bg-pink-50 text-pink-500",
      hover: "hover:bg-pink-500 hover:text-white",
    },
    {
      name: "Smartphones",
      icon: Smartphone,
      color: "bg-amber-50 text-amber-500",
      hover: "hover:bg-amber-500 hover:text-white",
    },
    {
      name: "Kitchen Appliances",
      icon: Coffee,
      color: "bg-emerald-50 text-emerald-500",
      hover: "hover:bg-emerald-500 hover:text-white",
    },
  ];

  return (
    <section id="categories" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Browse Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 scroll-reveal">
            Explore Our Product Categories
          </h2>
          <p className="text-muted-foreground scroll-reveal">
            From refrigerators to smartphones, find electronics for every need. High-quality products from trusted brands to enhance your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className={`scroll-reveal category-item`} 
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Button
                variant="outline"
                className={`w-full h-auto py-8 flex flex-col items-center gap-4 rounded-xl border-2 transition-all duration-300 ${category.color} ${category.hover}`}
              >
                <category.icon className="h-10 w-10" />
                <span className="font-medium">{category.name}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
