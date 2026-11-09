import React, { useState } from "react";
import wallpaper from '../images/ContactUsWallpaper.png'; // adjust path if needed
import '../css/ContactUs.css'; // or put styles in App.css / index.css

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (API call, email service, etc.)
    console.log("Form submitted:", formData);
    alert("Message sent! (demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div className="contact-page">
      {/* Hero Section */}
      <header
        className="contact-hero"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span> / </span>
            <span>Contact</span>
          </nav>
          <h1>Contact</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="contact-section">
        <div className="container">
          {/* Left - Contact Info */}
          <div className="contact-info">
            <h2>We'd Love To Help</h2>
            <p className="subtitle">Crafting Unforgettable Adventures Together</p>

            <div className="info-block">
              <h4>Phone:</h4>
              <p>+1 666 234 8888</p>
            </div>

            <div className="info-block">
              <h4>Email:</h4>
              <p>themeflat@gmail.com</p>
            </div>

            <div className="info-block">
              <h4>Address:</h4>
              <p>
                2163 Phillips Gap Rd, West Jefferson, North<br />
                Carolina, United States
              </p>
            </div>

            <div className="info-block">
              <h4>Open Time:</h4>
              <p>
                Mon - Sat: &nbsp; 7:30am - 8:00pm PST<br />
                Sunday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am - 5:00pm PST
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrapper">
            <h2>Get In Touch</h2>
            <p className="subtitle">
              Connect with Us to Embark on a Journey to Create Your Dream Epictrip Experience
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>

    {/* Map Section */}
<section className="map-section">
  <div className="map-container">
    {/* Title centered on top of the map */}
    <h2 className="map-title">Find Us in Nagpur</h2>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709472415!2d79.003123!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725000000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Nagpur Map"
    ></iframe>
  </div>
</section>
    </>
  );
};

export default ContactPage;