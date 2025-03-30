import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  image,
  isNew = false,
  discount = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart, isInCart } = useCart();
  
  const discountedPrice = discount > 0 
    ? price - (price * (discount / 100))
    : price;
    
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, category, price, image, isNew, discount });
  };
    
  return (
    <Link
      to={`/products/${id}`}
      className="product-card block overflow-hidden rounded-xl bg-white subtle-shadow group transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        {/* Product Labels */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
              New
            </span>
          )}
          {discount > 0 && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-md">
              {discount}% Off
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button 
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:bg-white"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        
        {/* Product Image */}
        <div className="w-full h-full bg-gray-100/50 dark:bg-gray-800/50 flex items-center justify-center p-4">
          <img
            src={image}
            alt={name}
            className={`object-contain w-4/5 h-4/5 transition-all duration-500 transform ${
              isHovered ? "scale-110" : "scale-100"
            } ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
          />
        </div>
        
        {/* Quick View button that appears on hover */}
        <div 
          className={`absolute inset-0 bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <Button
            variant="secondary"
            className="btn-hover-float bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-colors"
            onClick={(e) => {
              // Allow normal link navigation
            }}
          >
            <Eye className="mr-2 h-4 w-4" />
            Quick View
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
        
        <div className="flex items-baseline mt-2">
          <span className="font-semibold text-lg">₹{discountedPrice.toLocaleString()}</span>
          {discount > 0 && (
            <span className="ml-2 text-muted-foreground line-through text-sm">
              ₹{price.toLocaleString()}
            </span>
          )}
        </div>
        
        <div className="mt-4">
          <Button 
            variant={isInCart(id) ? "default" : "outline"}
            className="w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
            onClick={handleAddToCart}
            disabled={isInCart(id)}
          >
            <ShoppingCart className="h-4 w-4" />
            {isInCart(id) ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
