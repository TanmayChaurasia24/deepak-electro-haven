import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 sm:py-3 bg-background/80 dark:bg-background/90 backdrop-blur-lg shadow-sm border-b border-border/40" 
          : "py-3 sm:py-4 md:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - responsive size */}
          <Link to="/" className="text-xl sm:text-2xl font-display font-bold text-foreground transition-all duration-300">
            Deepak<span className="text-primary font-light">Agencies</span>
          </Link>

          {/* Desktop Navigation - hidden on small screens, visible from medium up */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/" className="text-sm lg:text-base text-foreground/90 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm lg:text-base text-foreground/90 hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/categories" className="text-sm lg:text-base text-foreground/90 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-sm lg:text-base text-foreground/90 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm lg:text-base text-foreground/90 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/booking" className="text-sm lg:text-base text-foreground/90 hover:text-primary transition-colors">
              Book
            </Link>
          </nav>

          {/* Desktop Actions - hidden on small screens */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <ThemeSwitcher />
            
            <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
              <Search className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
            </Button>
            
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
                <User className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground relative">
                <ShoppingCart className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - visible only on small screens */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link to="/cart" className="relative mr-1">
              <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <ThemeSwitcher />
            
            <button 
              className="focus:outline-none h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - slide in from right */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-background/95 dark:bg-background/98 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-5 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/" 
              className="text-xl font-display font-bold text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Deepak<span className="text-primary font-light">Agencies</span>
            </Link>
            
            <button 
              className="focus:outline-none h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col space-y-1">
            {[
              { text: "Home", path: "/" },
              { text: "Products", path: "/products" },
              { text: "Categories", path: "/categories" },
              { text: "About", path: "/about" },
              { text: "Contact", path: "/contact" },
              { text: "Book", path: "/booking" }
            ].map((item, index) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-foreground py-3 px-2 border-b border-border/40 text-lg hover:bg-gray-50 dark:hover:bg-gray-900/40 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          
          <div className="pt-6 mt-auto border-t border-border/40">
            <div className="flex items-center space-x-4 justify-around">
              <Link 
                to="/auth" 
                className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
              
              <Link 
                to="/cart" 
                className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
