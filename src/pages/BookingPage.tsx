
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/booking/BookingCalendar";
import useScrollReveal from "@/hooks/useScrollReveal";

const BookingPage = () => {
  const sectionRef = useScrollReveal();
  
  return (
    <div className="min-h-screen bg-background" ref={sectionRef}>
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center scroll-reveal">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Schedule Your Visit
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Book an Appointment
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Schedule a consultation with our experts who will help you find the perfect electronic products for your needs.
            </p>
          </div>
          
          <div className="scroll-reveal">
            <BookingCalendar />
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 scroll-reveal">
              <div className="rounded-lg bg-card p-6 border">
                <div className="font-medium mb-2">Our Location</div>
                <p className="text-muted-foreground text-sm">
                  123 Electronics Way<br />
                  Tech City, TC 12345
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 border">
                <div className="font-medium mb-2">Business Hours</div>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9 AM - 5 PM<br />
                  Saturday: 10 AM - 2 PM
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 border">
                <div className="font-medium mb-2">Contact</div>
                <p className="text-muted-foreground text-sm">
                  Phone: (123) 456-7890<br />
                  Email: support@electrostore.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
