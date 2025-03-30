import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { products, categories } from "@/data/products";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [showOnlyNew, setShowOnlyNew] = useState(false);
  const [showOnlyDiscount, setShowOnlyDiscount] = useState(false);
  
  // Get initial category from URL if exists
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
    
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== "All Products") {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range
    result = result.filter(product => {
      const price = product.discount 
        ? product.price - (product.price * (product.discount / 100))
        : product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Filter only new products
    if (showOnlyNew) {
      result = result.filter(product => product.isNew);
    }
    
    // Filter only products with discount
    if (showOnlyDiscount) {
      result = result.filter(product => product.discount && product.discount > 0);
    }
    
    // Apply sorting
    if (sortOrder === "price-asc") {
      result.sort((a, b) => {
        const priceA = a.discount ? a.price - (a.price * (a.discount / 100)) : a.price;
        const priceB = b.discount ? b.price - (b.price * (b.discount / 100)) : b.price;
        return priceA - priceB;
      });
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => {
        const priceA = a.discount ? a.price - (a.price * (a.discount / 100)) : a.price;
        const priceB = b.discount ? b.price - (b.price * (b.discount / 100)) : b.price;
        return priceB - priceA;
      });
    } else if (sortOrder === "discount") {
      result.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    } else if (sortOrder === "new") {
      result.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery, sortOrder, priceRange, showOnlyNew, showOnlyDiscount]);
  
  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All Products") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };
  
  // Initialize scroll reveal animation
  useEffect(() => {
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
  
  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("All Products");
    setSearchQuery("");
    setSortOrder("default");
    setPriceRange([0, 150000]);
    setShowOnlyNew(false);
    setShowOnlyDiscount(false);
    setSearchParams({});
  };

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
          
          {/* Search Bar */}
          <div className="mb-8 scroll-reveal">
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search products..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) {
                    searchParams.set("search", e.target.value);
                  } else {
                    searchParams.delete("search");
                  }
                  setSearchParams(searchParams);
                }}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    setSearchQuery("");
                    searchParams.delete("search");
                    setSearchParams(searchParams);
                  }}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
          
          {/* Filters and Categories */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            {/* Category Bar - Enhanced for responsiveness */}
            <div className="relative w-full md:w-auto">
              {/* Left shadow indicator for scroll */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block category-scroll-indicator-left"></div>
              
              <div className="flex overflow-x-auto pb-2 md:pb-0 gap-1.5 sm:gap-2 scroll-reveal scrollbar-hide w-full md:w-auto" 
                   style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                {categories.map((category, index) => (
                  <Button 
                    key={category} 
                    variant={activeCategory === category ? "default" : "outline"}
                    size={window.innerWidth < 640 ? "sm" : "default"}
                    className={`whitespace-nowrap text-xs sm:text-sm flex-shrink-0 transition-all duration-200 ${
                      activeCategory === category ? "font-medium shadow-sm" : "font-normal"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Right shadow indicator for scroll */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block category-scroll-indicator-right"></div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 scroll-reveal">
              <Select
                value={sortOrder}
                onValueChange={(value) => setSortOrder(value)}
              >
                <SelectTrigger className="w-[160px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="discount">Biggest Discount</SelectItem>
                  <SelectItem value="new">New Arrivals</SelectItem>
                </SelectContent>
              </Select>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                    <SheetDescription>
                      Refine your product selection with these filters.
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-6">
                    {/* Price Range Filter */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Price Range</h3>
                      <Slider
                        defaultValue={[0, 150000]}
                        value={priceRange}
                        min={0}
                        max={150000}
                        step={1000}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {/* Special Filters */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Special Filters</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newOnly"
                            checked={showOnlyNew}
                            onCheckedChange={(checked) => 
                              setShowOnlyNew(checked === true)
                            }
                          />
                          <label
                            htmlFor="newOnly"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Show only new products
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="discountOnly"
                            checked={showOnlyDiscount}
                            onCheckedChange={(checked) => 
                              setShowOnlyDiscount(checked === true)
                            }
                          />
                          <label
                            htmlFor="discountOnly"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Show only discounted products
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Categories */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            size="sm"
                            className="justify-start h-9"
                            onClick={() => handleCategoryChange(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <SheetFooter>
                    <Button variant="outline" onClick={resetFilters}>Reset Filters</Button>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          {/* Active Filters */}
          {(searchQuery || activeCategory !== "All Products" || sortOrder !== "default" || 
           priceRange[0] > 0 || priceRange[1] < 150000 || showOnlyNew || showOnlyDiscount) && (
            <div className="mb-6 flex flex-wrap items-center gap-2 scroll-reveal">
              <span className="text-sm font-medium">Active Filters:</span>
              
              {searchQuery && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  onClick={() => {
                    setSearchQuery("");
                    searchParams.delete("search");
                    setSearchParams(searchParams);
                  }}
                >
                  Search: {searchQuery}
                  <X className="h-3 w-3" />
                </Button>
              )}
              
              {activeCategory !== "All Products" && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  onClick={() => handleCategoryChange("All Products")}
                >
                  Category: {activeCategory}
                  <X className="h-3 w-3" />
                </Button>
              )}
              
              {sortOrder !== "default" && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  onClick={() => setSortOrder("default")}
                >
                  Sort: {
                    sortOrder === "price-asc" ? "Price (Low to High)" : 
                    sortOrder === "price-desc" ? "Price (High to Low)" :
                    sortOrder === "discount" ? "Biggest Discount" : "New Arrivals"
                  }
                  <X className="h-3 w-3" />
                </Button>
              )}
              
              {(priceRange[0] > 0 || priceRange[1] < 150000) && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  onClick={() => setPriceRange([0, 150000])}
                >
                  Price: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  <X className="h-3 w-3" />
                </Button>
              )}
              
              {showOnlyNew && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  onClick={() => setShowOnlyNew(false)}
                >
                  New Only
                  <X className="h-3 w-3" />
                </Button>
              )}
              
              {showOnlyDiscount && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  onClick={() => setShowOnlyDiscount(false)}
                >
                  Discounted Only
                  <X className="h-3 w-3" />
                </Button>
              )}
              
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs ml-auto"
                onClick={resetFilters}
              >
                Clear All
              </Button>
            </div>
          )}
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="scroll-reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 scroll-reveal">
              <div className="text-7xl mb-4">😕</div>
              <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any products that match your filters.
              </p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center items-center mt-16 scroll-reveal">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;