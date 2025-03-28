
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import ProductPagination from "@/components/ui/ProductPagination";
import ProductHeader from "@/components/product/ProductHeader";
import ProductSearch from "@/components/product/ProductSearch";
import CategoryTabs from "@/components/product/CategoryTabs";
import ProductSort from "@/components/product/ProductSort";
import ProductFilters from "@/components/product/ProductFilters";
import ActiveFilters from "@/components/product/ActiveFilters";
import NoProductsFound from "@/components/product/NoProductsFound";
import { useProductFiltering } from "@/hooks/useProductFiltering";
import useScrollReveal from "@/hooks/useScrollReveal";

const ProductsPage = () => {
  const sectionRef = useScrollReveal();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // 4 products per row, 5 rows per page
  
  // Use our custom hook for filtering logic
  const {
    filteredProducts,
    activeCategory,
    searchQuery,
    sortOrder,
    priceRange,
    showOnlyNew,
    showOnlyDiscount,
    handleCategoryChange,
    handleSearchChange,
    setSortOrder,
    setPriceRange,
    setShowOnlyNew,
    setShowOnlyDiscount,
    resetFilters,
  } = useProductFiltering({ allProducts: products, categories });

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts.length]);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  // Get current items for the active page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  
  return (
    <div className="min-h-screen bg-background" ref={sectionRef}>
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <ProductHeader />
          
          {/* Search Bar */}
          <div className="mb-8 scroll-reveal">
            <ProductSearch 
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={() => {
                handleSearchChange("");
              }}
            />
          </div>
          
          {/* Filters and Categories */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <CategoryTabs 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange} 
            />
            
            <div className="flex items-center gap-3 scroll-reveal">
              <ProductSort 
                value={sortOrder}
                onValueChange={(value) => setSortOrder(value)}
              />
              
              <ProductFilters
                categories={categories}
                activeCategory={activeCategory}
                priceRange={priceRange}
                showOnlyNew={showOnlyNew}
                showOnlyDiscount={showOnlyDiscount}
                onCategoryChange={handleCategoryChange}
                onPriceRangeChange={setPriceRange}
                onShowOnlyNewChange={setShowOnlyNew}
                onShowOnlyDiscountChange={setShowOnlyDiscount}
                onResetFilters={resetFilters}
              />
            </div>
          </div>
          
          {/* Active Filters */}
          <ActiveFilters 
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            sortOrder={sortOrder}
            priceRange={priceRange}
            showOnlyNew={showOnlyNew}
            showOnlyDiscount={showOnlyDiscount}
            onClearSearch={() => handleSearchChange("")}
            onClearCategory={() => handleCategoryChange("All Products")}
            onClearSort={() => setSortOrder("default")}
            onClearPriceRange={() => setPriceRange([0, 150000])}
            onClearShowOnlyNew={() => setShowOnlyNew(false)}
            onClearShowOnlyDiscount={() => setShowOnlyDiscount(false)}
            onClearAll={resetFilters}
          />
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <ProductGrid products={currentProducts} />
              
              {/* Pagination */}
              {totalPages > 1 && (
                <ProductPagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={setCurrentPage} 
                  className="mt-16"
                />
              )}
            </>
          ) : (
            <NoProductsFound onResetFilters={resetFilters} />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
