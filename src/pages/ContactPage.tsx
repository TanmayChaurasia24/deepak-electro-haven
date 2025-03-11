
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones } from "lucide-react";

const ContactPage = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "24/26 Navrang Gali, Birhana Road, Kanpur, Uttar Pradesh - 208001",
      link: "https://maps.google.com",
      linkText: "View on Google Maps"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 7860001091, +91 9889001091",
      link: "tel:+917860001091",
      linkText: "Call Us"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "deepakchaurasia.kanpur@gmail.com",
      link: "mailto:deepakchaurasia.kanpur@gmail.com",
      linkText: "Send Email"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Saturday: 12:00 AM - 8:00 PM, Sunday: Closed",
      link: "",
      linkText: ""
    }
  ];

  const faqItems = [
    {
      question: "Do you offer installation services for appliances?",
      answer: "Yes, we provide professional installation services for most appliances purchased from our store. The installation charges vary depending on the type of appliance."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of purchase, provided the product is in its original condition with all packaging and accessories. Some products may have specific return policies as per manufacturer guidelines."
    },
    {
      question: "Do you offer extended warranty?",
      answer: "Yes, we offer extended warranty options for most products. The extended warranty provides additional coverage beyond the standard manufacturer warranty at an extra cost."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is dispatched, you will receive a tracking number via SMS or email. You can use this number to track your order on our website or contact our customer support team."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 scroll-reveal">
              Get in Touch with Deepak Agencies
            </h1>
            <p className="text-muted-foreground text-lg scroll-reveal">
              Have questions or need assistance? We're here to help you with any inquiries about our products and services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div 
                key={item.title} 
                className="bg-white p-8 rounded-xl shadow-sm border border-border scroll-reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.details}</p>
                {item.link && (
                  <a href={item.link} className="text-primary hover:underline text-sm font-medium">
                    {item.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-reveal">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Product Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Map and Store Hours */}
            <div className="scroll-reveal" style={{ transitionDelay: "100ms" }}>
              <div className="rounded-xl overflow-hidden shadow-sm border border-border h-[400px] mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.5666100579746!2d80.3181653!3d26.4769014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4771b28d885d%3A0x1587202212db1c72!2sBirhana%20Rd%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1668969255127!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deepak Agencies Map Location"
                ></iframe>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Live Chat</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Chat with our customer support team in real-time.
                      </p>
                      <Button variant="outline" size="sm">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Headphones className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Customer Support</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Our dedicated support team is available during business hours.
                      </p>
                      <Button variant="outline" size="sm">
                        Call Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              FAQs
            </div>
            <h2 className="text-3xl font-display font-bold mb-4 scroll-reveal">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground scroll-reveal">
              Find answers to common questions about our products and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-border scroll-reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 scroll-reveal">
              <p className="text-muted-foreground mb-4">
                Still have questions? Feel free to contact us directly.
              </p>
              <Button>
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
