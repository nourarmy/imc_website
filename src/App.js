import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import UpcomingEvents from './components/Upcomingevents';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import Preloader from './components/Preloader';

// Import images
import logo1 from './components/img/logo1.png';
import logo2 from './components/img/logo2.png';
import logo3 from './components/img/logo3.png';
import logo4 from './components/img/logo4.png';
import logo5 from './components/img/logo5.png';

function App() {
  const eventDate = '2024-10-27T00:00:00Z'; 
  const images = [logo1, logo2, logo3, logo4, logo5]; // Use imported images here
  const [isLoading, setIsLoading] = useState(true);

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Loading duration (5 seconds)

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader images={images} />
      ) : (
        <>
          {/* Countdown Timer for the next event */}
          <CountdownTimer eventDate={eventDate} />

          {/* Home Section */}
          <div id="home">
            <Home />
          </div>

          {/* About Us Section */}
          <div id="about-us">
            <AboutUs />
          </div>

          {/* Services Section */}
          <div id="services">
            <Services />
          </div>

          {/* Upcoming Events Section */}
          <div id="upcoming-events">
            <UpcomingEvents />
          </div>

          {/* Team Section */}
          <div id="team">
            <Team />
          </div>

          
          <div id="join-us">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
