import React from "react";
import { Button } from "@/components/ui/button";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  getProductCount: (category: string) => number;
}

const CategoryTabs = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  getProductCount 
}: CategoryTabsProps) => {
  return (
    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 scroll-reveal" style={{ scrollbarWidth: 'none' }}>
      {categories.map((category) => (
        <Button 
          key={category} 
          variant={activeCategory === category ? "default" : "outline"}
          className="whitespace-nowrap flex items-center gap-2"
          onClick={() => onCategoryChange(category)}
        >
          <span>{category}</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            {getProductCount(category)}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;
