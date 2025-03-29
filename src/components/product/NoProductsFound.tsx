
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface NoProductsFoundProps {
  onResetFilters: () => void;
}

const NoProductsFound = ({ onResetFilters }: NoProductsFoundProps) => {
  return (
    <div className="text-center py-16 scroll-reveal">
      <div className="text-7xl mb-4">😕</div>
      <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
      <p className="text-muted-foreground mb-6">
        We couldn't find any products that match your current filters.
      </p>
      <Button onClick={onResetFilters} className="flex items-center gap-2">
        <RefreshCcw className="w-4 h-4" />
        Reset Filters
      </Button>
    </div>
  );
};

export default NoProductsFound;
