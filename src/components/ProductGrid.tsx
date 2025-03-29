import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6">
      {products.map((product, index) => (
        <div key={product.id} className={`scroll-reveal`} style={{ transitionDelay: `${index * 50}ms` }}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
