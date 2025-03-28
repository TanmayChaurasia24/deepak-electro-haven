
import React from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
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

interface ProductFiltersProps {
  categories: string[];
  activeCategory: string;
  priceRange: [number, number];
  showOnlyNew: boolean;
  showOnlyDiscount: boolean;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onShowOnlyNewChange: (checked: boolean) => void;
  onShowOnlyDiscountChange: (checked: boolean) => void;
  onResetFilters: () => void;
}

const ProductFilters = ({
  categories,
  activeCategory,
  priceRange,
  showOnlyNew,
  showOnlyDiscount,
  onCategoryChange,
  onPriceRangeChange,
  onShowOnlyNewChange,
  onShowOnlyDiscountChange,
  onResetFilters,
}: ProductFiltersProps) => {
  return (
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
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
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
                    onShowOnlyNewChange(checked === true)
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
                    onShowOnlyDiscountChange(checked === true)
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
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <SheetFooter>
          <Button variant="outline" onClick={onResetFilters}>Reset Filters</Button>
          <SheetClose asChild>
            <Button>Apply Filters</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProductFilters;
