
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Minus, Plus, Heart, Share2, ArrowLeft, Check } from "lucide-react";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const { addToCart, isInCart } = useCart();
  
  const product = productId ? getProductById(productId) : null;
  const relatedProducts = product ? getRelatedProducts(product.id, product.category) : [];
  
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Reset quantity when product changes
    setQuantity(1);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const discountedPrice = product.discount 
    ? product.price - (product.price * (product.discount / 100))
    : product.price;
    
  const handleIncreaseQuantity = () => {
    if (quantity < (product.stock || 10)) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:text-foreground">Products</Link>
              <span className="mx-2">/</span>
              <Link to={`/products?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-secondary/30 rounded-xl p-8 flex items-center justify-center">
              <div className="relative overflow-hidden aspect-square w-full max-w-md mx-auto">
                {/* Product Labels */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                      New
                    </span>
                  )}
                  {product.discount && product.discount > 0 && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-md">
                      {product.discount}% Off
                    </span>
                  )}
                </div>
                
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-contain w-full h-full transition-opacity duration-500 ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setIsImageLoaded(true)}
                />
                
                {!isImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {product.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">
                  ₹{discountedPrice.toLocaleString()}
                </span>
                {product.discount && product.discount > 0 && (
                  <span className="ml-3 text-muted-foreground line-through text-lg">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
                {product.discount && product.discount > 0 && (
                  <span className="ml-3 text-green-600 text-sm font-medium">
                    Save ₹{(product.price - discountedPrice).toLocaleString()}
                  </span>
                )}
              </div>
              
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
              
              {/* Availability */}
              <div className="flex items-center mb-6">
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground mr-2">Availability:</span>
                  {product.stock && product.stock > 0 ? (
                    <span className="text-green-600 font-medium flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      In Stock ({product.stock} available)
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">Out of Stock</span>
                  )}
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border rounded-md">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                    className="h-12 w-12 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 h-12 flex items-center justify-center font-medium">
                    {quantity}
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handleIncreaseQuantity}
                    disabled={quantity >= (product.stock || 10)}
                    className="h-12 w-12 rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 sm:flex gap-3 flex-1">
                  <Button
                    onClick={handleAddToCart}
                    disabled={isInCart(product.id)}
                    className="flex-1"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                  </Button>
                  
                  <Button variant="outline" size="lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                  
                  <Button variant="outline" size="icon" className="h-12 w-12 hidden sm:flex">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Product Features */}
              {product.features && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Tabs */}
          <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-6 bg-muted/50 rounded-lg">
              <div className="prose prose-gray max-w-none dark:prose-invert">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="mb-4">{product.description}</p>
                {product.features && (
                  <>
                    <h4 className="text-lg font-medium mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              {product.specifications ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b pb-3">
                      <div className="text-sm text-muted-foreground">{key}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No specifications available for this product.</p>
              )}
            </TabsContent>
            
            <TabsContent value="shipping" className="p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Delivery</h4>
                  <p>Free shipping across India on orders above ₹500. Standard delivery within 3-7 business days.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Returns</h4>
                  <p>Easy 30-day return policy. Products must be unused and in original packaging with all tags attached.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Warranty</h4>
                  <p>All products come with manufacturer warranty. Please check product specifications for warranty details.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Related Products</h2>
                <Button variant="link" asChild>
                  <Link to={`/products?category=${product.category}`} className="flex items-center">
                    View All <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
