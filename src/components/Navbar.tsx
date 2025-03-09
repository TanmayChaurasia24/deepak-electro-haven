
import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold text-foreground">
            Deepak<span className="text-primary font-light">Agencies</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground/90 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" className="text-foreground/90 hover:text-primary transition-colors">
              Products
            </a>
            <a href="#categories" className="text-foreground/90 hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#about" className="text-foreground/90 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground/90 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-foreground py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#products" 
                className="text-foreground py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#categories" 
                className="text-foreground py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </a>
              <a 
                href="#about" 
                className="text-foreground py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
