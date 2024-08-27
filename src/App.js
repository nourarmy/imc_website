import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import Upcomingevents from './components/Upcomingevents';
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
  const eventDate = '2024-10-27T00:00:00Z'; // Your next event date
  const images = [logo1, logo2, logo3, logo4, logo5]; // Use imported images here
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  
  return (
    <div className="App">
      {isLoading ? (
        <Preloader images={images} />
      ) : (
        <>
          <CountdownTimer eventDate={eventDate} />
          <div id="home">
            <Home />
          </div>
          <div id="about-us">
            <AboutUs />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="upcoming-events">
            <Upcomingevents />
          </div>
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
