
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActiveFiltersProps {
  searchQuery: string;
  activeCategory: string;
  sortOrder: string;
  priceRange: [number, number];
  showOnlyNew: boolean;
  showOnlyDiscount: boolean;
  onClearSearch: () => void;
  onClearCategory: () => void;
  onClearSort: () => void;
  onClearPriceRange: () => void;
  onClearShowOnlyNew: () => void;
  onClearShowOnlyDiscount: () => void;
  onClearAll: () => void;
}

const ActiveFilters = ({
  searchQuery,
  activeCategory,
  sortOrder,
  priceRange,
  showOnlyNew,
  showOnlyDiscount,
  onClearSearch,
  onClearCategory,
  onClearSort,
  onClearPriceRange,
  onClearShowOnlyNew,
  onClearShowOnlyDiscount,
  onClearAll,
}: ActiveFiltersProps) => {
  // Check if any filters are active
  const hasActiveFilters =
    searchQuery ||
    activeCategory !== "All Products" ||
    sortOrder !== "default" ||
    priceRange[0] > 0 ||
    priceRange[1] < 150000 ||
    showOnlyNew ||
    showOnlyDiscount;

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 scroll-reveal">
      <span className="text-sm font-medium">Active Filters:</span>
      
      {searchQuery && (
        <Button
          variant="secondary"
          size="sm"
          className="h-7 text-xs gap-1"
          onClick={onClearSearch}
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
          onClick={onClearCategory}
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
          onClick={onClearSort}
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
          onClick={onClearPriceRange}
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
          onClick={onClearShowOnlyNew}
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
          onClick={onClearShowOnlyDiscount}
        >
          Discounted Only
          <X className="h-3 w-3" />
        </Button>
      )}
      
      <Button
        variant="outline"
        size="sm"
        className="h-7 text-xs ml-auto"
        onClick={onClearAll}
      >
        Clear All
      </Button>
    </div>
  );
};

export default ActiveFilters;
