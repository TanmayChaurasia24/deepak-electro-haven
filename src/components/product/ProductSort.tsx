
import React from "react";
import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
  value: string;
  onValueChange: (value: string) => void;
}

const ProductSort = ({ value, onValueChange }: ProductSortProps) => {
  return (
    <Select
      value={value}
      onValueChange={onValueChange}
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
  );
};

export default ProductSort;
