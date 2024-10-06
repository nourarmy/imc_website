import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './css/Footer.css';

const Footer = () => {
  const [joinUsFormState, setJoinUsFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    message: '',
    WhyIMC: ''
  });

  /*const [contactFormState, setContactFormState] = useState({
    fullName: '',
    email: '',
    message: ''
  });*/

  const handleJoinUsChange = (e) => {
    const { name, value } = e.target;
    setJoinUsFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  /*const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormState((prevState) => ({ ...prevState, [name]: value }));
  };*/

  const handleJoinUsSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_qu5a2ot', 'template_dgjpuzt', e.target, '95SxGZ7VKDvBOvW_f')
      .then(
        (result) => {
          console.log(result.text);
          setJoinUsFormState({
            fullName: '',
            email: '',
            phone: '',
            department: '',
            message: '',
            WhyIMC: ''
          });
          alert('Thank you for reaching out! Your message has been sent successfully.');
        },
        (error) => {
          console.error('There was an error sending the email:', error.text);
          alert('Oops! Something went wrong. Please try again.');
        }
      );
  };

  /*const handleContactSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log(result.text);
          setContactFormState({
            fullName: '',
            email: '',
            message: ''
          });
          alert('Thank you for reaching out! Your message has been sent successfully.');
        },
        (error) => {
          console.error('There was an error sending the email:', error.text);
          alert('Oops! Something went wrong. Please try again.');
        }
      );
  };*/

  return (
    <div>
      {/* Contact Section */}
      <div id="contact">
        <div className="container">
          <div className="contact-block">
            <div className="section-title">
              <h2>JOIN US</h2>
              <p>
                 Fill out the form below to send us an email and we will get back to you as soon as
                possible.
              </p>
            </div>
            <form name="sentMessage" validate="true" onSubmit={handleJoinUsSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name"
                      value={joinUsFormState.fullName}
                      onChange={handleJoinUsChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={joinUsFormState.email}
                      onChange={handleJoinUsChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={joinUsFormState.phone}
                  onChange={handleJoinUsChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="department"
                  className="form-control"
                  value={joinUsFormState.department}
                  onChange={handleJoinUsChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="project">Project Team</option>
                  <option value="business">Business Development Team</option>
                  <option value="production">Production Team</option>
                  <option value="logistics">Talent Team</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Why this department?"
                  value={joinUsFormState.message}
                  onChange={handleJoinUsChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
          <textarea
            name="WhyIMC"
            className="form-control"
            rows="4"
            placeholder="Why Choose IMC?"
            value={joinUsFormState.whyChooseIMC}
            onChange={handleJoinUsChange}
            required
          ></textarea>
        </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Join Us
              </button>
            </form>
          </div>
          {/* 
          <div className="contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <FaMapMarkerAlt /> ISAMM, Campus Universitaire de la Manouba
              </p>
              <p>
                <FaEnvelope /> hi.imc2011@gmail.com
              </p>
              <p>
                <FaFacebook />{' '}
                <a href="https://www.facebook.com/IsammMicrosoftClub">Facebook</a>
              </p>
              <p>
                <FaInstagram />{' '}
                <a href="https://www.instagram.com/isamm_microsoft_club/?hl=en">
                  Instagram
                </a>
              </p>
            </div>
            
            <div className="contact-form">
              <div className="section-title">
                <h2>Contact Form</h2>
                <p>Fill out the form below to get in touch with us.</p>
              </div>
              <form name="contactForm" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    value={contactFormState.fullName}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={contactFormState.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={contactFormState.message}
                    onChange={handleContactChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div> 
            
          </div>*/}
        </div>
      </div>

      {/* Footer Section */}
      {/* Footer Section */}
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-content">
            <h2><span style={{ color: '#EF5225' }}>ISAMM</span>{' '}
              <span style={{ color: '#7EB941' }}>Microsoft</span>{' '}
              <span style={{ color: '#FCB712' }}>Club</span></h2>
            <p>IMC ~ Driven By passion</p>
          </div>
          <div className="footer-content">
            <div className="footer-social">
              <a href="https://www.google.com/maps/place/Manouba+University">
                <FaMapMarkerAlt />
              </a> |{' '}
              <a href="mailto:hi.imc2011@gmail.com">
                <FaEnvelope />
              </a> |{' '}
              <a href="https://www.facebook.com/IsammMicrosoftClub">
                <FaFacebook />
              </a> |{' '}
              <a href="https://www.instagram.com/isamm_microsoft_club/?hl=en">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-rights">
              <p>Designed By IMC</p>
              <p>© Copyright SA dev. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
