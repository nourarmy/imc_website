import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import Slider from 'react-slick';
import './css/team.css';

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const descriptions = [
    { name: 'Hamza Khlaf', position: 'Chair', facebook: 'https://www.facebook.com/el.khlafii' },
    { name: 'yassine jeridi', position: 'President', facebook: 'https://www.facebook.com/profile.php?id=100034832442650' },
    { name: 'Nour Bourass', position: ' Manager', facebook: 'https://www.facebook.com/nour.bourasse.7' },
    { name: 'Jbeli Moemen', position: ' Managers', facebook: 'https://www.facebook.com/moemen.jb.1' },
    { name: 'Nour Ben Chaabene', position: 'Project Manager', facebook: 'https://www.facebook.com/profile.php?id=100080779623994' },
    { name: 'omar ben chagra', position: ' Manager', facebook: 'https://www.facebook.com/profile.php?id=100087058163325' },
    { name: 'Ben amna Maram', position: ' Manager', facebook: 'https://www.facebook.com/maram.benamna' },
    { name: 'Yasser Ayadi', position: ' Manager', facebook: 'https://www.facebook.com/AyadiYasserr' },
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000, // Duration of each slide in milliseconds
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <Slider {...settings}>
        {descriptions.map((member, index) => (
          <div key={index}>
            <div
              className={`cardd ${
                index === currentSlide - 1 ||
                (currentSlide === 0 && index === descriptions.length - 1)
                  ? 'prev-cardd'
                  : index === currentSlide + 1 ||
                    (currentSlide === descriptions.length - 1 && index === 0)
                  ? 'next-cardd'
                  : ''
              }`}
            >
              <img
                //src={`${process.env.PUBLIC_URL}/images/img${index + 1}.jpg`}
                alt={member.name}
              />
              <div className="titles">
                <h3>{member.name}</h3>
                <h5>{member.position}</h5>
                <a
                  href={member.facebook}
                  target="_self"
                  rel="noopener noreferrer"
                  className="facebook-icon"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
