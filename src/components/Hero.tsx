
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElements = heroRef.current.querySelectorAll('.parallax');
      
      heroElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0');
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden hero-gradient"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 parallax" data-speed="0.05"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl opacity-50 parallax" data-speed="-0.08"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                Premium Electronics Store
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in">
                Elevate Your Lifestyle With Modern Electronics
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground animate-fade-in animate-delay-100">
                Discover premium home appliances and electronics at Deepak Agencies. Find the perfect blend of technology, quality, and design for your home.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in animate-delay-200">
              <Button className="btn-hover-float px-8 py-6 text-base rounded-lg bg-primary hover:bg-primary/90">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-hover-float px-8 py-6 text-base rounded-lg">
                View Collections
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-4 animate-fade-in animate-delay-300">
              <div className="text-center">
                <h4 className="text-3xl font-bold">500+</h4>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold">15+</h4>
                <p className="text-sm text-muted-foreground">Brands</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold">24/7</h4>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
              
              <div className="relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Smart refrigerator" 
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px] animate-fade-in"
                  loading="lazy"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.add("image-fade-in")}
                />
                
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl w-56 animate-fade-in-up animate-delay-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Smart Features</p>
                      <p className="text-xs text-muted-foreground">Voice control & AI technology</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 glass-card p-4 rounded-xl animate-fade-in-up animate-delay-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Energy Efficient</p>
                      <p className="text-xs text-muted-foreground">Save up to 30% energy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
