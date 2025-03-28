
import React from "react";

const ProductHeader = () => {
  return (
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
  );
};

export default ProductHeader;
