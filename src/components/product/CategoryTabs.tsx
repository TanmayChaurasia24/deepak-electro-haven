
import React from "react";
import { Button } from "@/components/ui/button";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 scroll-reveal" style={{ scrollbarWidth: 'none' }}>
      {categories.map((category) => (
        <Button 
          key={category} 
          variant={activeCategory === category ? "default" : "outline"}
          className="whitespace-nowrap"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;
