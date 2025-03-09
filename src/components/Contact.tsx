
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: "24/26 Navrang Gali, Birhana Road, Kanpur, Uttar Pradesh"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7860001091"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "deepakchaurasia.kanpur@gmail.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Saturday: 12:00 AM - 8:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 scroll-reveal">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 scroll-reveal">
            Get in Touch with Deepak Agencies
          </h2>
          <p className="text-muted-foreground scroll-reveal">
            Have questions about our products or services? Reach out to our team for expert advice and assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {contactDetails.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-3 rounded-xl overflow-hidden subtle-shadow scroll-reveal">
            <form className="bg-white p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="xyz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="xyz@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors min-h-[120px]"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
