
import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TimeSlotPicker from "./TimeSlotPicker";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle } from "lucide-react";

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  // Disable past dates and dates more than 30 days in the future
  const disabledDays = {
    before: new Date(),
    after: addDays(new Date(), 30),
  };
  
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedTime(null); // Reset time selection when date changes
  };
  
  const handleConfirmBooking = () => {
    if (date && selectedTime) {
      // In a real app, you would send this to your backend
      console.log("Booking confirmed:", {
        date: format(date, "yyyy-MM-dd"),
        time: selectedTime,
      });
      setBookingConfirmed(true);
    }
  };
  
  const handleReset = () => {
    setDate(undefined);
    setSelectedTime(null);
    setBookingConfirmed(false);
  };
  
  if (bookingConfirmed) {
    return (
      <Card className="mx-auto max-w-md animate-fade-in">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-center">Appointment Confirmed!</CardTitle>
          <CardDescription className="text-center">
            Your appointment has been scheduled for
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="font-medium text-lg mb-4">
            {date && format(date, "EEEE, MMMM d, yyyy")} at {selectedTime}
          </div>
          <p className="text-muted-foreground mb-6">
            We've sent a confirmation email with all the details.
          </p>
          <Button onClick={handleReset} className="w-full">
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          <CardTitle>Book an Appointment</CardTitle>
        </div>
        <CardDescription>
          Select a date and time slot for your appointment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date selection */}
          <div className="flex flex-col">
            <h3 className="font-medium mb-3">Select a date</h3>
            <div className="border rounded-lg p-3">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={disabledDays}
                className="mx-auto"
              />
            </div>
          </div>
          
          {/* Time selection */}
          <div className="flex flex-col">
            <h3 className="font-medium mb-3">
              {date ? `Select time for ${format(date, "MMMM d, yyyy")}` : "Select a date first"}
            </h3>
            {date ? (
              <>
                <TimeSlotPicker 
                  selectedDate={date} 
                  selectedTime={selectedTime} 
                  onSelectTime={setSelectedTime} 
                />
                <Button 
                  onClick={handleConfirmBooking} 
                  className="mt-6"
                  disabled={!selectedTime}
                >
                  Confirm Booking
                </Button>
              </>
            ) : (
              <div className="border border-dashed rounded-lg p-8 text-center text-muted-foreground h-[320px] flex items-center justify-center">
                <p>Please select a date to see available time slots</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCalendar;
