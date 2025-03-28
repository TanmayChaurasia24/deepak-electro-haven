
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "@/contexts/CartContext";

interface UseProductFilteringProps {
  allProducts: Product[];
  categories: string[];
}

export const useProductFiltering = ({ allProducts, categories }: UseProductFilteringProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [showOnlyNew, setShowOnlyNew] = useState(false);
  const [showOnlyDiscount, setShowOnlyDiscount] = useState(false);
  
  // Get initial category and search from URL if they exist
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
    
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams, categories]);
  
  // Apply filters
  useEffect(() => {
    let result = [...allProducts];
    
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
  }, [activeCategory, searchQuery, sortOrder, priceRange, showOnlyNew, showOnlyDiscount, allProducts]);

  // Update URL when category or search changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All Products") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

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

  return {
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
  };
};
