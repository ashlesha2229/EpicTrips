import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/PlanYourTrip.css';

const PlanYourTrip = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: 2,
    children: 0,
    tripType: '',
    budget: '',
    interests: []
  });

  const [showResults, setShowResults] = useState(false);

  const interestsList = [
    'Hiking', 'Photography', 'Local Food', 'Water Sports',
    'Wellness', 'Wildlife', 'Culture', 'Adventure'
  ];

  const mockTours = [
    {
      id: 1,
      title: 'Alpine Lake Escape',
      duration: '5 Days / 4 Nights',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600',
      location: 'Swiss Alps'
    },
    {
      id: 2,
      title: 'Mountain & Forest Retreat',
      duration: '7 Days / 6 Nights',
      price: '$1,249',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
      location: 'Canadian Rockies'
    },
    {
      id: 3,
      title: 'Lakeside Adventure',
      duration: '4 Days / 3 Nights',
      price: '$679',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600',
      location: 'Banff National Park'
    },
    {
      id: 4,
      title: 'Wilderness Getaway',
      duration: '6 Days / 5 Nights',
      price: '$1,099',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600',
      location: 'Patagonia'
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);

    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="plan-page">
      {/* ===== Top Bar ===== */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>Welcome to Epic Trips | 001-1234-88888</span>
          <span>epictrips@gmail.com | 2163 Phillips Gap Rd, West Jefferson</span>
        </div>
      </div>

      {/* ===== Header ===== */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">EpicTrips</span>
          </div>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/tours">Tours List</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          <div className="header-right">
            <button className="sign-in-btn">SIGN IN</button>
            <select className="lang-select">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="plan-hero">
        <div className="container">
          <h1>Plan Your Perfect Getaway</h1>
          <p>Tell us a little about your dream trip and we’ll help you find the best experiences.</p>
        </div>
      </section>

      {/* ===== Planner Form ===== */}
      <section className="planner-section">
        <div className="container">
          <form className="planner-form" onSubmit={handleSubmit}>
            <div className="form-grid">

              {/* Destination */}
              <div className="form-group">
                <label>Destination Preference</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select destination style</option>
                  <option value="mountains">Mountains & Lakes</option>
                  <option value="beach">Beach & Islands</option>
                  <option value="adventure">Adventure & Hiking</option>
                  <option value="cultural">Cultural Cities</option>
                  <option value="wildlife">Wildlife & Nature</option>
                  <option value="wellness">Wellness & Spa</option>
                </select>
              </div>

              {/* Dates */}
              <div className="form-group">
                <label>Travel Dates</label>
                <div className="date-row">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                  <span>to</span>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="form-group">
                <label>Travelers</label>
                <div className="travelers-row">
                  <div>
                    <span>Adults</span>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      value={formData.adults}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span>Children</span>
                    <input
                      type="number"
                      name="children"
                      min="0"
                      value={formData.children}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Trip Type */}
              <div className="form-group">
                <label>Trip Type</label>
                <div className="radio-group">
                  {['Adventure', 'Relaxation', 'Family', 'Honeymoon', 'Friends'].map(type => (
                    <label key={type} className="radio-label">
                      <input
                        type="radio"
                        name="tripType"
                        value={type}
                        checked={formData.tripType === type}
                        onChange={handleChange}
                        required
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="form-group full-width">
                <label>Budget Range</label>
                <div className="budget-cards">
                  {[
                    { value: 'budget', label: 'Budget', desc: 'Under $800' },
                    { value: 'comfort', label: 'Comfort', desc: '$800 – $1,500' },
                    { value: 'luxury', label: 'Luxury', desc: '$1,500+' }
                  ].map(item => (
                    <label
                      key={item.value}
                      className={`budget-card ${formData.budget === item.value ? 'active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={item.value}
                        checked={formData.budget === item.value}
                        onChange={handleChange}
                        required
                      />
                      <strong>{item.label}</strong>
                      <span>{item.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="form-group full-width">
                <label>Special Interests (optional)</label>
                <div className="interests-grid">
                  {interestsList.map(interest => (
                    <label key={interest} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Show Matching Packages
            </button>
          </form>
        </div>
      </section>

      {/* ===== Results ===== */}
      {showResults && (
        <section className="results-section" id="results">
          <div className="container">
            <h2>Recommended for You</h2>
            <p className="results-subtitle">Based on your preferences, here are some perfect matches</p>

            <div className="tours-grid">
              {mockTours.map(tour => (
                <div className="tour-card" key={tour.id}>
                  <div className="tour-image">
                    <img src={tour.image} alt={tour.title} />
                  </div>
                  <div className="tour-content">
                    <span className="tour-location">{tour.location}</span>
                    <h3>{tour.title}</h3>
                    <p>{tour.duration}</p>
                    <div className="tour-footer">
                      <span className="price">From {tour.price}</span>
                      <Link to={`/tours/${tour.id}`} className="view-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="expert-cta">
              <h3>Need help deciding?</h3>
              <p>Our travel specialists can create a fully customized itinerary for you.</p>
              <Link to="/contact" className="expert-btn">
                Talk to a Travel Expert
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== Why Section ===== */}
      <section className="why-section">
        <div className="container">
          <h2>Why Plan with EpicTrips?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Personalized Recommendations</h3>
              <p>We match you with experiences that truly fit your style and preferences.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Expert Local Guides</h3>
              <p>Travel with knowledgeable guides who know the hidden gems.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Flexible & Secure Booking</h3>
              <p>Easy changes and secure payments with full support.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>24/7 Support</h3>
              <p>We’re here whenever you need us — before, during, and after your trip.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTrip;