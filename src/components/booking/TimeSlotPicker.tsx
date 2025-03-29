
import React from "react";
import { format } from "date-fns";

interface TimeSlotPickerProps {
  selectedDate: Date;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

// This component is responsible for displaying and selecting time slots
const TimeSlotPicker = ({ 
  selectedDate, 
  selectedTime, 
  onSelectTime 
}: TimeSlotPickerProps) => {
  // For demonstration, we'll generate time slots between 9 AM and 5 PM
  // In a real application, these would come from your backend based on availability
  
  const generateTimeSlots = () => {
    const slots = [];
    const morningSlots = [];
    const afternoonSlots = [];
    
    // Generate morning slots (9 AM - 12 PM)
    for (let hour = 9; hour < 12; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`;
        morningSlots.push({
          time,
          displayTime: format(new Date().setHours(hour, minute), 'h:mm a'),
          available: Math.random() > 0.3, // Randomly make some slots unavailable
        });
      }
    }
    
    // Generate afternoon slots (12 PM - 5 PM)
    for (let hour = 12; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`;
        afternoonSlots.push({
          time,
          displayTime: format(new Date().setHours(hour, minute), 'h:mm a'),
          available: Math.random() > 0.3, // Randomly make some slots unavailable
        });
      }
    }
    
    slots.push({
      label: "Morning",
      slots: morningSlots,
    });
    
    slots.push({
      label: "Afternoon",
      slots: afternoonSlots,
    });
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  return (
    <div className="space-y-4 h-[320px] overflow-y-auto pr-2 border rounded-lg p-4">
      {timeSlots.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">{group.label}</h4>
          <div className="grid grid-cols-3 gap-2">
            {group.slots.map((slot, slotIndex) => (
              <button
                key={slotIndex}
                className={`time-slot ${
                  !slot.available
                    ? "unavailable"
                    : selectedTime === slot.time
                    ? "selected"
                    : "available"
                }`}
                onClick={() => {
                  if (slot.available) {
                    onSelectTime(slot.time);
                  }
                }}
                disabled={!slot.available}
              >
                {slot.displayTime}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotPicker;
