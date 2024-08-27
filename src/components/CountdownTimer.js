import React, { useState, useEffect } from 'react';
import './css/countdownTimer.css'; // Ensure this CSS file is in the same directory

const CountdownTimer = ({ eventDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const eventDateTime = new Date(eventDate);
      const difference = eventDateTime - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference
        % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      };
  
      const interval = setInterval(() => {
        const remaining = calculateTimeRemaining();
        setTimeRemaining(remaining);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [eventDate]);
  
    return (
      <div className="countdown-container">
        <div className="countdown-bar">
          <div className="phrase">Get ready! SDGSOFT2.0 Event is just around the corner:</div>
          <div className="countdown">
            <div className="time-unit">
              <span className="time-value">{timeRemaining.days}</span>
              <p>Days</p>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeRemaining.hours}</span>
              <p>Hours</p>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeRemaining.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeRemaining.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CountdownTimer;
  