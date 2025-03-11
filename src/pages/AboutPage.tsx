
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Medal, Award, Trophy, Star, Users, ShieldCheck, HeartHandshake, Clock } from "lucide-react";

const AboutPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll reveal animation
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-reveal");
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("revealed");
        }
      });
    };
    
    // Initial check on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const milestones = [
    {
      year: "2003",
      title: "Our Beginning",
      description: "Deepak Agencies was founded with a vision to provide quality electronics to the people of Kanpur."
    },
    {
      year: "2008",
      title: "Expansion",
      description: "Expanded our store and added more product categories to meet growing customer demands."
    },
    {
      year: "2012",
      title: "Award Winning Service",
      description: "Recognized as the best electronics dealer in the city for customer satisfaction."
    },
    {
      year: "2015",
      title: "Authorized Dealership",
      description: "Became authorized dealer for all major electronics brands in India."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our online presence to serve customers beyond physical boundaries."
    },
    {
      year: "2023",
      title: "Today",
      description: "Continuing our journey of excellence with a focus on customer satisfaction and quality service."
    }
  ];

  const values = [
    {
      icon: Medal,
      title: "Quality",
      description: "We ensure that every product we sell meets the highest quality standards."
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do."
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical standards."
    },
    {
      icon: Clock,
      title: "Timeliness",
      description: "We value your time and ensure prompt service and delivery."
    }
  ];

  const team = [
    {
      name: "Deepak Chaurasia",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80"
    },
    {
      name: "Rahul Verma",
      position: "Sales Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Priya Singh",
      position: "Customer Relations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    },
    {
      name: "Amit Kumar",
      position: "Technical Support",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 scroll-reveal">
              Your Trusted Partner for Home Electronics
            </h1>
            <p className="text-muted-foreground text-lg scroll-reveal">
              Deepak Agencies has been serving the people of Kanpur with high-quality electronics and exceptional customer service since 2003.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"></div>
            
            <img
              src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Deepak Agencies Store"
              className="relative z-10 rounded-2xl shadow-lg object-cover w-full h-[500px] scroll-reveal"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="glass-card p-6 rounded-xl text-center scroll-reveal">
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center scroll-reveal" style={{ transitionDelay: "100ms" }}>
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Brand Partnerships</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center scroll-reveal" style={{ transitionDelay: "200ms" }}>
                <h3 className="text-4xl font-bold text-primary mb-2">10k+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center scroll-reveal" style={{ transitionDelay: "300ms" }}>
                <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 scroll-reveal">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                Our Story
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold scroll-reveal">
                From Humble Beginnings to Electronics Leader
              </h2>
              
              <p className="text-muted-foreground scroll-reveal">
                Deepak Agencies was established in 2003 by Mr. Deepak Chaurasia with a small shop in Navrang Gali, Birhana Road, Kanpur. What started as a small venture with a handful of products has now grown into a trusted name in the electronics retail industry in Kanpur.
              </p>
              
              <p className="text-muted-foreground scroll-reveal">
                Over the years, we have expanded our product range and services to meet the evolving needs of our customers. Our commitment to quality, competitive pricing, and exceptional customer service has earned us the trust and loyalty of thousands of customers in the region.
              </p>
              
              <div className="space-y-4 scroll-reveal">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-0.5" />
                  <span>Authorized dealer for top electronic brands</span>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-primary mt-0.5" />
                  <span>Multiple service excellence awards</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary mt-0.5" />
                  <span>Top-rated customer satisfaction</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <span>Growing community of loyal customers</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
                <div className="relative z-10 rounded-xl overflow-hidden h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                    alt="Our journey" 
                    className="w-full h-full object-cover scroll-reveal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 scroll-reveal">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground scroll-reveal">
              We are guided by a set of core values that define who we are and how we conduct our business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-white p-8 rounded-xl shadow-sm border border-border scroll-reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Milestones */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 scroll-reveal">
              Milestones Along The Way
            </h2>
            <p className="text-muted-foreground scroll-reveal">
              A look at the key moments that have shaped our journey over the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-0.5px]"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 scroll-reveal ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white transform translate-x-[-15px] md:translate-x-[-15px] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 md:px-8 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                      <div className="text-sm text-primary font-semibold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 scroll-reveal">
              Meet The People Behind Deepak Agencies
            </h2>
            <p className="text-muted-foreground scroll-reveal">
              Our dedicated team works tirelessly to ensure you get the best products and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="scroll-reveal" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.position}</p>
                    <div className="flex justify-center gap-4">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 scroll-reveal">
              Ready to Experience the Deepak Agencies Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 scroll-reveal">
              Visit our store or browse our products online to find the perfect electronics for your home or office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
              <Button size="lg" className="px-8">
                Visit Our Store
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
