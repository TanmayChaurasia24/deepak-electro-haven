
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { 
  Trash, 
  Plus, 
  Minus, 
  ShoppingBag, 
  CreditCard, 
  ArrowLeft, 
  CheckCircle, 
  ChevronRight 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    getCartTotal, 
    getCartCount,
    clearCart
  } = useCart();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  
  const cartTotal = getCartTotal();
  const shippingFee = cartTotal > 0 ? 499 : 0;
  const tax = cartTotal > 0 ? Math.round(cartTotal * 0.18) : 0;
  const orderTotal = cartTotal + shippingFee + tax;
  
  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      clearCart();
    }, 2000);
  };
  
  // If cart is empty and not in success state, show empty cart message
  if (cartItems.length === 0 && !paymentSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            
            <h1 className="text-3xl font-bold mb-3">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            
            <Button asChild size="lg">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  // If payment is successful, show success message
  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-3">Payment Successful!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground mt-2">
              {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Cart Items</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs flex items-center gap-1"
                      onClick={clearCart}
                    >
                      <Trash className="h-3 w-3" />
                      Clear Cart
                    </Button>
                  </div>
                  
                  <div className="divide-y">
                    {cartItems.map((item) => {
                      const discountedPrice = item.discount 
                        ? item.price - (item.price * (item.discount / 100))
                        : item.price;
                      
                      return (
                        <div key={item.id} className="py-4 flex gap-4">
                          <div className="w-24 h-24 rounded-md bg-background overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-contain p-2" 
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <Link to={`/products/${item.id}`} className="font-medium hover:text-primary">
                              {item.name}
                            </Link>
                            <div className="text-sm text-muted-foreground">{item.category}</div>
                            
                            <div className="flex items-baseline mt-1">
                              <span className="font-semibold">₹{discountedPrice.toLocaleString()}</span>
                              {item.discount > 0 && (
                                <span className="ml-2 text-muted-foreground line-through text-sm">
                                  ₹{item.price.toLocaleString()}
                                </span>
                              )}
                            </div>
                            
                            <div className="mt-3 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <button 
                                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                                  onClick={() => decreaseQuantity(item.id)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                
                                <span className="w-8 text-center">{item.quantity}</span>
                                
                                <button 
                                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-xs text-muted-foreground hover:text-destructive"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash className="h-3 w-3 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0 text-right font-semibold">
                            ₹{(discountedPrice * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" asChild className="gap-2">
                  <Link to="/products">
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-6">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping Fee</span>
                      <span>₹{shippingFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (18% GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹{orderTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Sheet onOpenChange={(open) => setIsCheckingOut(open)}>
                    <SheetTrigger asChild>
                      <Button className="w-full gap-2">
                        <CreditCard className="h-4 w-4" />
                        Proceed to Checkout
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                      <SheetHeader className="mb-6">
                        <SheetTitle>Complete Your Order</SheetTitle>
                        <SheetDescription>
                          Enter your payment information to complete your purchase.
                        </SheetDescription>
                      </SheetHeader>
                      
                      <form onSubmit={handleProcessPayment} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-4">Order Summary</h4>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Shipping Fee</span>
                                <span>₹{shippingFee.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Tax (18% GST)</span>
                                <span>₹{tax.toLocaleString()}</span>
                              </div>
                              <div className="pt-2 border-t">
                                <div className="flex justify-between font-semibold">
                                  <span>Total</span>
                                  <span>₹{orderTotal.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-4">Payment Information</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm mb-1 block">Name on Card</label>
                                <Input 
                                  placeholder="e.g. John Smith" 
                                  value={paymentInfo.cardName}
                                  onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-sm mb-1 block">Card Number</label>
                                <Input 
                                  placeholder="1234 5678 9012 3456" 
                                  value={paymentInfo.cardNumber}
                                  onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                                  required
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="text-sm mb-1 block">Expiry Date</label>
                                  <Input 
                                    placeholder="MM/YY" 
                                    value={paymentInfo.expiry}
                                    onChange={(e) => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="text-sm mb-1 block">CVV</label>
                                  <Input 
                                    placeholder="123" 
                                    value={paymentInfo.cvv}
                                    onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={isProcessingPayment}
                          >
                            {isProcessingPayment ? (
                              <>
                                <div className="h-4 w-4 border-2 border-muted-foreground border-t-white rounded-full animate-spin mr-2"></div>
                                Processing...
                              </>
                            ) : (
                              <>
                                <CreditCard className="h-4 w-4 mr-2" />
                                Pay ₹{orderTotal.toLocaleString()}
                              </>
                            )}
                          </Button>
                          <p className="text-xs text-center text-muted-foreground mt-4">
                            By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                          </p>
                        </div>
                      </form>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CartPage;
