const Timeline = ({ eventDate }) => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const eventDateTime = new Date(eventDate);
      const timeLeft = eventDateTime - now;
  
      if (timeLeft <= 0) {
        return "Event has passed";
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
  
    return (
      <div className="timeline">
        <h2>Countdown to Next Event</h2>
        <div className="time-left">{calculateTimeLeft()}</div>
      </div>
    );
  };
  