
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import images from "../data/images.json";
import useScrollReveal from "../hooks/useScrollReveal";
import ProductGrid from "./ProductGrid";
import ProductPagination from "./ui/ProductPagination";

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Exactly 4 products per row/page
  const sectionRef = useScrollReveal();

  const products = [
    {
      id: "1",
      name: "Samsung Smart Refrigerator",
      category: "Refrigerators",
      price: 89999,
      image: images.products.refrigerators[0],
      isNew: true
    },
    {
      id: "2",
      name: "LG Fully Automatic Washing Machine",
      category: "Washing Machines",
      price: 45999,
      image: images.products.washing_machines[0],
      discount: 10
    },
    {
      id: "3",
      name: "Daikin Inverter Split Air Conditioner",
      category: "Air Conditioners",
      price: 56000,
      image: images.products.air_conditioners[0]
    },
    {
      id: "4",
      name: "Bosch Microwave Oven",
      category: "Kitchen Appliances",
      price: 18999,
      image: images.products.kitchen_appliances[0],
      discount: 15
    },
    {
      id: "5",
      name: "Sony 65\" 4K Smart TV",
      category: "Televisions",
      price: 119999,
      image: images.products.televisions[0],
      isNew: true
    },
    {
      id: "6",
      name: "JBL Premium Soundbar",
      category: "Audio Systems",
      price: 29999,
      image: images.products.audio_systems[0],
      discount: 5
    },
    {
      id: "7",
      name: "iPhone 14 Pro",
      category: "Smartphones",
      price: 119999,
      image: images.products.smartphones[0],
      isNew: true
    },
    {
      id: "8",
      name: "MacBook Pro M1",
      category: "Laptops",
      price: 149999,
      image: images.products.laptops[0],
      discount: 8
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          
          <Button 
            variant="link" 
            asChild
            className="scroll-reveal flex items-center text-primary"
          >
            <Link to="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <ProductGrid products={currentItems} />

        <ProductPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
          className="mt-12"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
