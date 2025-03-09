
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block text-2xl font-display font-bold text-foreground mb-4">
              Deepak<span className="text-primary font-light">Agencies</span>
            </a>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Your trusted partner for premium electronics and home appliances for over two decades.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Products
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Categories
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Categories</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Refrigerators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Washing Machines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Air Conditioners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Televisions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Kitchen Appliances
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on new products and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-border focus:outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Deepak Agencies. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
