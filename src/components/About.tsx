
import React, { useEffect, useRef } from "react";
import { Check, Award, ShieldCheck, Clock } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We offer only the highest quality products from trusted brands."
    },
    {
      icon: ShieldCheck,
      title: "Extended Warranty",
      description: "Enjoy peace of mind with our extended warranty options."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We ensure fast and reliable delivery to your doorstep."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"></div>
              
              <img
                src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Deepak Agencies Store"
                className="relative z-10 rounded-2xl shadow-lg object-cover w-full h-[500px] scroll-reveal"
              />
              
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl max-w-xs scroll-reveal animate-delay-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/20 text-primary shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">20+ Years of Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Serving customers with quality electronics since 2003
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              About Deepak Agencies
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold scroll-reveal">
              Your Trusted Partner for Home Electronics
            </h2>
            
            <p className="text-muted-foreground scroll-reveal">
              Deepak Agencies has been a leading provider of premium home electronics and appliances for over two decades. We take pride in offering a curated selection of high-quality products from trusted brands that enhance your living experience.
            </p>
            
            <div className="space-y-4 scroll-reveal">
              {["Authorized dealer for top electronic brands", "Competitive pricing with flexible payment options", "Expert product advice and after-sales support", "Extensive range of appliances for every need"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="p-5 rounded-xl bg-white subtle-shadow h-full">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
