
import React from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const ProductSearch = ({ value, onChange, onClear }: ProductSearchProps) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <Input
        type="text"
        placeholder="Search products..."
        className="pr-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={onClear}
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ProductSearch;
