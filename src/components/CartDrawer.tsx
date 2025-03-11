
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X, ChevronRight, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart, 
    getCartTotal, 
    getCartCount 
  } = useCart();
  
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {cartCount > 0 
              ? `You have ${cartCount} item${cartCount > 1 ? 's' : ''} in your cart`
              : 'Your cart is empty'}
          </SheetDescription>
        </SheetHeader>
        
        {cartCount > 0 ? (
          <>
            <ScrollArea className="flex-1 px-1 my-4">
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const discountedPrice = item.discount 
                    ? item.price - (item.price * (item.discount / 100))
                    : item.price;
                    
                  return (
                    <div key={item.id} className="flex py-2">
                      <div className="h-20 w-20 bg-secondary/30 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <Link 
                          to={`/products/${item.id}`} 
                          className="font-medium line-clamp-1 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                        <div className="text-sm text-muted-foreground mt-1">{item.category}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-baseline">
                            <span className="font-medium">₹{discountedPrice.toLocaleString()}</span>
                            {item.discount && item.discount > 0 && (
                              <span className="ml-2 text-muted-foreground line-through text-xs">
                                ₹{item.price.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-7 w-7"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-7 w-7"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 ml-2 text-muted-foreground hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
            
            <div className="space-y-4 mt-auto">
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              
              <SheetFooter className="flex-col gap-3 sm:flex-col">
                <SheetClose asChild>
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/checkout">
                      Proceed to Checkout <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </SheetClose>
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs flex items-center"
                    onClick={clearCart}
                  >
                    <Trash2 className="mr-1 h-3 w-3" />
                    Clear Cart
                  </Button>
                </div>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center py-12 space-y-4">
            <div className="rounded-full bg-muted p-6">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-muted-foreground text-center max-w-xs">
              Looks like you haven't added any products to your cart yet.
            </p>
            <SheetClose asChild>
              <Button asChild>
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
